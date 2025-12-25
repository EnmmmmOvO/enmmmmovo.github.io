import BackgroundParallax from "../animation/BackgroundParallax";

export default function ParallaxDivider2({ file } : { file: string }) {
  return (
    <div className="mxd-section">
      <div className="mxd-container">
        <div className="mxd-divider loading__fade">
          <BackgroundParallax
            scale={1.5}
            className="mxd-divider__image parallax-img"
            style={{ backgroundImage: `url(${file})` }}
          />
        </div>
      </div>
    </div>
  );
}
