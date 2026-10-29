import {
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";

interface SupportRole {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: typeof Trophy;
  image?: string;
}

const supportRoles: SupportRole[] = [
  {
    id: "sports-management",
    number: "01",
    title: "Sports Management",
    category: "ADMINISTRATION",
    description:
      "The coordination, organisation and administration that help university sport operate effectively.",
    icon: Trophy,
    image: "/images/support/sports-management.jpg",
  },
  {
    id: "coaching",
    number: "02",
    title: "Coaching & Leadership",
    category: "TECHNICAL SUPPORT",
    description:
      "Coaches and team leaders guide preparation, discipline,and the development of athletes.",
    icon: Users,
    image: "/images/support/coaching.jpg",
  },
  {
    id: "health-fitness",
    number: "03",
    title: "Health & Fitness",
    category: "ATHLETE SUPPORT",
    description:
      "Physical preparation, wellbeing and responsible athlete support form an important part of sporting development.",
    icon: HeartPulse,
    image: "/images/support/health-fitness.jpg",
  },
  {
    id: "officials",
    number: "04",
    title: "Officials & Competition",
    category: "COMPETITION",
    description:
      "Officials and competition personnel help ensure sporting activities are conducted within the required rules.",
    icon: ShieldCheck,
    image: "/images/support/officials.jpg",
  },
  {
    id: "facilities",
    number: "05",
    title: "Facilities & Equipment",
    category: "SPORTING INFRASTRUCTURE",
    description:
      "Training areas and sporting equipment provide the foundation for preparation and competition.",
    icon: Dumbbell,
    image: "/images/support/facilities.jpg",
  },
  {
    id: "community",
    number: "06",
    title: "University Community",
    category: "SUPPORT NETWORK",
    description:
      "Students, staff and the university community contribute to the atmosphere surrounding TTU sport.",
    icon: Users,
    image: "/images/support/community.jpg",
  },
];

function SupportCard({
  role,
}: {
  role: SupportRole;
}) {
  const Icon = role.icon;

  return (
    <article className="support-card">
      <div className="support-card-image">
        {role.image ? (
          <img
            src={role.image}
            alt={role.title}
            loading="eager"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : null}

        <div className="support-card-image-placeholder">
          <Icon size={30} strokeWidth={1.4} />
        </div>

        <span className="support-card-number">
          {role.number}
        </span>
      </div>

      <div className="support-card-content">
        <span>{role.category}</span>

        <h3>{role.title}</h3>

        <p>{role.description}</p>
      </div>
    </article>
  );
}

function SupportSystem() {
  return (
    <MagazinePage className="support-page">
      <header className="support-header">
        <div>
          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            THE SUPPORT
            
          </h2>
        </div>

        <div className="support-page-number">
          26
        </div>
      </header>

      <section className="support-intro">
        <div className="support-intro-heading">
          <span>BEHIND EVERY ATHLETE</span>

          <h3>
            Sport is built
            
          </h3>
        </div>

        <div className="support-intro-copy">
          <p>
            Every sporting programme depends on a network of
            people, systems and resources working together
            behind the scenes.
          </p>

        </div>
      </section>

      <section className="support-feature">
        <div className="support-feature-icon">
          <Trophy size={28} strokeWidth={1.5} />
        </div>

        <div>
          <span>THE TEAM BEHIND THE TEAMS</span>

          <strong>
            They Lead
          </strong>
        </div>

        <div className="support-feature-mark">
          26
        </div>
      </section>

      <section className="support-grid">
        {supportRoles.map((role) => (
          <SupportCard
            key={role.id}
            role={role}
          />
        ))}
      </section>

      <section className="support-closing">
        <div className="support-closing-line" />

        <div className="support-closing-content">
          <span>TTU SPORTS & ATHLETICS</span>

          <strong>
            Strong teams need
            <br />
            <em>strong support.</em>
          </strong>
        </div>
      </section>

      <footer className="support-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>26</span>
      </footer>
    </MagazinePage>
  );
}

export default SupportSystem;