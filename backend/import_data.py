import pandas as pd
import pymysql
from datetime import datetime

# ── KONEKSI KE DATABASE ──────────────────────────────────
conn = pymysql.connect(
    host     = 'localhost',
    user     = 'root',
    password = '',          # kosong karena XAMPP default tidak pakai password
    database = 'monev_ut',
    charset  = 'utf8mb4'
)
cursor = conn.cursor()

# ── PATH FOLDER DATA ─────────────────────────────────────
# Sesuaikan dengan lokasi folder DATA milikmu
DATA_PATH = r"D:\Project Dashboard\Counter Factual\DATA"

def clean(val):
    """Ubah NaN / NaT menjadi None agar aman dimasukkan ke MySQL"""
    if pd.isna(val):
        return None
    return val

def parse_date(val):
    """Ubah string tanggal menjadi format yang diterima MySQL"""
    if pd.isna(val):
        return None
    try:
        return pd.to_datetime(val).strftime('%Y-%m-%d')
    except:
        return None

print("🔄 Mulai import data...\n")

# ═══════════════════════════════════════════════════════
# 1. IMPORT mahasiswa_admisi
# ═══════════════════════════════════════════════════════
df1 = pd.read_excel(f"{DATA_PATH}/data_admisi_mahasiswa.xlsx",
                    sheet_name="Data Admisi Mahasiswa", header=1)

sql1 = """INSERT IGNORE INTO mahasiswa_admisi VALUES
          (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""

for _, row in df1.iterrows():
    cursor.execute(sql1, (
        clean(row.iloc[0]),  # nim
        clean(row.iloc[1]),  # nama_lengkap
        clean(row.iloc[2]),  # jenis_kelamin
        clean(row.iloc[3]),  # tempat_lahir
        parse_date(row.iloc[4]),  # tanggal_lahir
        clean(row.iloc[5]),  # provinsi_asal
        clean(row.iloc[6]),  # upbjj
        clean(row.iloc[7]),  # program_studi
        clean(row.iloc[8]),  # jenjang
        clean(row.iloc[9]),  # jalur_masuk
        clean(row.iloc[10]), # tahun_masuk
        clean(row.iloc[11]), # semester_masuk
        clean(row.iloc[12]), # pendidikan_terakhir
        clean(row.iloc[13]), # status_pekerjaan
        clean(row.iloc[14]), # nama_instansi
        clean(row.iloc[15]), # no_hp
        clean(row.iloc[16]), # email
    ))
conn.commit()
print(f"✅ mahasiswa_admisi    → {len(df1)} baris berhasil diimport")

# ═══════════════════════════════════════════════════════
# 2. IMPORT mahasiswa_akademik
# ═══════════════════════════════════════════════════════
df2 = pd.read_excel(f"{DATA_PATH}/data_akademik_mahasiswa.xlsx",
                    sheet_name="Data Akademik Mahasiswa", header=1)

sql2 = """INSERT IGNORE INTO mahasiswa_akademik VALUES
          (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""

for _, row in df2.iterrows():
    cursor.execute(sql2, (
        clean(row.iloc[0]),  # nim
        clean(row.iloc[1]),  # nama_lengkap
        clean(row.iloc[2]),  # program_studi
        clean(row.iloc[3]),  # upbjj
        clean(row.iloc[4]),  # semester_aktif
        clean(row.iloc[5]),  # sks_ditempuh
        clean(row.iloc[6]),  # sks_lulus
        clean(row.iloc[7]),  # ips
        clean(row.iloc[8]),  # ipk
        clean(row.iloc[9]),  # jml_nilai_a
        clean(row.iloc[10]), # jml_nilai_b
        clean(row.iloc[11]), # jml_nilai_c
        clean(row.iloc[12]), # jml_nilai_d
        clean(row.iloc[13]), # jml_nilai_e
        clean(row.iloc[14]), # status_akademik
        clean(row.iloc[15]), # login_lms
        clean(row.iloc[16]), # tugas_dikumpul
        clean(row.iloc[17]), # tugas_total
        clean(row.iloc[18]), # partisipasi_lms
        clean(row.iloc[19]), # prediksi_kelulusan
        clean(row.iloc[20]), # skor_counterfactual
    ))
conn.commit()
print(f"✅ mahasiswa_akademik  → {len(df2)} baris berhasil diimport")

# ═══════════════════════════════════════════════════════
# 3. IMPORT aktivitas_lms
# ═══════════════════════════════════════════════════════
df3 = pd.read_excel(f"{DATA_PATH}/data_aktivitas_lms.xlsx",
                    sheet_name="Data Aktivitas LMS", header=1)

sql3 = """INSERT IGNORE INTO aktivitas_lms VALUES
          (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""

for _, row in df3.iterrows():
    cursor.execute(sql3, (
        clean(row.iloc[0]),  # id_log
        clean(row.iloc[1]),  # nim
        clean(row.iloc[2]),  # nama_lengkap
        clean(row.iloc[3]),  # program_studi
        clean(row.iloc[4]),  # upbjj
        clean(row.iloc[5]),  # bulan
        clean(row.iloc[6]),  # tahun
        clean(row.iloc[7]),  # jml_login
        clean(row.iloc[8]),  # durasi_akses
        clean(row.iloc[9]),  # jml_akses_materi
        clean(row.iloc[10]), # jml_diskusi_forum
        clean(row.iloc[11]), # jml_postingan
        clean(row.iloc[12]), # tugas_dikumpul
        clean(row.iloc[13]), # tugas_total
        clean(row.iloc[14]), # pct_tugas
        clean(row.iloc[15]), # jml_kuis
        clean(row.iloc[16]), # jml_kuis_total
        clean(row.iloc[17]), # nilai_rata_kuis
        clean(row.iloc[18]), # jml_video
        clean(row.iloc[19]), # durasi_video
        parse_date(row.iloc[20]), # terakhir_login
        clean(row.iloc[21]), # partisipasi_lms
        clean(row.iloc[22]), # kategori_partisipasi
    ))
conn.commit()
print(f"✅ aktivitas_lms       → {len(df3)} baris berhasil diimport")

# ═══════════════════════════════════════════════════════
# 4. IMPORT dosen_tutor
# ═══════════════════════════════════════════════════════
df4 = pd.read_excel(f"{DATA_PATH}/data_dosen_tutor.xlsx",
                    sheet_name="Data Dosen dan Tutor", header=1)

sql4 = """INSERT IGNORE INTO dosen_tutor VALUES
          (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,
           %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""

for _, row in df4.iterrows():
    cursor.execute(sql4, tuple(clean(row.iloc[i]) for i in range(36)))
conn.commit()
print(f"✅ dosen_tutor         → {len(df4)} baris berhasil diimport")

# ═══════════════════════════════════════════════════════
# 5. IMPORT tendik
# ═══════════════════════════════════════════════════════
df5 = pd.read_excel(f"{DATA_PATH}/data_tendik.xlsx",
                    sheet_name="Data Tendik", header=1)

sql5 = """INSERT IGNORE INTO tendik VALUES
          (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,
           %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""

for _, row in df5.iterrows():
    vals = list(tuple(clean(row.iloc[i]) for i in range(32)))
    vals[4] = parse_date(row.iloc[4])  # tanggal_lahir
    cursor.execute(sql5, vals)
conn.commit()
print(f"✅ tendik              → {len(df5)} baris berhasil diimport")

# ── SELESAI ──────────────────────────────────────────────
cursor.close()
conn.close()
print("\n🎉 Semua data berhasil masuk ke database monev_ut!")