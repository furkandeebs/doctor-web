import { useState } from "react";

interface Question {
  id: number;
  name: string;
  category: string;
  question: string;
  answer?: string;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [form, setForm] = useState({
    name: "",
    category: "Genel",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.question) return;

    const newQuestion: Question = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      question: form.question,
    };

    setQuestions([newQuestion, ...questions]);
    setForm({ name: "", category: "Genel", question: "" });
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #3b82f6, #10b981)",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem",
      }}
    >
      {/* Sol: İçerik Alanı */}
      <div style={{ flex: 2, maxWidth: "800px" }}>
        {/* Soru Sorma Formu */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ color: "#0f4c81" }}>Soru Sor</h2>
          <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              style={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option>Genel</option>
              <option>Diyabet</option>
              <option>Hipertansiyon</option>
              <option>Hipotiroidi</option>
              <option>Anemi</option>
            </select>
            <textarea
              placeholder="Sorunuz..."
              value={form.question}
              onChange={(e) => setForm({ ...form, question: e.target.value })}
              style={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                minHeight: "100px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#10b981",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}
            >
              Gönder
            </button>
          </form>
        </div>

        {/* Soru-Cevap Alanı */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ color: "#0f4c81" }}>Sorular ve Cevaplar</h2>
          {questions.length === 0 ? (
            <p style={{ marginTop: "1rem" }}>Henüz soru yok.</p>
          ) : (
            <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
              {questions.map((q) => (
                <li
                  key={q.id}
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                  }}
                >
                  <p>
                    <strong>{q.name}</strong> ({q.category})
                  </p>
                  <p>{q.question}</p>
                  {q.answer ? (
                    <p style={{ color: "#10b981" }}>
                      <strong>Cevap:</strong> {q.answer}
                    </p>
                  ) : (
                    <p style={{ color: "#999" }}>Henüz cevaplanmadı.</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Sağ: Profil Kartı */}
      <div
        style={{
          flex: 1,
          background: "white",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
          maxHeight: "fit-content",
        }}
      >
        <img
          src="/doctor.jpg"
          alt="Dr. Furkan Derebaşı"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0f4c81" }}>
          Dr. Furkan Derebaşı
        </h1>
        <p>İç Hastalıkları / Dahiliye Uzmanı</p>
        <p>
          Bolu Abant İzzet Baysal Üniversitesi Tıp Fakültesi (2019) <br />
          İstanbul Eğitim ve Araştırma Hastanesi - İç Hastalıkları İhtisası
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a
            href="https://mhrs.gov.tr/vatandas/#/randevu-al"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#0f4c81",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            MHRS Üzerinden Randevu Al
          </a>
        </div>
      </div>
    </main>
  );
}
