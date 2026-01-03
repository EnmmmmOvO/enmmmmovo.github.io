import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "Sea Turtle Segmentation",
  img1: "/img/project/turtle-segmentation/2000_1500_turtle.jpg",
  key: "turtle-segmentation",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/turtle-segmentation/1200_1200_result1.png",
          span: 5
        },
        {
          src: "/img/project/turtle-segmentation/1400_1100_result2.png",
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
      href: "https://www.kaggle.com/datasets/wildlifedatasets/seaturtleid2022",
      text: "dataset"
    },
    {
      href: "https://github.com/EnmmmmOvO/Information-Technology/blob/master/COMP9517/project/",
      text: "github"
    },
    {
      href: "https://github.com/EnmmmmOvO/Information-Technology/blob/master/COMP9517/project/paper.pdf",
      text: "paper"
    }
  ],
  related: {
    next: "my-airbnb",
    prev: "insect-pest-identification"
  }
};

export default data;
