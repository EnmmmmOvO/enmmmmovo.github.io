import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "Insect Pest Specifies Identification",
  img1: "/img/project/insect-pest-identification/1920_1200_home.png",
  key: "insect-pest-identification",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/insect-pest-identification/1920_1920_structure1.png",
          index: 2,
          span: 5
        },
        {
          src: "/img/project/insect-pest-identification/2800_2200_structure2.png",
          index: 3,
          span: 7
        }
      ]
    },
    {
      type: "content",
      index: 4
    },
    {
      type: "large-image",
      src: "/img/project/insect-pest-identification/1920_711_result.png",
      width: 1920,
      height: 711
    },
    {
      type: "content",
      index: 5
    },
    {
      type: "content",
      index: 6
    }
  ],
  links: [
    {
      href: "https://github.com/xpwu95/IP102/tree/master",
      text: "dataset"
    },
    {
      href: "https://github.com/EnmmmmOvO/Information-Technology/tree/master/COMP9444/project",
      text: "github"
    }
  ],
  related: {
    next: "turtle-segmentation",
    prev: "stet"
  }
};

export default data;
