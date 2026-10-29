import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  FileText,
  Palette,
  PenLine,
  Users,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";
import "./NotesCredits.css";

function NotesCredits() {
  return (
    <MagazinePage className="notes-credits-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="notes-credits-header">
        <div>
          <span className="section-kicker">
            TTU SPORTS & ATHLETICS · 2026
          </span>

          <h1>
            NOTES
            <br />
            <em>& CREDITS</em>
          </h1>
        </div>

        <div className="notes-credits-number">39</div>
      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="notes-credits-intro">
        <div>
          <span className="notes-credits-label">
            PUBLICATION NOTES
          </span>

          <h2>
            The details
            <br />
            <em>behind the pages.</em>
          </h2>
        </div>

        <p>
          This publication brings together the people, stories,
          moments and visual records that contribute to the sporting
          identity of Taita Taveta University. The following credits
          recognize the people involved in shaping this edition.
        </p>
      </section>

      {/* =====================================================
          PUBLICATION DETAILS
      ===================================================== */}
      <section className="notes-credits-details">
        {/* ===================================================
            PUBLICATION CARD
        =================================================== */}
        <div className="publication-card publication-card-main">
          <div className="publication-card-top">
            <FileText size={23} />
            <span>PUBLICATION</span>
          </div>

          <h3>
            TTU Sports
            <br />
            <em>& Athletics</em>
          </h3>

          <p>
            2026 Official Sports Publication
          </p>

          <div className="publication-meta">
            <div>
              <span>INSTITUTION</span>
              <strong>Taita Taveta University</strong>
            </div>

            <div>
              <span>EDITION</span>
              <strong>2026</strong>
            </div>
          </div>
        </div>

        {/* ===================================================
            CREDITS GRID
        =================================================== */}
        <div className="credits-grid">
          {/* =================================================
              EDITORIAL
          ================================================= */}
          <article className="credit-card">
            <div className="credit-person">
              <img
                src="/images/credits/h@ck.jpeg"
                alt="Mesh"
              />
            </div>

            

            <div className="credit-icon">
              <PenLine size={18} />
            </div>

            <h3>Editorial</h3>

            <p>Meshack Muindi</p>
          </article>

          {/* =================================================
              DESIGN & LAYOUT
          ================================================= */}
          <article className="credit-card">
            <div className="credit-person">
              <img
                src="/images/credits/h@ck.jpeg"
                alt="Mesh"
              />
            </div>

           

            <div className="credit-icon">
              <Palette size={18} />
            </div>

            <h3>Design & Layout</h3>

            <p>Meshack Muindi</p>
          </article>

          {/* =================================================
              PHOTOGRAPHY
          ================================================= */}
          <article className="credit-card">
            <div className="credit-person">
              <img
                src="/images/credits/jijo.png"
                alt="Jijo"
              />
            </div>

            

            <div className="credit-icon">
              <Camera size={18} />
            </div>

            <h3>Photography</h3>

            <p>Jijo</p>
          </article>

          {/* =================================================
              CONTRIBUTORS
          ================================================= */}
          <article className="credit-card">
            <div className="credit-person credit-person-duo">
              <img
                src="/images/credits/h@ck.jpeg"
                alt="Mesh"
              />

              <img
                src="/images/credits/jijo.png"
                alt="Jijo"
              />
            </div>

           

            <div className="credit-icon">
              <Users size={18} />
            </div>

            <h3>Contributors</h3>

            <p>Mesh & Jijo</p>
          </article>
        </div>
      </section>

      {/* =====================================================
          PUBLICATION RECORD
      ===================================================== */}
      <section className="publication-record">
        <div className="record-heading">
          <span>PUBLICATION RECORD</span>

          <h3>
            Official
            <br />
            <em>edition details.</em>
          </h3>
        </div>

        <div className="record-items">
          <div className="record-item">
            <CalendarDays size={18} />

            <div>
              <span>PUBLICATION YEAR</span>
              <strong>2026/27</strong>
            </div>
          </div>

          <div className="record-item">
            <Palette size={18} />

            <div>
              <span>EDITOR & DESIGNER</span>
              <strong>Meshack Muindi</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL NOTE
      ===================================================== */}
      <section className="editorial-note">
        <div className="editorial-note-mark">“</div>

        <div>
          <span>EDITORIAL NOTE</span>

          <p>
            The stories in this publication celebrate participation,
            teamwork, discipline and the wider role of sport within
            university life.
          </p>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="notes-credits-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>39</span>
      </footer>
    </MagazinePage>
  );
}

export default NotesCredits;