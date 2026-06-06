# routers/auth.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text
from pydantic import BaseModel
from database import get_db

router = APIRouter(prefix="/auth", tags=["Autentikasi"])

# Format data yang dikirim saat login
class LoginRequest(BaseModel):
    username: str
    password: str


@router.post("/login")
def login(req: LoginRequest, db: Session = Depends(get_db)):
    """Cek username & password ke database"""

    user = db.execute(text("""
        SELECT id, nama, username, role
        FROM users
        WHERE username = :username
        AND   password = :password
    """), {
        "username": req.username,
        "password": req.password,
    }).fetchone()

    # Jika tidak ditemukan → tolak
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Username atau password salah!"
        )

    # Jika ditemukan → kirim data user
    return {
        "success" : True,
        "message" : f"Selamat datang, {user[1]}!",
        "user": {
            "id"      : user[0],
            "nama"    : user[1],
            "username": user[2],
            "role"    : user[3],
        }
    }


@router.get("/check")
def check_auth():
    """Endpoint cek apakah server auth berjalan"""
    return {"status": "Auth service aktif ✅"}