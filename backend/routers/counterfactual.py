# routers/counterfactual.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import get_db

router = APIRouter(prefix="/counterfactual", tags=["Counterfactual"])


@router.get("/simulasi/{nim}")
def simulasi_counterfactual(nim: str, db: Session = Depends(get_db)):
    """
    Simulasi counterfactual untuk 1 mahasiswa.
    Menghitung skenario 'bagaimana jika' intervensi dilakukan.
    """

    # Ambil data mahasiswa
    mhs = db.execute(text("""
        SELECT
            a.nim, a.nama_lengkap, a.program_studi, a.upbjj,
            k.ipk, k.ips, k.partisipasi_lms, k.sks_lulus,
            k.tugas_dikumpul, k.tugas_total,
            k.prediksi_kelulusan, k.skor_counterfactual,
            k.jml_nilai_e, k.jml_nilai_d, k.status_akademik
        FROM mahasiswa_admisi a
        JOIN mahasiswa_akademik k ON a.nim = k.nim
        WHERE a.nim = :nim
    """), {"nim": nim}).fetchone()

    if not mhs:
        return {"error": "Mahasiswa tidak ditemukan"}

    nim_, nama, prodi, upbjj = mhs[0], mhs[1], mhs[2], mhs[3]
    ipk, ips, lms, sks       = float(mhs[4]), float(mhs[5]), float(mhs[6]), mhs[7]
    tgs_kumpul, tgs_total    = mhs[8], mhs[9]
    prediksi, skor_cf        = mhs[10], float(mhs[11])
    nilai_e, nilai_d         = mhs[12], mhs[13]

    # ── Hitung skenario intervensi ──────────────────────
    # Skenario 1: Tingkatkan partisipasi LMS ke 85%
    lms_baru     = min(lms + 25, 100)
    skor_lms     = round(skor_cf + (lms_baru - lms) * 0.3, 1)

    # Skenario 2: Tingkatkan pengumpulan tugas 100%
    skor_tugas   = round(skor_cf + (tgs_total - tgs_kumpul) * 1.2, 1)

    # Skenario 3: Kombinasi semua intervensi
    skor_kombin  = round(min(skor_cf + 18.5, 99.0), 1)
    ipk_kombin   = round(min(ipk + 0.35, 4.0), 2)

    # Tentukan prediksi baru setelah intervensi
    def prediksi_baru(skor):
        if skor >= 75: return "Lulus"
        if skor >= 50: return "Berisiko"
        return "DO"

    # ── Identifikasi faktor risiko ──────────────────────
    risiko = []
    if lms < 60:
        risiko.append({
            "faktor"  : "Partisipasi LMS Rendah",
            "nilai"   : f"{lms}%",
            "target"  : "≥ 70%",
            "dampak"  : "Tinggi",
            "aksi"    : "Tingkatkan login dan aktivitas di LMS minimal 20 sesi/bulan",
        })
    if tgs_kumpul < tgs_total:
        kurang = tgs_total - tgs_kumpul
        risiko.append({
            "faktor"  : "Tugas Tidak Lengkap",
            "nilai"   : f"{tgs_kumpul}/{tgs_total} tugas",
            "target"  : f"{tgs_total}/{tgs_total} tugas",
            "dampak"  : "Tinggi" if kurang >= 3 else "Sedang",
            "aksi"    : f"Selesaikan {kurang} tugas yang belum dikumpulkan",
        })
    if ipk < 2.75:
        risiko.append({
            "faktor"  : "IPK di Bawah Standar",
            "nilai"   : str(ipk),
            "target"  : "≥ 2.75",
            "dampak"  : "Sangat Tinggi",
            "aksi"    : "Ikuti program bimbingan akademik dan tutorial intensif",
        })
    if nilai_e > 0:
        risiko.append({
            "faktor"  : "Terdapat Nilai E",
            "nilai"   : f"{nilai_e} mata kuliah",
            "target"  : "0 nilai E",
            "dampak"  : "Tinggi",
            "aksi"    : "Ambil ulang mata kuliah dengan nilai E di semester berikutnya",
        })

    return {
        "mahasiswa": {
            "nim"     : nim_,
            "nama"    : nama,
            "prodi"   : prodi,
            "upbjj"   : upbjj,
            "ipk"     : ipk,
            "lms"     : lms,
            "prediksi": prediksi,
            "skor_cf" : skor_cf,
        },
        "faktor_risiko": risiko,
        "skenario": [
            {
                "nama"         : "🖥️ Intervensi LMS",
                "deskripsi"    : f"Tingkatkan partisipasi LMS dari {lms}% menjadi {lms_baru}%",
                "skor_sebelum" : skor_cf,
                "skor_sesudah" : min(skor_lms, 99.0),
                "ipk_sesudah"  : round(min(ipk + 0.10, 4.0), 2),
                "prediksi_baru": prediksi_baru(skor_lms),
                "langkah"      : [
                    "Login LMS minimal 5x per minggu",
                    "Ikuti semua sesi diskusi forum",
                    "Tonton seluruh video materi tersedia",
                ],
            },
            {
                "nama"         : "📝 Intervensi Tugas",
                "deskripsi"    : f"Selesaikan semua tugas ({tgs_kumpul}/{tgs_total} → {tgs_total}/{tgs_total})",
                "skor_sebelum" : skor_cf,
                "skor_sesudah" : min(skor_tugas, 99.0),
                "ipk_sesudah"  : round(min(ipk + 0.15, 4.0), 2),
                "prediksi_baru": prediksi_baru(skor_tugas),
                "langkah"      : [
                    "Kumpulkan semua tugas yang tertunggak",
                    "Gunakan fitur pengumpulan tugas di LMS",
                    "Minta perpanjangan waktu ke tutor jika perlu",
                ],
            },
            {
                "nama"         : "🚀 Intervensi Kombinasi",
                "deskripsi"    : "Terapkan semua intervensi secara bersamaan",
                "skor_sebelum" : skor_cf,
                "skor_sesudah" : skor_kombin,
                "ipk_sesudah"  : ipk_kombin,
                "prediksi_baru": prediksi_baru(skor_kombin),
                "langkah"      : [
                    "Aktif di LMS setiap hari",
                    "Selesaikan semua tugas tertunggak",
                    "Ikuti tutorial tatap muka virtual",
                    "Konsultasi rutin dengan tutor",
                    "Bergabung dengan kelompok belajar",
                ],
            },
        ],
    }