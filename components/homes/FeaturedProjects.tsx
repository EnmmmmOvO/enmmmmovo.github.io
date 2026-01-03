import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import RevealText from '@/components/animation/RevealText';
import AnimatedButton from '@/components/animation/AnimatedButton';
import data from '@/data/featured-projects';
import { getTranslations } from 'next-intl/server';
import { ProjectIntl } from '@/config';

export default async function FeaturedProjects() {
  const t = await getTranslations("home");

  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - FeaturedProjects/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="row g-0">
            <div className="col-12 col-xl-9 mxd-grid-item no-margin">
              <div className="mxd-section-title__hrtitle anim-uni-in-up">
                <RevealText as="h2" className="reveal-type">
                  {t("featuredProjects")}
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-3 mxd-grid-item no-margin">
              <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                <AnimatedButton
                  text={t("viewMore")}
                  as="a"
                  className="btn btn-anim btn-default btn-outline slide-right-up"
                  href={`/projects`}
                >
                  <i className="ph-bold ph-arrow-up-right" />
                </AnimatedButton>
              </div>
            </div>
          </div>
          <div className="content__block">
            <StackCards className="stack-wrapper">
              {data.map(async (item) => {
                const tData = await getTranslations(ProjectIntl(item.id));
                return (
                  <div className={`mxd-services-stack__inner justify-between ${item.containerClass}`} key={item.id}>
                    <div className="mxd-services-stack__controls">
                      <Link
                        className={`btn btn-round btn-round-large slide-right-up anim-no-delay ${item.buttonClass}`}
                        href={item.href}
                      >
                        <i className="ph ph-arrow-up-right" />
                      </Link>
                    </div>

                    <div className="mxd-services-stack__title width-60">
                      <h3 className={item.titleClass}>{tData("title")}</h3>
                    </div>

                    <div className="mxd-services-stack__info width-60">
                      <div className="mxd-services-cards__tags">
                        {(tData.raw("tags") as string[]).map((tag, i) => (
                          <span
                            key={i}
                            className={`tag tag-default ${item.tagClass}`}
                          >
                          {tag}
                        </span>
                        ))}
                      </div>

                      <p className={item.textClass}>{tData("homeDesc")}</p>
                    </div>

                    <div className="services-stack__image">
                      <Image
                        className="service-img service-img-s"
                        src={item.imageSmall}
                        alt="Service/Feature Image"
                        width={800}
                        height={800}
                      />
                      <Image
                        className="service-img service-img-m"
                        src={item.imageLarge}
                        alt="Service/Feature Image"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                );
              })}
            </StackCards>
          </div>
        </div>
        {/* Block - FeaturedProjects/Features Stacking Cards End */}
      </div>
    </div>
  );
}
