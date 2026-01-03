import Link from "next/link";

import AnimatedButton from "../animation/AnimatedButton";
import { RelatedProjectProps } from '@/types/project';
import { getTranslations } from 'next-intl/server';
import { CONFIG, ProjectIntl, PortfolioIntl } from '@/config';

export default async function NextPrevNavigation({ related, portfolio } : {
  related: RelatedProjectProps,
  portfolio?: boolean
}) {
  const intlFunc = portfolio ? PortfolioIntl : ProjectIntl;
  const urlFunc = portfolio ? CONFIG.PORTFOLIOS.detail : CONFIG.PROJECTS.detail;

  const t =  await getTranslations(intlFunc());
  const prevText = related.prev ? (await getTranslations(intlFunc(related.prev)))("title") : null;
  const nextText = related.next ? (await getTranslations(intlFunc(related.next)))("title") : null;

  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project__nav">
        <div className="mxd-project__divider anim-uni-in-up" />
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
              {
                related.prev && <>
                  <AnimatedButton
                    text={t("prev")}
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left"
                    href={urlFunc(related.prev)}
                  >
                    <i className="ph ph-arrow-left"/>
                  </AnimatedButton>
                  <Link
                    className="mxd-project__link anim-uni-in-up"
                    href={urlFunc(related.prev)}
                  >
                    <span>{prevText}</span>
                  </Link>
                </>
              }
            </div>
            <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
              {
                related.next && <>
                  <AnimatedButton
                    text={t("next")}
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right"
                    href={urlFunc(related.next)}
                  >
                    <i className="ph ph-arrow-right" />
                  </AnimatedButton>
                  <Link
                    className="mxd-project__link anim-uni-in-up"
                    href={urlFunc(related.next)}
                  >
                    <span>{nextText}</span>
                  </Link>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
