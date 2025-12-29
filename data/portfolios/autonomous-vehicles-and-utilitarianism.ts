import { PortfolioProps } from '@/types/portfolio';

const data: PortfolioProps = {
  detail: {
    name: "Balancing Ethics and Efficiency: Autonomous Vehicles and Utilitarianism",
    desc: "This article explores the ethical considerations of applying Act and Rule Utilitarianism to the collision-avoidance protocols in autonomous vehicles, analyzing the impact of each approach on decision-making in critical scenarios, and evaluating their implications for societal norms and technological design in the context of autonomous driving.",
    shortDetails: [
      {
        title: "Date",
        content: "Oct 2022"
      },
      {
        title: "Technologies",
        content: "Ethics, Autonomous Vehicles"
      },
      {
        title: "Context",
        content: "Academic Coursework Portfolio"
      },
      {
        title: "Word Count",
        content: "2,200 words"
      }
    ],
    tags: [ "Autonomous Vehicles", "Ethics", "Utilitarianism" ]
  },
  links: [
    { href: "https://drive.google.com/file/d/1sz8pPYi16MHyVu3qyPcTMqc1bwt8VoDC/view", text: "Paper" }
  ],
  related: {
    next: {
      href: "/portfolios/suzuki-kasami-concurrency-algorithm",
      title: "Suzuki-Kasami Concurrency Algorithm",
    },
  }
}

export default data;