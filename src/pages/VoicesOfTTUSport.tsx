import {
  ArrowUpRight,
  MessageCircle,
  Mic2,
  Quote,
  Trophy,
  UserRound,
} from "lucide-react";

import MagazinePage from "../components/MagazinePage";

interface SportVoice {
  id: string;
  name: string;
  role: string;
  sport: string;
  image: string;
  quote: string;
}

const voices: SportVoice[] = [
  {
    id: "voice-01",
    name: "NAME",
    role: "TEAM CAPTAIN",
    sport: "VOLLEYBALL",
    image: "/images/voices/voice-01.jpg",
    quote:
      "VERIFIED QUOTE FROM THE ATHLETE OR CAPTAIN.",
  },

  {
    id: "voice-02",
    name: "NAME",
    role: "TEAM CAPTAIN",
    sport: "FOOTBALL",
    image: "/images/voices/voice-02.jpg",
    quote:
      "VERIFIED QUOTE FROM THE ATHLETE OR CAPTAIN.",
  },

  {
    id: "voice-03",
    name: "NAME",
    role: "ATHLETE",
    sport: "ATHLETICS",
    image: "/images/voices/voice-03.jpg",
    quote:
      "VERIFIED QUOTE FROM THE ATHLETE.",
  },

  {
    id: "voice-04",
    name: "NAME",
    role: "COACH",
    sport: "SPORT",
    image: "/images/voices/voice-04.jpg",
    quote:
      "VERIFIED QUOTE FROM THE COACH OR TEAM OFFICIAL.",
  },
];

function VoiceCard({
  voice,
  index,
}: {
  voice: SportVoice;
  index: number;
}) {
  return (
    <article className="voice-card">

      <div className="voice-card-top">

        <div className="voice-card-photo">

          <img
            src={voice.image}
            alt={`${voice.name} — ${voice.sport}`}
            loading="eager"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <span className="voice-card-number">
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>

        <div className="voice-card-meta">

          <span>{voice.sport}</span>

          <h3>
            {voice.name}
          </h3>

          <p>
            <UserRound size={13} />
            {voice.role}
          </p>

        </div>

      </div>

      <div className="voice-card-quote">

        <Quote size={22} />

        <p>
          {voice.quote}
        </p>

      </div>

    </article>
  );
}

function VoicesOfTTUSport() {
  return (
    <MagazinePage className="voices-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="voices-header">

        <div>

          <span className="section-kicker">
            TAITA TAVETA UNIVERSITY · 2026
          </span>

          <h2>
            VOICES OF
            <br />
            <em>TTU SPORT</em>
          </h2>

        </div>

        <div className="voices-page-number">
          25
        </div>

      </header>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="voices-intro">

        <div className="voices-intro-heading">

          <span>
            BEYOND THE SCOREBOARD
          </span>

          <h3>
            The people
            <br />
            <em>behind the game.</em>
          </h3>

        </div>

        <div className="voices-intro-copy">

          <p>
            Sport is shaped not only by results, but also by
            the people who train, compete, lead and support
            the teams.
          </p>

          <p>
            These voices offer a glimpse into the experiences,
            ambitions and values that define sport at
            Taita Taveta University.
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURE QUOTE
      ===================================================== */}

      <section className="voices-feature">

        <div className="voices-feature-mark">
          <MessageCircle size={28} />
        </div>

        <div>

          <span>
            THE SPIRIT OF SPORT
          </span>

          <strong>
            Competition creates the moment,
            <br />
            but teamwork creates the journey.
          </strong>

        </div>

        <div className="voices-feature-icon">
          <Trophy size={28} />
        </div>

      </section>


      {/* =====================================================
          VOICES
      ===================================================== */}

      {voices.length > 0 ? (

        <section className="voices-grid">

          {voices.map((voice, index) => (
            <VoiceCard
              key={voice.id}
              voice={voice}
              index={index}
            />
          ))}

        </section>

      ) : (

        <section className="voices-empty">

          <div className="voices-empty-icon">
            <Mic2 size={25} />
          </div>

          <div>

            <span>
              TTU SPORTING VOICES
            </span>

            <h3>
              Stories waiting to be heard.
            </h3>

            <p>
              Verified statements from athletes,
              captains, coaches and sports officials
              can be added here.
            </p>

          </div>

        </section>

      )}


      {/* =====================================================
          EDITORIAL CLOSING
      ===================================================== */}

      <section className="voices-closing">

        <div className="voices-closing-line" />

        <div className="voices-closing-content">

          <span>
            SPORT IS MORE THAN COMPETITION
          </span>

          <strong>
            It is discipline.
            It is community.
            <em>It is identity.</em>
          </strong>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="voices-footer">

        <span>
          SPORTS MAGAZINE · 2026
        </span>

        <div>
          <ArrowUpRight size={15} />
          TTU SPORTS & ATHLETICS
        </div>

        <span>
          25
        </span>

      </footer>

    </MagazinePage>
  );
}

export default VoicesOfTTUSport;