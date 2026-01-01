import AnimatedButton from "@/components/animation/AnimatedButton";

export default function NotFoundPage() {
  return (
    <>
      {/* Page Content Start */}
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Section - 404 Error Start */}
        <div className="mxd-section mxd-section-fullscreen">
          <div className="mxd-container grid-container fullwidth-container fullscreen-container loading-wrap">
            {/* Block - 404 Error Content Start */}
            <div className="mxd-block fullscreen-block">
              <div className="mxd-error floating-cards">
                <div className="mxd-error__descr">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-12 mxd-grid-item">
                        <div className="mxd-error__caption loading__fade">
                          <p className="t-large t-medium t-120 t-bright">
                            This page doesn&apos;t exist
                          </p>
                          <p className="t-large t-medium t-120 t-muted">
                            Sorry.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-12 mxd-grid-item">
                        <AnimatedButton
                          className="btn btn-anim btn-default btn-accent slide-right-up loading__fade"
                          text="Let's Go Home"
                          href="/"
                        >
                          <i className="ph-bold ph-arrow-up-right" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 404 Error Content End */}
          </div>
        </div>
        {/* Section - 404 Error End */}
      </main>
      {/* Page Content End */}
    </>
  );
}
