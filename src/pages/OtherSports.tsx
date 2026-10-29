import { ArrowUpRight, Shield, Target, Zap } from "lucide-react";
import MagazinePage from "../components/MagazinePage";
import "./OtherSports.css";

function OtherSports() {
  return (
    <MagazinePage className="other-sports-page">
      <header className="other-sports-header">
        <div>
          <span className="section-kicker">
            TTU SPORTS & ATHLETICS · 2026
          </span>

          <h1>
            OTHER
            <br />
            <em>SPORTS</em>
          </h1>
        </div>

        <div className="other-sports-number">22</div>
      </header>

      <section className="other-sports-intro">
        <div>
          <span className="other-sports-label">BEYOND THE MAIN TEAMS</span>

          <h2>
            Discipline.
            <br />
            <em>Precision.</em>
          </h2>
        </div>

        <p>
          University sport extends beyond the major team competitions.
          Other sporting disciplines provide students with opportunities
          to develop individual skill, discipline, confidence and
          competitive spirit.
        </p>
      </section>

      <article className="karate-feature">
        <div className="karate-image">
          <img
            src="/images/other-sports/karate.jpg"
            alt="Karate at Taita Taveta University"
          />

          <span className="karate-image-number">01</span>
        </div>

        <div className="karate-content">
          <div className="karate-heading">
            <span>OTHER SPORT · 01</span>

            <h3>
              KARATE
              <br />
              <em>Martial Arts</em>
            </h3>
          </div>

          <p className="karate-description">
            Karate brings together physical preparation, technical
            precision, discipline and mental focus. The sport challenges
            athletes to develop control, confidence and consistency
            through structured training and competition.
          </p>

          <div className="karate-principles">
            <div>
              <Shield size={20} />
              <span>DISCIPLINE</span>
            </div>

            <div>
              <Target size={20} />
              <span>PRECISION</span>
            </div>

            <div>
              <Zap size={20} />
              <span>FOCUS</span>
            </div>
          </div>

          <div className="karate-note">
            <span>01</span>
            <p>
              A sport built around technique, control and determination.
            </p>
          </div>
        </div>
      </article>

      <footer className="other-sports-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>22</span>
      </footer>
    </MagazinePage>
  );
}

export default OtherSports;