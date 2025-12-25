import { type ProjectProps } from '@/types/project';

const data : ProjectProps = {
  detail: {
    name: "NLP x SEEK",
    desc: "This project focuses on **extracting structured information from large-scale job advertisements** under **realistic computational and deployment constraints**. It explores **resource-efficient NLP system design** and received an **award nomination** for its applied impact.",
    shortDetails: [

      {
        title: "Date",
        content: "Apr 2025"
      },
      {
        title: "Role",
        content: "NLP System Designer"
      },
      {
        title: "Technologies",
        content: "Information Extraction"
      },
      {
        title: "Context",
        content: "Industry–Academic Collaboration"
      },
    ],
    tags: [ "NLP", "ML", "Systems", "Research-oriented" ]
  },
  img1: "/img/project/seek/1920_1200_logo.png",
  content: [
    {
      title: "Task Decomposition",
      type: "content",
      desc: "Instead of treating information extraction as a single end-to-end generation problem, the system decomposes it into **three task-specific pipelines**, each aligned with the structure of the target output and the available computational budget:\n" +
        "\n" +
        "- **Work Arrangement**\n" +
        "    \n" +
        "    Modelled as a **3-class classification task** (Remote / OnSite / Hybrid), using contextual encoders with sliding-window inference to cover long job descriptions.\n" +
        "    \n" +
        "- **Salary Extraction**\n" +
        "    \n" +
        "    Designed as a **span extraction + classification pipeline**, where numerical salary bounds are extracted explicitly, followed by lightweight classifiers for currency and payment period. This avoids the formatting instability of generative approaches.\n" +
        "    \n" +
        "- **Seniority Level**\n" +
        "    \n" +
        "    Approached as a **controlled generation task** due to the open-ended nature of seniority labels, with strict output constraints to limit verbosity and noise.\n" +
        "    \n" +
        "\n" +
        "This modular design allows each task to use the **simplest model capable of solving it reliably**, rather than defaulting to large generative models."
    },
    {
      title: "My Contributions",
      type: "content",
      desc: "My primary responsibility focused on the **non-LLM components and system-level design**, driven by course constraints and limited hardware availability. Key decisions include:\n" +
        "\n" +
        "- **Classification over Generation where possible**\n" +
        "    \n" +
        "    For structured outputs such as work arrangement, currency, and payment period, classification models were preferred to reduce inference cost and eliminate formatting errors.\n" +
        "    \n" +
        "- **Explicit Span Extraction for Numerical Values**\n" +
        "    \n" +
        "    Salary bounds were extracted using supervised span prediction rather than text generation, ensuring deterministic outputs and higher numerical accuracy.\n" +
        "    \n" +
        "- **Resource-Aware Model Selection**\n" +
        "    \n" +
        "    Classical models (SVM, CRF) were implemented as strong baselines to benchmark performance under minimal compute, revealing that simpler models remain competitive for certain subtasks.\n" +
        "    \n" +
        "- **Cost–Accuracy Trade-off as a First-Class Constraint**\n" +
        "    \n" +
        "    All design choices were evaluated not only by accuracy, but also by training time, inference latency, and deployment feasibility on limited devices.\n" +
        "    \n" +
        "\n" +
        "These decisions enabled the system to achieve strong results without relying exclusively on large language models."
    },
    {
      type: "image-gallery",
      list: [{
        src: "/img/project/seek/1200_1200_award.png",
        caption: "Technical Solution Winner Nomination",
        span: 5,
      }, {
        src: "/img/project/seek/1400_1000_result.png",
        caption: "Precision Comparison Across Models and Tasks",
        span: 7,
      }]
    },
    {
      title: "Results and Takeaways",
      type: "content",
      desc: "Experiments show that **task-specific neural and classical models achieve competitive performance** on structured extraction tasks, especially when outputs are well-defined. While large language models offer flexibility, their benefits diminish under strict cost and deployment constraints.\n" +
        "\n" +
        "A key takeaway from this project is that **maximizing results under limited resources requires careful task formulation**, not larger models. For industrial NLP systems, architectural decisions often matter more than raw model scale."
    }
  ],
  links: [
    {href: "https://github.com/EnmmmmOvO/Information-Technology/tree/master/COMP6713/project", text: "Github"},
    {href: "https://github.com/EnmmmmOvO/Information-Technology/blob/master/COMP6713/project/report.pdf", text: "Paper"}
  ],
  related: {
    next: { href: "/projects/signal", title: "E2E Platform" }
  }
};

export default data;