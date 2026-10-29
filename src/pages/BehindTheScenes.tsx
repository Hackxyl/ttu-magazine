import {
  ArrowUpRight,
  Camera,
  ClipboardList,
  Dumbbell,
  Footprints,
  Users,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";

import "./BehindTheScenes.css";

interface BehindScene {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: typeof Camera;
}

const scenes: BehindScene[] = [
  {
    number: "01",
    title: "Training",
    category: "PREPARATION",
    description:
      "The work behind competition begins with preparation, repetition and commitment during training.",
    image: "/images/behind-scenes/training.jpg",
    icon: Dumbbell,
  },
  {
    number: "02",
    title: "Team Briefing",
    category: "ORGANISATION",
    description:
      "Teams come together to communicate, prepare and understand their responsibilities before competition.",
    image: "/images/behind-scenes/team-briefing.jpg",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Matchday",
    category: "COMPETITION",
    description:
      "The atmosphere around competition captures the energy, focus and anticipation surrounding university sport.",
    image: "/images/behind-scenes/matchday.jpg",
    icon: Footprints,
  },
  {
    number: "04",
    title: "Teamwork",
    category: "TOGETHER",
    description:
      "Sport is built through communication, encouragement and the shared effort of teammates and supporters.",
    image: "/images/behind-scenes/teamwork.jpg",
    icon: Users,
  },
  {
    number: "05",
    title: "The Moments Between",
    category: "THE EXPERIENCE",
    description:
      "Some of the most memorable sporting experiences happen away from the scoreboard.",
    image: "/images/behind-scenes/moments-between.jpg",
    icon: Camera,
  },
];

function SceneCard({
  scene,
  featured = false,
}: {
  scene: BehindScene;
  featured?: boolean;
}) {
  const Icon = scene.icon;

  return (
    <article
      className={`behind-scene-card ${
        featured ? "behind-scene-card-featured" : ""
      }`}
    >
      <div className="behind-scene-image">
        <img
          src={scene.image}
          alt={scene.title}
          loading="eager"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="behind-scene-placeholder">
          <Icon size={32} strokeWidth={1.3} />
        </div>

        <span className="behind-scene-number">
          {scene.number}
        </span>

        <div className="behind-scene-overlay" />

        <div className="behind-scene-caption">
          <small>{scene.category}</small>
          <h3>{scene.title}</h3>
        </div>
      </div>

      <div className="behind-scene-content">
        <p>{scene.description}</p>
      </div>
    </article>
  );
}

function BehindTheScenes() {
  return (
    <MagazinePage className="behind-scenes-page">
      <header className="behind-scenes-header">
        <div>
          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            BEHIND THE
            <br />
            <em>SCENES</em>
          </h2>
        </div>

        <div className="behind-scenes-page-number">
          29
        </div>
      </header>

      <section className="behind-scenes-intro">
        <div>
          <span>WHAT THE CAMERA DOESN'T ALWAYS SHOW</span>

          <h3>
            Before the whistle.
            <br />
            <em>After the applause.</em>
          </h3>
        </div>

        <div className="behind-scenes-intro-copy">
          <p>
            Sporting moments are created long before the
            competition begins. Training, preparation,
            communication and teamwork all contribute to
            what eventually happens on the field or court.
          </p>

          <p>
            This collection focuses on the people and moments
            around competition — the work that makes the
            visible moments possible.
          </p>
        </div>
      </section>

      <section className="behind-scenes-feature">
        <div className="behind-scenes-feature-mark">
          <Camera size={27} strokeWidth={1.5} />
        </div>

        <div>
          <span>THROUGH THE LENS</span>

          <strong>
            The story continues
            <br />
            between the big moments.
          </strong>
        </div>

        <div className="behind-scenes-feature-number">
          29
        </div>
      </section>

      <section className="behind-scenes-grid">
        <SceneCard
          scene={scenes[0]}
          featured
        />

        <SceneCard scene={scenes[1]} />

        <SceneCard scene={scenes[2]} />

        <SceneCard scene={scenes[3]} />

        <SceneCard scene={scenes[4]} />
      </section>

      <section className="behind-scenes-closing">
        <div className="behind-scenes-closing-line" />

        <div className="behind-scenes-closing-content">
          <span>TTU SPORTS & ATHLETICS</span>

          <strong>
            The work behind
            <br />
            <em>the moment.</em>
          </strong>
        </div>
      </section>

      <footer className="behind-scenes-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>29</span>
      </footer>
    </MagazinePage>
  );
}

export default BehindTheScenes;