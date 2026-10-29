
import {
  ArrowUpRight,
  Medal,
  Quote,
  Trophy,
  UserRound,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";

interface Athlete {
  id: string;
  name: string;
  sport: string;
  role: string;
  image: string;
  statement?: string;
  achievement?: string;
}

/*
 * =========================================================
 * ATHLETE DATA
 * =========================================================
 *
 * Add real TTU athlete information here.
 *
 * Photos:
 * public/images/athletes/
 *
 * Example:
 * /images/athletes/athlete-01.jpg
 */

const athletes: Athlete[] = [
  {
    id: "athlete-01",
    name: "ATHLETE NAME",
    sport: "SPORT",
    role: "TEAM CAPTAIN",
    image: "/images/athletes/athlete-01.jpg",
    statement: "ATHLETE STATEMENT",
    achievement: "VERIFIED ACHIEVEMENT",
  },

  {
    id: "athlete-02",
    name: "ATHLETE NAME",
    sport: "SPORT",
    role: "ATHLETE",
    image: "/images/athletes/athlete-02.jpg",
    statement: "ATHLETE STATEMENT",
    achievement: "VERIFIED ACHIEVEMENT",
  },

  {
    id: "athlete-03",
    name: "ATHLETE NAME",
    sport: "SPORT",
    role: "ATHLETE",
    image: "/images/athletes/athlete-03.jpg",
    statement: "ATHLETE STATEMENT",
    achievement: "VERIFIED ACHIEVEMENT",
  },

  {
    id: "athlete-04",
    name: "ATHLETE NAME",
    sport: "SPORT",
    role: "ATHLETE",
    image: "/images/athletes/athlete-04.jpg",
    statement: "ATHLETE STATEMENT",
    achievement: "VERIFIED ACHIEVEMENT",
  },

  {
    id: "athlete-05",
    name: "ATHLETE NAME",
    sport: "SPORT",
    role: "ATHLETE",
    image: "/images/athletes/athlete-05.jpg",
    statement: "ATHLETE STATEMENT",
    achievement: "VERIFIED ACHIEVEMENT",
  },

  {
    id: "athlete-06",
    name: "ATHLETE NAME",
    sport: "SPORT",
    role: "ATHLETE",
    image: "/images/athletes/athlete-06.jpg",
    statement: "ATHLETE STATEMENT",
    achievement: "VERIFIED ACHIEVEMENT",
  },
];

function AthleteCard({
  athlete,
  index,
  featured = false,
}: {
  athlete: Athlete;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={`athlete-profile-card ${
        featured ? "athlete-profile-card-featured" : ""
      }`}
    >
      <div className="athlete-profile-photo">

        <img
          src={athlete.image}
          alt={`${athlete.name} — ${athlete.sport}`}
          loading="eager"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="athlete-profile-photo-overlay" />

        <span className="athlete-profile-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="athlete-profile-photo-caption">

          <small>
            {athlete.sport}
          </small>

          <h3>
            {athlete.name}
          </h3>

        </div>
      </div>

      <div className="athlete-profile-content">

        <div className="athlete-profile-role">
          <UserRound size={14} />
          <span>{athlete.role}</span>
        </div>

        {athlete.statement && (
          <div className="athlete-profile-quote">

            <Quote size={18} />

            <p>
              {athlete.statement}
            </p>

          </div>
        )}

        {athlete.achievement && (
          <div className="athlete-profile-achievement">

            <Medal size={16} />

            <div>
              <span>SPORTING HIGHLIGHT</span>

              <p>
                {athlete.achievement}
              </p>
            </div>

          </div>
        )}

      </div>
    </article>
  );
}

function AthletePageHeader({
  number,
  continuation = false,
}: {
  number: string;
  continuation?: boolean;
}) {
  return (
    <header className="athlete-page-header">

      <div>

        <span className="section-kicker">
          TAITA TAVETA UNIVERSITY · 2026
        </span>

        <h2>
          ATHLETE
          <br />
          <em>
            {continuation ? "SPOTLIGHT · CONTINUED" : "SPOTLIGHT"}
          </em>
        </h2>

      </div>

      <div className="athlete-page-number">
        {number}
      </div>

    </header>
  );
}

function AthleteSpotlight() {
  const firstPageAthletes = athletes.slice(0, 3);
  const secondPageAthletes = athletes.slice(3, 6);

  return (
    <>
      {/* =====================================================
          PAGE 23 — ATHLETE SPOTLIGHT
      ===================================================== */}

      <MagazinePage className="athlete-spotlight-page athlete-spotlight-page-one">

        <AthletePageHeader number="23" />

        <section className="athlete-spotlight-intro">

          <div>

            <span className="athlete-intro-kicker">
              THE PEOPLE BEHIND THE PERFORMANCE
            </span>

            <h3>
              Talent.
              <br />
              <em>Dedication.</em>
            </h3>

          </div>

          <div className="athlete-intro-text">

            <p>
              Behind every team, race and competition are
              students who dedicate their time, energy and
              discipline to representing Taita Taveta University.
            </p>

            <p>
              Meet some of the athletes whose commitment
              forms part of the University's sporting story.
            </p>

          </div>

        </section>

        <section className="athlete-profiles-grid">

          {firstPageAthletes.map((athlete, index) => (
            <AthleteCard
              key={athlete.id}
              athlete={athlete}
              index={index}
              featured={index === 0}
            />
          ))}

        </section>

        <section className="athlete-page-statement">

          <div className="athlete-page-statement-icon">
            <Medal size={22} />
          </div>

          <div>

            <span>
              TTU SPORTS & ATHLETICS
            </span>

            <strong>
              Every athlete has a journey.
            </strong>

          </div>

        </section>

        <footer className="athlete-page-footer">

          <span>
            SPORTS MAGAZINE · 2026
          </span>

          <div>
            <ArrowUpRight size={15} />
            TTU SPORTS & ATHLETICS
          </div>

          <span>23</span>

        </footer>

      </MagazinePage>


      {/* =====================================================
          PAGE 24 — ATHLETE SPOTLIGHT CONTINUED
      ===================================================== */}

      <MagazinePage className="athlete-spotlight-page athlete-spotlight-page-two">

        <AthletePageHeader
          number="24"
          continuation
        />

        <section className="athlete-continuation-intro">

          <div>

            <span>
              CONTINUING THE STORY
            </span>

            <h3>
              More voices.
              <br />
              <em>More journeys.</em>
            </h3>

          </div>

          <p>
            Sporting excellence is built through consistency,
            teamwork and the willingness to keep improving.
            These profiles continue the spotlight on TTU
            student-athletes.
          </p>

        </section>

        <section className="athlete-profiles-grid athlete-profiles-grid-page-two">

          {secondPageAthletes.map((athlete, index) => (
            <AthleteCard
              key={athlete.id}
              athlete={athlete}
              index={index + 3}
            />
          ))}

        </section>

        <section className="athlete-closing-feature">

          <div className="athlete-closing-icon">
            <Trophy
              size={28}
              strokeWidth={1.4}
            />
          </div>

          <div>

            <span>
              THE TTU SPORTING JOURNEY
            </span>

            <strong>
              Compete.
              <br />
              Represent.
              <br />
              <em>Excel.</em>
            </strong>

          </div>

          <div className="athlete-closing-mark">
            24
          </div>

        </section>

        <footer className="athlete-page-footer">

          <span>
            SPORTS MAGAZINE · 2026
          </span>

          <div>
            <ArrowUpRight size={15} />
            TTU SPORTS & ATHLETICS
          </div>

          <span>24</span>

        </footer>

      </MagazinePage>
    </>
  );
}

export default AthleteSpotlight;
