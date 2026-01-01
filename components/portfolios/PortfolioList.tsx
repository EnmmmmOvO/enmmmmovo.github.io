"use client";
import Link from "next/link";
import portfolios from "@/data/portfolios";

export default function PortfolioList() {
  return (
    <div className="mxd-section mxd-section-inner-headline grid-headline padding-default">
      <div className="mxd-container grid-l-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block loading-wrap">
            <div className="mxd-projects-masonry__title headline-title loading__item">
              <div className="mxd-block__inner-headline">
                <h1 className="inner-headline__title headline-img-07">
                  Portfolios to explore
                </h1>
              </div>
            </div>
            {/* Block - Section Title End */}
            {/* Block - Projects List #01 Start */}
            <div className="mxd-block loading__item">
              <div className="mxd-projects-list hover-reveal">
                {portfolios.map(item => (
                  <Link
                    key={item.id}
                    className="mxd-projects-list__item hover-reveal__item"
                    href={item.url}
                  >
                    <div className="mxd-projects-list__border anim-uni-in-up" />
                    <div className="mxd-projects-list__inner">
                      <div className="container-fluid px-0">
                        <div className="row gx-0">
                          <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                            <div className="mxd-projects-list__title anim-uni-in-up">
                              <div className="mxd-projects-list__icon">
                                <i className="ph ph-arrow-right" />
                              </div>
                              <p>{item.title}</p>
                            </div>
                          </div>
                          <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                            <div className="mxd-projects-list__tagslist">
                              <ul>
                                {item.tags.map((t, i) => (
                                  <li key={i} className="anim-uni-in-up">
                                    <p className="t-small">{t}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                            <div className="mxd-projects-list__date anim-uni-in-up">
                              <p className="t-small">{item.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mxd-projects-list__border anim-uni-in-up" />
                  </Link>
                ))}
              </div>
            </div>
        </div>
        {/* Block - Projects List #01 End */}
      </div>
    </div>
  );
}
