import {
  ArrowUpRight,
  Trophy,
  Users,
  Medal,
  Activity,
} from "lucide-react";
import MagazinePage from "../components/MagazinePage";

function Editorial() {
  return (
    <MagazinePage className="editorial-page">

      {/* HEADER */}
      <div className="editorial-header">

        <div className="page-number">
          02
        </div>

        <div className="editorial-label">
          FROM THE SPORTS DESK
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="editorial-content">

        <div className="editorial-intro">

          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY
          </span>

          <h2>
            THE GAME
            <br />
            IS MORE THAN
            <br />
            <em>THE SCORE.</em>
          </h2>

          <div className="editorial-line" />

          <p className="editorial-lead">
            Sport is where talent meets discipline, where individual
            ambition becomes collective purpose, and where every challenge
            creates an opportunity to grow.
          </p>

        </div>

        {/* FEATURE IMAGE */}
        <div className="editorial-visual">

          <div className="editorial-image-wrap">

            <img
              src="/images/cover/Editorial.jpeg"
              alt="Taita Taveta University athletes"
            />

            <div className="image-caption">
              <span>01</span>
              <p>
                Passion, teamwork and determination define
                university sport.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* MESSAGE */}
      <div className="editorial-message">

        <div className="message-heading">

          <div className="message-icon">
            <Trophy size={22} />
          </div>

          <div>
            <span>WELCOME</span>
            <h3>Celebrating Our Athletes</h3>
          </div>

        </div>

        <div className="message-text">

          <p>
            The Taita Taveta University Sports & Athletics programme
            continues to provide a platform where students can discover
            their abilities, develop leadership skills and represent the
            University with pride.
          </p>

          <p>
            This edition of the Sports Magazine celebrates the people
            behind the jerseys — the athletes, captains, coaches,
            officials and supporters whose commitment makes university
            sport possible.
          </p>

          <div className="signature">
            <strong>SPORTS & ATHLETICS</strong>
            <span>Taita Taveta University</span>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="editorial-stats">

        <div className="editorial-stat">
          <Users size={20} />
          <strong>01</strong>
          <span>TEAM SPIRIT</span>
        </div>

        <div className="editorial-stat">
          <Trophy size={20} />
          <strong>02</strong>
          <span>COMPETITION</span>
        </div>

        <div className="editorial-stat">
          <Medal size={20} />
          <strong>03</strong>
          <span>EXCELLENCE</span>
        </div>

        <div className="editorial-stat">
          <Activity size={20} />
          <strong>04</strong>
          <span>PERFORMANCE</span>
        </div>

      </div>

      {/* FOOTER */}
      <div className="editorial-footer">

        <span>SPORTS MAGAZINE · 2026</span>

        <span className="footer-arrow">
          <ArrowUpRight size={15} />
          TTU SPORTS & ATHLETICS
        </span>

      </div>

    </MagazinePage>
  );
}

export default Editorial;