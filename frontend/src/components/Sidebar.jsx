// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", icon: "📊", label: "Dashboard" },
  { path: "/mahasiswa", icon: "🎓", label: "Modul Mahasiswa" },
  { path: "/dosen", icon: "👨‍🏫", label: "Modul Dosen & Tutor" },
  { path: "/tendik", icon: "🏢", label: "Modul Tendik" },
];

export default function Sidebar({ user, onLogout }) {
  return (
    <div
      style={{
        width: "230px",
        minWidth: "230px",
        background: "#0f2167",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            📈
          </div>
          <div>
            <div style={{ fontWeight: 800, color: "#fff", fontSize: "14px" }}>MONEV UT</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>Monitoring & Evaluasi</div>
          </div>
        </div>
      </div>

      {/* Info User yang Login */}
      {user && (
        <div style={{ padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "10px",
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 800,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {user.nama.charAt(0).toUpperCase()}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.nama}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textTransform: "capitalize" }}>{user.role}</div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Navigasi */}
      <nav style={{ padding: "14px 10px", flex: 1 }}>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "8px", paddingLeft: "10px" }}>Menu Utama</div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "10px",
              textDecoration: "none",
              marginBottom: "2px",
              fontSize: "13px",
              fontWeight: isActive ? 700 : 500,
              background: isActive ? "rgba(14,165,233,0.18)" : "transparent",
              color: isActive ? "#38c6f4" : "rgba(255,255,255,0.6)",
              borderLeft: isActive ? "3px solid #38c6f4" : "3px solid transparent",
            })}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Status & Logout */}
      <div style={{ padding: "14px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px" }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>Status Sistem</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Operational</span>
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>TKT 5 · Tahap 1 · 2026</div>
        </div>

        {/* Tombol Logout */}
        <button
          onClick={onLogout}
          style={{
            width: "100%",
            padding: "9px",
            borderRadius: "10px",
            border: "none",
            background: "rgba(239,68,68,0.15)",
            color: "#fca5a5",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            transition: "background .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.15)")}
        >
          🚪 Keluar
        </button>
      </div>
    </div>
  );
}
