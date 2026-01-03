import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "E2E Platform",
  img1: "/img/project/signal/1920_1200_logo.png",
  key: "signal",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/signal/1200_1000_signal.png",
          index: 2,
          span: 6
        },
        {
          src: "/img/project/signal/1200_1000_double_ratchet.png",
          index: 3,
          span: 6
        }
      ]
    },
    {
      type: "content",
      index: 4
    },
    {
      type: "content",
      index: 5
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/signal/2400_1000_ui.png",
          index: 6,
          span: 12
        }
      ]
    },
    {
      type: "content",
      index: 7
    }
  ],
  links: [
    {
      href: "https://github.com/EnmmmmOvO/E2EE/tree/master",
      text: "github"
    },
    {
      href: "https://github.com/EnmmmmOvO/E2EE/blob/master/paper/paper.pdf",
      text: "paper"
    },
    {
      href: "https://www.youtube.com/watch?v=o6H-fr7C9h4",
      text: "presentation"
    }
  ],
  related: {
    next: "data-clean",
    prev: "seek"
  }
};

export default data;
