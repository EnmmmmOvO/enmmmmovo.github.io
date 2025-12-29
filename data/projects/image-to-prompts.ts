import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "Image to Prompts",
    desc: "This project aims to generate textual prompts that align with the content of input images, targeting the image-to-prompt task commonly used in Stable Diffusion workflows, inspired by a [Kaggle competition](https://www.kaggle.com/competitions/stable-diffusion-image-to-prompts).",
    shortDetails: [
      {
        title: "Date",
        content: "Apr 2023"
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
  img1: "/img/project/image-to-prompts/2730_1535_home.png",
  content: [
    {
      title: "Task Breakdown",
      desc: "The project was inspired by a Kaggle competition and focuses on comparing different image–text modeling strategies for prompt generation:\n" +
        "\n" +
        "- **CLIP-based model** for joint image–text representation learning\n" +
        "\n" +
        "- **ResNet + LSTM pipeline** for sequential image-to-text generation\n" +
        "\n" +
        "Both models were trained independently and evaluated at a macro level to analyze their strengths and limitations.\n" +
        "\n" +
        "The dataset was sourced from **DiffusionDB (Hugging Face)**, with appropriate preprocessing applied to training, validation, and test splits.",
      type: "content"
    },

    {
      title: "My Contribution",
      desc: "Implemented and trained the **ResNet + LSTM** image-to-prompt generation model.\n" +
        "\n" +
        "- Used **ResNet-50** as the image encoder to extract visual features from input images.\n" +
        "\n" +
        "- Applied a **linear mapping layer** to align image features with the textual input space.\n" +
        "\n" +
        "- Generated initial textual descriptions using an **LSTM-based sequence model**.\n" +
        "\n" +
        "- Refined the generated descriptions using **GPT-2** to produce more complete and descriptive prompts.\n",
      type: "content"
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/image-to-prompts/1300_1100_result1.png",
          span: 6
        },
        {
          src: "/img/project/image-to-prompts/1300_1100_result2.png",
          span: 6
        },
      ],
    },
    {
      title: "Challenges and Limitations",
      desc: "- **Model Architecture Limitations**  \n" +
        "\n" +
        "  The pipeline relies on a CNN for image encoding and an RNN for text generation, connected via a fixed feature-mapping layer. This rigid alignment may limit effective cross-modal feature integration, especially when compared to **CLIP’s ViT-based joint image–text representation**, which is better suited for image–text correspondence.\n" +
        "\n" +
        "- **Optimization and Time Constraints**  \n" +
        "\n" +
        "  Limited training time restricted extensive hyperparameter tuning and architectural refinement, which may have impacted convergence and overall generation quality.",
      type: "content"
    }
  ],
  links: [
    { href: "https://www.kaggle.com/competitions/stable-diffusion-image-to-prompts", text: "Kaggle" },
    { href: "https://huggingface.co/datasets/poloclub/diffusiondb", text: "Dataset" },
    { href: "https://github.com/EnmmmmOvO/Airbnb", text: "Github" },
  ],
  related: {
    prev: { href: "/projects/my-airbnb", title: "My Airbnb" },
    next: { href: "/projects/conex", title: "CONEX" }
  }
}

export default data;