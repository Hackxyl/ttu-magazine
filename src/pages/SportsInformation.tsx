import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import MagazinePage from "../components/MagazinePage";
import "./SportsInformation.css";

function SportsInformation() {
  return (
    <MagazinePage className="sports-information-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="sports-information-header">
        <div>
          <span className="section-kicker">
            TTU SPORTS & ATHLETICS · 2026
          </span>

          <h1>
            SPORTS
            <br />
            <em>INFORMATION</em>
          </h1>
        </div>

        <div className="sports-information-number">38</div>
      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="sports-information-intro">
        <div>
          <span className="sports-information-label">
            STAY CONNECTED
          </span>

          <h2>
            Find your
            <br />
            <em>place in sport.</em>
          </h2>
        </div>

        <p>
          University sport brings students together through
          participation, competition and community. Use the official
          university communication channels for current information
          about sporting activities, fixtures, registration and events.
        </p>
      </section>

      {/* =====================================================
          MAIN INFORMATION AREA
      ===================================================== */}
      <section className="sports-information-main">
        {/* ---------------------------------------------------
            PARTICIPATE
        --------------------------------------------------- */}
        <article className="sports-information-feature">
          <div className="information-feature-number">01</div>

          <div className="information-feature-icon">
            <Trophy size={25} />
          </div>

          <div>
            <span>GET INVOLVED</span>

            <h3>
              Find a sport.
              <br />
              <em>Join the community.</em>
            </h3>

            <p>
              Students interested in participating in university sport
              should follow the official communication from the
              university and relevant sports leadership for registration,
              trials, training and competition information.
            </p>
          </div>
        </article>

        {/* ---------------------------------------------------
            QUICK INFORMATION
        --------------------------------------------------- */}
        <div className="sports-information-grid">
          <article className="information-card">
            <div className="information-card-icon">
              <CalendarDays size={20} />
            </div>

            <span>01</span>

            <h3>Fixtures & Events</h3>

            <p>
              Check official university announcements for current
              fixtures, competitions and sporting events.
            </p>
          </article>

          <article className="information-card">
            <div className="information-card-icon">
              <Users size={20} />
            </div>

            <span>02</span>

            <h3>Teams & Membership</h3>

            <p>
              Students can follow the appropriate university process
              for joining or expressing interest in a sporting team.
            </p>
          </article>

          <article className="information-card">
            <div className="information-card-icon">
              <MapPin size={20} />
            </div>

            <span>03</span>

            <h3>Venues</h3>

            <p>
              Training and competition venues may vary by sport and
              event. Confirm venue details through official notices.
            </p>
          </article>

          <article className="information-card">
            <div className="information-card-icon">
              <Trophy size={20} />
            </div>

            <span>04</span>

            <h3>Results & Updates</h3>

            <p>
              Follow official university communication for confirmed
              results, announcements and sporting updates.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}
      <section className="sports-contact-strip">
        <div className="sports-contact-heading">
          <span>SPORTS CONTACT</span>

          <h3>
            Official
            <br />
            <em>information.</em>
          </h3>
        </div>

        <div className="sports-contact-details">
          <div className="contact-detail">
            <Mail size={17} />

            <div>
              <span>EMAIL</span>
              <strong>sports@ttu.ac.ke</strong>
            </div>
          </div>

          <div className="contact-detail">
            <Phone size={17} />

            <div>
              <span>PHONE</span>
              <strong>Official contact to be confirmed</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICIAL SOURCE NOTE
      ===================================================== */}
      <section className="sports-information-note">
  <span>IMPORTANT NOTICE</span>

  <p>
    TTU SportsHub is currently under development and will provide
    a centralized platform for sports schedules, registration,
    venue updates and official sporting announcements.
  </p>
</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="sports-information-footer">
        <span>SPORTS MAGAZINE · 2026</span>

        <div>
          <ArrowUpRight size={15} />
          TAITA TAVETA UNIVERSITY
        </div>

        <span>38</span>
      </footer>
    </MagazinePage>
  );
}

export default SportsInformation;