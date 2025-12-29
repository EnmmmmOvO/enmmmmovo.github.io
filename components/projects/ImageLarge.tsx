import Image from 'next/image';
import { LargeImageProps } from '@/types/project';


const ImageGalley = ({ detail } : { detail: LargeImageProps }) => {
  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project-cards">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div
              className={`mxd-project-cards__large anim-uni-scale-in-right`}
            >
              <div className="align-end bg-accent radius-m">
                <Image
                  alt="Project Preview"
                  src={detail.src}
                  width={detail.width}
                  height={detail.height}
                />
              </div>
              {detail.caption && (
                <p className="project-image-caption t-small">
                  {detail.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGalley;