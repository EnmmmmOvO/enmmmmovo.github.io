import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "NLP x SEEK",
  img1: "/img/project/seek/1920_1200_logo.png",
  key: "seek",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "content",
      index: 2
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/seek/1200_1200_award.png",
          index: 3,
          span: 5
        },
        {
          src: "/img/project/seek/1400_1000_result.png",
          index: 4,
          span: 7
        }
      ]
    },
    {
      type: "content",
      index: 5
    }
  ],
  links: [
    {
      href: "https://github.com/EnmmmmOvO/Information-Technology/tree/master/COMP6713/project",
      text: "github"
    },
    {
      href: "https://github.com/EnmmmmOvO/Information-Technology/blob/master/COMP6713/project/report.pdf",
      text: "paper"
    }
  ],
  related: {
    next: "signal"
  }
};

export default data;
