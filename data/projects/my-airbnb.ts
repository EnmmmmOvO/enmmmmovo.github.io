import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "My Airbnb",
    desc: "My Airbnb is a web application for property listing and booking, inspired by [Airbnb](https://www.airbnb.com), designed to act as an intermediary platform between landlords and renters.",
    shortDetails: [
      {
        title: "Date",
        content: "Dec 2023"
      },
      {
        title: "Role",
        content: "Front-End Developer"
      },
      {
        title: "Technologies",
        content: "React"
      },
      {
        title: "Context",
        content: "Academic Coursework Project"
      }
    ],
    tags: [ "Frontend", "React", "TypeScript", "Cypress" ]
  },
  img1: "/img/project/my-airbnb/1920_1200_home.png",
  content: [
    {
      title: "Task Breakdown",
      desc: "The application supports the full workflow of property browsing and booking, including:\n" +
        "\n" +
        "- User registration and authentication\n" +
        "\n" +
        "- Uploading property information and photos\n" +
        "\n" +
        "- Searching and filtering property listings\n" +
        "\n" +
        "- Online booking functionality\n" +
        "\n" +
        "The project was implemented as a single-page application (SPA) with client-side routing and interactive UI components.",
      type: "content"
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/my-airbnb/3024_1655_pic1.png",
          span: 7
        },
        {
          src: "/img/project/my-airbnb/1200_1200_pic4.png",
          span: 5
        },
        {
          src: "/img/project/my-airbnb/1200_1200_pic3.png",
          span: 5
        },
        {
          src: "/img/project/my-airbnb/3024_1655_pic2.png",
          span: 7
        },
      ],
    },
    {
      title: "Technology Stack",
      desc: "- Developed the application using **React** with **TypeScript**, focusing on code quality and maintainability.\n" +
        "\n" +
        "- Implemented client-side routing using **React Router (BrowserRouter)** to support dynamic navigation.\n" +
        "\n" +
        "- Managed shared state using **React Context API**, choosing a lightweight solution over Redux due to limited global state requirements.\n" +
        "\n" +
        "- Built the user interface with **Material UI (MUI)** to ensure a modern, responsive design.\n" +
        "\n" +
        "- Wrote **unit tests with Jest** for key components and performed **end-to-end testing with Cypress** to validate application behavior and user flows.",
      type: "content"
    }
  ],
  links: [
    { href: "https://github.com/EnmmmmOvO/Airbnb", text: "Github" },
  ],
  related: {
    prev: { href: "/projects/turtle-segmentation", title: "Sea Turtle Segmentation" },
    next: { href: "/projects/image-to-prompts", title: "Image to Prompts" }
  }
}

export default data;