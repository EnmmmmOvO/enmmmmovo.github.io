import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import RevealText from '@/components/animation/RevealText';
import AnimatedButton from '@/components/animation/AnimatedButton';

export default function FeaturedProjects() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - FeaturedProjects/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="row g-0">
            <div className="col-12 col-xl-9 mxd-grid-item no-margin">
              <div className="mxd-section-title__hrtitle anim-uni-in-up">
                <RevealText as="h2" className="reveal-type">
                  Featured Projects
                </RevealText>
              </div>
            </div>
            <div className="col-12 col-xl-3 mxd-grid-item no-margin">
              <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                <AnimatedButton
                  text="View More"
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
              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href="/projects/seek"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">NLP × SEEK</h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      NLP
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      ML
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Systems
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Research-oriented
                    </span>
                  </div>
                  <p className="t-opposite">
                    Award-nominated NLP system for large-scale job advertisement information extraction, integrating classical ML, neural models, and LLMs.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/project/preview/800_800_project_01.png"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/project/preview/1000_1000_project_01.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}
              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href="/projects/signal"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Signal E2E Chat
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Security
                    </span>
                    <span className="tag tag-default tag-outline">
                      Cryptography
                    </span>
                    <span className="tag tag-default tag-outline">
                      E2E Encryption
                    </span>
                    <span className="tag tag-default tag-outline">
                      Rust
                    </span>
                  </div>
                  <p>
                    Rust-based implementation of a Signal-style end-to-end encrypted chat system, covering key exchange, message encryption/decryption, and ratcheting mechanisms.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/project/preview/800_800_project_02.png"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/project/preview/1000_1000_project_02.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href="#"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Data Cleaning Platform
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Data Engineering
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Asynchronous
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      ML
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      System Architecture
                    </span>
                  </div>
                  <p className="t-opposite">
                    Scalable data cleaning and enrichment platform with an asynchronous processing pipeline, integrating ML-based field extraction and multi-layer storage.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/project/preview/800_800_project_03.png"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/project/preview/1000_1000_project_03.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </StackCards>
          </div>
        </div>
        {/* Block - FeaturedProjects/Features Stacking Cards End */}
      </div>
    </div>
  );
}
