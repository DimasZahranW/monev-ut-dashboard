-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2026 at 04:45 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monev_ut`
--

-- --------------------------------------------------------

--
-- Table structure for table `aktivitas_lms`
--

CREATE TABLE `aktivitas_lms` (
  `id_log` varchar(20) NOT NULL,
  `nim` varchar(20) DEFAULT NULL,
  `nama_lengkap` varchar(100) DEFAULT NULL,
  `program_studi` varchar(50) DEFAULT NULL,
  `upbjj` varchar(50) DEFAULT NULL,
  `bulan` varchar(15) DEFAULT NULL,
  `tahun` int(11) DEFAULT NULL,
  `jml_login` int(11) DEFAULT NULL,
  `durasi_akses` int(11) DEFAULT NULL,
  `jml_akses_materi` int(11) DEFAULT NULL,
  `jml_diskusi_forum` int(11) DEFAULT NULL,
  `jml_postingan` int(11) DEFAULT NULL,
  `tugas_dikumpul` int(11) DEFAULT NULL,
  `tugas_total` int(11) DEFAULT NULL,
  `pct_tugas` decimal(5,2) DEFAULT NULL,
  `jml_kuis` int(11) DEFAULT NULL,
  `jml_kuis_total` int(11) DEFAULT NULL,
  `nilai_rata_kuis` decimal(5,2) DEFAULT NULL,
  `jml_video` int(11) DEFAULT NULL,
  `durasi_video` int(11) DEFAULT NULL,
  `terakhir_login` date DEFAULT NULL,
  `partisipasi_lms` decimal(5,2) DEFAULT NULL,
  `kategori_partisipasi` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aktivitas_lms`
--

INSERT INTO `aktivitas_lms` (`id_log`, `nim`, `nama_lengkap`, `program_studi`, `upbjj`, `bulan`, `tahun`, `jml_login`, `durasi_akses`, `jml_akses_materi`, `jml_diskusi_forum`, `jml_postingan`, `tugas_dikumpul`, `tugas_total`, `pct_tugas`, `jml_kuis`, `jml_kuis_total`, `nilai_rata_kuis`, `jml_video`, `durasi_video`, `terakhir_login`, `partisipasi_lms`, `kategori_partisipasi`) VALUES
('LMS-001', '41100001', 'Ahmad Fauzi', 'Statistika', 'UPBJJ Jakarta', 'Mei', 2026, 28, 420, 35, 8, 14, 14, 15, '93.30', 5, 5, '88.50', 12, 240, '2026-05-30', '87.00', 'Aktif'),
('LMS-002', '41100002', 'Budi Santoso', 'Manajemen', 'UPBJJ Surabaya', 'Mei', 2026, 10, 95, 12, 2, 3, 6, 15, '40.00', 2, 5, '55.00', 3, 60, '2026-05-22', '42.00', 'Kurang Aktif'),
('LMS-003', '41100003', 'Citra Dewi', 'Statistika', 'UPBJJ Makassar', 'Mei', 2026, 30, 510, 40, 10, 18, 15, 15, '100.00', 5, 5, '95.00', 14, 280, '2026-05-31', '95.00', 'Sangat Aktif'),
('LMS-004', '41100004', 'Dian Pratiwi', 'Akuntansi', 'UPBJJ Medan', 'Mei', 2026, 4, 38, 6, 1, 1, 3, 15, '20.00', 1, 5, '42.00', 1, 20, '2026-05-10', '18.00', 'Tidak Aktif'),
('LMS-005', '41100005', 'Eko Wijaya', 'Ilmu Hukum', 'UPBJJ Bandung', 'Mei', 2026, 22, 310, 28, 6, 10, 12, 15, '80.00', 4, 5, '80.00', 9, 180, '2026-05-29', '78.00', 'Aktif'),
('LMS-006', '41100006', 'Fitri Handayani', 'Statistika', 'UPBJJ Jakarta', 'Mei', 2026, 18, 255, 22, 5, 8, 10, 15, '66.70', 4, 5, '75.00', 8, 150, '2026-05-28', '65.00', 'Cukup Aktif'),
('LMS-007', '41100007', 'Gunawan Saputra', 'PGSD', 'UPBJJ Semarang', 'Mei', 2026, 8, 72, 9, 1, 2, 5, 15, '33.30', 2, 5, '48.00', 2, 40, '2026-05-18', '30.00', 'Kurang Aktif'),
('LMS-008', '41100008', 'Hana Putri', 'Manajemen', 'UPBJJ Denpasar', 'Mei', 2026, 26, 395, 33, 7, 12, 14, 15, '93.30', 5, 5, '87.00', 11, 220, '2026-05-30', '88.00', 'Aktif'),
('LMS-009', '41100009', 'Irfan Maulana', 'PGSD', 'UPBJJ Jakarta', 'Mei', 2026, 16, 215, 20, 4, 7, 9, 15, '60.00', 3, 5, '70.00', 7, 130, '2026-05-27', '55.00', 'Cukup Aktif'),
('LMS-010', '41100010', 'Jasmine Rahma', 'Akuntansi', 'UPBJJ Makassar', 'Mei', 2026, 20, 290, 26, 6, 9, 11, 15, '73.30', 4, 5, '79.50', 9, 170, '2026-05-29', '72.00', 'Aktif'),
('LMS-011', '41100011', 'Krisna Adi', 'Manajemen', 'UPBJJ Yogyakarta', 'Mei', 2026, 24, 360, 30, 7, 11, 13, 15, '86.70', 5, 5, '83.00', 10, 200, '2026-05-30', '83.00', 'Aktif'),
('LMS-012', '41100012', 'Lestari Wulan', 'Statistika', 'UPBJJ Surabaya', 'Mei', 2026, 25, 380, 32, 7, 12, 13, 15, '86.70', 5, 5, '85.50', 11, 210, '2026-05-31', '85.00', 'Aktif'),
('LMS-013', '41100013', 'Muhammad Rizki', 'Ilmu Hukum', 'UPBJJ Palembang', 'Mei', 2026, 17, 235, 21, 5, 8, 10, 15, '66.70', 3, 5, '72.00', 7, 140, '2026-05-28', '60.00', 'Cukup Aktif'),
('LMS-014', '41100014', 'Nur Aini', 'PGSD', 'UPBJJ Medan', 'Mei', 2026, 27, 410, 36, 8, 14, 14, 15, '93.30', 5, 5, '90.00', 12, 250, '2026-05-31', '90.00', 'Sangat Aktif'),
('LMS-015', '41100015', 'Oscar Pratama', 'Manajemen', 'UPBJJ Bandung', 'Mei', 2026, 23, 340, 29, 6, 10, 12, 15, '80.00', 4, 5, '81.00', 10, 195, '2026-05-30', '80.00', 'Aktif'),
('LMS-016', '41100016', 'Putri Amalia', 'Akuntansi', 'UPBJJ Jakarta', 'Mei', 2026, 21, 305, 27, 6, 9, 12, 15, '80.00', 4, 5, '78.50', 9, 175, '2026-05-29', '75.00', 'Aktif'),
('LMS-017', '41100017', 'Rafi Hidayat', 'Statistika', 'UPBJJ Makassar', 'Mei', 2026, 13, 155, 16, 3, 5, 7, 15, '46.70', 3, 5, '62.00', 5, 100, '2026-05-25', '48.00', 'Kurang Aktif'),
('LMS-018', '41100018', 'Sinta Lestari', 'Manajemen', 'UPBJJ Semarang', 'Mei', 2026, 19, 270, 24, 5, 8, 11, 15, '73.30', 4, 5, '76.00', 8, 160, '2026-05-28', '70.00', 'Cukup Aktif'),
('LMS-019', '41100019', 'Tri Wahyudi', 'PGSD', 'UPBJJ Surabaya', 'Mei', 2026, 15, 195, 19, 4, 6, 9, 15, '60.00', 3, 5, '68.50', 6, 120, '2026-05-26', '58.00', 'Cukup Aktif'),
('LMS-020', '41100020', 'Uswatun Hasanah', 'Akuntansi', 'UPBJJ Bandung', 'Mei', 2026, 29, 450, 38, 9, 15, 14, 15, '93.30', 5, 5, '92.00', 13, 260, '2026-05-31', '92.00', 'Sangat Aktif'),
('LMS-021', '41100021', 'Vino Ramadhan', 'Ilmu Hukum', 'UPBJJ Palembang', 'Mei', 2026, 11, 110, 14, 2, 4, 7, 15, '46.70', 2, 5, '58.00', 4, 75, '2026-05-23', '45.00', 'Kurang Aktif'),
('LMS-022', '41100022', 'Widya Astuti', 'Statistika', 'UPBJJ Denpasar', 'Mei', 2026, 22, 320, 28, 6, 10, 12, 15, '80.00', 4, 5, '80.50', 9, 185, '2026-05-29', '78.00', 'Aktif'),
('LMS-023', '41100023', 'Xaverius Budi', 'Manajemen', 'UPBJJ Medan', 'Mei', 2026, 20, 295, 26, 5, 9, 11, 15, '73.30', 4, 5, '77.50', 9, 170, '2026-05-28', '73.00', 'Aktif'),
('LMS-024', '41100024', 'Yuliana Sari', 'PGSD', 'UPBJJ Yogyakarta', 'Mei', 2026, 24, 355, 31, 7, 11, 13, 15, '86.70', 5, 5, '84.00', 10, 205, '2026-05-30', '82.00', 'Aktif'),
('LMS-025', '41100025', 'Zainudin Hamid', 'Akuntansi', 'UPBJJ Makassar', 'Mei', 2026, 18, 260, 23, 5, 8, 11, 15, '73.30', 4, 5, '74.50', 8, 155, '2026-05-28', '66.00', 'Cukup Aktif');

-- --------------------------------------------------------

--
-- Table structure for table `dosen_tutor`
--

CREATE TABLE `dosen_tutor` (
  `nidn` varchar(20) NOT NULL,
  `nama_lengkap` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `jabatan_fungsional` varchar(60) DEFAULT NULL,
  `pangkat` varchar(20) DEFAULT NULL,
  `unit` varchar(60) DEFAULT NULL,
  `program_studi` varchar(50) DEFAULT NULL,
  `upbjj` varchar(50) DEFAULT NULL,
  `pendidikan_terakhir` varchar(10) DEFAULT NULL,
  `bidang_keahlian` varchar(100) DEFAULT NULL,
  `tahun_aktif` int(11) DEFAULT NULL,
  `jml_mk` int(11) DEFAULT NULL,
  `jml_sks` int(11) DEFAULT NULL,
  `metode_ajar` varchar(60) DEFAULT NULL,
  `nilai_evaluasi` decimal(5,2) DEFAULT NULL,
  `penelitian_aktif` int(11) DEFAULT NULL,
  `hibah_nasional` int(11) DEFAULT NULL,
  `hibah_internasional` int(11) DEFAULT NULL,
  `dana_penelitian` bigint(20) DEFAULT NULL,
  `h_index` int(11) DEFAULT NULL,
  `jml_sitasi` int(11) DEFAULT NULL,
  `artikel_scopus` int(11) DEFAULT NULL,
  `artikel_sinta` int(11) DEFAULT NULL,
  `buku` int(11) DEFAULT NULL,
  `jml_pkm` int(11) DEFAULT NULL,
  `dana_pkm` bigint(20) DEFAULT NULL,
  `dampak_pkm` varchar(20) DEFAULT NULL,
  `jml_paten` int(11) DEFAULT NULL,
  `jml_produk` int(11) DEFAULT NULL,
  `skor_pengajaran` decimal(5,2) DEFAULT NULL,
  `skor_penelitian` decimal(5,2) DEFAULT NULL,
  `skor_publikasi` decimal(5,2) DEFAULT NULL,
  `skor_pkm` decimal(5,2) DEFAULT NULL,
  `skor_total` decimal(5,2) DEFAULT NULL,
  `label_kinerja` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dosen_tutor`
--

INSERT INTO `dosen_tutor` (`nidn`, `nama_lengkap`, `jenis_kelamin`, `jabatan_fungsional`, `pangkat`, `unit`, `program_studi`, `upbjj`, `pendidikan_terakhir`, `bidang_keahlian`, `tahun_aktif`, `jml_mk`, `jml_sks`, `metode_ajar`, `nilai_evaluasi`, `penelitian_aktif`, `hibah_nasional`, `hibah_internasional`, `dana_penelitian`, `h_index`, `jml_sitasi`, `artikel_scopus`, `artikel_sinta`, `buku`, `jml_pkm`, `dana_pkm`, `dampak_pkm`, `jml_paten`, `jml_produk`, `skor_pengajaran`, `skor_penelitian`, `skor_publikasi`, `skor_pkm`, `skor_total`, `label_kinerja`, `status`) VALUES
('11039801', 'Prof. Dr. Dewi Juliah R., S.Si., M.Si.', 'Perempuan', 'Guru Besar', 'IV/e', 'FST', 'Statistika', 'UPBJJ Jakarta', 'S3', 'Statistika & Data Science', 2005, 4, 12, 'Konvensional & Daring', '92.50', 3, 2, 1, 485000, 12, 445, 28, 15, 4, 5, 125000, 'Tinggi', 3, 2, '90.00', '88.00', '92.00', '75.00', '92.20', 'Excellent', 'Aktif'),
('14068801', 'Didik Nurdyansah, S.Kom.', 'Laki-laki', 'Lektor', 'III/c', 'FHISIP', 'Ilmu Komputer', 'UPBJJ Surabaya', 'S2', 'Sistem Informasi', 2015, 3, 9, 'Daring', '80.50', 1, 0, 0, 75000, 4, 98, 8, 10, 1, 3, 45000, 'Rendah', 0, 0, '78.00', '55.00', '58.00', '68.00', '64.10', 'Average', 'Aktif'),
('15027001', 'Prof. Dr. Ahmad Basuki, M.T.', 'Laki-laki', 'Guru Besar', 'IV/e', 'FST', 'Teknik Informatika', 'UPBJJ Yogyakarta', 'S3', 'Rekayasa Perangkat Lunak', 1998, 4, 12, 'Konvensional', '93.50', 4, 3, 2, 720000, 18, 820, 42, 22, 7, 3, 110000, 'Tinggi', 6, 4, '93.00', '95.00', '96.00', '77.00', '95.10', 'Excellent', 'Aktif'),
('17048901', 'Dr. Rina Kartika, S.Pd., M.Pd.', 'Perempuan', 'Lektor Kepala', 'III/d', 'FKIP', 'PGSD', 'UPBJJ Jakarta', 'S3', 'Pendidikan Dasar', 2012, 3, 9, 'Daring', '89.50', 2, 1, 0, 185000, 7, 195, 12, 18, 3, 5, 90000, 'Sedang', 1, 1, '86.00', '74.00', '79.00', '85.00', '80.30', 'Good', 'Aktif'),
('18049601', 'Dina Marlina, S.E., M.M.', 'Perempuan', 'Asisten Ahli', 'III/b', 'FEKON', 'Manajemen', 'UPBJJ Denpasar', 'S2', 'Pemasaran Digital', 2021, 2, 6, 'Daring', '83.00', 1, 0, 0, 45000, 2, 38, 3, 7, 0, 2, 28000, 'Rendah', 0, 0, '74.00', '50.00', '53.00', '66.00', '58.90', 'Average', 'Aktif'),
('22038501', 'Dr. Sari Indah, S.Sos., M.Si.', 'Perempuan', 'Lektor', 'III/c', 'FISIP', 'Sosiologi', 'UPBJJ Semarang', 'S3', 'Sosiologi Pendidikan', 2013, 3, 9, 'Daring', '85.50', 2, 0, 0, 120000, 5, 140, 9, 11, 1, 4, 60000, 'Sedang', 0, 0, '82.00', '65.00', '70.00', '80.00', '72.80', 'Good', 'Aktif'),
('23057602', 'Dr. Pismia Sylvi, S.Si., M.Si.', 'Perempuan', 'Lektor Kepala', 'IV/a', 'FST', 'Statistika', 'UPBJJ Makassar', 'S3', 'Statistika Terapan', 2010, 3, 9, 'Daring', '88.00', 2, 1, 0, 210000, 8, 220, 15, 12, 2, 4, 85000, 'Sedang', 1, 1, '85.00', '72.00', '76.00', '80.00', '78.50', 'Good', 'Aktif'),
('25088301', 'Reza Firmansyah, S.Hum., M.Si.', 'Laki-laki', 'Lektor', 'III/d', 'FISIP', 'Komunikasi', 'UPBJJ Jakarta', 'S2', 'Jurnalistik & Media', 2014, 3, 9, 'Daring', '86.00', 2, 0, 0, 100000, 6, 160, 10, 13, 1, 3, 55000, 'Sedang', 1, 0, '83.00', '66.00', '72.00', '77.00', '74.10', 'Good', 'Aktif'),
('27069401', 'Putri Rahayu, S.Pd., M.Pd.', 'Perempuan', 'Asisten Ahli', 'III/a', 'FKIP', 'PGSD', 'UPBJJ Medan', 'S2', 'Pendidikan Anak Usia Dini', 2020, 2, 6, 'Daring', '84.00', 1, 0, 0, 40000, 1, 28, 2, 5, 0, 2, 25000, 'Rendah', 0, 0, '76.00', '48.00', '50.00', '68.00', '57.30', 'Average', 'Aktif'),
('29086603', 'Prof. Dr. Hendra Kusuma, M.Si.', 'Laki-laki', 'Guru Besar', 'IV/c', 'FEKON', 'Manajemen', 'UPBJJ Bandung', 'S3', 'Manajemen Keuangan', 2002, 4, 12, 'Konvensional & Daring', '90.00', 3, 2, 1, 540000, 13, 510, 30, 17, 5, 3, 100000, 'Tinggi', 4, 2, '89.00', '90.00', '91.00', '74.00', '90.50', 'Excellent', 'Aktif'),
('31059201', 'Fajar Nugroho, S.H., M.H.', 'Laki-laki', 'Asisten Ahli', 'III/b', 'FHISIP', 'Ilmu Hukum', 'UPBJJ Palembang', 'S2', 'Hukum Perdata', 2018, 2, 6, 'Daring', '82.00', 1, 0, 0, 50000, 2, 45, 4, 8, 0, 2, 30000, 'Rendah', 0, 0, '75.00', '52.00', '55.00', '65.00', '60.40', 'Average', 'Aktif'),
('4087201', 'Dr. Wahyu Santoso, S.Ak., M.Ak.', 'Laki-laki', 'Lektor Kepala', 'IV/b', 'FEKON', 'Akuntansi', 'UPBJJ Makassar', 'S3', 'Akuntansi Keuangan', 2008, 3, 9, 'Konvensional & Daring', '88.50', 2, 1, 0, 220000, 10, 360, 19, 16, 3, 4, 95000, 'Sedang', 2, 1, '86.00', '80.00', '83.00', '80.00', '82.70', 'Good', 'Aktif'),
('5097501', 'Prof. Dr. Bambang Sutrisno, M.Kom.', 'Laki-laki', 'Guru Besar', 'IV/d', 'FHISIP', 'Sistem Informasi', 'UPBJJ Surabaya', 'S3', 'Kecerdasan Buatan', 2000, 4, 12, 'Konvensional', '91.00', 3, 2, 2, 620000, 15, 680, 35, 20, 6, 4, 140000, 'Tinggi', 5, 3, '91.00', '92.00', '95.00', '78.00', '92.80', 'Excellent', 'Aktif'),
('8077801', 'Dr. Maya Sari, S.E., M.M.', 'Perempuan', 'Lektor Kepala', 'IV/a', 'FEKON', 'Akuntansi', 'UPBJJ Jakarta', 'S3', 'Akuntansi Manajemen', 2009, 3, 9, 'Daring', '87.00', 2, 1, 0, 200000, 9, 310, 18, 14, 2, 4, 80000, 'Sedang', 2, 1, '84.00', '78.00', '82.00', '79.00', '81.00', 'Good', 'Aktif'),
('9016901', 'Prof. Dr. Ir. Susanto W., M.T.', 'Laki-laki', 'Guru Besar', 'IV/e', 'FST', 'Teknik Lingkungan', 'UPBJJ Bandung', 'S3', 'Teknologi Lingkungan', 1999, 4, 12, 'Konvensional', '92.00', 3, 2, 1, 580000, 14, 590, 32, 18, 5, 4, 130000, 'Tinggi', 5, 3, '91.00', '91.00', '93.00', '76.00', '92.00', 'Excellent', 'Aktif');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa_admisi`
--

CREATE TABLE `mahasiswa_admisi` (
  `nim` varchar(20) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(50) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `provinsi_asal` varchar(50) DEFAULT NULL,
  `upbjj` varchar(50) DEFAULT NULL,
  `program_studi` varchar(50) DEFAULT NULL,
  `jenjang` varchar(10) DEFAULT NULL,
  `jalur_masuk` varchar(20) DEFAULT NULL,
  `tahun_masuk` int(11) DEFAULT NULL,
  `semester_masuk` varchar(10) DEFAULT NULL,
  `pendidikan_terakhir` varchar(20) DEFAULT NULL,
  `status_pekerjaan` varchar(20) DEFAULT NULL,
  `nama_instansi` varchar(100) DEFAULT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa_admisi`
--

INSERT INTO `mahasiswa_admisi` (`nim`, `nama_lengkap`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `provinsi_asal`, `upbjj`, `program_studi`, `jenjang`, `jalur_masuk`, `tahun_masuk`, `semester_masuk`, `pendidikan_terakhir`, `status_pekerjaan`, `nama_instansi`, `no_hp`, `email`) VALUES
('41100001', 'Ahmad Fauzi', 'Laki-laki', 'Jakarta', '1998-03-12', 'DKI Jakarta', 'UPBJJ Jakarta', 'Statistika', 'S1', 'Reguler', 2022, 'Ganjil', 'SMA', 'Bekerja', 'PT Telkom Indonesia', '81234567001', 'ahmad.fauzi@email.com'),
('41100002', 'Budi Santoso', 'Laki-laki', 'Surabaya', '1995-07-24', 'Jawa Timur', 'UPBJJ Surabaya', 'Manajemen', 'S1', 'Reguler', 2022, 'Ganjil', 'D3', 'Bekerja', 'CV Maju Jaya', '81234567002', 'budi.santoso@email.com'),
('41100003', 'Citra Dewi', 'Perempuan', 'Makassar', '1999-11-05', 'Sulawesi Selatan', 'UPBJJ Makassar', 'Statistika', 'S1', 'Beasiswa', 2022, 'Genap', 'SMA', 'Tidak Bekerja', '-', '81234567003', 'citra.dewi@email.com'),
('41100004', 'Dian Pratiwi', 'Perempuan', 'Medan', '1996-01-18', 'Sumatera Utara', 'UPBJJ Medan', 'Akuntansi', 'S1', 'Reguler', 2021, 'Ganjil', 'SMA', 'Bekerja', 'Koperasi Sejahtera', '81234567004', 'dian.pratiwi@email.com'),
('41100005', 'Eko Wijaya', 'Laki-laki', 'Bandung', '1997-09-30', 'Jawa Barat', 'UPBJJ Bandung', 'Ilmu Hukum', 'S1', 'Reguler', 2022, 'Ganjil', 'SMA', 'Bekerja', 'Polres Bandung', '81234567005', 'eko.wijaya@email.com'),
('41100006', 'Fitri Handayani', 'Perempuan', 'Jakarta', '1998-04-14', 'DKI Jakarta', 'UPBJJ Jakarta', 'Statistika', 'S1', 'Reguler', 2022, 'Genap', 'SMK', 'Bekerja', 'BPS Jakarta', '81234567006', 'fitri.h@email.com'),
('41100007', 'Gunawan Saputra', 'Laki-laki', 'Semarang', '2000-06-22', 'Jawa Tengah', 'UPBJJ Semarang', 'PGSD', 'S1', 'Reguler', 2023, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567007', 'gunawan.s@email.com'),
('41100008', 'Hana Putri', 'Perempuan', 'Denpasar', '1997-12-09', 'Bali', 'UPBJJ Denpasar', 'Manajemen', 'S1', 'Reguler', 2022, 'Ganjil', 'D3', 'Bekerja', 'Hotel Bali Indah', '81234567008', 'hana.putri@email.com'),
('41100009', 'Irfan Maulana', 'Laki-laki', 'Jakarta', '1999-08-17', 'DKI Jakarta', 'UPBJJ Jakarta', 'PGSD', 'S1', 'Reguler', 2022, 'Genap', 'SMA', 'Bekerja', 'SD Negeri 01 Jakarta', '81234567009', 'irfan.m@email.com'),
('41100010', 'Jasmine Rahma', 'Perempuan', 'Makassar', '1998-05-03', 'Sulawesi Selatan', 'UPBJJ Makassar', 'Akuntansi', 'S1', 'Beasiswa', 2022, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567010', 'jasmine.r@email.com'),
('41100011', 'Krisna Adi', 'Laki-laki', 'Yogyakarta', '1996-02-28', 'DI Yogyakarta', 'UPBJJ Yogyakarta', 'Manajemen', 'S1', 'Reguler', 2021, 'Ganjil', 'D3', 'Bekerja', 'Bank BRI Yogyakarta', '81234567011', 'krisna.adi@email.com'),
('41100012', 'Lestari Wulan', 'Perempuan', 'Surabaya', '1999-10-11', 'Jawa Timur', 'UPBJJ Surabaya', 'Statistika', 'S1', 'Reguler', 2023, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567012', 'lestari.w@email.com'),
('41100013', 'Muhammad Rizki', 'Laki-laki', 'Palembang', '1997-03-19', 'Sumatera Selatan', 'UPBJJ Palembang', 'Ilmu Hukum', 'S1', 'Reguler', 2022, 'Genap', 'SMA', 'Bekerja', 'Kejaksaan Palembang', '81234567013', 'm.rizki@email.com'),
('41100014', 'Nur Aini', 'Perempuan', 'Medan', '2000-07-07', 'Sumatera Utara', 'UPBJJ Medan', 'PGSD', 'S1', 'Beasiswa', 2023, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567014', 'nur.aini@email.com'),
('41100015', 'Oscar Pratama', 'Laki-laki', 'Bandung', '1995-11-25', 'Jawa Barat', 'UPBJJ Bandung', 'Manajemen', 'S1', 'Reguler', 2021, 'Ganjil', 'D3', 'Bekerja', 'PT Astra Internasional', '81234567015', 'oscar.p@email.com'),
('41100016', 'Putri Amalia', 'Perempuan', 'Jakarta', '1998-08-31', 'DKI Jakarta', 'UPBJJ Jakarta', 'Akuntansi', 'S1', 'Reguler', 2022, 'Genap', 'SMA', 'Bekerja', 'KAP Budi & Rekan', '81234567016', 'putri.amalia@email.com'),
('41100017', 'Rafi Hidayat', 'Laki-laki', 'Makassar', '1999-01-15', 'Sulawesi Selatan', 'UPBJJ Makassar', 'Statistika', 'S1', 'Reguler', 2023, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567017', 'rafi.h@email.com'),
('41100018', 'Sinta Lestari', 'Perempuan', 'Semarang', '1996-06-04', 'Jawa Tengah', 'UPBJJ Semarang', 'Manajemen', 'S1', 'Reguler', 2021, 'Genap', 'D3', 'Bekerja', 'PT Semen Indonesia', '81234567018', 'sinta.l@email.com'),
('41100019', 'Tri Wahyudi', 'Laki-laki', 'Surabaya', '1997-04-21', 'Jawa Timur', 'UPBJJ Surabaya', 'PGSD', 'S1', 'Reguler', 2022, 'Ganjil', 'SMA', 'Bekerja', 'SDN 05 Surabaya', '81234567019', 'tri.w@email.com'),
('41100020', 'Uswatun Hasanah', 'Perempuan', 'Bandung', '2000-09-08', 'Jawa Barat', 'UPBJJ Bandung', 'Akuntansi', 'S1', 'Beasiswa', 2023, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567020', 'uswatun.h@email.com'),
('41100021', 'Vino Ramadhan', 'Laki-laki', 'Palembang', '1998-12-17', 'Sumatera Selatan', 'UPBJJ Palembang', 'Ilmu Hukum', 'S1', 'Reguler', 2022, 'Genap', 'SMA', 'Bekerja', 'LBH Palembang', '81234567021', 'vino.r@email.com'),
('41100022', 'Widya Astuti', 'Perempuan', 'Denpasar', '1999-03-26', 'Bali', 'UPBJJ Denpasar', 'Statistika', 'S1', 'Reguler', 2022, 'Ganjil', 'SMA', 'Bekerja', 'BPS Bali', '81234567022', 'widya.a@email.com'),
('41100023', 'Xaverius Budi', 'Laki-laki', 'Medan', '1996-08-14', 'Sumatera Utara', 'UPBJJ Medan', 'Manajemen', 'S1', 'Reguler', 2021, 'Ganjil', 'D3', 'Bekerja', 'PT Unilever Medan', '81234567023', 'xaverius.b@email.com'),
('41100024', 'Yuliana Sari', 'Perempuan', 'Yogyakarta', '1998-02-01', 'DI Yogyakarta', 'UPBJJ Yogyakarta', 'PGSD', 'S1', 'Reguler', 2022, 'Genap', 'SMA', 'Bekerja', 'SDN Godean Yogyakarta', '81234567024', 'yuliana.s@email.com'),
('41100025', 'Zainudin Hamid', 'Laki-laki', 'Makassar', '1997-07-11', 'Sulawesi Selatan', 'UPBJJ Makassar', 'Akuntansi', 'S1', 'Beasiswa', 2022, 'Ganjil', 'SMA', 'Tidak Bekerja', '-', '81234567025', 'zainudin.h@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa_akademik`
--

CREATE TABLE `mahasiswa_akademik` (
  `nim` varchar(20) NOT NULL,
  `nama_lengkap` varchar(100) DEFAULT NULL,
  `program_studi` varchar(50) DEFAULT NULL,
  `upbjj` varchar(50) DEFAULT NULL,
  `semester_aktif` int(11) DEFAULT NULL,
  `sks_ditempuh` int(11) DEFAULT NULL,
  `sks_lulus` int(11) DEFAULT NULL,
  `ips` decimal(4,2) DEFAULT NULL,
  `ipk` decimal(4,2) DEFAULT NULL,
  `jml_nilai_a` int(11) DEFAULT NULL,
  `jml_nilai_b` int(11) DEFAULT NULL,
  `jml_nilai_c` int(11) DEFAULT NULL,
  `jml_nilai_d` int(11) DEFAULT NULL,
  `jml_nilai_e` int(11) DEFAULT NULL,
  `status_akademik` varchar(20) DEFAULT NULL,
  `login_lms` int(11) DEFAULT NULL,
  `tugas_dikumpul` int(11) DEFAULT NULL,
  `tugas_total` int(11) DEFAULT NULL,
  `partisipasi_lms` decimal(5,2) DEFAULT NULL,
  `prediksi_kelulusan` varchar(20) DEFAULT NULL,
  `skor_counterfactual` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa_akademik`
--

INSERT INTO `mahasiswa_akademik` (`nim`, `nama_lengkap`, `program_studi`, `upbjj`, `semester_aktif`, `sks_ditempuh`, `sks_lulus`, `ips`, `ipk`, `jml_nilai_a`, `jml_nilai_b`, `jml_nilai_c`, `jml_nilai_d`, `jml_nilai_e`, `status_akademik`, `login_lms`, `tugas_dikumpul`, `tugas_total`, `partisipasi_lms`, `prediksi_kelulusan`, `skor_counterfactual`) VALUES
('41100001', 'Ahmad Fauzi', 'Statistika', 'UPBJJ Jakarta', 7, 112, 110, '3.80', '3.72', 18, 10, 2, 0, 0, 'Aktif', 28, 14, 15, '87.00', 'Lulus', '91.20'),
('41100002', 'Budi Santoso', 'Manajemen', 'UPBJJ Surabaya', 7, 90, 78, '2.30', '2.45', 6, 12, 8, 4, 2, 'Aktif', 10, 6, 15, '42.00', 'Berisiko', '48.70'),
('41100003', 'Citra Dewi', 'Statistika', 'UPBJJ Makassar', 7, 116, 116, '3.95', '3.91', 21, 9, 0, 0, 0, 'Aktif', 30, 15, 15, '95.00', 'Lulus', '98.50'),
('41100004', 'Dian Pratiwi', 'Akuntansi', 'UPBJJ Medan', 9, 130, 112, '2.00', '2.10', 4, 8, 10, 6, 4, 'Cuti', 4, 3, 15, '18.00', 'Berisiko', '32.10'),
('41100005', 'Eko Wijaya', 'Ilmu Hukum', 'UPBJJ Bandung', 7, 108, 104, '3.60', '3.55', 14, 12, 4, 0, 0, 'Aktif', 22, 12, 15, '78.00', 'Lulus', '83.40'),
('41100006', 'Fitri Handayani', 'Statistika', 'UPBJJ Jakarta', 7, 100, 96, '3.15', '3.20', 10, 14, 6, 0, 0, 'Aktif', 18, 10, 15, '65.00', 'Lulus', '74.60'),
('41100007', 'Gunawan Saputra', 'PGSD', 'UPBJJ Semarang', 5, 72, 60, '1.70', '1.85', 2, 5, 8, 9, 6, 'Aktif', 8, 5, 15, '30.00', 'DO', '22.30'),
('41100008', 'Hana Putri', 'Manajemen', 'UPBJJ Denpasar', 7, 110, 108, '3.70', '3.67', 16, 12, 2, 0, 0, 'Aktif', 26, 14, 15, '88.00', 'Lulus', '90.80'),
('41100009', 'Irfan Maulana', 'PGSD', 'UPBJJ Jakarta', 7, 98, 90, '2.85', '2.90', 8, 12, 8, 2, 0, 'Aktif', 16, 9, 15, '55.00', 'Lulus', '68.90'),
('41100010', 'Jasmine Rahma', 'Akuntansi', 'UPBJJ Makassar', 7, 104, 100, '3.40', '3.44', 12, 13, 5, 0, 0, 'Aktif', 20, 11, 15, '72.00', 'Lulus', '79.30'),
('41100011', 'Krisna Adi', 'Manajemen', 'UPBJJ Yogyakarta', 9, 140, 132, '3.20', '3.28', 11, 15, 6, 0, 0, 'Aktif', 24, 13, 15, '83.00', 'Lulus', '86.20'),
('41100012', 'Lestari Wulan', 'Statistika', 'UPBJJ Surabaya', 5, 74, 70, '3.50', '3.48', 13, 10, 3, 0, 0, 'Aktif', 25, 13, 15, '85.00', 'Lulus', '88.10'),
('41100013', 'Muhammad Rizki', 'Ilmu Hukum', 'UPBJJ Palembang', 7, 102, 95, '2.95', '3.02', 9, 11, 7, 1, 0, 'Aktif', 17, 10, 15, '60.00', 'Lulus', '72.40'),
('41100014', 'Nur Aini', 'PGSD', 'UPBJJ Medan', 5, 70, 68, '3.65', '3.62', 14, 10, 2, 0, 0, 'Aktif', 27, 14, 15, '90.00', 'Lulus', '93.60'),
('41100015', 'Oscar Pratama', 'Manajemen', 'UPBJJ Bandung', 9, 144, 138, '3.10', '3.15', 10, 16, 6, 0, 0, 'Aktif', 23, 12, 15, '80.00', 'Lulus', '84.70'),
('41100016', 'Putri Amalia', 'Akuntansi', 'UPBJJ Jakarta', 7, 106, 100, '3.45', '3.50', 13, 12, 5, 0, 0, 'Aktif', 21, 12, 15, '75.00', 'Lulus', '81.90'),
('41100017', 'Rafi Hidayat', 'Statistika', 'UPBJJ Makassar', 5, 68, 60, '2.60', '2.72', 7, 10, 8, 3, 0, 'Aktif', 13, 8, 15, '48.00', 'Berisiko', '55.30'),
('41100018', 'Sinta Lestari', 'Manajemen', 'UPBJJ Semarang', 9, 138, 130, '3.05', '3.10', 9, 15, 8, 0, 0, 'Aktif', 19, 11, 15, '70.00', 'Lulus', '77.80'),
('41100019', 'Tri Wahyudi', 'PGSD', 'UPBJJ Surabaya', 7, 100, 92, '2.75', '2.80', 7, 11, 9, 2, 0, 'Aktif', 15, 9, 15, '58.00', 'Berisiko', '62.40'),
('41100020', 'Uswatun Hasanah', 'Akuntansi', 'UPBJJ Bandung', 5, 66, 64, '3.75', '3.70', 15, 9, 2, 0, 0, 'Aktif', 29, 14, 15, '92.00', 'Lulus', '95.10'),
('41100021', 'Vino Ramadhan', 'Ilmu Hukum', 'UPBJJ Palembang', 7, 98, 88, '2.50', '2.60', 5, 10, 10, 4, 1, 'Aktif', 11, 7, 15, '45.00', 'Berisiko', '51.60'),
('41100022', 'Widya Astuti', 'Statistika', 'UPBJJ Denpasar', 7, 108, 104, '3.55', '3.58', 14, 11, 3, 0, 0, 'Aktif', 22, 12, 15, '78.00', 'Lulus', '82.70'),
('41100023', 'Xaverius Budi', 'Manajemen', 'UPBJJ Medan', 9, 142, 136, '3.25', '3.30', 11, 14, 7, 0, 0, 'Aktif', 20, 12, 15, '73.00', 'Lulus', '80.50'),
('41100024', 'Yuliana Sari', 'PGSD', 'UPBJJ Yogyakarta', 7, 104, 98, '3.30', '3.35', 12, 12, 4, 0, 0, 'Aktif', 24, 13, 15, '82.00', 'Lulus', '85.90'),
('41100025', 'Zainudin Hamid', 'Akuntansi', 'UPBJJ Makassar', 7, 100, 94, '3.10', '3.18', 10, 13, 6, 1, 0, 'Aktif', 18, 11, 15, '66.00', 'Lulus', '75.20');

-- --------------------------------------------------------

--
-- Table structure for table `tendik`
--

CREATE TABLE `tendik` (
  `nip` varchar(25) NOT NULL,
  `nama_lengkap` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(50) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `pendidikan_terakhir` varchar(10) DEFAULT NULL,
  `bidang_studi` varchar(100) DEFAULT NULL,
  `jabatan` varchar(100) DEFAULT NULL,
  `jenis_jabatan` varchar(30) DEFAULT NULL,
  `pangkat` varchar(20) DEFAULT NULL,
  `unit_kerja` varchar(100) DEFAULT NULL,
  `upbjj` varchar(50) DEFAULT NULL,
  `status_kepegawaian` varchar(20) DEFAULT NULL,
  `tahun_masuk` int(11) DEFAULT NULL,
  `masa_kerja` int(11) DEFAULT NULL,
  `tugas_selesai` int(11) DEFAULT NULL,
  `tugas_total` int(11) DEFAULT NULL,
  `pct_tugas` decimal(5,2) DEFAULT NULL,
  `ketepatan_waktu` decimal(5,2) DEFAULT NULL,
  `tingkat_kehadiran` decimal(5,2) DEFAULT NULL,
  `jml_pelatihan` int(11) DEFAULT NULL,
  `jml_sertifikasi` int(11) DEFAULT NULL,
  `pelatihan_terakhir` varchar(100) DEFAULT NULL,
  `tahun_pelatihan` int(11) DEFAULT NULL,
  `jml_layanan` int(11) DEFAULT NULL,
  `waktu_respons` decimal(5,2) DEFAULT NULL,
  `indeks_kepuasan` decimal(3,2) DEFAULT NULL,
  `jml_komplain` int(11) DEFAULT NULL,
  `komplain_selesai` int(11) DEFAULT NULL,
  `skor_kinerja` decimal(5,2) DEFAULT NULL,
  `label_kinerja` varchar(20) DEFAULT NULL,
  `status_aktif` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tendik`
--

INSERT INTO `tendik` (`nip`, `nama_lengkap`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `pendidikan_terakhir`, `bidang_studi`, `jabatan`, `jenis_jabatan`, `pangkat`, `unit_kerja`, `upbjj`, `status_kepegawaian`, `tahun_masuk`, `masa_kerja`, `tugas_selesai`, `tugas_total`, `pct_tugas`, `ketepatan_waktu`, `tingkat_kehadiran`, `jml_pelatihan`, `jml_sertifikasi`, `pelatihan_terakhir`, `tahun_pelatihan`, `jml_layanan`, `waktu_respons`, `indeks_kepuasan`, `jml_komplain`, `komplain_selesai`, `skor_kinerja`, `label_kinerja`, `status_aktif`) VALUES
('198211102005011017', 'Qodir Mahmud', 'Laki-laki', 'Jakarta', '1982-11-10', 'S3', 'Manajemen Pendidikan', 'Kepala Biro Akademik & Kemahasiswaan', 'Struktural', 'IV/c', 'Biro Akademik', 'UPBJJ Jakarta', 'PNS', 2005, 21, 30, 30, '100.00', '100.00', '100.00', 10, 6, 'Transformasi Digital Pendidikan', 2025, 480, '0.90', '4.90', 2, 2, '97.30', 'Excellent', 'Aktif'),
('198412302006011009', 'Ibnu Santoso', 'Laki-laki', 'Palembang', '1984-12-30', 'S2', 'Hukum', 'Kepala Bagian Hukum & Tata Laksana', 'Struktural', 'IV/b', 'Biro Hukum', 'UPBJJ Palembang', 'PNS', 2006, 20, 30, 30, '100.00', '100.00', '100.00', 9, 5, 'Hukum Administrasi Negara', 2025, 290, '1.00', '4.80', 3, 3, '95.20', 'Excellent', 'Aktif'),
('198501012010011001', 'Agus Priyanto', 'Laki-laki', 'Jakarta', '1985-01-01', 'S1', 'Administrasi Negara', 'Kepala Sub Bagian Akademik', 'Struktural', 'III/d', 'Biro Akademik', 'UPBJJ Jakarta', 'PNS', 2010, 16, 28, 30, '93.30', '95.00', '98.00', 6, 3, 'Manajemen Arsip Digital', 2025, 320, '1.50', '4.60', 5, 5, '91.50', 'Excellent', 'Aktif'),
('198506182007011013', 'Mardi Santoso', 'Laki-laki', 'Medan', '1985-06-18', 'S2', 'Perencanaan', 'Kepala Sub Bagian Perencanaan', 'Struktural', 'IV/a', 'Biro Perencanaan', 'UPBJJ Medan', 'PNS', 2007, 19, 28, 30, '93.30', '95.00', '98.50', 7, 4, 'Perencanaan Anggaran Berbasis Kinerja', 2025, 260, '1.40', '4.60', 5, 5, '90.10', 'Excellent', 'Aktif'),
('198610052008011005', 'Edy Kurniawan', 'Laki-laki', 'Surabaya', '1986-10-05', 'S2', 'Manajemen SDM', 'Kepala Sub Bagian Kepegawaian', 'Struktural', 'IV/a', 'Biro SDM & Umum', 'UPBJJ Surabaya', 'PNS', 2008, 18, 29, 30, '96.70', '97.00', '99.00', 8, 4, 'Manajemen Kinerja ASN', 2025, 410, '1.20', '4.70', 4, 4, '93.80', 'Excellent', 'Aktif'),
('198701252009011015', 'Oky Setiawan', 'Laki-laki', 'Makassar', '1987-01-25', 'S1', 'Teknik Informatika', 'Staf Sistem Jaringan & Server', 'Fungsional Umum', 'III/c', 'Pusat Teknologi Informasi', 'UPBJJ Makassar', 'PNS', 2009, 17, 25, 28, '89.30', '91.00', '97.50', 6, 3, 'Administrasi Sistem Linux', 2025, 170, '1.10', '4.50', 3, 3, '85.90', 'Excellent', 'Aktif'),
('198708122011011007', 'Galih Prasetyo', 'Laki-laki', 'Yogyakarta', '1987-08-12', 'D3', 'Perpustakaan', 'Pustakawan Pertama', 'Fungsional Khusus', 'III/b', 'Perpustakaan UT', 'UPBJJ Yogyakarta', 'PNS', 2011, 15, 23, 28, '82.10', '85.00', '97.00', 5, 3, 'Digitalisasi Arsip & Repository', 2024, 180, '2.20', '4.20', 5, 4, '74.80', 'Good', 'Aktif'),
('198803202012011003', 'Cahyo Wibowo', 'Laki-laki', 'Semarang', '1988-03-20', 'D3', 'Teknik Komputer', 'Staf Teknologi Informasi', 'Fungsional Umum', 'II/d', 'Pusat Teknologi Informasi', 'UPBJJ Semarang', 'PNS', 2012, 14, 26, 30, '86.70', '90.00', '97.00', 5, 3, 'Keamanan Jaringan Komputer', 2025, 200, '1.00', '4.50', 3, 3, '82.10', 'Good', 'Aktif'),
('198903072014011011', 'Kevin Hartono', 'Laki-laki', 'Bandung', '1989-03-07', 'D3', 'Teknik Elektro', 'Teknisi Laboratorium', 'Fungsional Khusus', 'III/a', 'Pusat Lab & Praktikum', 'UPBJJ Bandung', 'PNS', 2014, 12, 24, 28, '85.70', '88.00', '96.00', 4, 2, 'Perawatan Peralatan Lab', 2023, 95, '2.80', '4.00', 4, 3, '72.10', 'Good', 'Aktif'),
('198904182013011019', 'Surya Atmaja', 'Laki-laki', 'Palembang', '1989-04-18', 'D3', 'Akuntansi', 'Staf Verifikasi Keuangan', 'Fungsional Umum', 'III/a', 'Biro Keuangan', 'UPBJJ Palembang', 'PNS', 2013, 13, 23, 28, '82.10', '85.00', '96.00', 4, 2, 'Akuntansi Pemerintahan', 2023, 140, '2.60', '4.10', 6, 5, '73.50', 'Good', 'Aktif'),
('199001282018012018', 'Rizka Utami', 'Perempuan', 'Bandung', '1990-01-28', 'S1', 'Administrasi Bisnis', 'Staf Layanan Mahasiswa', 'Fungsional Umum', 'III/b', 'Biro Kemahasiswaan', 'UPBJJ Bandung', 'PNS', 2018, 8, 26, 30, '86.70', '89.00', '96.50', 4, 2, 'Manajemen Layanan Pelanggan', 2024, 420, '1.70', '4.50', 7, 7, '81.30', 'Good', 'Aktif'),
('199002152015012002', 'Bela Setyawati', 'Perempuan', 'Bogor', '1990-02-15', 'S1', 'Manajemen', 'Staf Administrasi Kemahasiswaan', 'Fungsional Umum', 'III/a', 'Biro Kemahasiswaan', 'UPBJJ Bandung', 'PNS', 2015, 11, 24, 28, '85.70', '88.00', '96.00', 4, 2, 'Pelayanan Prima', 2024, 280, '2.00', '4.30', 8, 7, '78.40', 'Good', 'Aktif'),
('199104112016012010', 'Julita Sari', 'Perempuan', 'Jakarta', '1991-04-11', 'S1', 'Psikologi', 'Staf Konseling & Kemahasiswaan', 'Fungsional Umum', 'III/b', 'Biro Kemahasiswaan', 'UPBJJ Jakarta', 'PNS', 2016, 10, 26, 30, '86.70', '89.00', '97.50', 5, 3, 'Konseling Pendidikan Jarak Jauh', 2024, 380, '1.60', '4.50', 6, 6, '83.70', 'Good', 'Aktif'),
('199203182017012006', 'Fitria Ningsih', 'Perempuan', 'Makassar', '1992-03-18', 'S1', 'Ilmu Komunikasi', 'Staf Humas & Protokol', 'Fungsional Umum', 'III/b', 'Biro Humas', 'UPBJJ Makassar', 'PNS', 2017, 9, 25, 30, '83.30', '86.00', '96.50', 4, 2, 'Komunikasi Publik & Media Sosial', 2024, 340, '1.80', '4.40', 7, 7, '79.60', 'Good', 'Aktif'),
('199310042019012014', 'Nina Rahayu', 'Perempuan', 'Surabaya', '1993-10-04', 'S1', 'Statistika', 'Staf Analisis Data & Pelaporan', 'Fungsional Umum', 'III/a', 'Pusat Data & Informasi', 'UPBJJ Surabaya', 'PNS', 2019, 7, 27, 30, '90.00', '92.00', '97.00', 4, 2, 'Analisis Data & Visualisasi', 2024, 185, '1.90', '4.40', 4, 4, '84.50', 'Good', 'Aktif'),
('199412162023012016', 'Prita Maharani', 'Perempuan', 'Yogyakarta', '1994-12-16', 'S1', 'Manajemen', 'Staf Pengadaan Barang & Jasa', 'Fungsional Umum', 'II/d', 'Biro Umum', 'UPBJJ Yogyakarta', 'CPNS', 2023, 3, 18, 28, '64.30', '68.00', '92.00', 1, 0, 'Pengadaan Barang & Jasa Pemerintah', 2023, 100, '3.20', '3.70', 12, 9, '55.40', 'Average', 'Aktif'),
('199507102020012004', 'Desi Rahmawati', 'Perempuan', 'Medan', '1995-07-10', 'S1', 'Akuntansi', 'Staf Keuangan', 'Fungsional Umum', 'III/a', 'Biro Keuangan', 'UPBJJ Medan', 'PNS', 2020, 6, 22, 28, '78.60', '82.00', '95.00', 2, 1, 'Pengelolaan Keuangan Negara', 2023, 150, '2.50', '4.10', 6, 5, '68.30', 'Average', 'Aktif'),
('199609252021012008', 'Hani Permata', 'Perempuan', 'Denpasar', '1996-09-25', 'S1', 'Administrasi Publik', 'Staf Administrasi Umum', 'Fungsional Umum', 'II/d', 'Biro Umum', 'UPBJJ Denpasar', 'CPNS', 2021, 5, 20, 28, '71.40', '75.00', '94.00', 2, 1, 'Tata Kelola Administrasi Perkantoran', 2023, 120, '3.00', '3.90', 9, 7, '61.20', 'Average', 'Aktif'),
('199706302022012020', 'Tiara Novita', 'Perempuan', 'Denpasar', '1997-06-30', 'S1', 'Desain Komunikasi Visual', 'Staf Desainer Grafis & Media', 'Fungsional Umum', 'II/d', 'Pusat eLearning UT', 'UPBJJ Denpasar', 'CPNS', 2022, 4, 21, 28, '75.00', '78.00', '94.50', 2, 1, 'Desain Konten Interaktif E-Learning', 2024, 230, '2.10', '4.20', 8, 7, '65.70', 'Average', 'Aktif'),
('199808202022012012', 'Lia Amalia', 'Perempuan', 'Semarang', '1998-08-20', 'S1', 'Sistem Informasi', 'Staf Pengembang E-Learning', 'Fungsional Umum', 'II/d', 'Pusat eLearning UT', 'UPBJJ Semarang', 'CPNS', 2022, 4, 19, 28, '67.90', '70.00', '93.00', 2, 1, 'Pengembangan Konten Digital', 2024, 210, '2.40', '4.00', 10, 8, '59.80', 'Average', 'Aktif');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'admin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `username`, `password`, `role`, `created_at`) VALUES
(1, 'Administrator', 'admin', 'admin123', 'admin', '2026-06-03 02:44:15'),
(2, 'Dewi Juliah R.', 'dewi', 'dewi123', 'dosen', '2026-06-03 02:44:15'),
(3, 'Operator UT', 'operator', 'operator123', 'operator', '2026-06-03 02:44:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aktivitas_lms`
--
ALTER TABLE `aktivitas_lms`
  ADD PRIMARY KEY (`id_log`),
  ADD KEY `nim` (`nim`);

--
-- Indexes for table `dosen_tutor`
--
ALTER TABLE `dosen_tutor`
  ADD PRIMARY KEY (`nidn`);

--
-- Indexes for table `mahasiswa_admisi`
--
ALTER TABLE `mahasiswa_admisi`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `mahasiswa_akademik`
--
ALTER TABLE `mahasiswa_akademik`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `tendik`
--
ALTER TABLE `tendik`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aktivitas_lms`
--
ALTER TABLE `aktivitas_lms`
  ADD CONSTRAINT `aktivitas_lms_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa_admisi` (`nim`);

--
-- Constraints for table `mahasiswa_akademik`
--
ALTER TABLE `mahasiswa_akademik`
  ADD CONSTRAINT `mahasiswa_akademik_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa_admisi` (`nim`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
