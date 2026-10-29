import { ArrowUpRight } from "lucide-react";
import MagazinePage from "../components/MagazinePage";
import { galleryPages } from "../data/galleryData";

function SportsGallery() {
  return (
    <>
      {galleryPages.map((page, pageIndex) => (
        <MagazinePage
          key={page.number}
          className={`gallery-page gallery-page-${pageIndex + 1}`}
        >
          <header className="gallery-header">
            <div>
              <span className="section-kicker">
                {page.kicker}
              </span>

              <h2>
                {page.title}
                <br />
                <em>{page.italicTitle}</em>
              </h2>
            </div>

            <div className="gallery-page-number">
              {page.number}
            </div>
          </header>

          <section className="gallery-intro">
            <div>
              <span className="gallery-intro-kicker">
                THROUGH THE LENS
              </span>

              <h3>
                {pageIndex === 0 && (
                  <>
                    Movement.
                    <br />
                  </>
                )}

                {pageIndex === 1 && (
                  <>
                    Together.
                    <br />
                  </>
                )}

                {pageIndex === 2 && (
                  <>
                    Creativity.
                    <br />
                  </>
                )}

                {pageIndex === 3 && (
                  <>
                    Identity.
                    <br />
                  </>
                )}

                {pageIndex === 4 && (
                  <>
                    Community.
                    <br />
                  </>
                )}

                <em>Expression.</em>
              </h3>
            </div>

            <p>
              {page.intro}
            </p>
          </section>

          <section
            className={`gallery-grid gallery-grid-${pageIndex + 1}`}
          >
            {page.photos.map((photo, index) => (
              <figure
                className={`gallery-photo gallery-photo-${index + 1}`}
                key={photo.id}
              >
                <img
                  src={photo.image}
                  alt={photo.caption}
                />

                <div className="gallery-photo-overlay" />

                <span className="gallery-photo-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <figcaption>
                  <small>
                    {photo.category}
                  </small>

                  <strong>
                    {photo.caption}
                  </strong>
                </figcaption>
              </figure>
            ))}
          </section>

          <footer className="gallery-footer">
            <span>
              SPORTS MAGAZINE · 2026
            </span>

            <div>
              <ArrowUpRight size={15} />
              TAITA TAVETA UNIVERSITY
            </div>

            <span>
              {page.number}
            </span>
          </footer>
        </MagazinePage>
      ))}
    </>
  );
}

export default SportsGallery;