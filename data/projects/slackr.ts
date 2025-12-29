import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "Slackr",
    desc: "Slackr is a multi-functional social and communication platform inspired by [Discord](https://discord.com), featuring a [Slack-style](https://slack.com/) visual identity and supporting text and image-based messaging.",
    shortDetails: [
      {
        title: "Date",
        content: "Oct 2023"
      },
      {
        title: "Role",
        content: "Front-End Developer"
      },
      {
        title: "Technologies",
        content: "Vanilla JS"
      },
      {
        title: "Context",
        content: "Academic Coursework Project"
      }
    ],
    tags: [ "Frontend", "Vanilla JS", "Bootstrap 5" ]
  },
  img1: "/img/project/slackr/1920_1200_home.png",
  content: [
    {
      title: "Task Breakdown",
      desc: "The application provides core chat platform functionalities, including:\n" +
        "\n" +
        "- User registration and authentication\n" +
        "\n" +
        "- Channel creation, joining, and invitations\n" +
        "\n" +
        "- Sending and receiving text messages and images\n" +
        "\n" +
        "- User profile editing and channel management\n" +
        "\n" +
        "The project focuses on client-side implementation, interacting with a backend service via asynchronous requests.\n",
      type: "content"
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/slackr/3024_1647_pic1.png",
          span: 7
        },
        {
          src: "/img/project/slackr/3024_1647_pic2.png",
          span: 5
        },
        {
          src: "/img/project/slackr/3024_1647_pic3.png",
          span: 5
        },
        {
          src: "/img/project/slackr/3024_1647_pic4.png",
          span: 7
        },
      ],
    },
    {
      title: "Technology Stack",
      desc: "- Implemented the entire front-end using **Vanilla JavaScript**, **HTML**, and **CSS**.\n" +
        "\n" +
        "- Used **AJAX** to enable asynchronous data exchange with the backend server.\n" +
        "\n" +
        "- Designed all user interactions through JavaScript **event-driven logic**, with dynamic DOM manipulation.\n" +
        "\n" +
        "- Built the UI using **Bootstrap 5**, incorporating components such as modals, toasts, and navigation bars.\n" +
        "\n" +
        "- Integrated message rendering, image display, channel navigation, and user interaction flows.\n",
      type: "content"
    }
  ],
  links: [
    { href: "https://github.com/EnmmmmOvO/Slackr", text: "Github" },
  ],
  related: {
    prev: { href: "/projects/conex", title: "CONEX" },
    next: { href: "/projects/transport", title: "Transport Application" }
  }
}

export default data;