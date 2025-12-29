import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "Suzuki-Kasami Concurrency Algorithm",
    desc: "This video critically analyzes the advantages and shortcomings of the Suzuki-Kasami algorithm for token-based concurrency in distributed environments, while concurrently examining the merits of channel-based concurrent programming in the Go language from an academic perspective.",
    shortDetails: [
      {
        title: "Date",
        content: "Apr 2023"
      },
      {
        title: "Technologies",
        content: "Distributed Systems, Concurrency Algorithms"
      },
      {
        title: "Context",
        content: "Academic Coursework Portfolio"
      }
    ],
    tags: [ "Distributed Systems", "Concurrency", "Go" ]
  },
  links: [
    { href: "https://github.com/EnmmmmOvO/Computer-Science-Engineering/tree/master/COMP3151/23T2/ass2", text: "Github" },
    { href: "https://www.youtube.com/watch?v=pEkQOzhP_D4", text: "Video" },
  ],
  related: {
    prev: {
      href: "/portfolios/autonomous-vehicles-and-utilitarianism",
      title: "Balancing Ethics and Efficiency",
    },
    next: {
      href: "/portfolios/james-webb-space-telescope",
      title: "James Webb Space Telescope",
    },
  }
}

export default data;