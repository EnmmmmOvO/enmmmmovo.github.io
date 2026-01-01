import Link from "next/link";
import MasonryGrid from "../animation/MasonryGrid";
import projects from "@/data/projects";
import BackgroundParallax from "../animation/BackgroundParallax";

export default function ProjectsMasonry() {
  return (
    <div className="mxd-section mxd-section-inner-headline grid-headline padding-default">
      <div className="mxd-container grid-l-container">
        {/* Block - Projects Masonry #01 with Section Title Start */}
        <div className="mxd-block loading-wrap">
          <div className="mxd-projects-masonry loading__item">
            <div className="container-fluid p-0">
              {/* Portfolio Gallery Start */}
              <MasonryGrid
                className="row g-0 mxd-projects-masonry__gallery"
                data-masonry='{"percentPosition": true }'
                itemSelector=".mxd-projects-masonry__item"
              >
                {/* portfolio gallery title */}
                <div className="col-12 col-xl-6 mxd-projects-masonry__item mxd-projects-masonry__title headline-title">
                  <div className="mxd-block__inner-headline">
                    <h1 className="inner-headline__title headline-img-07">
                      Projects
                      <br />
                      to explore
                    </h1>
                  </div>
                </div>
                {/* portfolio gallery single item */}
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item"
                  >
                    <Link
                      className="mxd-project-item__media masonry-media"
                      href={item.url}
                    >
                      <BackgroundParallax
                        className={`mxd-project-item__preview masonry-preview parallax-img-small`}
                        style={{ backgroundImage: `url(${item.src})` }}
                      />
                      <div className="mxd-project-item__tags">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="tag tag-default tag-permanent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                    <div className="mxd-project-item__promo masonry-promo">
                      <div className="mxd-project-item__name">
                        <Link href={`/project-details`}>
                          <span>{item.title}</span> {item.description}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {/* portfolio gallery single item */}
              </MasonryGrid>
              {/* Portfolio Gallery End */}
            </div>
          </div>
        </div>
        {/* Block - Projects Masonry #01 with Section Title Start */}
      </div>
    </div>
  );
}
