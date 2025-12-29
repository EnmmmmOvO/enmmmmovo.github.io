import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "The Ethical Challenges of AI in Artistic Creation",
    desc: "This article delves into the ethical implications and challenges of AI drawing technologies in the realm of art, focusing on how AI is reshaping the boundaries of artistic creation, copyright, and originality, as well as the appropriateness of AI technologies in art competitions.",
    shortDetails: [
      {
        title: "Date",
        content: "Dec 2022"
      },
      {
        title: "Technologies",
        content: "Artificial Intelligence, Ethics"
      },
      {
        title: "Context",
        content: "Industry–Academic Collaboration"
      },
      {
        title: "Word Count",
        content: "4,500 words"
      }
    ],
    tags: [ "AI", "Ethics", "Art" ]
  },
  links: [
    { href: "https://drive.google.com/file/d/1c_9yNOnXvGUIFWMUF-l9ZpXho8JbwIOf/view", text: "Paper" }
  ],
  related: {
    prev: {
      href: "/portfolios/james-webb-space-telescope",
      title: "James Webb Space Telescope",
    },
    next: {
      href: "/portfolios/fantastic-celestial-objects",
      title: "Fantastic Celestial Objects",
    },
  }
}

export default data;