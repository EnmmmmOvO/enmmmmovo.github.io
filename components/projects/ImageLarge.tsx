import Image from 'next/image';
import { LargeImageProps } from '@/types/project';
import { getTranslations } from 'next-intl/server';

const ImageGalley = async ({
  detail,
  intlKey
} : {
  detail: LargeImageProps;
  intlKey: string;
}) => {
  const t = await getTranslations(intlKey);

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
              {detail.index && (
                <p className="project-image-caption t-small">
                  {t(`content.${detail.index}`)}
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