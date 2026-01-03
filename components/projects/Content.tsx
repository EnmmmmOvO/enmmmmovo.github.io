import RevealText from "../animation/RevealText";
import Markdown from '@/components/common/Markdown';
import { ContentProps, HighLightContentProps } from '@/types/project';
import { getTranslations } from 'next-intl/server';

export default async function Content({ intlKey, detail } : {
  intlKey: string,
  detail : ContentProps | HighLightContentProps
}) {
  const t = await getTranslations(intlKey);

  if (detail.type === 'highlight-content') {
    return (
      <div className="mxd-project__block pre-grid">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  {t(`content.${detail.index}.title`)}
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph">
                  <Markdown className="t-large t-bright">
                    {t(`content.${detail.index}.highlight`)}
                  </Markdown>
                  <Markdown>
                    {t(`content.${detail.index}.desc`)}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                {t(`content.${detail.index}.title`)}
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <Markdown>
                  {t(`content.${detail.index}.desc`)}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
