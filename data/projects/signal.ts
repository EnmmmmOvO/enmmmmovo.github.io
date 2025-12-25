import { type ProjectProps } from '@/types/project';

const data : ProjectProps = {
  detail: {
    name: "E2E Platform",
    desc: "Rather than building a full messaging product, this project focuses on faithfully reproducing the cryptographic workflow of the Signal Protocol, including asynchronous key exchange, per-message key evolution, and forward secrecy guarantees.",
    shortDetails: [
      {
        title: "Date",
        content: "Nov 2024"
      },
      {
        title: "Role",
        content: "Individual Implementation"
      },
      {
        title: "Technologies",
        content: "Rust, Cryptographic Protocols"
      },
      {
        title: "Context",
        content: "Personal Cryptography Implementation Project"
      },
    ],
    tags: [ "Rust", "Security", "Cryptography", "E2E Encryption" ]
  },
  img1: "/img/project/signal/1920_1200_logo.png",
  content: [
    {
      title: "Scope and Non-Goals",
      type: "content",
      desc: "##### Scope\n" +
        "\n" +
        "- Implements **X3DH** for asynchronous key agreement\n" +
        "\n" +
        "- Implements the **Double Ratchet algorithm** for forward secrecy and post-compromise security\n" +
        "\n" +
        "- Supports encrypted message sending and receiving between two peers\n" +
        "\n" +
        "- Focuses on protocol correctness rather than feature completeness\n" +
        "\n" +
        "##### Non-Goals\n" +
        "\n" +
        "- No group messaging\n" +
        "\n" +
        "- No multi-device support\n" +
        "\n" +
        "- No network transport layer abstraction\n" +
        "\n" +
        "- No production-ready messaging features\n" +
        "\n" +
        "These boundaries were defined intentionally to keep the project focused on cryptographic design rather than application-level complexity."
    },
    {
      type: "image-gallery",
      list: [{
        src: "/img/project/signal/1200_1000_signal.png",
        caption: "X3DH",
        span: 6,
      }, {
        src: "/img/project/signal/1200_1000_double_ratchet.png",
        caption: "Double Ratchet",
        span: 6
      }]
    },
    {
      title: "Cryptographic Architecture",
      type: "content",
      desc: "The system follows the standard Signal Protocol flow. An initial shared secret is established via **X3DH**, using identity keys, signed pre-keys, and optional one-time pre-keys. This shared secret initializes the **Double Ratchet** state.\n" +
        "\n" +
        "From this point:\n" +
        "- A **root key** is used to derive sending and receiving **chain keys**\n" +
        "\n" +
        "- Each message derives a fresh **message key**\n" +
        "\n" +
        "- Message keys are used once and immediately discarded\n" +
        "\n" +
        "This design ensures that message compromise does not affect past or future messages.\n"
    },
    {
      title: "Security Properties Considered",
      type: "content",
      desc: "The implementation explicitly considers the following security properties:\n" +
        "\n" +
        "- **Forward secrecy** through per-message key derivation\n" +
        "\n" +
        "- **Post-compromise security** via continuous ratcheting\n" +
        "\n" +
        "- **Key separation**, ensuring long-term keys are never reused for message encryption\n" +
        "\n" +
        "- Clear **key lifecycle management**, with explicit disposal of used keys\n" +
        "\n" +
        "The goal is not to formally prove security, but to faithfully follow the intended guarantees of the Signal Protocol."
    },
    {
      type: "image-gallery",
      list: [{
        src: "/img/project/signal/2400_1000_ui.png",
        caption: "A simple UI built with egui for testing",
        span: 12,
      }]
    },
    {
      title: "Implementation Notes",
      type: "content",
      desc: "- Implemented entirely in **safe Rust**, without using `unsafe`\n" +
        "\n" +
        "- Cryptographic state transitions are modeled explicitly to avoid implicit or hidden behavior\n" +
        "\n" +
        "- Cryptographic logic is strictly separated from the UI layer\n" +
        "\n" +
        "- A lightweight interface built with **egui** is used solely for controlled testing and visualization\n" +
        "\n" +
        "This approach prioritizes transparency and maintainability over performance optimization."
    },
  ],
  links: [
    { href: "https://github.com/EnmmmmOvO/E2EE/tree/master", text: "Github" },
    { href: "https://github.com/EnmmmmOvO/E2EE/blob/master/paper/paper.pdf", text: "Paper" },
    { href: "https://www.youtube.com/watch?v=o6H-fr7C9h4", text: "Presentation" }
  ],
  related: {
    prev: { href: "/projects/seek", title: "NLP × SEEK" },
    next: { href: "/projects/data_clean", title: "Data Cleaning Platform" }
  }
};

export default data;