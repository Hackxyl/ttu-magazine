import {
  Activity,
  ArrowUpRight,
  Brain,
  HeartPulse,
  ShieldCheck,
  Utensils,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";

import "./SportsWellness.css";

const wellnessAreas = [
  {
    number: "01",
    title: "Physical Preparation",
    category: "FITNESS",
    description:
      "Training and physical preparation help athletes develop the strength, movement and endurance required for their sporting activities.",
    icon: Activity,
  },
  {
    number: "02",
    title: "Recovery",
    category: "REST & RECOVERY",
    description:
      "Rest and recovery are important parts of responsible training, helping athletes manage demanding periods of physical activity.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Mental Wellbeing",
    category: "WELLBEING",
    description:
      "Sport can support confidence, discipline, social connection and personal development alongside academic life.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Nutrition",
    category: "HEALTH",
    description:
      "Balanced nutrition supports energy, recovery and general wellbeing for students participating in physical activity.",
    icon: Utensils,
  },
  {
    number: "05",
    title: "Injury Awareness",
    category: "SAFETY",
    description:
      "Understanding physical limits and responding appropriately to injuries is an important part of responsible participation in sport.",
    icon: ShieldCheck,
  },
];

function SportsWellness() {
  return (
    <MagazinePage className="wellness-page">
      <header className="wellness-header">
        <div>
          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            SPORTS &
            <br />
            <em>WELLNESS</em>
          </h2>
        </div>

        <div className="wellness-page-number">
          28
        </div>
      </header>

      <section className="wellness-intro">
        <div className="wellness-intro-heading">
          <span>BEYOND PERFORMANCE</span>

          <h3>
            A healthy athlete
            <br />
            <em>is a complete student.</em>
          </h3>
        </div>

        <div className="wellness-intro-copy">
          <p>
            Sporting participation is connected to physical
            preparation, recovery, wellbeing and responsible
            care of the athlete.
          </p>

          <p>
            For student-athletes, maintaining balance between
            training, competition, academics and personal
            wellbeing is an important part of the journey.
          </p>
        </div>
      </section>

      <section className="wellness-feature">
        <div className="wellness-feature-icon">
          <HeartPulse size={29} strokeWidth={1.5} />
        </div>

        <div>
          <span>THE ATHLETE AS A WHOLE</span>

          <strong>
            Train with purpose.
            <br />
            Recover with care.
          </strong>
        </div>

        <div className="wellness-feature-mark">
          28
        </div>
      </section>

      <section className="wellness-main">
        <div className="wellness-image">
          <img
            src="/images/wellness/sports-wellness.jpg"
            alt="Sports and wellness at Taita Taveta University"
            loading="eager"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="wellness-image-placeholder">
            <HeartPulse size={43} strokeWidth={1.3} />

            <span>SPORTS & WELLNESS</span>
          </div>

          <span className="wellness-image-number">
            01
          </span>
        </div>

        <div className="wellness-message">
          <span>THE BALANCE</span>

          <h3>
            Performance
            <br />
            starts with
            <br />
            <em>wellbeing.</em>
          </h3>

          <p>
            Athletic development involves more than what
            happens during competition. Preparation, recovery,
            healthy routines and personal wellbeing all form
            part of a sustainable approach to sport.
          </p>

          <div className="wellness-message-rule" />

          <strong>
            SPORT · HEALTH · BALANCE
          </strong>
        </div>
      </section>

      <section className="wellness-grid">
        {wellnessAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article
              className="wellness-card"
              key={area.number}
            >
              <div className="wellness-card-top">
                <span>{area.number}</span>

                <div>
                  <Icon size={18} strokeWidth={1.5} />
                </div>
              </div>

              <span className="wellness-card-category">
                {area.category}
              </span>

              <h4>{area.title}</h4>

              <p>{area.description}</p>
            </article>
          );
        })}
      </section>

      <section className="wellness-closing">
        <div>
          <span>TTU SPORTS & ATHLETICS</span>

          <strong>
            Train.
            <span> Recover.</span>
            <span> Balance.</span>
            <em> Thrive.</em>
          </strong>
        </div>

        <div className="wellness-closing-mark">
          28
        </div>
      </section>

      <footer className="wellness-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>28</span>
      </footer>
    </MagazinePage>
  );
}

export default SportsWellness;