import Image from 'next/image';
import { ImageGalleryProps } from '@/types/project';

const spanToWidthHeight = (span: number) => {
  switch(span) {
    case 5: return [1200, 1200];
    case 6: return [1200, 1000];
    case 7: return [1400, 1000];
    case 12: return [2400, 1000];
    default: return [1200, 800];
  }
}

const ImageGalley = ({ detail } : { detail: ImageGalleryProps }) => {
  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project-cards">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            {/* item */}
            {detail.list.map((item, i) => {
              const [width, height] = spanToWidthHeight(item.span);
              const span = (item.span >= 1 && item.span <= 12) ? `col-xl-${item.span}` : "col-xl-6";

              return (
                <div
                  className={`col-12 ${span} mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right`}
                  key={new Date().getTime() + i}
                  >
                  <div className="mxd-project-cards__inner align-end bg-accent radius-m">
                    <Image
                      alt="Project Preview"
                      src={item.src}
                      width={width}
                      height={height}
                    />
                  </div>
                  {item.caption && (
                    <p className="project-image-caption t-small">
                      {item.caption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGalley;