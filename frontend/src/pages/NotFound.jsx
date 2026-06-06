// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f0f4f8",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Ilustrasi */}
      <div
        style={{
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg,#0f2167,#0ea5e9)",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "52px",
          marginBottom: "24px",
          boxShadow: "0 8px 32px rgba(14,165,233,0.3)",
        }}
      >
        🔍
      </div>

      <h1
        style={{
          fontSize: "72px",
          fontWeight: 800,
          color: "#0f2167",
          margin: "0 0 8px",
          lineHeight: 1,
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#0f172a",
          margin: "0 0 10px",
        }}
      >
        Halaman Tidak Ditemukan
      </h2>

      <p
        style={{
          fontSize: "14px",
          color: "#64748b",
          margin: "0 0 32px",
          textAlign: "center",
          maxWidth: "340px",
          lineHeight: 1.6,
        }}
      >
        Halaman yang kamu cari tidak ada atau sudah dipindahkan. Kembali ke dashboard untuk melanjutkan.
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0.5px solid #cbd5e1",
            background: "#fff",
            color: "#475569",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          ← Kembali
        </button>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg,#0f2167,#0ea5e9)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(14,165,233,0.35)",
          }}
        >
          🏠 Ke Dashboard
        </button>
      </div>

      <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "40px" }}>MONEV UT · Universitas Terbuka 2026</p>
    </div>
  );
}
