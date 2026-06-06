// src/components/ExportBar.jsx
// Tombol export Excel & Print PDF yang bisa dipakai di semua halaman

export default function ExportBar({ onExcelExport, judulPDF }) {
  function handlePrint() {
    window.print();
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {/* Tombol Export Excel */}
      <button
        onClick={onExcelExport}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 14px",
          borderRadius: "8px",
          background: "#059669",
          color: "#fff",
          border: "none",
          fontSize: "12px",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(5,150,105,.25)",
        }}
      >
        📊 Export Excel
      </button>

      {/* Tombol Print/PDF */}
      <button
        onClick={handlePrint}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 14px",
          borderRadius: "8px",
          background: "#dc2626",
          color: "#fff",
          border: "none",
          fontSize: "12px",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(220,38,38,.25)",
        }}
      >
        🖨️ Cetak / PDF
      </button>
    </div>
  );
}
