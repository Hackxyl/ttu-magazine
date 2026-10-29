import {
  ArrowUpRight,
  Camera,
  Heart,
  PenLine,
  Trophy,
  Users,
} from "lucide-react";
import MagazinePage from "../components/MagazinePage";
import "./Acknowledgements.css";

function Acknowledgements() {
  return (
    <MagazinePage className="acknowledgements-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="acknowledgements-header">
        <div>
          <span className="section-kicker">
            TTU SPORTS & ATHLETICS · 2026
          </span>

          <h1>
            WITH
            <br />
            <em>THANKS</em>
          </h1>
        </div>

        <div className="acknowledgements-number">37</div>
      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="acknowledgements-intro">
        <div>
          <span className="acknowledgements-label">
            ACKNOWLEDGEMENTS
          </span>

          <h2>
            Behind every
            <br />
            <em>sporting story.</em>
          </h2>
        </div>

        <p>
          A sports publication is made possible by the people who
          compete, organise, support, document and celebrate university
          sport. This page recognises the collective contribution behind
          the 2026 TTU Sports & Athletics publication.
        </p>
      </section>

      {/* =====================================================
          ACKNOWLEDGEMENT GRID
      ===================================================== */}
      <section className="acknowledgements-grid">
        <article className="acknowledgement-card">
          <div className="acknowledgement-icon">
            <Trophy size={21} />
          </div>

          <span>01</span>

          <h3>Athletes & Teams</h3>

          <p>
            To every athlete and team member whose commitment,
            preparation and participation give university sport its
            energy and identity.
          </p>
        </article>

        <article className="acknowledgement-card">
          <div className="acknowledgement-icon">
            <Users size={21} />
          </div>

          <span>02</span>

          <h3>Sports Leadership</h3>

          <p>
            To the people involved in coordinating, supporting and
            developing sporting activities across the university.
          </p>
        </article>

        <article className="acknowledgement-card">
          <div className="acknowledgement-icon">
            <Heart size={21} />
          </div>

          <span>03</span>

          <h3>Coaches & Supporters</h3>

          <p>
            To those who encourage athletes through training,
            competition, guidance and the many moments beyond the
            scoreboard.
          </p>
        </article>

        <article className="acknowledgement-card">
          <div className="acknowledgement-icon">
            <Camera size={21} />
          </div>

          <span>04</span>

          <h3>Photographers & Contributors</h3>

          <p>
            To everyone who helps preserve the moments, people and
            experiences that become part of the university sporting
            record.
          </p>
        </article>

        <article className="acknowledgement-card">
          <div className="acknowledgement-icon">
            <PenLine size={21} />
          </div>

          <span>05</span>

          <h3>Editorial & Creative Team</h3>

          <p>
            To the people who shape the stories, images, layouts and
            details that bring this publication together.
          </p>
        </article>

        <article className="acknowledgement-card acknowledgement-card-dark">
          <span className="acknowledgement-quote-mark">“</span>

          <p className="acknowledgement-quote">
            Sport is more than competition. It is participation,
            connection, discipline and shared university pride.
          </p>

          <span className="acknowledgement-quote-label">
            TTU SPORTS & ATHLETICS · 2026
          </span>
        </article>
      </section>

      {/* =====================================================
          CLOSING NOTE
      ===================================================== */}
      <section className="acknowledgements-note">
        <span>OUR APPRECIATION</span>

        <p>
          To everyone who contributed to the sporting life of Taita
          Taveta University in 2026/27 — thank you for being part of the
          story.
        </p>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="acknowledgements-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>37</span>
      </footer>
    </MagazinePage>
  );
}

export default Acknowledgements;