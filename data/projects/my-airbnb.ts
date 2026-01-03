import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "My Airbnb",
  img1: "/img/project/my-airbnb/1920_1200_home.png",
  key: "my-airbnb",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/my-airbnb/3024_1655_pic1.png",
          span: 7
        },
        {
          src: "/img/project/my-airbnb/1200_1200_pic4.png",
          span: 5
        },
        {
          src: "/img/project/my-airbnb/1200_1200_pic3.png",
          span: 5
        },
        {
          src: "/img/project/my-airbnb/3024_1655_pic2.png",
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
      href: "https://github.com/EnmmmmOvO/Airbnb",
      text: "github"
    }
  ],
  related: {
    next: "image-to-prompts",
    prev: "turtle-segmentation"
  }
};

export default data;
