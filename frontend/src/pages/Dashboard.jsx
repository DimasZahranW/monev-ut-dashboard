// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import KPICard from "../components/KPICard";
import Header from "../components/Header";
import {
  getMahasiswaSummary,
  getdistribusiStatus, // ← huruf d kecil
  getTrenIPK,
  getLMSBulanan,
} from "../services/api";
// Tambah import di paling atas masing-masing halaman
import LoadingSpinner from "../components/LoadingSpinner";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [distStatus, setDistStatus] = useState([]);
  const [trenIPK, setTrenIPK] = useState([]);
  const [lmsBulanan, setLMSBulanan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getMahasiswaSummary(),
      getdistribusiStatus(), // ← huruf d kecil
      getTrenIPK(),
      getLMSBulanan(),
    ])
      .then(([s, d, t, l]) => {
        setSummary(s.data);
        setDistStatus(d.data);
        setTrenIPK(t.data);
        setLMSBulanan(l.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, []);
  if (loading) return <LoadingSpinner pesan="Memuat data..." />;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* ── HEADER ── */}
      <Header title="Ringkasan Eksekutif" />

      {/* ── KONTEN ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "18px",
          background: "#f0f4f8",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Banner */}
        <div
          style={{
            background: "linear-gradient(135deg,#0f2167,#1e40af,#0369a1)",
            borderRadius: "12px",
            padding: "24px 28px",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: "12px", opacity: 0.65, marginBottom: "4px" }}>Selamat Datang</div>
          <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "6px" }}>Dashboard MONEV Sivitas Akademika UT</div>
          <div style={{ opacity: 0.75, fontSize: "13px", maxWidth: "480px" }}>Sistem Monitoring & Evaluasi Berbasis Counterfactual — Universitas Terbuka 2026</div>
          <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: 600 }}>⚡ Tahun 2026</span>
            <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: 600 }}>🔬 TKT 5</span>
            <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: 600 }}>✅ Operational</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div style={{ display: "flex", gap: "12px" }}>
          <KPICard title="Total Mahasiswa" value={summary?.total_mahasiswa?.toLocaleString() ?? "-"} icon="👥" color="#0ea5e9" trend={4.2} trendLabel="vs. sem. lalu" />
          <KPICard title="Prediksi Lulus" value={summary?.prediksi_lulus?.toLocaleString() ?? "-"} icon="🎓" color="#059669" trend={2.8} trendLabel="vs. sem. lalu" />
          <KPICard title="Rata-rata IPK" value={summary?.rata_ipk ?? "-"} icon="🏆" color="#7c3aed" trend={1.8} trendLabel="vs. sem. lalu" />
          <KPICard title="Partisipasi LMS" value={(summary?.rata_partisipasi_lms ?? "-") + "%"} icon="📱" color="#d97706" trend={-2.1} trendLabel="vs. bln lalu" />
        </div>

        {/* Baris Chart Atas */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "12px" }}>
          {/* Bar Chart — Distribusi Status */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "0.5px solid #e8edf3",
              padding: "18px 20px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Distribusi Status Mahasiswa</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={distStatus}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="status" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="jumlah" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart — Tren IPK */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "0.5px solid #e8edf3",
              padding: "18px 20px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>Tren Rata-rata IPK per Semester</div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={trenIPK}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="semester" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                />
                <Line type="monotone" dataKey="rata_ipk" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4, fill: "#10b981" }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart — LMS Bulanan */}
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            border: "0.5px solid #e8edf3",
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>Partisipasi LMS Bulanan (%)</div>
            <span style={{ fontSize: "11px", color: "#94a3b8" }}>Data terkini</span>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={lmsBulanan}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="bulan" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
              <Bar dataKey="rata_partisipasi" name="Partisipasi (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
