// src/App.js

// ── Semua import WAJIB di paling atas ──────────────────
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Mahasiswa from "./pages/Mahasiswa";
import Dosen from "./pages/Dosen";
import Tendik from "./pages/Tendik";
import NotFound from "./pages/NotFound";

// ── Komponen utama ──────────────────────────────────────
export default function App() {
  // Cek apakah sudah login sebelumnya (dari localStorage)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("monev_user");
    return saved ? JSON.parse(saved) : null;
  });

  function handleLoginSuccess(userData) {
    setUser(userData);
  }

  function handleLogout() {
    localStorage.removeItem("monev_user");
    setUser(null);
  }

  // Belum login → tampilkan halaman Login
  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // Sudah login → tampilkan Dashboard
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          height: "100vh",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Sidebar tetap di kiri */}
        <Sidebar user={user} onLogout={handleLogout} />

        {/* Konten bergeser ke kanan sejauh lebar sidebar */}
        <div
          style={{
            marginLeft: "230px",
            flex: 1,
            overflow: "hidden",
            background: "#f0f4f8",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/dosen" element={<Dosen />} />
            <Route path="/tendik" element={<Tendik />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
