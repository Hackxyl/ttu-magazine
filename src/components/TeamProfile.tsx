import {
  Medal,
  Trophy,
  Users,
} from "lucide-react";

import MagazinePage from "./MagazinePage";

import type {
  TeamProfile as TeamProfileData,
} from "../data/sportsData";

interface TeamProfileProps {
  team: TeamProfileData;
}

function TeamProfile({
  team,
}: TeamProfileProps) {
  const hasCaptainName =
    Boolean(team.captain?.name?.trim());

  const hasCaptainRole =
    Boolean(team.captain?.role?.trim());

  const hasCaptainRemark =
    Boolean(team.captain?.remark?.trim());

  const hasCaptainInformation =
    hasCaptainName ||
    hasCaptainRole ||
    hasCaptainRemark;

  const hasCoach =
    Boolean(team.coach);

  const hasCoachInformation =
    Boolean(
      team.coach?.name?.trim() ||
      team.coach?.role?.trim() ||
      team.coach?.remark?.trim(),
    );

  const hasPlayers =
    team.players.length > 0;

  const hasAchievements =
    team.achievements.length > 0;

  const hasHighlights =
    team.highlights.length > 0;

  /*
   * Captain images in the current data may sometimes
   * be squad images rather than actual portrait images.
   *
   * We therefore only use the captain image when
   * captain information is actually available.
   */
  const hasCaptainPhoto =
    hasCaptainInformation &&
    Boolean(team.captain?.image?.trim());

  const hasCoachPhoto =
    hasCoachInformation &&
    Boolean(team.coach?.image?.trim());

  return (
    <MagazinePage className="team-page">

      {/* =========================================
          TEAM HEADER
      ========================================= */}

      <header className="team-page-header">

        <div className="team-page-heading">

          <span className="team-page-kicker">
            TAITA TAVETA UNIVERSITY · SPORTS & ATHLETICS
          </span>

          <h2>
            {team.name}
          </h2>

          <p>
            {team.category} TEAM
          </p>

        </div>

        <div className="team-page-number">
          <Users size={20} />
        </div>

      </header>


      {/* =========================================
          SQUAD HERO
      ========================================= */}

      <section className="team-squad-hero">

        <img
          src={team.squadPhoto}
          alt={`${team.name} squad`}
        />

        <div className="team-squad-overlay" />

        <div className="team-squad-caption">

          <span>
            2026 SPORTS MAGAZINE
          </span>

          <strong>
            {team.name}
          </strong>

        </div>

      </section>


      {/* =========================================
          LEADERSHIP
      ========================================= */}

      {hasCaptainInformation || hasCoachInformation ? (
        <section className="team-leadership">

          <div className="team-section-title">

            <span>
              01
            </span>

            <div>

              <small>
                LEADERSHIP
              </small>

              <h3>
                Behind the team
              </h3>

            </div>

          </div>


          <div className="team-leadership-content">

            {/* =====================================
                CAPTAIN
            ===================================== */}

            {hasCaptainInformation && (
              <article className="captain-card">

                {hasCaptainPhoto ? (
                  <div className="captain-photo">

                    <img
                      src={team.captain.image}
                      alt={
                        team.captain.name ||
                        `${team.name} captain`
                      }
                    />

                    <span>
                      CAPTAIN
                    </span>

                  </div>
                ) : (
                  <div className="captain-photo captain-photo-placeholder">

                    <Users size={34} />

                    <span>
                      CAPTAIN
                    </span>

                  </div>
                )}


                <div className="captain-info">

                  <span className="captain-label">
                    TEAM CAPTAIN
                  </span>

                  {hasCaptainName && (
                    <h4>
                      {team.captain.name}
                    </h4>
                  )}

                  {hasCaptainRole && (
                    <p className="captain-role">
                      {team.captain.role}
                    </p>
                  )}

                  {hasCaptainRemark && (
                    <blockquote className="captain-remark">

                      <span className="quote-mark">
                        “
                      </span>

                      <p>
                        {team.captain.remark}
                      </p>

                      {hasCaptainName && (
                        <footer>
                          — {team.captain.name}
                        </footer>
                      )}

                    </blockquote>
                  )}

                </div>

              </article>
            )}


            {/* =====================================
                COACH
            ===================================== */}

            {hasCoachInformation &&
              team.coach && (
                <article className="coach-card">

                  {hasCoachPhoto ? (
                    <div className="coach-photo">

                      <img
                        src={team.coach.image}
                        alt={
                          team.coach.name ||
                          `${team.name} coach`
                        }
                      />

                      <span>
                        COACH
                      </span>

                    </div>
                  ) : (
                    <div className="coach-photo coach-photo-placeholder">

                      <Users size={28} />

                      <span>
                        COACH
                      </span>

                    </div>
                  )}


                  <div className="coach-info">

                    <span className="captain-label">
                      TECHNICAL TEAM
                    </span>

                    {team.coach.name && (
                      <h4>
                        {team.coach.name}
                      </h4>
                    )}

                    {team.coach.role && (
                      <p className="captain-role">
                        {team.coach.role}
                      </p>
                    )}

                    {team.coach.remark && (
                      <p className="coach-remark">
                        {team.coach.remark}
                      </p>
                    )}

                  </div>

                </article>
              )}

          </div>

        </section>
      ) : null}


      {/* =========================================
          PLAYERS
      ========================================= */}

      {hasPlayers && (
        <section className="team-squad-section">

          <div className="team-section-title">

            <span>
              02
            </span>

            <div>

              <small>
                THE SQUAD
              </small>

              <h3>
                Players
              </h3>

            </div>

            <strong className="player-total">
              {team.players.length}
            </strong>

          </div>


          <div className="team-player-grid">

            {team.players.map(
              (player, index) => (
                <div
                  className="team-player-row"
                  key={`${player}-${index}`}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {player}
                  </strong>

                </div>
              ),
            )}

          </div>

        </section>
      )}


      {/* =========================================
          ACHIEVEMENTS
      ========================================= */}

      {hasAchievements && (
        <section className="team-achievements-section">

          <div className="team-section-title">

            <span>
              03
            </span>

            <div>

              <small>
                TEAM HONOURS
              </small>

              <h3>
                Achievements
              </h3>

            </div>

            <Trophy size={20} />

          </div>


          <div className="team-achievements-list">

            {team.achievements.map(
              (achievement, index) => (
                <div
                  className="team-achievement-row"
                  key={`${achievement}-${index}`}
                >

                  <div className="achievement-medal">
                    <Medal size={16} />
                  </div>

                  <p>
                    {achievement}
                  </p>

                </div>
              ),
            )}

          </div>

        </section>
      )}


      {/* =========================================
          HIGHLIGHTS
      ========================================= */}

      {hasHighlights && (
        <section className="team-highlights-section">

          <div className="team-section-title">

            <span>
              04
            </span>

            <div>

              <small>
                INSIDE THE TEAM
              </small>

              <h3>
                Highlights
              </h3>

            </div>

          </div>


          <div className="team-highlights-grid">

            {team.highlights.map(
              (highlight, index) => (
                <div
                  className="team-highlight-card"
                  key={`${highlight}-${index}`}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {highlight}
                  </p>

                </div>
              ),
            )}

          </div>

        </section>
      )}


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="team-page-footer">

        <span>
          TTU SPORTS & ATHLETICS
        </span>

        <strong>
          {team.name}
        </strong>

        <span>
          2026
        </span>

      </footer>

    </MagazinePage>
  );
}

export default TeamProfile;