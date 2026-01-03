export interface ImgProps {
  src: string;
  index?: number;
  span: number;
}

export interface ImageGalleryProps {
  type: "image-gallery";
  list: ImgProps[];
}

export interface LinkProps {
  href: string;
  text: string;
}

export interface ContentProps {
  type: "content";
  index: number;
}

export interface HighLightContentProps {
  type: "highlight-content";
  index: number;
}

export interface LargeImageProps {
  type: "large-image";
  src: string;
  index?: number;
  width: number;
  height: number;
}

export interface RelatedProjectProps {
  next?: string;
  prev?: string;
}

export interface ProjectProps {
  key: string;
  ignoreDetails?: string[];
  title: string;
  img1?: string;
  content: (ContentProps | ImageGalleryProps | LargeImageProps | HighLightContentProps)[];
  links: LinkProps[];
  related: RelatedProjectProps;
}
