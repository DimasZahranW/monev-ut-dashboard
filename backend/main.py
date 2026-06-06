# main.py
# File utama yang menjalankan seluruh backend API

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import mahasiswa, dosen, tendik

# ── Inisialisasi aplikasi ─────────────────────────────
app = FastAPI(
    title       = "API Dashboard MONEV UT",
    description = "Backend API untuk Sistem Monitoring & Evaluasi Universitas Terbuka",
    version     = "1.0.0"
)

# ── CORS — izinkan frontend mengakses backend ─────────
# (tanpa ini, dashboard React tidak bisa ambil data)
app.add_middleware(
    CORSMiddleware,
    allow_origins  = ["*"],
    allow_methods  = ["*"],
    allow_headers  = ["*"],
)

# ── Daftarkan semua router ────────────────────────────
app.include_router(mahasiswa.router, prefix="/api")
app.include_router(dosen.router,     prefix="/api")
app.include_router(tendik.router,    prefix="/api")

# ── Endpoint cek status server ────────────────────────
@app.get("/")
def root():
    return {
        "status" : "✅ Backend MONEV UT berjalan",
        "versi"  : "1.0.0",
        "docs"   : "Buka http://localhost:8000/docs untuk lihat semua API"
    }
# main.py — tambahkan baris ini

from routers import mahasiswa, dosen, tendik, auth   # ← tambah auth

app.include_router(auth.router, prefix="/api")        # ← tambahkan baris ini
# Daftarkan semua router
app.include_router(mahasiswa.router, prefix="/api")
app.include_router(dosen.router,     prefix="/api")
app.include_router(tendik.router,    prefix="/api")
app.include_router(auth.router,      prefix="/api")   # ← baris baru

from routers import mahasiswa, dosen, tendik, auth, counterfactual  # ← tambah

app.include_router(counterfactual.router, prefix="/api")             # ← tambah

from routers import mahasiswa, dosen, tendik, auth, counterfactual, export  # ← tambah export

app.include_router(export.router, prefix="/api")  # ← tambah baris ini