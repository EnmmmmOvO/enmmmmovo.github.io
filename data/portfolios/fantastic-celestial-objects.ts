import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "Fantastic Celestial Objects",
    desc: "This is a popular science magazine geared towards readers with little or no knowledge of the cosmos. Its primary aim is to introduce various celestial bodies (stars, planets, satellites) that constitute the vast expanse of the universe, discussing their types, structures, and potential evolutionary processes. There may be instances of non-professional explanations or inaccuracies within the content, and corrections or clarifications are welcome.",
    shortDetails: [
      {
        title: "Date",
        content: "Feb 2023"
      },
      {
        title: "Technologies",
        content: "Astronomy, Planets, Stars"
      },
      {
        title: "Context",
        content: "Academic Coursework Portfolio"
      },
      {
        title: "Word Count",
        content: "3,000 words"
      }
    ],
    tags: [ "Astronomy", "Celestial Objects" ]
  },
  links: [
    { href: "https://drive.google.com/file/d/1LEx983DAfX-0Ibig3ud_1mhiGzPhTphu/view", text: "Paper" }
  ],
  related: {
    prev: {
      href: "/portfolios/the-ethical-challenges-of-ai-in-artistic-creation",
      title: "The Ethical Challenges of AI in Artistic Creation",
    },
    next: {
      href: "/portfolios/implementing-concurrent-operation-of-a-data-set",
      title: "Implementing Concurrent Operation of a Data Set",
    },
  }
}

export default data;