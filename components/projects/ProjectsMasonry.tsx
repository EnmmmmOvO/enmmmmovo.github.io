import Link from "next/link";
import MasonryGrid from "../animation/MasonryGrid";
import projects from "@/data/projects";
import BackgroundParallax from "../animation/BackgroundParallax";
import { CONFIG, ProjectIntl } from '@/config';
import { getTranslations } from 'next-intl/server';

export default async function ProjectsMasonry() {
  const t = await getTranslations(ProjectIntl());

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
                      {t("projectTitle1")}
                      <br />
                      {t("projectTitle2")}
                    </h1>
                  </div>
                </div>
                {/* portfolio gallery single item */}
                {projects.map(async (item, index) => {
                  const tData = await getTranslations(ProjectIntl(item.id));

                  return <div
                    key={index}
                    className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item"
                  >
                    <Link
                      className="mxd-project-item__media masonry-media"
                      href={CONFIG.PROJECTS.detail(item.id)}
                    >
                      <BackgroundParallax
                        className={`mxd-project-item__preview masonry-preview parallax-img-small`}
                        style={{backgroundImage: `url(${item.src})`}}
                      />
                      <div className="mxd-project-item__tags">
                        {(tData.raw("tags") as string[]).map((tag, idx) => (
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
                        <Link href={CONFIG.PROJECTS.detail(item.id)} >
                          <span>{tData("preview.title")}</span> {item.description && tData("preview.description")}
                        </Link>
                      </div>
                    </div>
                  </div>
                })}
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
