import RevealText from "@/components/animation/RevealText";

import education from "@/data/education";
import { Experience2 } from "@/types/experiences";
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { EducationIntl } from '@/config';

export default async function Education() {
  const t = await getTranslations("home");
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Stack Universal Pinned Block with Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-pinned-universal">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-pinned-universal__static">
                  <div className="mxd-pinned-universal__static-inner no-margin">
                    {/* Section Title Start */}
                    <div className="mxd-section-title h2-only no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title card-split-title">
                              <RevealText as="h2" className="reveal-type">
                                {t("MyEducation")}
                              </RevealText>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Section Title Start */}
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-pinned-universal__scroll">
                  <div className="mxd-pinned-universal__scroll-inner mxd-grid-item no-margin">
                    <div className="mxd-res-list">
                      {education.map(async (item: Experience2, idx: number) => {
                        const tData = await getTranslations(EducationIntl(item.id));
                        return <div className="mxd-res-list__item" key={idx}>
                          <div className="mxd-res-list__divider anim-uni-in-up"/>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">{tData("title")}</h4>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  {`${t("courseBy")} `}
                                  <a href={item.institutionUrl} target="_blank">
                                    {tData("institution")}
                                  </a>
                                </p>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">{tData("desc")}</p>
                                {
                                  item.logo && <span className="res-desc-icon res-desc-education-icon" aria-hidden>
                                    <Image src={item.logo} alt={tData("institution")} width={20} height={20}/>
                                  </span>
                                }
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">{tData("year")}</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"/>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Stack Universal Pinned Block with Section Title Start */}
      </div>
    </div>
  );
}
