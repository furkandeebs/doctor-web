import React from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: "#f0f9ff", minHeight: "100vh", padding: "2rem" }}>
      <section style={{ maxWidth: "600px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <img 
          src="/thumbnail_IMG_3341.jpg" 
          alt="Dr. Furkan Derebaşı" 
          style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", margin: "0 auto", display: "block" }}
        />
        <h1 style={{ textAlign: "center", marginTop: "1rem", color: "#0369a1" }}>Dr. Furkan Derebaşı</h1>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#555" }}>
          Bolu Abant İzzet Baysal Üniversitesi Tıp Fakültesi (2019)<br />
          İstanbul Eğitim ve Araştırma Hastanesi İç Hastalıkları İhtisası
        </p>
        <h2 style={{ marginTop: "2rem", color: "#065f46" }}>Klinik İlgi Alanları</h2>
        <ul>
          <li>Diyabet</li>
          <li>Hipertansiyon</li>
          <li>Hipotiroidi</li>
          <li>Anemi</li>
        </ul>
        <h2 style={{ marginTop: "2rem", color: "#065f46" }}>İletişim</h2>
        <p>📧 poliklinik@example.gov.tr</p>
        <a 
          href="https://mhrs.gov.tr/vatandas/#/Randevu"
          target="_blank"
          style={{ display: "inline-block", marginTop: "1rem", padding: "0.75rem 1.5rem", background: "#0284c7", color: "white", borderRadius: "8px", textDecoration: "none" }}
        >
          MHRS Üzerinden Randevu Al
        </a>
      </section>
    </main>
  );
}
