import MagazinePage from "../components/MagazinePage";
import { magazineInfo } from "../data/magazineData";

function Cover() {
  return (
    <MagazinePage className="cover-page">

      {/* =====================================
          COVER IMAGE
      ====================================== */}

      <img
        className="cover-image"
        src="/images/cover/sport cover.jpeg"
        alt="Taita Taveta University Sports"
      />


      {/* =====================================
          IMAGE OVERLAY
      ====================================== */}

      <div className="cover-overlay" />


      {/* =====================================
          DECORATIVE ELEMENTS
      ====================================== */}

      <div className="cover-gold-line" />

      <div className="cover-corner cover-corner-top" />
      <div className="cover-corner cover-corner-bottom" />


      {/* =====================================
          COVER CONTENT
      ====================================== */}

      <div className="cover-content">

        {/* TOP */}
        <div className="cover-top">

          <div className="cover-brand">

            <img
              src="/images/logo/TTU-LOGO.png"
              alt="Taita Taveta University"
              className="ttu-logo"
            />

            <div className="cover-brand-text">

              <strong>
                TAITA TAVETA UNIVERSITY
              </strong>

              <span>
                SPORTS & ATHLETICS
              </span>

            </div>

          </div>


          <div className="cover-year">

            <span>
              EDITION
            </span>

            <strong>
              {magazineInfo.year}
            </strong>

          </div>

        </div>


        {/* CENTER */}
        <div className="cover-middle">

          <span className="cover-kicker">
            OFFICIAL SPORTS PUBLICATION
          </span>


          <h1>
            SPORTS
            <span>MAGAZINE</span>
          </h1>


          <div className="cover-title-rule" />


          <p>
            {magazineInfo.tagline}
          </p>

        </div>


        {/* BOTTOM */}
        <div className="cover-bottom">

          <div className="cover-bottom-left">

            <span>
              2026
            </span>

            <strong>
              TALENT · TEAMWORK · EXCELLENCE
            </strong>

          </div>


          <div className="cover-bottom-right">

            <span>
              TAITA TAVETA UNIVERSITY
            </span>

            <span>
              SPORTS & ATHLETICS
            </span>

          </div>

        </div>

      </div>

    </MagazinePage>
  );
}

export default Cover;