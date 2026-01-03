import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "RWA Tokenization (STET)",
  img1: "/img/project/stet/1920_1200_logo.png",
  key: "stet",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "content",
      index: 2
    }
  ],
  links: [
    {
      href: "https://github.com/stet-easycal/stet",
      text: "github"
    }
  ],
  related: {
    next: "insect-pest-identification",
    prev: "data-clean"
  }
};

export default data;
