import {
  ArrowUpRight,
  Dumbbell,
  Flag,
  Medal,
  Trophy,
  Users,
} from "lucide-react";
import MagazinePage from "../components/MagazinePage";
import { sportsData } from "../data/sportsData";

const sportIcons = {
  athletics: Medal,
  volleyball: Users,
  football: Trophy,
  basketball: Dumbbell,
  netball: Flag,
  hockey: Medal,
  handball: Trophy,
};

function SportsOverview() {
  return (
    <MagazinePage className="sports-overview-page">
      <header className="sports-overview-header">
        <div>
          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            THE SPORTS
            <br />
            <em>OF TTU</em>
          </h2>
        </div>

        <div className="sports-overview-number">
          05
        </div>
      </header>

      <div className="sports-overview-intro">
        <div className="sports-overview-intro-title">
          <span>ONE UNIVERSITY</span>

          <h3>
            Different disciplines.
            <br />
            Different strengths.
            <br />
            <em>One spirit.</em>
          </h3>
        </div>

        <div className="sports-overview-intro-text">
          <p>
            Sport at Taita Taveta University brings students together
            through competition, teamwork, discipline and shared
            ambition.
          </p>

          <p>
            From track and field to the court and pitch, the University's
            sporting programme provides opportunities for students to
            develop talent, leadership and competitive excellence.
          </p>
        </div>
      </div>

      <div className="sports-overview-stat">
        <div className="sports-overview-stat-number">
          {sportsData.length}
        </div>

        <div>
          <strong>FEATURED SPORTS</strong>

          <p>
            Seven sporting disciplines featured in this edition of the
            Taita Taveta University Sports & Athletics Magazine.
          </p>
        </div>

        <div className="sports-overview-stat-icon">
          <Trophy size={28} strokeWidth={1.5} />
        </div>
      </div>

      <div className="sports-overview-grid">
        {sportsData.map((sport) => {
          const Icon =
            sportIcons[sport.id as keyof typeof sportIcons] ?? Trophy;

          return (
            <article
              className="sport-overview-card"
              key={sport.id}
            >
              <div className="sport-card-top">
                <span className="sport-card-number">
                  {sport.number}
                </span>

                <div className="sport-card-icon">
                  <Icon size={18} />
                </div>
              </div>

              <div className="sport-card-content">
                <span className="sport-card-category">
                  {sport.category}
                </span>

                <h4>{sport.name}</h4>

                <p>{sport.description}</p>
              </div>

              <div className="sport-card-arrow">
                <ArrowUpRight size={17} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="sports-overview-bottom">
        <div className="sports-overview-bottom-line" />

        <div className="sports-overview-bottom-content">
          <span>SPORTS & ATHLETICS</span>

          <strong>
            COMPETE
            <span> · </span>
            REPRESENT
            <span> · </span>
            EXCEL
          </strong>

          <span>05</span>
        </div>
      </div>
    </MagazinePage>
  );
}

export default SportsOverview;