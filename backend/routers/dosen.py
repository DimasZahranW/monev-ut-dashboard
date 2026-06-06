# routers/dosen.py
# Semua endpoint yang berhubungan dengan data dosen & tutor

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import get_db

router = APIRouter(prefix="/dosen", tags=["Dosen & Tutor"])


# ── 1. Ringkasan KPI Dosen ───────────────────────────
@router.get("/summary")
def get_summary(db: Session = Depends(get_db)):
    result = db.execute(text("""
        SELECT
            COUNT(*)                                            AS total_dosen,
            ROUND(AVG(skor_total), 2)                           AS rata_skor,
            ROUND(AVG(h_index), 2)                              AS rata_h_index,
            SUM(jml_sitasi)                                     AS total_sitasi,
            SUM(CASE WHEN label_kinerja='Excellent' THEN 1 ELSE 0 END) AS excellent,
            SUM(CASE WHEN label_kinerja='Good'      THEN 1 ELSE 0 END) AS good,
            SUM(CASE WHEN label_kinerja='Average'   THEN 1 ELSE 0 END) AS average
        FROM dosen_tutor
    """)).fetchone()

    return {
        "total_dosen"  : result[0],
        "rata_skor"    : float(result[1]),
        "rata_h_index" : float(result[2]),
        "total_sitasi" : result[3],
        "excellent"    : result[4],
        "good"         : result[5],
        "average"      : result[6],
    }


# ── 2. List semua dosen ──────────────────────────────
@router.get("/list")
def get_list_dosen(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT nidn, nama_lengkap, jabatan_fungsional, unit,
               program_studi, upbjj, h_index, jml_sitasi,
               artikel_scopus, skor_total, label_kinerja, status
        FROM dosen_tutor
        ORDER BY skor_total DESC
    """)).fetchall()

    keys = [
        "nidn","nama_lengkap","jabatan_fungsional","unit",
        "program_studi","upbjj","h_index","jml_sitasi",
        "artikel_scopus","skor_total","label_kinerja","status"
    ]

    return [dict(zip(keys, r)) for r in rows]


# ── 3. Detail 1 dosen (untuk Radar Chart) ────────────
@router.get("/detail/{nidn}")
def get_detail_dosen(nidn: str, db: Session = Depends(get_db)):
    r = db.execute(text("""
        SELECT nama_lengkap, jabatan_fungsional, unit, upbjj,
               h_index, jml_sitasi, artikel_scopus, artikel_sinta,
               jml_paten, hibah_nasional,
               skor_pengajaran, skor_penelitian,
               skor_publikasi, skor_pkm, skor_total, label_kinerja
        FROM dosen_tutor WHERE nidn = :nidn
    """), {"nidn": nidn}).fetchone()

    if not r:
        return {"error": "Dosen tidak ditemukan"}

    return {
        "nama_lengkap"    : r[0],
        "jabatan"         : r[1],
        "unit"            : r[2],
        "upbjj"           : r[3],
        "h_index"         : r[4],
        "jml_sitasi"      : r[5],
        "artikel_scopus"  : r[6],
        "artikel_sinta"   : r[7],
        "jml_paten"       : r[8],
        "hibah_nasional"  : r[9],
        "radar": [
            {"subject": "Pengajaran", "nilai": float(r[10])},
            {"subject": "Penelitian", "nilai": float(r[11])},
            {"subject": "Publikasi",  "nilai": float(r[12])},
            {"subject": "PkM",        "nilai": float(r[13])},
        ],
        "skor_total"      : float(r[14]),
        "label_kinerja"   : r[15],
    }


# ── 4. Distribusi label kinerja dosen ────────────────
@router.get("/distribusi-kinerja")
def get_distribusi_kinerja(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT label_kinerja, COUNT(*) AS jumlah
        FROM dosen_tutor
        GROUP BY label_kinerja
    """)).fetchall()

    return [{"label": r[0], "jumlah": r[1]} for r in rows]