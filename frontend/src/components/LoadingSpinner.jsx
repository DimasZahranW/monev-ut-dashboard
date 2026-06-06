// src/components/LoadingSpinner.jsx
export default function LoadingSpinner({ pesan = "Memuat data..." }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        background: "#f0f4f8",
        gap: "16px",
      }}
    >
      {/* Animasi spinner */}
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "4px solid #e2e8f0",
          borderTop: "4px solid #0ea5e9",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />

      <style>{`
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <p style={{ fontSize: "14px", color: "#64748b", fontWeight: 500 }}>⏳ {pesan}</p>
    </div>
  );
}
