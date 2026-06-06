// src/pages/Dosen.jsx
import { useEffect, useState } from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Header from "../components/Header";
import KPICard from "../components/KPICard";
import { getDosenSummary, getDosenList, getDosenDetail, getDosenDistribusi } from "../services/api";
import ExportBar from "../components/ExportBar";
import { exportDosen } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

function Badge({ text }) {
  const map = {
    Excellent: { bg: "#d1fae5", color: "#059669" },
    Good: { bg: "#fef3c7", color: "#d97706" },
    Average: { bg: "#fee2e2", color: "#dc2626" },
  };
  const s = map[text] || { bg: "#e2e8f0", color: "#475569" };
  return <span style={{ background: s.bg, color: s.color, borderRadius: "20px", padding: "3px 10px", fontSize: "11px", fontWeight: 700 }}>{text}</span>;
}

export default function Dosen() {
  const [summary, setSummary] = useState(null);
  const [list, setList] = useState([]);
  const [distribusi, setDistribusi] = useState([]);
  const [detail, setDetail] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDosenSummary(), getDosenList(), getDosenDistribusi()])
      .then(([s, l, d]) => {
        setSummary(s.data);
        setList(l.data);
        setDistribusi(d.data);
        setLoading(false);
        // Auto pilih dosen pertama
        if (l.data.length > 0) pilihDosen(l.data[0].nidn);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  function pilihDosen(nidn) {
    setSelected(nidn);
    getDosenDetail(nidn).then((res) => setDetail(res.data));
  }
  if (loading) return <LoadingSpinner pesan="Memuat data..." />;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header title="Modul Dosen & Tutor" />

      <div style={{ flex: 1, overflowY: "auto", padding: "18px", background: "#f0f4f8", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* KPI */}
        {/* ── Sub Header + Export ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>Data Dosen & Tutor UT</div>
            <div style={{ fontSize: "12px", color: "#64748b" }}>Analisis Catur Dharma & Kinerja</div>
          </div>
          <ExportBar onExcelExport={exportDosen} judulPDF="Laporan Dosen" />
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <KPICard title="Total Dosen" value={summary?.total_dosen} icon="👨‍🏫" color="#0ea5e9" />
          <KPICard title="Rata-rata Skor" value={summary?.rata_skor} icon="⭐" color="#7c3aed" />
          <KPICard title="Rata-rata H-Index" value={summary?.rata_h_index} icon="📊" color="#059669" />
          <KPICard title="Total Sitasi" value={summary?.total_sitasi?.toLocaleString()} icon="📝" color="#d97706" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "14px", alignItems: "start" }}>
          {/* List Dosen */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {list.map((d) => (
              <button
                key={d.nidn}
                onClick={() => pilihDosen(d.nidn)}
                style={{
                  textAlign: "left",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  border: "0.5px solid #e8edf3",
                  cursor: "pointer",
                  background: selected === d.nidn ? "#0f2167" : "#fff",
                  transition: "all .2s",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "13px", color: selected === d.nidn ? "#fff" : "#0f172a" }}>{d.nama_lengkap}</div>
                <div style={{ fontSize: "11px", color: selected === d.nidn ? "rgba(255,255,255,.5)" : "#94a3b8", marginTop: "2px" }}>{d.jabatan_fungsional}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                  <span style={{ fontSize: "20px", fontWeight: 800, color: selected === d.nidn ? "#38c6f4" : "#0f172a" }}>{d.skor_total}</span>
                  <Badge text={d.label_kinerja} />
                </div>
              </button>
            ))}
          </div>

          {/* Panel Detail */}
          {detail && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Metric Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {[
                  ["H-Index", detail.h_index, "📊"],
                  ["Sitasi", detail.jml_sitasi, "📝"],
                  ["Scopus", detail.artikel_scopus, "🔬"],
                  ["HKI/Paten", detail.jml_paten, "💡"],
                  ["Hibah Nas.", detail.hibah_nasional, "🏆"],
                  ["Skor Total", detail.skor_total, "⭐"],
                ].map(([label, val, icon]) => (
                  <div key={label} style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "14px", textAlign: "center" }}>
                    <div style={{ fontSize: "20px" }}>{icon}</div>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginTop: "4px" }}>{val}</div>
                    <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginTop: "2px" }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Radar Chart */}
              <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "18px 20px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Radar Catur Dharma — {detail.nama_lengkap}</div>
                <ResponsiveContainer width="100%" height={220}>
                  <RadarChart data={detail.radar}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#64748b" }} />
                    <Radar name="Skor" dataKey="nilai" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} strokeWidth={2} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Bar Distribusi Kinerja */}
              <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #e8edf3", padding: "18px 20px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Distribusi Label Kinerja Dosen</div>
                <ResponsiveContainer width="100%" height={140}>
                  <BarChart data={distribusi}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", border: "none" }} />
                    <Bar dataKey="jumlah" radius={[6, 6, 0, 0]} fill="#0ea5e9" label={{ position: "top", fontSize: 11, fill: "#64748b" }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Rekomendasi AI */}
              <div style={{ background: "linear-gradient(135deg,#0f2167,#1e40af)", borderRadius: "12px", padding: "18px 20px", color: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <span>✨</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#38c6f4" }}>Rekomendasi AI (Counterfactual)</span>
                </div>
                <p style={{ fontSize: "13px", opacity: 0.9, lineHeight: 1.7, margin: 0 }}>
                  Berdasarkan analisis data, <strong>{detail.nama_lengkap}</strong> dapat meningkatkan skor hingga&nbsp;
                  <strong>+{(100 - detail.skor_total).toFixed(1)} poin</strong> dengan mengoptimalkan kehadiran sesi tutorial dan meningkatkan frekuensi publikasi di jurnal internasional bereputasi.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
