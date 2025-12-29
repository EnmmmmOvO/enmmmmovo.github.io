import { type ProjectProps } from '@/types/project';

const data : ProjectProps = {
  detail: {
    name: "Transport Application",
    desc: "Transport Application is a terminal-based chat and local area network (LAN) file transfer tool built with Java, focusing on low-level network communication using **UDP** and **TCP** protocols.",
    shortDetails: [
      {
        title: "Date",
        content: "Apr 2022"
      },
      {
        title: "Role",
        content: "Individual Implementation"
      },
      {
        title: "Technologies",
        content: "Network Programming"
      },
      {
        title: "Context",
        content: "Academic Coursework & Daily Used Tool"
      },
    ],
    tags: [ "Java", "Networking", "Protocols" ]
  },
  content: [
    {
      title: "Task Breakdown",
      type: "content",
      desc: "The project consists of two related components that explore different aspects of network communication:\n" +
        "\n" +
        "**Project 1: Simple Chat Thread**\n" +
        "\n" +
        "- Terminal-based chat system supporting user login, thread creation, message exchange, and file upload/download\n" +
        "\n" +
        "- Client–server architecture implemented entirely in Java\n" +
        "\n" +
        "- **UDP** used for message transmission and request–response communication via `DatagramSocket`\n" +
        "\n" +
        "- A custom **Message** class designed for structured data exchange\n" +
        "\n" +
        "- **TCP** used for file transfer, with UDP-based port negotiation prior to transmission\n" +
        "\n" +
        "**Project 2: Local Area Network File Transfer**\n" +
        "\n" +
        "- Extended the file transfer mechanism to support **LAN-based communication** between Windows and macOS devices\n" +
        "\n" +
        "- Implemented using Java Socket programming\n" +
        "\n" +
        "- Supports multi-file and folder transfer in a terminal environment\n" +
        "\n" +
        "- Requires manual input of target IP address and port number\n" +
        "\n" +
        "- Does not support automatic device discovery or interrupted transfer resumption"
    }
  ],
  links: [
    { href: "https://github.com/EnmmmmOvO/Computer-Science-Engineering/tree/master/COMP3331/assign", text: "Github" },
  ],
  related: {
    prev: { href: "/projects/slackr", title: "Slackr" }
  }
};

export default data;