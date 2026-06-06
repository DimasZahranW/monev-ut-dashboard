# routers/mahasiswa.py
# Semua endpoint yang berhubungan dengan data mahasiswa

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import get_db

router = APIRouter(prefix="/mahasiswa", tags=["Mahasiswa"])


# ── 1. Ringkasan KPI ─────────────────────────────────
@router.get("/summary")
def get_summary(db: Session = Depends(get_db)):
    """Ambil angka-angka ringkasan untuk KPI card dashboard"""
    result = db.execute(text("""
        SELECT
            COUNT(*)                                        AS total_mahasiswa,
            SUM(CASE WHEN prediksi_kelulusan='Lulus'    THEN 1 ELSE 0 END) AS prediksi_lulus,
            SUM(CASE WHEN prediksi_kelulusan='Berisiko' THEN 1 ELSE 0 END) AS prediksi_berisiko,
            SUM(CASE WHEN prediksi_kelulusan='DO'       THEN 1 ELSE 0 END) AS prediksi_do,
            ROUND(AVG(ipk), 2)                              AS rata_ipk,
            ROUND(AVG(partisipasi_lms), 1)                  AS rata_partisipasi_lms
        FROM mahasiswa_akademik
    """)).fetchone()

    return {
        "total_mahasiswa"    : result[0],
        "prediksi_lulus"     : result[1],
        "prediksi_berisiko"  : result[2],
        "prediksi_do"        : result[3],
        "rata_ipk"           : float(result[4]),
        "rata_partisipasi_lms": float(result[5]),
    }


# ── 2. Distribusi Status Mahasiswa (untuk Bar Chart) ─
@router.get("/distribusi-status")
def get_distribusi_status(db: Session = Depends(get_db)):
    """Jumlah mahasiswa per status akademik"""
    rows = db.execute(text("""
        SELECT status_akademik, COUNT(*) AS jumlah
        FROM mahasiswa_akademik
        GROUP BY status_akademik
        ORDER BY jumlah DESC
    """)).fetchall()

    return [{"status": r[0], "jumlah": r[1]} for r in rows]


# ── 3. Tren IPK per Semester (untuk Line Chart) ──────
@router.get("/tren-ipk")
def get_tren_ipk(db: Session = Depends(get_db)):
    """Rata-rata IPK per semester"""
    rows = db.execute(text("""
        SELECT semester_aktif, ROUND(AVG(ipk), 2) AS rata_ipk
        FROM mahasiswa_akademik
        GROUP BY semester_aktif
        ORDER BY semester_aktif ASC
    """)).fetchall()

    return [{"semester": r[0], "rata_ipk": float(r[1])} for r in rows]


# ── 4. Distribusi Prediksi Kelulusan (untuk Pie) ─────
@router.get("/distribusi-prediksi")
def get_distribusi_prediksi(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT prediksi_kelulusan, COUNT(*) AS jumlah
        FROM mahasiswa_akademik
        GROUP BY prediksi_kelulusan
    """)).fetchall()

    return [{"prediksi": r[0], "jumlah": r[1]} for r in rows]


# ── 5. Data tabel mahasiswa lengkap ──────────────────
@router.get("/list")
def get_list_mahasiswa(db: Session = Depends(get_db)):
    """Semua data mahasiswa gabungan admisi + akademik"""
    rows = db.execute(text("""
        SELECT
            a.nim,
            a.nama_lengkap,
            a.program_studi,
            a.upbjj,
            a.jalur_masuk,
            a.status_pekerjaan,
            k.semester_aktif,
            k.sks_lulus,
            k.ipk,
            k.ips,
            k.status_akademik,
            k.partisipasi_lms,
            k.prediksi_kelulusan,
            k.skor_counterfactual
        FROM mahasiswa_admisi a
        JOIN mahasiswa_akademik k ON a.nim = k.nim
        ORDER BY a.nama_lengkap ASC
    """)).fetchall()

    keys = [
        "nim","nama_lengkap","program_studi","upbjj","jalur_masuk",
        "status_pekerjaan","semester_aktif","sks_lulus","ipk","ips",
        "status_akademik","partisipasi_lms","prediksi_kelulusan",
        "skor_counterfactual"
    ]

    return [dict(zip(keys, r)) for r in rows]


# ── 6. Distribusi per UPBJJ ───────────────────────────
@router.get("/per-upbjj")
def get_per_upbjj(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT upbjj, COUNT(*) AS jumlah
        FROM mahasiswa_admisi
        GROUP BY upbjj
        ORDER BY jumlah DESC
    """)).fetchall()

    return [{"upbjj": r[0], "jumlah": r[1]} for r in rows]


# ── 7. Partisipasi LMS bulanan ────────────────────────
@router.get("/lms-bulanan")
def get_lms_bulanan(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT bulan, tahun,
               ROUND(AVG(partisipasi_lms), 1) AS rata_partisipasi,
               COUNT(*) AS jumlah_mahasiswa
        FROM aktivitas_lms
        GROUP BY tahun, bulan
        ORDER BY tahun ASC, bulan ASC
    """)).fetchall()

    return [
        {"bulan": r[0], "tahun": r[1],
         "rata_partisipasi": float(r[2]), "jumlah": r[3]}
        for r in rows
    ]