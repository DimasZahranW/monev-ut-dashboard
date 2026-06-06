// src/services/api.js
import axios from "axios";

// Otomatis pakai URL dari .env
// Saat localhost  → http://localhost:8000/api
// Saat hosting   → URL backend production (diisi nanti di Step 10)
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

const api = axios.create({ baseURL: BASE_URL });

// ── MAHASISWA ─────────────────────────────────────────
export const getMahasiswaSummary = () => api.get("/mahasiswa/summary");
export const getMahasiswaList = () => api.get("/mahasiswa/list");
export const getdistribusiStatus = () => api.get("/mahasiswa/distribusi-status");
export const getTrenIPK = () => api.get("/mahasiswa/tren-ipk");
export const getDistribusiPrediksi = () => api.get("/mahasiswa/distribusi-prediksi");
export const getMahasiswaPerUPBJJ = () => api.get("/mahasiswa/per-upbjj");
export const getLMSBulanan = () => api.get("/mahasiswa/lms-bulanan");

// ── DOSEN ─────────────────────────────────────────────
export const getDosenSummary = () => api.get("/dosen/summary");
export const getDosenList = () => api.get("/dosen/list");
export const getDosenDetail = (nidn) => api.get(`/dosen/detail/${nidn}`);
export const getDosenDistribusi = () => api.get("/dosen/distribusi-kinerja");

// ── TENDIK ────────────────────────────────────────────
export const getTendikSummary = () => api.get("/tendik/summary");
export const getTendikList = () => api.get("/tendik/list");
export const getTendikDistribusi = () => api.get("/tendik/distribusi-kinerja");
export const getTendikPerUnit = () => api.get("/tendik/per-unit");

// ── AUTH ──────────────────────────────────────────────
export const loginUser = (username, password) => api.post("/auth/login", { username, password });

// ── COUNTERFACTUAL ────────────────────────────────────
export const getSimulasi = (nim) => api.get(`/counterfactual/simulasi/${nim}`);

// ── EXPORT ────────────────────────────────────────────
export const exportMahasiswa = () => window.open(`${BASE_URL}/export/mahasiswa`, "_blank");
export const exportDosen = () => window.open(`${BASE_URL}/export/dosen`, "_blank");
export const exportTendik = () => window.open(`${BASE_URL}/export/tendik`, "_blank");
