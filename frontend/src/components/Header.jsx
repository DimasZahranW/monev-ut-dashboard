// src/components/Header.jsx
export default function Header({ title }) {
  return (
    <div
      style={{
        background: "#fff",
        borderBottom: "0.5px solid #e8edf3",
        padding: "0 24px",
        height: "54px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>MONEV UT</span>
        <span style={{ color: "#94a3b8" }}>›</span>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>{title}</span>
      </div>
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background: "linear-gradient(135deg,#0ea5e9,#0f2167)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 800,
          color: "#fff",
        }}
      >
        UT
      </div>
    </div>
  );
}
