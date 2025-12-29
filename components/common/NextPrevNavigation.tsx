import Link from "next/link";

import AnimatedButton from "../animation/AnimatedButton";
import { RelatedProjectProps } from '@/types/project';

export default function NextPrevNavigation({ related } : { related: RelatedProjectProps }) {
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
                    text="Prev"
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left"
                    href={related.prev.href}
                  >
                    <i className="ph ph-arrow-left"/>
                  </AnimatedButton>
                  <Link
                    className="mxd-project__link anim-uni-in-up"
                    href={related.prev.href}
                  >
                    <span>{related.prev.title}</span>
                  </Link>
                </>
              }
            </div>
            <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
              {
                related.next && <>
                  <AnimatedButton
                    text="Next"
                    className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right"
                    href={related.next.href}
                  >
                    <i className="ph ph-arrow-right" />
                  </AnimatedButton>
                  <Link
                    className="mxd-project__link anim-uni-in-up"
                    href={related.next.href}
                  >
                    <span>{related.next.title}</span>
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
