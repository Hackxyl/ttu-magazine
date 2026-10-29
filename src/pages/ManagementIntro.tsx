import {
  ArrowRight,
  Award,
  Trophy,
  Users,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";
import "./ManagementIntro.css";

function ManagementIntro() {
  return (
    <MagazinePage className="management-intro-page">
      <header className="management-intro-header">
        <div>
          <span className="section-kicker">
            TTU SPORTS & ATHLETICS · 2026
          </span>

          <h1>
            SPORTS
            <br />
            <em>MANAGEMENT</em>
          </h1>
        </div>

        <div className="management-intro-number">
          03
        </div>
      </header>

      <section className="management-intro-hero">
        <div className="management-intro-hero-copy">
          <span className="management-intro-label">
            THE PEOPLE BEHIND THE GAME
          </span>

          <h2>
            Leadership that
            <br />
            <em>moves sport forward.</em>
          </h2>

          <p>
            University sport is built on more than competition.
            Behind every training session, fixture, team and
            sporting opportunity is a network of people who
            provide leadership, coordination and support.
          </p>

          <p>
            At Taita Taveta University, sports management brings
            together institutional leadership, coordination,
            student representation and support for ladies' games
            to help create an environment where students can
            participate, compete and develop through sport.
          </p>
        </div>

        <div className="management-intro-side">
          <div className="management-intro-stat">
            <strong>01</strong>

            <span>LEADERSHIP</span>

            <p>
              Providing direction and supporting the growth of
              university sport.
            </p>
          </div>

          <div className="management-intro-stat">
            <strong>02</strong>

            <span>COORDINATION</span>

            <p>
              Connecting teams, activities, competitions and
              sporting programmes.
            </p>
          </div>

          <div className="management-intro-stat">
            <strong>03</strong>

            <span>REPRESENTATION</span>

            <p>
              Ensuring students and athletes have a voice in
              university sport.
            </p>
          </div>
        </div>
      </section>

      <section className="management-intro-quote">
        <div className="management-intro-quote-mark">
          “
        </div>

        <div>
          <p>
            Strong sporting programmes are built through
            leadership, teamwork, opportunity and a shared
            commitment to student development.
          </p>

          <span>
            TTU SPORTS & ATHLETICS · 2026
          </span>
        </div>
      </section>

      <section className="management-intro-roles">
        <div className="management-intro-role">
          <div className="management-intro-role-icon">
            <Trophy size={20} />
          </div>

          <div>
            <strong>SPORTS LEADERSHIP</strong>
            <span>
              Direction · Development · Excellence
            </span>
          </div>
        </div>

        <div className="management-intro-role">
          <div className="management-intro-role-icon">
            <Users size={20} />
          </div>

          <div>
            <strong>STUDENT PARTICIPATION</strong>
            <span>
              Teams · Athletes · Community
            </span>
          </div>
        </div>

        <div className="management-intro-role">
          <div className="management-intro-role-icon">
            <Award size={20} />
          </div>

          <div>
            <strong>SPORTING EXCELLENCE</strong>
            <span>
              Discipline · Competition · Growth
            </span>
          </div>
        </div>
      </section>

      <footer className="management-intro-footer">
        <div>
          <span>SPORTS MANAGEMENT</span>

          <strong>
            LEADERSHIP · PARTICIPATION · EXCELLENCE
          </strong>
        </div>

        <div className="management-intro-footer-link">
          <span>MEET THE TEAM</span>
          <ArrowRight size={16} />
        </div>

        <span className="management-intro-page-number">
          03
        </span>
      </footer>
    </MagazinePage>
  );
}

export default ManagementIntro;