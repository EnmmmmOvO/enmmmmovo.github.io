import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "Data Cleaning Platform",
  img1: "/img/project/data-clean/1920_1200_home.png",
  key: "data-clean",
  content: [
    {
      type: "content",
      index: 1
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/data-clean/3634_1750_home.png",
          span: 7
        },
        {
          src: "/img/project/data-clean/1200_1200_report.png",
          span: 5
        },
        {
          src: "/img/project/data-clean/1200_1200_processing.png",
          span: 5
        },
        {
          src: "/img/project/data-clean/2006_1148_result_ui.png",
          span: 7
        }
      ]
    },
    {
      type: "content",
      index: 2
    },
    {
      type: "large-image",
      src: "/img/project/data-clean/6300_4060_arch.png",
      index: 3,
      width: 6300,
      height: 4060
    },
    {
      type: "content",
      index: 4
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/data-clean/1300_1100_minilm_result.png",
          index: 5,
          span: 6
        },
        {
          src: "/img/project/data-clean/1300_1100_t5.png",
          index: 6,
          span: 6
        }
      ]
    },
    {
      type: "content",
      index: 7
    }
  ],
  links: [],
  related: {
    next: "stet",
    prev: "signal"
  }
};

export default data;
