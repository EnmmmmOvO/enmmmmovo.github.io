import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "Sea Turtle Segmentation",
    desc: "This project benchmarks **multiple semantic segmentation models** on a large-scale sea turtle dataset, aiming to accurately segment key anatomical regions such as the **body, head, and flippers**. All models are evaluated under a **unified training and evaluation pipeline** to analyze their performance on **multi-scale objects** and **fine-grained boundaries**.",
    shortDetails: [
      {
        title: "Date",
        content: "Dec 2024"
      },
      {
        title: "Role",
        content: "Model Implementation & Evaluation"
      },
      {
        title: "Technologies",
        content: "Computer Vision, Semantic Segmentation"
      },
      {
        title: "Context",
        content: "Industry–Academic Collaboration"
      }
    ],
    tags: [ "CV", "Semantic Segmentation" ]
  },
  img1: "/img/project/turtle-segmentation/2000_1500_turtle.jpg",
  content: [
    {
      title: "Task Decomposition",
      desc: "The project was conducted as a **team-based comparison study**, with responsibilities divided across the **full segmentation pipeline**:\n" +
        "\n" +
        "- **Dataset preprocessing** and **COCO-style annotation handling**\n" +
        "\n" +
        "- Implementation of **multiple segmentation architectures**, including **FCN, U-Net, FPN, DeepLabV3, Mask R-CNN**, and **Mask2Former with Swin Transformer**\n" +
        "\n" +
        "- **Training configuration**, **data augmentation**, and **optimization strategies**\n" +
        "\n" +
        "- **Unified evaluation** using **IoU, Dice, and accuracy** across multiple object categories\n" +
        "\n" +
        "- **Cross-model performance analysis** and **result interpretation**\n" +
        "\n" +
        "This task decomposition ensured that each model was **developed, trained, and evaluated under comparable conditions**, enabling a **fair architectural comparison** rather than isolated performance tuning.",
      type: "content"
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/turtle-segmentation/1200_1200_result1.png",
          span: 5
        },
        {
          src: "/img/project/turtle-segmentation/1400_1100_result2.png",
          span: 7
        },
      ],
    },
    {
      title: "My Contributions",
      desc: "Implemented and fine-tuned **FCN (ResNet101)** and **FPN (ResNet152)** models for semantic segmentation.\n" +
        "\n" +
        "Evaluated their performance across multiple semantic feature categories in a comparative experimental setting.\n" +
        "\n" +
        "Achieved strong segmentation results, with **FCN** reaching 0.8746 in head feature recognition and **FPN** obtaining a stable average score of 0.8696, demonstrating effective multi-scale and spatial feature preservation.",
      type: "content"
    },
  ],
  links: [
    { href: "https://www.kaggle.com/datasets/wildlifedatasets/seaturtleid2022", text: "Dataset" },
    { href: "https://github.com/EnmmmmOvO/Information-Technology/blob/master/COMP9517/project/", text: "Github" },
    { href: "https://github.com/EnmmmmOvO/Information-Technology/blob/master/COMP9517/project/paper.pdf", text: "Paper" }
  ],
  related: {
    prev: { href: "/projects/insect-pest-identification", title: "Insect Pest Specifies Identification"},
    next: { href: "/projects/my-airbnb", title: "My Airbnb" }
  }
}

export default data;