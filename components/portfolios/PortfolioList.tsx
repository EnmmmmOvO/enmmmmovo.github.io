"use client";
import Link from "next/link";
import RevealText from "../animation/RevealText";
import porfolios from "@/data/portfolios.json";

export default function PortfolioList() {
  return (
    <div className="mxd-section overflow-hidden padding-grid-pre-mtext">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
          <div className="mxd-block">
            <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type anim-uni-in-up">
                      Portfolio archive
                    </RevealText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}
        {/* Block - Projects List #01 Start */}
        <div className="mxd-block">
          <div className="mxd-projects-list hover-reveal">
            {porfolios.map(item => (
              <Link
                key={item.id}
                className="mxd-projects-list__item hover-reveal__item"
                href={`/project-details`}
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
        {/* Block - Projects List #01 End */}
      </div>
    </div>
  );
}
