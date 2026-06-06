// src/components/SimulasiModal.jsx

function Badge({ text }) {
  const map = {
    Lulus: { bg: "#d1fae5", color: "#059669" },
    Berisiko: { bg: "#fef3c7", color: "#d97706" },
    DO: { bg: "#fee2e2", color: "#dc2626" },
    "Sangat Tinggi": { bg: "#fee2e2", color: "#dc2626" },
    Tinggi: { bg: "#fef3c7", color: "#d97706" },
    Sedang: { bg: "#eff6ff", color: "#2563eb" },
  };
  const s = map[text] || { bg: "#e2e8f0", color: "#475569" };
  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        borderRadius: "20px",
        padding: "2px 10px",
        fontSize: "11px",
        fontWeight: 700,
      }}
    >
      {text}
    </span>
  );
}

function SkorBar({ sebelum, sesudah }) {
  return (
    <div style={{ marginTop: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
        <span>
          Sebelum: <strong style={{ color: "#dc2626" }}>{sebelum}</strong>
        </span>
        <span>
          Sesudah: <strong style={{ color: "#059669" }}>{sesudah}</strong>
        </span>
      </div>
      <div style={{ position: "relative", height: "8px", background: "#e2e8f0", borderRadius: "99px", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${sebelum}%`, background: "#dc2626", borderRadius: "99px" }} />
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${sesudah}%`, background: "#059669", borderRadius: "99px", opacity: 0.4 }} />
      </div>
      <div style={{ textAlign: "right", fontSize: "11px", color: "#059669", fontWeight: 700, marginTop: "3px" }}>+{(sesudah - sebelum).toFixed(1)} poin</div>
    </div>
  );
}

export default function SimulasiModal({ data, onClose }) {
  if (!data) return null;

  const { mahasiswa: mhs, faktor_risiko, skenario } = data;

  return (
    /* Overlay */
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "780px",
          maxHeight: "88vh",
          overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        {/* Header Modal */}
        <div
          style={{
            background: "linear-gradient(135deg,#0f2167,#1e40af)",
            borderRadius: "16px 16px 0 0",
            padding: "20px 24px",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div style={{ fontSize: "11px", opacity: 0.6, marginBottom: "4px" }}>✨ Analisis Counterfactual</div>
            <div style={{ fontSize: "18px", fontWeight: 800 }}>{mhs.nama}</div>
            <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "3px" }}>
              {mhs.nim} · {mhs.prodi} · {mhs.upbjj}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              borderRadius: "8px",
              padding: "6px 12px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            ✕ Tutup
          </button>
        </div>

        <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Kondisi Saat Ini */}
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>📊 Kondisi Saat Ini</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
              {[
                ["IPK", mhs.ipk, mhs.ipk >= 3.0 ? "#059669" : "#dc2626"],
                ["Partisipasi LMS", mhs.lms + "%", mhs.lms >= 70 ? "#059669" : "#dc2626"],
                ["Skor CF", mhs.skor_cf, mhs.skor_cf >= 70 ? "#059669" : "#dc2626"],
                ["Prediksi", mhs.prediksi, mhs.prediksi === "Lulus" ? "#059669" : "#dc2626"],
              ].map(([label, val, color]) => (
                <div
                  key={label}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "10px",
                    padding: "12px",
                    textAlign: "center",
                    border: "0.5px solid #e2e8f0",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color }}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Faktor Risiko */}
          {faktor_risiko.length > 0 && (
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>⚠️ Faktor Risiko Teridentifikasi</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {faktor_risiko.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff8f0",
                      border: "0.5px solid #fed7aa",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 700, color: "#92400e" }}>{r.faktor}</span>
                        <Badge text={r.dampak} />
                      </div>
                      <div style={{ fontSize: "12px", color: "#78350f" }}>
                        Nilai saat ini: <strong>{r.nilai}</strong> → Target: <strong>{r.target}</strong>
                      </div>
                      <div style={{ fontSize: "12px", color: "#92400e", marginTop: "4px" }}>💡 {r.aksi}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skenario Intervensi */}
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>🚀 Skenario Intervensi</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {skenario.map((s, i) => (
                <div
                  key={i}
                  style={{
                    border: `0.5px solid ${i === 2 ? "#6d28d9" : "#e2e8f0"}`,
                    borderRadius: "12px",
                    padding: "16px",
                    background: i === 2 ? "#faf5ff" : "#fff",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {i === 2 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "12px",
                        background: "#7c3aed",
                        color: "#fff",
                        fontSize: "10px",
                        fontWeight: 700,
                        borderRadius: "20px",
                        padding: "2px 10px",
                      }}
                    >
                      ⭐ REKOMENDASI UTAMA
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>{s.nama}</div>
                      <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>{s.deskripsi}</div>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "10px", color: "#94a3b8" }}>Prediksi Baru</div>
                        <Badge text={s.prediksi_baru} />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "10px", color: "#94a3b8" }}>IPK Est.</div>
                        <div style={{ fontSize: "16px", fontWeight: 800, color: "#059669" }}>{s.ipk_sesudah}</div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar Skor */}
                  <SkorBar sebelum={s.skor_sebelum} sesudah={s.skor_sesudah} />

                  {/* Langkah Aksi */}
                  <div style={{ marginTop: "10px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>Langkah Aksi:</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {s.langkah.map((l, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                          <div
                            style={{
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                              background: i === 2 ? "#7c3aed" : "#0ea5e9",
                              color: "#fff",
                              fontSize: "10px",
                              fontWeight: 700,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "1px",
                            }}
                          >
                            {j + 1}
                          </div>
                          <span style={{ fontSize: "12px", color: "#374151", lineHeight: 1.5 }}>{l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              background: "#f0f9ff",
              border: "0.5px solid #bae6fd",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "12px",
              color: "#0369a1",
            }}
          >
            ℹ️ Hasil simulasi ini dihasilkan oleh model Machine Learning berbasis counterfactual. Skor dan prediksi bersifat estimasi untuk mendukung pengambilan keputusan akademik.
          </div>
        </div>
      </div>
    </div>
  );
}
