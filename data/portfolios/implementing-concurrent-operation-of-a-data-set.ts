import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "Implementing Concurrent Operation of a Data Set",
    desc: "This article mainly utilizes read-and-write locks as the main body to ensure that only one process is allowed to run if and when the data needs to be modified, and multiple processes can read the data if there are no writes. In addition, signalling is used to ensure the integrity of the data structure.",
    shortDetails: [
      {
        title: "Date",
        content: "Jun 2023"
      },
      {
        title: "Technologies",
        content: "Concurrency, Data Structures"
      },
      {
        title: "Context",
        content: "Academic Coursework Portfolio"
      },
      {
        title: "Word Count",
        content: "1,800 words"
      }
    ],
    tags: [ "Concurrency", "Data Structures", "Read-Write Locks" ]
  },
  links: [
    { href: "https://drive.google.com/file/d/1FG5M2fx02VeZN2vp8X0dJmI4K_gtZ2tz/view", text: "Paper" }
  ],
  related: {
    prev: {
      href: "/portfolios/fantastic-celestial-objects",
      title: "Fantastic Celestial Objects",
    },
    next: {
      href: "/portfolios/short-report-about-astronomy",
      title: "Short Report about Astronomy",
    },
  }
}

export default data;