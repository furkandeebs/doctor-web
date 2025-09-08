export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f9ff",
        padding: "0",
        margin: "0",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "3rem 2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src="/doctor.jpg"
            alt="Dr. Furkan Derebaşı"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
            }}
          />
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#0f4c81" }}>
            Dr. Furkan Derebaşı
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#444" }}>
            İç Hastalıkları Uzmanı
          </p>
        </div>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#0f4c81" }}>
            Eğitim ve Uzmanlık
          </h2>
          <ul style={{ color: "#333", marginTop: "0.5rem", lineHeight: "1.6" }}>
            <li>Bolu Abant İzzet Baysal Üniversitesi Tıp Fakültesi (2019)</li>
            <li>İstanbul Eğitim ve Araştırma Hastanesi - İç Hastalıkları İhtisası</li>
          </ul>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#0f4c81" }}>
            Klinik İlgi Alanları
          </h2>
          <p style={{ color: "#333", marginTop: "0.5rem", lineHeight: "1.6" }}>
            Diyabet, Hipertansiyon, Hipotiroidi, Anemi
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "600", color: "#0f4c81" }}>
            İletişim
          </h2>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:furkanderebasi@example.com"
              style={{ color: "#0f4c81", textDecoration: "none" }}
            >
              furkandeebs@gmail.com
            </a>
          </p>
        </section>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a
            href="https://mhrs.gov.tr/vatandas/#/randevu-al"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#0f4c81",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            MHRS Üzerinden Randevu Al
          </a>
          <p style={{ fontSize: "0.9rem", marginTop: "0.8rem", color: "#666" }}>
            MHRS’ye giriş yaptıktan sonra <br />
            <strong>Bayrampaşa Devlet Hastanesi</strong> üzerinden ismimi seçerek
            randevu oluşturabilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
