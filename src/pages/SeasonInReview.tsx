import {
  ArrowUpRight,
  CalendarDays,
  Flag,
  Trophy,
  Users,
} from "lucide-react";
import MagazinePage from "../components/MagazinePage";
import "./SeasonInReview.css";

function SeasonInReview() {
  return (
    <MagazinePage className="season-review-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="season-review-header">
        <div>
          <span className="section-kicker">
            TTU SPORTS & ATHLETICS · 2026
          </span>

          <h1>
            SEASON
            <br />
            <em>IN REVIEW</em>
          </h1>
        </div>

        <div className="season-review-number">36</div>
      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="season-review-intro">
        <div>
          <span className="season-review-label">
            A YEAR OF SPORT
          </span>

          <h2>
            The moments.
            <br />
            <em>The journey.</em>
          </h2>
        </div>

        <p>
          A sporting season is built through preparation, competition and
          teamwork.This page provides a visual record of the 2026/27
          sporting year at Taita Taveta University.
        </p>
      </section>

      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}
      <section className="season-review-feature">
        <div className="season-review-image">
          <img
            src="/images/season-review/season-2026.jpg"
            alt="TTU Sports 2026 season"
          />

          <div className="season-review-image-overlay" />

          <div className="season-review-image-caption">
            <span>2026</span>
            <strong>ONE SEASON. MANY STORIES.</strong>
          </div>
        </div>

        {/* =====================================================
            REVIEW PANEL
        ===================================================== */}
        <div className="season-review-panel">
          <div className="review-panel-heading">
            <span>THE SEASON AT A GLANCE</span>
            <h3>
              Built through
              <br />
              <em>every moment.</em>
            </h3>
          </div>

          <div className="review-items">
            <div className="review-item">
              <div className="review-icon">
                <CalendarDays size={19} />
              </div>

              <div>
                <span>01</span>
                <h4>Competition</h4>
                <p>
                  Fixtures, tournaments and sporting events throughout
                  the year.
                </p>
              </div>
            </div>

            <div className="review-item">
              <div className="review-icon">
                <Users size={19} />
              </div>

              <div>
                <span>02</span>
                <h4>Participation</h4>
                <p>
                  Students coming together through sport and
                  shared university pride.
                </p>
              </div>
            </div>

            <div className="review-item">
              <div className="review-icon">
                <Trophy size={19} />
              </div>

              <div>
                <span>03</span>
                <h4>Performance</h4>
                <p>
                  The effort, discipline and determination behind every
                  sporting appearance.
                </p>
              </div>
            </div>

            <div className="review-item">
              <div className="review-icon">
                <Flag size={19} />
              </div>

              <div>
                <span>04</span>
                <h4>Representation</h4>
                <p>
                  Athletes representing TTU with
                  commitment and pride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}
      <section className="season-review-statement">
        <span>LOOKING BACK</span>

        <p>
          Every training session, match, performance and shared
          experience contributes to the story of university sport.
        </p>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="season-review-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>36</span>
      </footer>
    </MagazinePage>
  );
}

export default SeasonInReview;