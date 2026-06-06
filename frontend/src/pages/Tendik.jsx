// src/pages/Tendik.jsx
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import Header from "../components/Header";
import KPICard from "../components/KPICard";
import { getTendikSummary, getTendikList, getTendikDistribusi, getTendikPerUnit } from "../services/api";
import ExportBar from "../components/ExportBar";
import { exportTendik } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

const PIE_COLORS = ["#10b981", "#f59e0b", "#ef4444"];

function Badge({ text }) {
  const map = {
    Excellent: { bg: "#d1fae5", color: "#059669" },
    Good: { bg: "#fef3c7", color: "#d97706" },
    Average: { bg: "#fee2e2", color: "#dc2626" },
  };
  const s = map[text] || { bg: "#e2e8f0", color: "#475569" };
  return <span style={{ background: s.bg, color: s.color, borderRadius: "20px", padding: "3px 10px", fontSize: "11px", fontWeight: 700 }}>{text}</span>;
}

export default function Tendik() {
  const [summary, setSummary] = useState(null);
  const [list, setList] = useState([]);
  const [distribusi, setDistribusi] = useState([]);
  const [perUnit, setPerUnit] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getTendikSummary(), getTendikList(), getTendikDistribusi(), getTendikPerUnit()])
      .then(([s, l, d, u]) => {
        setSummary(s.data);
        setList(l.data);
        setDistribusi(d.data);
        setPerUnit(u.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filtered = filter === "Semua" ? list : list.filter((t) => t.label_kinerja === filter);

  if (loading) return <LoadingSpinner pesan="Memuat data..." />;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header title="Modul Tendik" />

      <div style={{ flex: 1, overflowY: "auto", padding: "18px", background: "#f0f4f8", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* KPI */}
        <div style={{ display: "flex", gap: "12px" }}>
          <KPICard title="Total Tendik" value={summary?.total_tendik} icon="🏢" color="#0ea5e9" />
          <KPICard title="Rata-rata Skor" value={summary?.rata_skor} icon="⭐" color="#7c3aed" />
          <KPICard title="Rata-rata Hadir" value={summary?.rata_kehadiran + "%"} icon="📅" color="#059669" />
          <KPICard title="Indeks Kepuasan" value={summary?.rata_kepuasan + " / 5.0"} icon="😊" color="#d97706" />
        </div>

        {/* Charts */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {/* Pie — Distribusi Kinerja */}
          <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "18px 20px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Distribusi Label Kinerja</div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={distribusi} dataKey="jumlah" nameKey="label" cx="50%" cy="50%" outerRadius={75} label={({ label, jumlah }) => `${label}: ${jumlah}`} labelLine={false}>
                  {distribusi.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar — Per Unit */}
          <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "18px 20px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Tendik per Unit Kerja</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={perUnit} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="unit" width={130} tick={{ fontSize: 9, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "10px", border: "none" }} />
                <Bar dataKey="jumlah" fill="#0ea5e9" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filter Pills */}
        {/* ── Filter Pills + Export ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Semua", "Excellent", "Good", "Average"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "none",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  background: filter === f ? "#0f2167" : "#e2e8f0",
                  color: filter === f ? "#fff" : "#475569",
                  boxShadow: filter === f ? "0 2px 8px rgba(15,33,103,.25)" : "none",
                }}
              >
                {f} {filter === f && `(${filtered.length})`}
              </button>
            ))}
          </div>
          <ExportBar onExcelExport={exportTendik} judulPDF="Laporan Tendik" />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Semua", "Excellent", "Good", "Average"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "none",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  background: filter === f ? "#0f2167" : "#e2e8f0",
                  color: filter === f ? "#fff" : "#475569",
                  boxShadow: filter === f ? "0 2px 8px rgba(15,33,103,.25)" : "none",
                }}
              >
                {f} {filter === f && `(${filtered.length})`}
              </button>
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>Total: {filtered.length} tendik</span>
        </div>

        {/* Tabel */}
        <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", overflow: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "0.5px solid #e8edf3" }}>
                {["NIP", "Nama", "Jabatan", "Jenis Jabatan", "Unit Kerja", "UPBJJ", "Status", "Kehadiran", "Kepuasan", "Skor", "Label"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", fontSize: "10px", fontWeight: 700, color: "#94a3b8", textAlign: "left", textTransform: "uppercase", letterSpacing: ".05em", whiteSpace: "nowrap" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
                <tr key={t.nip} style={{ borderBottom: "0.5px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "10px 14px", fontSize: "10px", color: "#94a3b8", fontFamily: "monospace" }}>{t.nip}</td>
                  <td style={{ padding: "10px 14px", fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>{t.nama_lengkap}</td>
                  <td style={{ padding: "10px 14px", fontSize: "11px", color: "#475569" }}>{t.jabatan}</td>
                  <td style={{ padding: "10px 14px", fontSize: "11px", color: "#475569" }}>{t.jenis_jabatan}</td>
                  <td style={{ padding: "10px 14px", fontSize: "11px", color: "#475569" }}>{t.unit_kerja}</td>
                  <td style={{ padding: "10px 14px", fontSize: "11px", color: "#475569" }}>{t.upbjj}</td>
                  <td style={{ padding: "10px 14px", fontSize: "11px", color: "#475569" }}>{t.status_kepegawaian}</td>
                  <td style={{ padding: "10px 14px", fontSize: "12px", fontWeight: 700, color: t.tingkat_kehadiran >= 97 ? "#059669" : t.tingkat_kehadiran >= 93 ? "#d97706" : "#dc2626" }}>{t.tingkat_kehadiran}%</td>
                  <td style={{ padding: "10px 14px", fontSize: "12px", fontWeight: 700, color: "#0ea5e9" }}>{t.indeks_kepuasan}</td>
                  <td style={{ padding: "10px 14px", fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>{t.skor_kinerja}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <Badge text={t.label_kinerja} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
