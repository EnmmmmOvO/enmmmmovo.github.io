import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "CONEX",
  img1: "/img/project/conex/1920_1200_logo.png",
  key: "conex",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/conex/3024_1647_pic1.png",
          span: 7
        },
        {
          src: "/img/project/conex/3024_1647_pic2.png",
          span: 5
        },
        {
          src: "/img/project/conex/1200_1200_pic3.png",
          span: 5
        },
        {
          src: "/img/project/conex/3024_1647_pic4.png",
          span: 7
        }
      ]
    },
    {
      type: "content",
      index: 2
    }
  ],
  links: [],
  related: {
    next: "slackr",
    prev: "image-to-prompts"
  }
};

export default data;
