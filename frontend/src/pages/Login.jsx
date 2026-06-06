// src/pages/Login.jsx
import { useState } from "react";
import { loginUser } from "../services/api";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  async function handleLogin() {
    // Validasi tidak boleh kosong
    if (!username || !password) {
      setError("Username dan password wajib diisi!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await loginUser(username, password);
      // Simpan data user ke localStorage
      localStorage.setItem("monev_user", JSON.stringify(res.data.user));
      // Beritahu App.js bahwa login berhasil
      onLoginSuccess(res.data.user);
    } catch (err) {
      // Tampilkan pesan error dari backend
      setError(err.response?.data?.detail || "Login gagal, coba lagi!");
    } finally {
      setLoading(false);
    }
  }

  // Tekan Enter = login
  function handleKeyDown(e) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* ── Panel Kiri (Branding) ── */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #0f2167 0%, #1e40af 60%, #0369a1 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "40px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: "72px",
            height: "72px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "36px",
            marginBottom: "24px",
            backdropFilter: "blur(10px)",
          }}
        >
          📊
        </div>

        <h1 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 8px", textAlign: "center" }}>MONEV UT</h1>
        <p style={{ fontSize: "14px", opacity: 0.7, margin: "0 0 40px", textAlign: "center" }}>
          Sistem Monitoring & Evaluasi
          <br />
          Universitas Terbuka 2026
        </p>

        {/* Fitur list */}
        {["📈 Dashboard Real-time", "🎓 Monitoring Potensi Mahasiswa", "👨‍🏫 Analisis Kinerja Dosen", "🔬 Analisis Counterfactual"].map((f) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#38c6f4", flexShrink: 0 }} />
            <span style={{ fontSize: "13px", opacity: 0.85 }}>{f}</span>
          </div>
        ))}

        <div
          style={{
            marginTop: "40px",
            padding: "12px 20px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "12px",
            fontSize: "12px",
            opacity: 0.7,
            textAlign: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          TKT 5 · Tahap 1 · PRI-PTJJ 2026
        </div>
      </div>

      {/* ── Panel Kanan (Form Login) ── */}
      <div
        style={{
          width: "440px",
          background: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "360px" }}>
          {/* Judul */}
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>Selamat Datang 👋</h2>
          <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 32px" }}>Masuk dengan akun MONEV UT Anda</p>

          {/* Error Box */}
          {error && (
            <div
              style={{
                background: "#fee2e2",
                border: "0.5px solid #fca5a5",
                borderRadius: "10px",
                padding: "12px 14px",
                fontSize: "13px",
                color: "#dc2626",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* Input Username */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "12px", fontWeight: 700, color: "#374151", display: "block", marginBottom: "6px" }}>Username</label>
            <input
              type="text"
              placeholder="Masukkan username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: "10px",
                border: "0.5px solid #cbd5e1",
                fontSize: "14px",
                outline: "none",
                background: "#fff",
                color: "#0f172a",
                boxSizing: "border-box",
                transition: "border .15s",
              }}
              onFocus={(e) => (e.target.style.border = "1.5px solid #0ea5e9")}
              onBlur={(e) => (e.target.style.border = "0.5px solid #cbd5e1")}
            />
          </div>

          {/* Input Password */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ fontSize: "12px", fontWeight: 700, color: "#374151", display: "block", marginBottom: "6px" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  width: "100%",
                  padding: "11px 42px 11px 14px",
                  borderRadius: "10px",
                  border: "0.5px solid #cbd5e1",
                  fontSize: "14px",
                  outline: "none",
                  background: "#fff",
                  color: "#0f172a",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.border = "1.5px solid #0ea5e9")}
                onBlur={(e) => (e.target.style.border = "0.5px solid #cbd5e1")}
              />
              {/* Toggle show/hide password */}
              <button
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Tombol Login */}
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: loading ? "#94a3b8" : "linear-gradient(135deg,#0f2167,#0ea5e9)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "opacity .2s",
              boxShadow: "0 4px 14px rgba(14,165,233,0.35)",
            }}
          >
            {loading ? "⏳ Memproses..." : "🔐 Masuk ke Dashboard"}
          </button>

          {/* Info akun default */}
          <div
            style={{
              marginTop: "24px",
              padding: "14px 16px",
              background: "#eff6ff",
              borderRadius: "10px",
              border: "0.5px solid #bfdbfe",
            }}
          >
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1d4ed8", marginBottom: "8px" }}>💡 Akun Default untuk Testing:</div>
            {[
              ["admin", "admin123", "Admin"],
              ["dewi", "dewi123", "Dosen"],
              ["operator", "operator123", "Operator"],
            ].map(([u, p, r]) => (
              <div
                key={u}
                onClick={() => {
                  setUsername(u);
                  setPassword(p);
                }}
                style={{
                  fontSize: "12px",
                  color: "#374151",
                  marginBottom: "4px",
                  cursor: "pointer",
                  padding: "4px 6px",
                  borderRadius: "6px",
                  transition: "background .15s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#dbeafe")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
              >
                👤 <strong>{u}</strong> / {p} — <em>{r}</em>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "11px", color: "#94a3b8", textAlign: "center", marginTop: "20px" }}>© 2026 Universitas Terbuka · MONEV Dashboard v1.0</p>
        </div>
      </div>
    </div>
  );
}
