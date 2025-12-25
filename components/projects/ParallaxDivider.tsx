import BackgroundParallax from '@/components/animation/BackgroundParallax';

export default function ParallaxDivider({ file } : { file: string }) {
  return (
    <div className="mxd-project__block mxd-grid-item no-margin">
      <div className="mxd-divider">
        <BackgroundParallax
          scale={1.5}
          className="mxd-divider__image parallax-img"
          style={{ backgroundImage: `url(${file})` }}
        />
      </div>
    </div>
  );
}
