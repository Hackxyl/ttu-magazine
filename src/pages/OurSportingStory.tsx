import {
  ArrowUpRight,
  BookOpen,
  Flag,
  Heart,
  Trophy,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";

import "./OurSportingStory.css";

const storyPoints = [
  {
    number: "01",
    title: "Discover",
    description:
      "Students discover opportunities to participate, develop their abilities and become part of the university sporting community.",
    icon: Flag,
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Training, discipline and teamwork create the foundation for athletes and teams preparing for competition.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Compete",
    description:
      "Competition provides an opportunity to test preparation, learn from experience and represent Taita Taveta University.",
    icon: Trophy,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Every sporting experience contributes to personal development, confidence, leadership and a stronger sense of community.",
    icon: Heart,
  },
];

function OurSportingStory() {
  return (
    <MagazinePage className="sporting-story-page">
      <header className="sporting-story-header">
        <div>
          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            OUR SPORTING
            <br />
            <em>STORY</em>
          </h2>
        </div>

        <div className="sporting-story-page-number">
          27
        </div>
      </header>

      <section className="sporting-story-hero">
        <div className="sporting-story-hero-copy">
          <span>MORE THAN THE SCOREBOARD</span>

          <h3>
            Every season
            <br />
            <em>tells a story.</em>
          </h3>

          <p>
            University sport is a journey shaped by people,
            preparation, competition and the experiences that
            remain long after the final whistle.
          </p>
        </div>

        <div className="sporting-story-hero-mark">
          <span>TTU</span>
          <strong>27</strong>
        </div>
      </section>

      <section className="sporting-story-feature">
        <div className="sporting-story-feature-image">
          <img
            src="/images/story/sporting-story.jpg"
            alt="Taita Taveta University sporting activities"
            loading="eager"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="sporting-story-image-placeholder">
            <Trophy size={42} strokeWidth={1.3} />
            <span>SPORTING STORY</span>
          </div>

          <span className="sporting-story-image-number">
            01
          </span>
        </div>

        <div className="sporting-story-feature-copy">
          <span>THE JOURNEY</span>

          <h3>
            From participation
            <br />
            to representation.
          </h3>

          <p>
            Sport gives students a space to participate,
            compete and develop through shared experiences.
            The journey includes training sessions, team
            meetings, competition days, moments of challenge
            and moments of celebration.
          </p>

          <p>
            For Taita Taveta University, these experiences
            form part of a wider university life where
            students can build discipline, teamwork,
            leadership and lasting memories.
          </p>
        </div>
      </section>

      <section className="sporting-story-process">
        {storyPoints.map((point) => {
          const Icon = point.icon;

          return (
            <article
              className="sporting-story-point"
              key={point.number}
            >
              <div className="sporting-story-point-top">
                <span>{point.number}</span>

                <div>
                  <Icon size={19} strokeWidth={1.5} />
                </div>
              </div>

              <h4>{point.title}</h4>

              <p>{point.description}</p>
            </article>
          );
        })}
      </section>

      <section className="sporting-story-closing">
        <div>
          <span>THE TTU SPORTING JOURNEY</span>

          <strong>
            Discover.
            <span> Prepare.</span>
            <span> Compete.</span>
            <em> Grow.</em>
          </strong>
        </div>

        <div className="sporting-story-closing-mark">
          27
        </div>
      </section>

      <footer className="sporting-story-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>27</span>
      </footer>
    </MagazinePage>
  );
}

export default OurSportingStory;