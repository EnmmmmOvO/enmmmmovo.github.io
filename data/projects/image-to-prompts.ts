import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  title: "Image to Prompts",
  img1: "/img/project/image-to-prompts/2730_1535_home.png",
  key: "image-to-prompts",
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
          src: "/img/project/image-to-prompts/1300_1100_result1.png",
          span: 6
        },
        {
          src: "/img/project/image-to-prompts/1300_1100_result2.png",
          span: 6
        }
      ]
    },
    {
      type: "content",
      index: 3
    }
  ],
  links: [
    {
      href: "https://www.kaggle.com/competitions/stable-diffusion-image-to-prompts",
      text: "kaggle"
    },
    {
      href: "https://huggingface.co/datasets/poloclub/diffusiondb",
      text: "dataset"
    },
    {
      href: "https://github.com/EnmmmmOvO/Airbnb",
      text: "github"
    }
  ],
  related: {
    next: "conex",
    prev: "my-airbnb"
  }
};

export default data;
