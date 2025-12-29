import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "Data Cleaning Platform",
    desc: "This project focuses on building a scalable data cleaning and enrichment system designed to process heterogeneous contact datasets under realistic engineering constraints. The platform emphasizes asynchronous task execution, lightweight ML inference, and robust backend orchestration rather than end-to-end monolithic pipelines.",
    shortDetails: [
      {
        title: "Date",
        content: "Apr 2025"
      },
      {
        title: "Role",
        content: "Backend & ML Pipeline Implementation"
      },
      {
        title: "Technologies",
        content: "Information Extraction"
      },
      {
        title: "Context",
        content: "Capstone Project"
      },
    ],
    tags: [ "ML", "Data Engineering", "System Architecture", "Asynchronous" ]
  },
  img1: "/img/project/data-clean/1920_1200_home.png",
  content: [
    {
      title: "System Architecture",
      type: "content",
      desc: "- Designed and implemented the backend using **FastAPI** as the core service layer.\n" +
        "\n" +
        "- Built an asynchronous processing pipeline with **Celery** and **Redis** to handle long-running cleaning and extraction tasks.\n" +
        "\n" +
        "- Implemented **short-term (Redis)** and **long-term (SQL-based)** storage to manage task states, intermediate results, and final outputs.\n" +
        "\n" +
        "- Containerized backend services and worker nodes using **Docker**, enabling flexible deployment across different devices and environments."
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/data-clean/3634_1750_home.png",
          span: 7
        },
        {
          src: "/img/project/data-clean/1200_1200_report.png",
          span: 5
        },
        {
          src: "/img/project/data-clean/1200_1200_processing.png",
          span: 5
        },
        {
          src: "/img/project/data-clean/2006_1148_result_ui.png",
          span: 7
        },
      ],
    },
    {
      title: "My Contributions",
      type: "content",
      desc: "I was mainly responsible for the backend infrastructure and machine learning integration of the platform.\n" +
        "\n" +
        "My work included designing the FastAPI-based backend, building the asynchronous task pipeline with Celery and Redis, and setting up short- and long-term storage for task states and results. I also handled backend containerization using Docker to support deployment across different environments.\n" +
        "\n" +
        "On the ML side, I fine-tuned and integrated lightweight models (MiniLM-L12 and FLAN-T5-Small) for field matching and content extraction, enabling the identification of names, organizations, roles, and semantic content matches."
    },
    {
      type: "large-image",
      src: "/img/project/data-clean/6300_4060_arch.png",
      caption: "System Architecture Diagram",
      width: 6300,
      height: 4060
    },
    {
      title: "Asynchronous Task Design with Celery",
      type: "content",
      desc: "The data cleaning workflow involves multiple stages with highly variable execution time, including file parsing, field extraction, model inference, and result aggregation. To avoid blocking user interactions and to ensure scalability, the system adopts an asynchronous, task-based execution model built around **Celery**.\n" +
        "\n" +
        "Rather than treating data cleaning as a single monolithic job, the pipeline is decomposed into **independent, restartable tasks**. Each task is responsible for a clearly defined stage (e.g., preprocessing, field matching, model inference, post-processing), allowing failures to be isolated without invalidating the entire workflow.\n" +
        "\n" +
        "**Redis** is used as both the message broker and short-term state store, enabling:\n" +
        "\n" +
        "- Efficient task dispatch and scheduling\n" +
        "\n" +
        "- Lightweight progress tracking and status polling\n" +
        "\n" +
        "- Temporary storage of intermediate results during execution\n" +
        "\n" +
        "Long-running or resource-intensive operations—particularly ML inference—are executed exclusively within Celery workers, keeping the FastAPI layer responsive and stateless. This separation allows the number and type of workers to be adjusted independently based on workload and available hardware.\n" +
        "\n" +
        "Overall, the asynchronous design prioritizes **fault tolerance, scalability, and resource efficiency**, ensuring that the system remains robust under realistic data volumes and constrained deployment conditions."
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/data-clean/1300_1100_minilm_result.png",
          caption: "Header Matching Results with MiniLM",
          span: 6
        },
        {
          src: "/img/project/data-clean/1300_1100_t5.png",
          caption: "Content Extraction Results with FLAN-T5",
          span: 6
        },
      ],
    },
    {
      title: "Machine Learning Integration",
      type: "content",
      desc: "- Fine-tuned and integrated lightweight models (**MiniLM-L12** and **FLAN-T5-Small**) for field matching and content extraction.\n" +
        "\n" +
        "- Implemented pipelines for extracting and matching **names, organizations, and roles**, as well as generating semantic content matches based on model outputs.\n" +
        "\n" +
        "- Prioritized **resource-aware model selection**, ensuring stable inference on constrained hardware without sacrificing extraction quality.\n" +
        "\n" +
        "- Designed the system to support execution across heterogeneous devices while maintaining consistent model behavior."
    },
  ],
  links: [],
  related: {
    prev: { href: "/projects/signal", title: "E2E Platform" },
    next: { href: "/projects/stet", title: "RWA Tokenization" }
  }
}

export default data;