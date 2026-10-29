import { ArrowUpRight } from "lucide-react";
import "./BackCover.css";

function BackCover() {
  return (
    <section className="back-cover-page">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <img
        className="back-cover-image"
        src="/images/back-cover/sports-back-cover.jpg"
        alt="Taita Taveta University Sports & Athletics"
      />

      {/* =====================================================
          IMAGE OVERLAY
      ===================================================== */}
      <div className="back-cover-overlay" />

      {/* =====================================================
          TOP BRANDING
      ===================================================== */}
      <header className="back-cover-header">
  <div className="back-cover-brand">
    <img
      src="/images/logo/TTU-LOGO.png"
      alt="Taita Taveta University logo"
      className="back-cover-logo"
    />

    <div className="back-cover-brand-text">
      <span>TAITA TAVETA UNIVERSITY</span>
      <strong>SPORTS & ATHLETICS</strong>
    </div>
  </div>

  <div className="back-cover-year">
    2026
  </div>
</header>

      {/* =====================================================
          MAIN MESSAGE
      ===================================================== */}
      <main className="back-cover-content">
        <span className="back-cover-kicker">
          BEYOND THE GAME
        </span>

        <h1>
          SPORT
          <br />
          <em>UNITES.</em>
        </h1>

        <p>
          Celebrating talent, teamwork, discipline and the
          spirit of university sport.
        </p>
      </main>

      {/* =====================================================
          BOTTOM BRAND AREA
      ===================================================== */}
      <footer className="back-cover-footer">
        <div className="back-cover-line" />

        <div className="back-cover-footer-content">
          <div>
            <span>TTU SPORTS & ATHLETICS</span>
            <strong>2026 OFFICIAL SPORTS PUBLICATION</strong>
          </div>

          <div className="back-cover-mark">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="back-cover-credit">
          <span>EDITOR & DESIGNER</span>
          <strong>Meshack Muindi</strong>
        </div>
      </footer>

      {/* =====================================================
          PAGE NUMBER
      ===================================================== */}
      <div className="back-cover-page-number">
        40
      </div>
    </section>
  );
}

export default BackCover;