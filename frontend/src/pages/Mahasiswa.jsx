// src/pages/Mahasiswa.jsx
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import Header from "../components/Header";
import KPICard from "../components/KPICard";
import SimulasiModal from "../components/SimulasiModal";
import { getMahasiswaSummary, getMahasiswaList, getDistribusiPrediksi, getMahasiswaPerUPBJJ, getSimulasi } from "../services/api";
import ExportBar from "../components/ExportBar";
import { exportMahasiswa } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

const WARNA_PREDIKSI = {
  Lulus: { bg: "#d1fae5", color: "#059669" },
  Berisiko: { bg: "#fef3c7", color: "#d97706" },
  DO: { bg: "#fee2e2", color: "#dc2626" },
};

const PIE_COLORS = ["#10b981", "#f59e0b", "#ef4444"];

function Badge({ text }) {
  const s = WARNA_PREDIKSI[text] || { bg: "#e2e8f0", color: "#475569" };
  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        borderRadius: "20px",
        padding: "3px 10px",
        fontSize: "11px",
        fontWeight: 700,
      }}
    >
      {text}
    </span>
  );
}

function LMSBar({ value }) {
  const color = value >= 70 ? "#10b981" : value >= 40 ? "#f59e0b" : "#ef4444";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "64px", height: "6px", background: "#e2e8f0", borderRadius: "99px", overflow: "hidden" }}>
        <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: "99px" }} />
      </div>
      <span style={{ fontSize: "12px", color: "#64748b" }}>{value}%</span>
    </div>
  );
}

export default function Mahasiswa() {
  const [summary, setSummary] = useState(null);
  const [list, setList] = useState([]);
  const [prediksi, setPrediksi] = useState([]);
  const [perUPBJJ, setPerUPBJJ] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(null);
  const [loadingSim, setLoadingSim] = useState(false);
  const [simError, setSimError] = useState("");

  useEffect(() => {
    Promise.all([getMahasiswaSummary(), getMahasiswaList(), getDistribusiPrediksi(), getMahasiswaPerUPBJJ()])
      .then(([s, l, p, u]) => {
        setSummary(s.data);
        setList(l.data);
        setPrediksi(p.data);
        setPerUPBJJ(u.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // ── Buka modal simulasi counterfactual ──────────────
  async function bukaSimulasi(nim) {
    setLoadingSim(true);
    setSimError("");
    try {
      const res = await getSimulasi(nim);
      if (res.data.error) {
        setSimError(`NIM ${nim}: ${res.data.error}`);
      } else {
        setModalData(res.data);
      }
    } catch (err) {
      setSimError("Gagal mengambil data simulasi.");
      console.error(err);
    } finally {
      setLoadingSim(false);
    }
  }

  const filtered = filter === "Semua" ? list : list.filter((m) => m.prediksi_kelulusan === filter);

  if (loading) return <LoadingSpinner pesan="Memuat data..." />;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header title="Modul Potensi Mahasiswa" />

      <div style={{ flex: 1, overflowY: "auto", padding: "18px", background: "#f0f4f8", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* ── KPI Cards ── */}
        <div style={{ display: "flex", gap: "12px" }}>
          <KPICard title="Total Mahasiswa" value={summary?.total_mahasiswa} icon="👥" color="#0ea5e9" />
          <KPICard title="Prediksi Lulus" value={summary?.prediksi_lulus} icon="🎓" color="#059669" />
          <KPICard title="Berisiko" value={summary?.prediksi_berisiko} icon="⚠️" color="#d97706" />
          <KPICard title="Prediksi DO" value={summary?.prediksi_do} icon="❌" color="#dc2626" />
          <KPICard title="Rata-rata IPK" value={summary?.rata_ipk} icon="🏆" color="#7c3aed" />
        </div>

        {/* ── Charts ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {/* Pie — Distribusi Prediksi */}
          <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "18px 20px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Distribusi Prediksi Kelulusan</div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={prediksi} dataKey="jumlah" nameKey="prediksi" cx="50%" cy="50%" outerRadius={75} label={({ prediksi, jumlah }) => `${prediksi}: ${jumlah}`} labelLine={false}>
                  {prediksi.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar — Per UPBJJ */}
          <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "18px 20px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Mahasiswa per UPBJJ</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={perUPBJJ} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="upbjj" width={110} tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                <Bar dataKey="jumlah" fill="#7c3aed" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── Error Simulasi ── */}
        {simError && (
          <div
            style={{
              background: "#fee2e2",
              border: "0.5px solid #fca5a5",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "13px",
              color: "#dc2626",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            ⚠️ {simError}
            <button onClick={() => setSimError("")} style={{ background: "none", border: "none", cursor: "pointer", color: "#dc2626", fontWeight: 700 }}>
              ✕
            </button>
          </div>
        )}

        {/* ── Filter Pills ── */}
        {/* ── Filter Pills + Export ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Semua", "Lulus", "Berisiko", "DO"].map((f) => (
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

          {/* Tombol Export */}
          <ExportBar onExcelExport={exportMahasiswa} judulPDF="Laporan Mahasiswa" />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Semua", "Lulus", "Berisiko", "DO"].map((f) => (
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
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>Total: {filtered.length} mahasiswa</span>
        </div>

        {/* ── Tabel Mahasiswa ── */}
        <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", overflow: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "0.5px solid #e8edf3" }}>
                {["NIM", "Nama", "Program Studi", "UPBJJ", "IPK", "Partisipasi LMS", "Status", "Prediksi", "Skor CF", "Simulasi"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 14px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#94a3b8",
                      textAlign: "left",
                      textTransform: "uppercase",
                      letterSpacing: ".05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((m, i) => (
                <tr key={m.nim} style={{ borderBottom: "0.5px solid #f1f5f9", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "10px 14px", fontSize: "11px", color: "#94a3b8", fontFamily: "monospace" }}>{m.nim}</td>
                  <td style={{ padding: "10px 14px", fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>{m.nama_lengkap}</td>
                  <td style={{ padding: "10px 14px", fontSize: "12px", color: "#475569" }}>{m.program_studi}</td>
                  <td style={{ padding: "10px 14px", fontSize: "12px", color: "#475569" }}>{m.upbjj}</td>
                  <td style={{ padding: "10px 14px", fontSize: "13px", fontWeight: 700, color: m.ipk >= 3.5 ? "#059669" : m.ipk >= 2.5 ? "#d97706" : "#dc2626" }}>{m.ipk}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <LMSBar value={m.partisipasi_lms} />
                  </td>
                  <td style={{ padding: "10px 14px", fontSize: "12px", color: "#475569" }}>{m.status_akademik}</td>
                  <td style={{ padding: "10px 14px" }}>
                    <Badge text={m.prediksi_kelulusan} />
                  </td>
                  <td style={{ padding: "10px 14px", fontSize: "12px", fontWeight: 700, color: "#0ea5e9" }}>{m.skor_counterfactual}</td>

                  {/* ── Tombol Simulasi ── */}
                  <td style={{ padding: "10px 14px" }}>
                    <button
                      onClick={() => bukaSimulasi(m.nim)}
                      disabled={loadingSim}
                      style={{
                        fontSize: "11px",
                        color: "#fff",
                        fontWeight: 600,
                        background: loadingSim ? "#94a3b8" : "#0ea5e9",
                        border: "none",
                        borderRadius: "6px",
                        padding: "5px 10px",
                        cursor: loadingSim ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {loadingSim ? "⏳..." : "🔬 Simulasi"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Modal Simulasi Counterfactual ── */}
      {modalData && <SimulasiModal data={modalData} onClose={() => setModalData(null)} />}
    </div>
  );
}
