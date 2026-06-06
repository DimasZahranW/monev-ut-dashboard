// src/components/KPICard.jsx
export default function KPICard({ title, value, icon, color, trend, trendLabel }) {
  const isUp = trend >= 0;
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        border: "0.5px solid #e8edf3",
        padding: "18px 20px",
        flex: 1,
        minWidth: 0,
        borderLeft: `4px solid ${color}`,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em" }}>{title}</div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", marginTop: "4px", lineHeight: 1 }}>{value}</div>
        </div>
        <div style={{ background: color + "22", borderRadius: "10px", padding: "8px", fontSize: "20px" }}>{icon}</div>
      </div>
      {trend !== undefined && (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: isUp ? "#059669" : "#dc2626", fontSize: "12px", fontWeight: 700 }}>
            {isUp ? "▲" : "▼"} {Math.abs(trend)}%
          </span>
          <span style={{ color: "#94a3b8", fontSize: "12px" }}>{trendLabel}</span>
        </div>
      )}
    </div>
  );
}
