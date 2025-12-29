import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "James Webb Space Telescope",
    desc: "This article focuses on the James Webb Space Telescope, the successor to the Hubble telescope, including its launch purpose, structure, orbit, and reasons for the launch. Finally, it pays more attention to the results obtained more than a year after the launch and its contribution to astronomy.",
    shortDetails: [
      {
        title: "Date",
        content: "Jan 2023"
      },
      {
        title: "Technologies",
        content: "Astronomy, Space Telescopes"
      },
      {
        title: "Context",
        content: "Academic Coursework Portfolio"
      },
      {
        title: "Word Count",
        content: "1,500 words"
      }
    ],
    tags: [ "Astronomy", "Space Telescopes", "James Webb" ]
  },
  links: [
    { href: "https://drive.google.com/file/d/1x0GI6TcaCb_NVOUJGxf-iQ40oZGs887B/view", text: "Paper" }
  ],
  related: {
    prev: {
      href: "/portfolios/suzuki-kasami-concurrency-algorithm",
      title: "Suzuki-Kasami Concurrency Algorithm",
    },
    next: {
      href: "/portfolios/the-ethical-challenges-of-ai-in-artistic-creation",
      title: "The Ethical Challenges of AI in Artistic Creation",
    },
  }
}

export default data;