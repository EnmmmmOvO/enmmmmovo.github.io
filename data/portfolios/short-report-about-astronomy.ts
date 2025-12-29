import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "Short Report about Astronomy",
    desc: "The article primarily focuses on exploring the possibility of finding extraterrestrial life by examining the structural features of galaxies and searching for planets that could support carbon-based life forms.",
    shortDetails: [
      {
        title: "Date",
        content: "Jan 2023"
      },
      {
        title: "Technologies",
        content: "Full-Stack Web Development"
      },
      {
        title: "Context",
        content: "Academic Coursework Portfolio"
      },
      {
        title: "Word Count",
        content: "1,000 words"
      }
    ],
    tags: [ "Astronomy", "Extraterrestrial Life", "Galaxies" ]
  },
  links: [
    { href: "https://drive.google.com/file/d/1atjfM2VD6-NVtkhVwm6arXfcCw8CmQ4p/view", text: "Paper" }
  ],
  related: {
    prev: {
      href: "/portfolios/implementing-concurrent-operation-of-a-data-set",
      title: "Implementing Concurrent Operation of a Data Set",
    },
  }
}

export default data;