import {
  ArrowUpRight,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";
import { sportsData } from "../data/sportsData";

function AchievementsHighlights() {
  /*
   * Collect only verified data already present
   * in sportsData.ts.
   *
   * No achievements or highlights are invented.
   */

  const sportAchievements = sportsData.flatMap((sport) =>
    sport.achievements.map((achievement) => ({
      sport: sport.name,
      achievement,
    })),
  );

  const teamAchievements = sportsData.flatMap((sport) =>
    (sport.teams ?? []).flatMap((team) =>
      team.achievements.map((achievement) => ({
        sport: sport.name,
        team: team.name,
        achievement,
      })),
    ),
  );

  const sportHighlights = sportsData.flatMap((sport) =>
    sport.highlights.map((highlight) => ({
      sport: sport.name,
      highlight,
    })),
  );

  const teamHighlights = sportsData.flatMap((sport) =>
    (sport.teams ?? []).flatMap((team) =>
      team.highlights.map((highlight) => ({
        sport: sport.name,
        team: team.name,
        highlight,
      })),
    ),
  );

  const totalAchievements =
    sportAchievements.length +
    teamAchievements.length;

  const totalHighlights =
    sportHighlights.length +
    teamHighlights.length;

  return (
    <MagazinePage className="achievements-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="achievements-header">

        <div>
          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            ACHIEVEMENTS
            <br />
            <em>& HIGHLIGHTS</em>
          </h2>
        </div>

        {/* Temporary page number.
            Final number will be updated after pagination is complete. */}
        <div className="achievements-number">
          22
        </div>

      </header>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="achievements-intro">

        <div className="achievements-intro-title">

          <span>
            MOMENTS THAT MATTER
          </span>

          <h3>
            Performance,
            <br />
            <em>pride & progress.</em>
          </h3>

        </div>

        <div className="achievements-intro-text">

          <p>
            Every sporting journey is shaped by preparation,
            competition, perseverance and achievement.
          </p>

          <p>
            This section celebrates the verified milestones,
            performances and memorable moments that form part
            of the Taita Taveta University sporting story.
          </p>

        </div>

      </section>


      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <section className="achievements-summary">

        <article className="achievement-summary-card">

          <div className="achievement-summary-icon">
            <Trophy size={21} />
          </div>

          <div>
            <strong>
              {totalAchievements}
            </strong>

            <span>
              VERIFIED ACHIEVEMENTS
            </span>
          </div>

        </article>


        <article className="achievement-summary-card">

          <div className="achievement-summary-icon">
            <Sparkles size={21} />
          </div>

          <div>
            <strong>
              {totalHighlights}
            </strong>

            <span>
              FEATURED HIGHLIGHTS
            </span>
          </div>

        </article>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="achievements-section">

        <div className="achievements-section-heading">

          <div className="achievements-section-icon">
            <Medal size={19} />
          </div>

          <div>
            <span>
              VERIFIED MILESTONES
            </span>

            <h3>
              Achievements
            </h3>
          </div>

        </div>


        {totalAchievements > 0 ? (

          <div className="achievement-list">

            {sportAchievements.map(
              (item, index) => (

                <article
                  className="achievement-item"
                  key={`sport-achievement-${index}`}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <strong>
                      {item.sport}
                    </strong>

                    <p>
                      {item.achievement}
                    </p>

                  </div>

                </article>

              ),
            )}


            {teamAchievements.map(
              (item, index) => (

                <article
                  className="achievement-item"
                  key={`team-achievement-${index}`}
                >

                  <span>
                    {String(
                      sportAchievements.length +
                        index +
                        1,
                    ).padStart(2, "0")}
                  </span>

                  <div>

                    <strong>
                      {item.sport} · {item.team}
                    </strong>

                    <p>
                      {item.achievement}
                    </p>

                  </div>

                </article>

              ),
            )}

          </div>

        ) : (

          <div className="achievements-empty">

            <div className="achievements-empty-icon">
              <Trophy size={24} />
            </div>

            <div>

              <span>
                OFFICIAL RECORDS
              </span>

              <p>
                Verified sporting achievements will be
                featured here once the official records
                are available.
              </p>

            </div>

          </div>

        )}

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="highlights-section">

        <div className="achievements-section-heading">

          <div className="achievements-section-icon">
            <Sparkles size={19} />
          </div>

          <div>

            <span>
              INSIDE TTU SPORT
            </span>

            <h3>
              Highlights
            </h3>

          </div>

        </div>


        {totalHighlights > 0 ? (

          <div className="highlights-grid">

            {sportHighlights.map(
              (item, index) => (

                <article
                  className="highlight-item"
                  key={`sport-highlight-${index}`}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <small>
                      {item.sport}
                    </small>

                    <p>
                      {item.highlight}
                    </p>

                  </div>

                </article>

              ),
            )}


            {teamHighlights.map(
              (item, index) => (

                <article
                  className="highlight-item"
                  key={`team-highlight-${index}`}
                >

                  <span>
                    {String(
                      sportHighlights.length +
                        index +
                        1,
                    ).padStart(2, "0")}
                  </span>

                  <div>

                    <small>
                      {item.sport} · {item.team}
                    </small>

                    <p>
                      {item.highlight}
                    </p>

                  </div>

                </article>

              ),
            )}

          </div>

        ) : (

          <div className="highlights-empty">

            <div className="highlights-empty-mark">
              <Sparkles size={23} />
            </div>

            <div>

              <span>
                SPORTING MOMENTS
              </span>

              <p>
                Verified performances, memorable moments
                and important sporting highlights will be
                featured in this section.
              </p>

            </div>

          </div>

        )}

      </section>


      {/* =====================================================
          EDITORIAL CLOSING
      ===================================================== */}

      <div className="achievements-closing">

        <div className="achievements-closing-mark">

          <Trophy
            size={29}
            strokeWidth={1.4}
          />

        </div>

        <div>

          <span>
            TTU SPORTS & ATHLETICS
          </span>

          <strong>
            Every milestone
            <br />
            becomes part of our story.
          </strong>

        </div>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="achievements-footer">

        <span>
          SPORTS MAGAZINE · 2026
        </span>

        <div>
          <ArrowUpRight size={15} />
          TTU SPORTS & ATHLETICS
        </div>

        <span>
          22
        </span>

      </footer>

    </MagazinePage>
  );
}

export default AchievementsHighlights;