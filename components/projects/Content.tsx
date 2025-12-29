import RevealText from "../animation/RevealText";
import Markdown from '@/components/projects/Markdown';
import { ContentProps } from '@/types/project';

export default function Content({ detail } : { detail : ContentProps }) {

  if (detail.highlight) {
    return (
      <div className="mxd-project__block pre-grid">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  {detail.title}
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph">
                  <Markdown className="t-large t-bright anim-uni-in-up">
                    {detail.highlight}
                  </Markdown>
                  <Markdown className="anim-uni-in-up">
                    {detail.desc}
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
                {detail.title}
              </RevealText>
            </div>
          </div>
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <Markdown className="anim-uni-in-up">
                  {detail.desc}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
