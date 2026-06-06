# routers/tendik.py
# Semua endpoint yang berhubungan dengan data tendik

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import get_db

router = APIRouter(prefix="/tendik", tags=["Tendik"])


# ── 1. Ringkasan KPI Tendik ──────────────────────────
@router.get("/summary")
def get_summary(db: Session = Depends(get_db)):
    result = db.execute(text("""
        SELECT
            COUNT(*)                                             AS total_tendik,
            ROUND(AVG(skor_kinerja), 2)                          AS rata_skor,
            ROUND(AVG(tingkat_kehadiran), 1)                     AS rata_kehadiran,
            ROUND(AVG(indeks_kepuasan), 2)                       AS rata_kepuasan,
            SUM(CASE WHEN label_kinerja='Excellent' THEN 1 ELSE 0 END) AS excellent,
            SUM(CASE WHEN label_kinerja='Good'      THEN 1 ELSE 0 END) AS good,
            SUM(CASE WHEN label_kinerja='Average'   THEN 1 ELSE 0 END) AS average
        FROM tendik
    """)).fetchone()

    return {
        "total_tendik"  : result[0],
        "rata_skor"     : float(result[1]),
        "rata_kehadiran": float(result[2]),
        "rata_kepuasan" : float(result[3]),
        "excellent"     : result[4],
        "good"          : result[5],
        "average"       : result[6],
    }


# ── 2. List semua tendik ─────────────────────────────
@router.get("/list")
def get_list_tendik(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT nip, nama_lengkap, jabatan, jenis_jabatan,
               unit_kerja, upbjj, status_kepegawaian,
               tingkat_kehadiran, indeks_kepuasan,
               skor_kinerja, label_kinerja, status_aktif
        FROM tendik
        ORDER BY skor_kinerja DESC
    """)).fetchall()

    keys = [
        "nip","nama_lengkap","jabatan","jenis_jabatan",
        "unit_kerja","upbjj","status_kepegawaian",
        "tingkat_kehadiran","indeks_kepuasan",
        "skor_kinerja","label_kinerja","status_aktif"
    ]

    return [dict(zip(keys, r)) for r in rows]


# ── 3. Distribusi label kinerja tendik ───────────────
@router.get("/distribusi-kinerja")
def get_distribusi(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT label_kinerja, COUNT(*) AS jumlah
        FROM tendik GROUP BY label_kinerja
    """)).fetchall()

    return [{"label": r[0], "jumlah": r[1]} for r in rows]


# ── 4. Distribusi per unit kerja ─────────────────────
@router.get("/per-unit")
def get_per_unit(db: Session = Depends(get_db)):
    rows = db.execute(text("""
        SELECT unit_kerja, COUNT(*) AS jumlah
        FROM tendik
        GROUP BY unit_kerja
        ORDER BY jumlah DESC
    """)).fetchall()

    return [{"unit": r[0], "jumlah": r[1]} for r in rows]