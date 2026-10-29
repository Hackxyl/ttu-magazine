import {
 
  Award,
  ShieldCheck,
  Users,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";
import "./Management.css";

interface FocusArea {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}

interface ManagementProfile {
  number: string;
  name: string;
  role: string;
  category: string;
  image: string;
  description: string;
  speech: string;
  focus: FocusArea[];
}

const managementTeam: ManagementProfile[] = [
  {
    number: "01",
    name: "Sports Manager",
    role: "SPORTS MANAGER",
    category: "SPORTS LEADERSHIP",
    image: "/images/management/sports cover.jpeg",

    description:
      "Provides leadership and oversight for university sports activities and coordination of sport across Taita Taveta University.",

    speech:
      "Sport is an important part of university life. It builds discipline, teamwork and leadership while giving students an opportunity to represent Taita Taveta University with pride. Our commitment is to create an environment where talent can grow and every student has an opportunity to participate. I encourage our athletes to remain dedicated, disciplined and committed both on and off the field.",

    focus: [
      {
        icon: ShieldCheck,
        title: "Leadership",
        text: "Direction and oversight for university sport.",
      },
      {
        icon: Users,
        title: "Team Support",
        text: "Supporting athletes and sporting teams.",
      },
      {
        icon: Award,
        title: "Excellence",
        text: "Encouraging discipline and sporting growth.",
      },
    ],
  },

  {
    number: "02",
    name: "Sports Coordinator",
    role: "SPORTS COORDINATOR", 
    category: "SPORTS MANAGEMENT",
    image: "/images/management/sports coordinator.jpeg",

    description:
      "Supports the organization and coordination of sporting activities, fixtures, competitions and related university sports programmes.",

    speech:
      "The success of university sport depends on preparation, coordination and the commitment of everyone involved. We work to support teams, organize sporting activities and create meaningful opportunities for students to compete and develop. I encourage our players to approach every fixture with discipline, respect and determination while continuing to grow through every sporting experience.",

    focus: [
      {
        icon: ShieldCheck,
        title: "Coordination",
        text: "Connecting activities and sporting programmes.",
      },
      {
        icon: Users,
        title: "Participation",
        text: "Creating opportunities for student involvement.",
      },
      {
        icon: Award,
        title: "Sporting Events",
        text: "Supporting organized and competitive sport.",
      },
    ],
  },

  {
    number: "03",
    name: "Ladies Games Representative",
    role: "LADIES GAMES",
    category: "WOMEN'S SPORTS",
    image: "/images/management/ladies-games.jpeg",

    description:
      "Supports the representation, coordination and development of ladies' sporting activities, helping create opportunities for women students to participate, compete and grow through university sport.",

    speech:
      "Women's sport provides an important platform for talent, confidence, leadership and personal development. We want our ladies to participate freely, compete confidently and know that their contribution matters. I encourage our teams to believe in themselves, support one another and remain committed to excellence as they represent Taita Taveta University.",

    focus: [
      {
        icon: ShieldCheck,
        title: "Representation",
        text: "Supporting women's participation in sport.",
      },
      {
        icon: Users,
        title: "Ladies Games",
        text: "Encouraging teamwork and participation.",
      },
      {
        icon: Award,
        title: "Development",
        text: "Creating space for talent and growth.",
      },
    ],
  },

  {
    number: "04",
    name: "CS of Sports",
    role: "CS OF SPORTS · SATTU",
    category: "STUDENT LEADERSHIP",
    image: "/images/management/cs-sports.jpeg",

    description:
      "Represents sports interests within SATTU and contributes to student leadership, engagement and advocacy around university sport.",

    speech:
      "Sport gives students more than an opportunity to compete. It builds leadership, discipline, teamwork and a strong sense of community. As student leaders, we have a responsibility to support athletes and advocate for meaningful participation. I encourage every athlete to represent Taita Taveta University with commitment, respect and pride.",

    focus: [
      {
        icon: ShieldCheck,
        title: "Leadership",
        text: "Supporting student leadership in sport.",
      },
      {
        icon: Users,
        title: "Student Voice",
        text: "Representing athletes and student interests.",
      },
      {
        icon: Award,
        title: "Sports Advocacy",
        text: "Promoting participation and engagement.",
      },
    ],
  },
];

function Management() {
  return (
    <>
      {managementTeam.map((person, index) => {
        const pageNumber = String(index + 4).padStart(2, "0");

        return (
          <MagazinePage
            key={person.number}
            className="management-page"
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <header className="management-header">
              <div>
                <span className="management-kicker">
                  TTU SPORTS & ATHLETICS · 2026
                </span>

                <h1>{person.name}</h1>

                <p>{person.role}</p>
              </div>

              <div className="management-page-number">
                {pageNumber}
              </div>
            </header>

            {/* =================================================
                PROFILE INTRO
            ================================================= */}

            <section className="management-profile-intro">
              <div className="management-profile-copy">
                <span className="management-label">
                  {person.category}
                </span>

                <h2>
                  Behind the
                  <br />
                  <em>sporting journey.</em>
                </h2>

                <p>{person.description}</p>
              </div>

              <div className="management-profile-index">
                <span>PROFILE</span>
                <strong>{person.number}</strong>
              </div>
            </section>

            {/* =================================================
                FEATURE IMAGE + ROLE
            ================================================= */}

            <section className="management-feature">
              <figure className="management-feature-image">
                <img
                  src={person.image}
                  alt={person.name}
                />

                <div className="management-feature-overlay" />

                <span className="management-feature-number">
                  {person.number}
                </span>

                <figcaption>
                  <span>TAITA TAVETA UNIVERSITY</span>
                  <strong>SPORTS · 2026</strong>
                </figcaption>
              </figure>

              <div className="management-feature-side">
                <span className="management-label">
                  ROLE IN SPORT
                </span>

                <h3>{person.role}</h3>

                <div className="management-gold-line" />

                <p>
                  {person.description}
                </p>

                <div className="management-feature-note">
                  <span>SPORTS MANAGEMENT</span>

                  <strong>
                    Leadership · Participation · Excellence
                  </strong>
                </div>
              </div>
            </section>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <section className="management-message">
              <div className="management-message-title">
                <span>MESSAGE FROM THE OFFICE</span>

                <h3>
                  A word from
                  <br />
                  <em>{person.name}</em>
                </h3>

                <div className="management-message-line" />
              </div>

              <div className="management-message-content">
                <span
                  className="management-quote"
                  aria-hidden="true"
                >
                  “
                </span>

                <p>{person.speech}</p>
              </div>
            </section>

            {/* =================================================
                FOCUS AREAS
            ================================================= */}

            <section className="management-focus">
              <header className="management-focus-header">
                <div>
                  <span>ROLE IN SPORT</span>

                  <h3>Key Focus Areas</h3>
                </div>

                <strong>03 AREAS</strong>
              </header>

              <div className="management-focus-grid">
                {person.focus.map(
                  ({ icon: Icon, title, text }, focusIndex) => (
                    <article
                      key={title}
                      className="management-focus-card"
                    >
                      <div className="management-focus-icon">
                        <Icon />
                      </div>

                      <div>
                        <span>
                          0{focusIndex + 1}
                        </span>

                        <h4>{title}</h4>

                        <p>{text}</p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </section>

            {/* =================================================
                FOOTER
            ================================================= */}

            <footer className="management-footer">
              

              <span className="management-footer-page">
                {pageNumber}
              </span>
            </footer>
          </MagazinePage>
        );
      })}
    </>
  );
}

export default Management;