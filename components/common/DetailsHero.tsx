import AnimatedButton from "../animation/AnimatedButton";
import { LinkProps } from '@/types/project';
import Markdown from '@/components/common/Markdown';
import { getTranslations } from 'next-intl/server';
import { CONFIG, PortfolioIntl, ProjectIntl } from '@/config';

const projectDetail = [ ["date", "role"], ["technologies", "context"] ];
const portfolioDetail = [ ["date", "technologies"], ["context", "wordCount"] ];

export default async function DetailsHero({ intlKey, ignoreDetails, links, portfolio } : {
  intlKey: string,
  ignoreDetails?: string[]
  links: LinkProps[],
  portfolio?: boolean
}) {
  const t = await getTranslations(portfolio ? PortfolioIntl() : ProjectIntl());
  const tData = await getTranslations(intlKey);

  const label = portfolio ? portfolioDetail : projectDetail;

  return (
    <div className="mxd-section mxd-section-inner-headline padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Inner Page Headline Start */}
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* Inner Headline Name Start */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-project-link loading__fade">
                  <AnimatedButton
                    text={t("listPage")}
                    as={"a"}
                    className="btn btn-anim btn-line-small btn-muted slide-right-up"
                    href={portfolio ? CONFIG.PORTFOLIOS.base : CONFIG.PROJECTS.base }
                  >
                    <i className="ph ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>
              {/* Inner Headline Name Start */}
              {/* Inner Headline Content Start */}
              <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className="inner-headline__title">{tData("title")}</h1>
                  </div>
                </div>
              </div>
              {/* Inner Headline Content End */}
              {/* Inner Headline Aside Start */}
              <div className="col-12" />
              {/* Inner Headline Aside End */}
            </div>
            <div className="row g-0">
              <div className="col-12 col-xl-2" />
              {/* Inner Headline Paragraph & Data Start */}
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="inner-headline__paragraph loading__item">
                  <Markdown>{tData("desc")}</Markdown>
                </div>
                <div className="inner-headline__data">
                  <div className="mxd-data-list">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {label.map((group, colIndex) => (
                          <div
                            className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item"
                            key={colIndex}
                          >
                            {group.map((item, index) => {
                              if (ignoreDetails && ignoreDetails.includes(item)) {
                                return null;
                              }
                              return (<div className="mxd-data-list__item" key={`${colIndex}-${index}`}>
                                <p className="mxd-data-list__name">{t(item)}</p>
                                <p className="mxd-data-list__content">{tData(item)}</p>
                              </div>);
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Inner Headline Paragraph & Data End */}
              {/* Inner Headline Tags Start */}
              <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                <div className="inner-headline__tags loading__fade">
                  {
                    links.map((item, index) => (
                      <AnimatedButton
                        text={t(item.text)}
                        as={"div"}
                        key={`${new Date().getTime()}${index}`}
                        className="btn btn-anim btn-small btn-muted slide-right-up "
                        href={item.href}
                      >
                        <i className="ph ph-arrow-up-right" />
                      </AnimatedButton>
                    ))
                  }
                  <div className="inner-headline__margin" />
                  {(tData.raw("tags") as string[]).map((tag, index) => (
                    <span className="tag tag-default tag-outline-medium" key={`tag-${index}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Inner Headline Tags End */}
          </div>
        </div>
        {/* Block - Inner Page Headline End */}
      </div>
    </div>
  );
}
