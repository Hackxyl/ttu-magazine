import {
  ArrowUpRight,
  Medal,
  Users,
} from "lucide-react";

import MagazinePage from "./MagazinePage";
import TeamProfile from "./TeamProfile";

import type { SportData } from "../data/sportsData";

interface SportSectionProps {
  sport: SportData;
}

function SportSection({
  sport,
}: SportSectionProps) {
  const hasStatistics = sport.statistics.length > 0;

  const hasAchievements =
    sport.achievements.length > 0;

  const hasTeams =
    Boolean(sport.teams?.length);

  return (
    <>
      {/* =====================================
          SPORT INTRODUCTION PAGE
      ====================================== */}
      <MagazinePage className="sport-section-page">

        {/* =====================================
            HEADER
        ====================================== */}
        <header className="sport-section-header">
          <div>
            <span className="section-kicker">
              TTU SPORTS & ATHLETICS · {sport.category}
            </span>

            <h2>
              {sport.name}
              <br />
              <em>{sport.tagline}</em>
            </h2>
          </div>

          <div className="sport-section-number">
            {sport.number}
          </div>
        </header>


        {/* =====================================
            HERO IMAGE
        ====================================== */}
        <div className="sport-section-hero">

          <img
            src={sport.heroImage}
            alt={`${sport.name} at Taita Taveta University`}
          />

          <div className="sport-section-hero-overlay" />

          <div className="sport-section-hero-content">

            <span>
              {sport.category}
            </span>

            <h3>
              {sport.name}
            </h3>

            <p>
              {sport.tagline}
            </p>

          </div>

          <div className="sport-section-hero-number">
            {sport.number}
          </div>

        </div>


        {/* =====================================
            SPORT INTRODUCTION
        ====================================== */}
        <div className="sport-section-intro">

          <div className="sport-section-intro-title">

            <span>
              THE DISCIPLINE
            </span>

            <h3>
              Built through
              <br />
              <em>dedication.</em>
            </h3>

          </div>

          <div className="sport-section-intro-text">

            <p>
              {sport.description}
            </p>

            <div className="sport-intro-rule" />

          </div>

        </div>


        {/* =====================================
            TEAM PROGRAMME
        ====================================== */}
        {hasTeams && (
          <section className="sport-team-programme">

            <div className="sport-section-block-heading">

              <div className="sport-block-icon">
                <Users size={18} />
              </div>

              <div>
                <span>
                  TEAM PROGRAMME
                </span>

                <h3>
                  Representing TTU
                </h3>
              </div>

            </div>


            <div className="sport-team-programme-grid">

              {sport.teams!.map((team) => (
                <article
                  className="sport-team-programme-card"
                  key={team.id}
                >

                  <span>
                    {team.category}
                  </span>

                  <strong>
                    {team.name}
                  </strong>

                </article>
              ))}

            </div>

          </section>
        )}


        {/* =====================================
            STATISTICS
        ====================================== */}
        {hasStatistics && (
          <section className="sport-section-statistics">

            {sport.statistics.map(
              (stat, index) => (
                <div
                  className="sport-stat"
                  key={`${stat.label}-${index}`}
                >

                  <span className="sport-stat-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {stat.value}
                  </strong>

                  <span>
                    {stat.label}
                  </span>

                </div>
              ),
            )}

          </section>
        )}


        {/* =====================================
            ACHIEVEMENTS
        ====================================== */}
        {hasAchievements && (
          <section className="sport-section-bottom">

            <div className="sport-achievements">

              <div className="sport-section-block-heading">

                <div className="sport-block-icon">
                  <Medal size={18} />
                </div>

                <div>

                  <span>
                    2026 HIGHLIGHTS
                  </span>

                  <h3>
                    Achievements
                  </h3>

                </div>

              </div>


              <div className="achievement-list">

                {sport.achievements.map(
                  (achievement, index) => (
                    <div
                      className="achievement-item"
                      key={`${achievement}-${index}`}
                    >

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>
                        {achievement}
                      </p>

                    </div>
                  ),
                )}

              </div>

            </div>

          </section>
        )}


        {/* =====================================
            FOOTER
        ====================================== */}
        <footer className="sport-section-footer">

          <span>
            SPORTS MAGAZINE · 2026
          </span>

          <div>
            <ArrowUpRight size={15} />
            TTU SPORTS & ATHLETICS
          </div>

          <span>
            {sport.number}
          </span>

        </footer>

      </MagazinePage>


      {/* =====================================
          TEAM PROFILE PAGES
      ====================================== */}
      {hasTeams &&
        sport.teams!.map((team) => (
          <TeamProfile
            key={team.id}
            team={team}
          />
        ))}

    </>
  );
}

export default SportSection;