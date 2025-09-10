import { useRef, useState } from "react";

export default function App() {
  // --- language toggle (EN/JP) ---
  const [lang, setLang] = useState("en");
  const t = lang === "en"
    ? {
        tagline: "Data science • software • cute design",
        statement:
          "I build playful, fast products that help people plan, learn, and create.",
        cats: ["Finance", "Health", "Games", "Robotics/Eng", "Interests"],
      }
    : {
        tagline: "データサイエンス・ソフトウェア・かわいいデザイン",
        statement:
          "人々の計画・学習・創作を支える、楽しくて軽快なプロダクトを作っています。",
        cats: ["ファイナンス", "ヘルス", "ゲーム", "ロボット／工学", "興味"],
      };

  // --- smooth scroll target (white section) ---
  const whiteRef = useRef(null);
  const dropDown = () =>
    whiteRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main>
      {/* FIXED NAV (name + language switch) */}
      <header className="nav">
        <div className="brand">alex—portfolio</div>
        <button className="lang" onClick={() => setLang(lang === "en" ? "ja" : "en")}>
          {lang.toUpperCase()}
        </button>
      </header>

      {/* CREAM HERO */}
      <section className="section cream">
        <div className="wrap hero-grid">
          <div>
            <h1 className="signature">Alexandra Maxon</h1>
            <p className="tagline">{t.tagline}</p>

            {/* black arrow that scrolls down */}
            <button className="arrow-wrap" onClick={dropDown} aria-label="Scroll down">
              <span className="arrow" />
              <span className="mono">scroll</span>
            </button>
          </div>

          {/* Swap these with your real images in /public */}
          <img className="hero-img" src="/hero.jpg" alt="portrait or representative" />
        </div>
      </section>

      {/* WHITE SECTION (professional statement + category links) */}
      <section ref={whiteRef} className="section white">
        <div className="wrap two-col">
          <img className="headshot" src="/headshot.jpg" alt="professional headshot" />
          <div>
            <h2>Professional Statement</h2>
            <p>{t.statement}</p>

            <nav className="quick-links">
              <a href="/finance">→ {t.cats[0]}</a>
              <a href="/health">→ {t.cats[1]}</a>
              <a href="/games">→ {t.cats[2]}</a>
              <a href="/robotics">→ {t.cats[3]}</a>
              <a href="/interests">→ {t.cats[4]}</a>
            </nav>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Alexandra Maxon</footer>
    </main>
  );
}