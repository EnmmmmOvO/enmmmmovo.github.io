import { type PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  title: "Suzuki-Kasami Concurrency Algorithm",
  key: "suzuki-kasami-concurrency-algorithm",
  ignoreDetails: ["wordCount"],
  links: [
    {
      href: "https://github.com/EnmmmmOvO/Computer-Science-Engineering/tree/master/COMP3151/23T2/ass2",
      text: "github"
    },
    {
      href: "https://www.youtube.com/watch?v=pEkQOzhP_D4",
      text: "video"
    }
  ],
  related: {
    next: "james-webb-space-telescope",
    prev: "autonomous-vehicles-and-utilitarianism"
  }
};

export default data;
