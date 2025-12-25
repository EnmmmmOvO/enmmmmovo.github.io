export interface ShortDetailProps {
  title: string;
  content: string;
}

export interface DetailProjectProps {
  name: string;
  desc: string;
  shortDetails: ShortDetailProps[];
  tags: string[];
}

export interface ImgProps {
  src: string;
  caption?: string;
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

export interface ImageProps {
  type: "image";
  src: string;
}

export interface ContentProps {
  type: "content";
  title: string;
  highlight?: string;
  desc: string;
}

export interface RelatedProjectProps {
  next?: { href: string; title: string };
  prev?: { href: string; title: string };
}

export interface ProjectProps {
  detail: DetailProjectProps;
  img1: string;
  content: (ContentProps | ImageProps | ImageGalleryProps)[];
  links: LinkProps[];
  related: RelatedProjectProps;
}
