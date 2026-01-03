import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "Slackr",
  img1: "/img/project/slackr/1920_1200_home.png",
  key: "slackr",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/slackr/3024_1647_pic1.png",
          span: 7
        },
        {
          src: "/img/project/slackr/3024_1647_pic2.png",
          span: 5
        },
        {
          src: "/img/project/slackr/3024_1647_pic3.png",
          span: 5
        },
        {
          src: "/img/project/slackr/3024_1647_pic4.png",
          span: 7
        }
      ]
    },
    {
      type: "content",
      index: 2
    }
  ],
  links: [
    {
      href: "https://github.com/EnmmmmOvO/Slackr",
      text: "github"
    }
  ],
  related: {
    next: "transport",
    prev: "conex"
  }
};

export default data;
