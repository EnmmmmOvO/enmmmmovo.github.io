import Link from "next/link";
import Image from "next/image";

import blogs from "@/data/featured-portfolios";
import RevealText from "../animation/RevealText";
import BackgroundParallax from "../animation/BackgroundParallax";
import AnimatedButton from "../animation/AnimatedButton";
import { getTranslations } from 'next-intl/server';
import { CONFIG, PortfolioIntl } from '@/config';

export default async function FeaturedPortfolios() {
  const t = await getTranslations("home");

  return (
    <div className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-9 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type anim-uni-in-up">
                      {t("selectedWriting")}
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text={t("viewMore")}
                      as="a"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href={CONFIG.PORTFOLIOS.base}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}
        {/* Block - Blog Preview Cards Start */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {blogs.map(async (item, idx) => {
                  const tData = await getTranslations(PortfolioIntl(item.id));

                  return <div
                    key={idx}
                    className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
                  >
                    <Link
                      className="mxd-blog-preview__media"
                      href={CONFIG.PORTFOLIOS.detail(item.id)}
                    >
                      <BackgroundParallax
                        className={`mxd-blog-preview__image parallax-img-small`}
                        style={{backgroundImage: `url(${item.imgSrc})`}}
                      />
                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <Image
                            alt="Eye Icon"
                            src="/img/icons/icon-eye.svg"
                            width={38}
                            height={21}
                          />
                        </i>
                      </div>
                      <div className="mxd-blog-preview__tags">
                        {(tData.raw("tags") as string[]).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="tag tag-default tag-permanent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    <div className="mxd-blog-preview__data">
                      <Link className="anim-uni-in-up" href={CONFIG.PORTFOLIOS.detail(item.id)} >
                        {tData("homeTitle.before")}{" "}
                        <span>{tData("homeTitle.highlight")}</span>{" "}
                        {tData("homeTitle.after")}
                      </Link>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Blog Preview Cards End */}
      </div>
    </div>
  );
}
