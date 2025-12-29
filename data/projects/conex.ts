import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "CONEX",
    desc: "CONEX is a collaborative full-stack web platform designed to connect professionals with project opportunities, supporting both company users and professional users throughout the project lifecycle.",
    shortDetails: [
      {
        title: "Date",
        content: "Dec 2023"
      },
      {
        title: "Role",
        content: "Backend & Frontend Developer"
      },
      {
        title: "Technologies",
        content: "Full-Stack Web Development"
      },
      {
        title: "Context",
        content: "Capstone Project"
      }
    ],
    tags: [ "Full-Stack", "FastAPI", "React" ]
  },
  img1: "/img/project/conex/1920_1200_logo.png",
  content: [
    {
      title: "Task Breakdown",
      desc: "The platform provides different functionalities for two user roles:\n" +
        "\n" +
        "**Company Users**\n" +
        "\n" +
        "- Create and publish projects\n" +
        "\n" +
        "- Review and approve professional applications\n" +
        "\n" +
        "- Manage project participation\n" +
        "\n" +
        "**Professional Users**\n" +
        "\n" +
        "- Apply for available projects\n" +
        "\n" +
        "- Participate in approved projects\n" +
        "\n" +
        "- Evaluate companies and projects after completion\n" +
        "\n" +
        "The system supports user authentication, project workflows, and mutual evaluations between users.",
      type: "content"
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/conex/3024_1647_pic1.png",
          span: 7
        },
        {
          src: "/img/project/conex/3024_1647_pic2.png",
          span: 5
        },
        {
          src: "/img/project/conex/1200_1200_pic3.png",
          span: 5
        },
        {
          src: "/img/project/conex/3024_1647_pic4.png",
          span: 7
        },
      ],
    },
    {
      title: "Technology Stack",
      desc: "- Contributed primarily to **backend development**, focusing on **database design and core backend logic**.\n" +
        "\n" +
        "- Designed and implemented the database schema using **SQLAlchemy** with **SQLite3**.\n" +
        "\n" +
        "- Developed backend services using **FastAPI**, handling project workflows and user interactions.\n" +
        "\n" +
        "- Designed and deployed **email notification functionality** using Python’s SMTP library, enabling direct access via embedded URLs.\n" +
        "\n" +
        "- Implemented selected **front-end pages** and handled **email-based URL redirection logic** using **React Router**.",
      type: "content"
    }
  ],
  links: [],
  related: {
    prev: { href: "/projects/image-to-prompts", title: "Image to Prompts" },
    next: { href: "/projects/slackr", title: "Slackr" }
  }
}

export default data;