import { type ProjectProps } from '@/types/project';

const data: ProjectProps = {
  detail: {
    name: "Insect Pest Specifies Identification",
    desc: "This project aims to evaluate and compare multiple deep learning approaches for insect pest and plant disease classification, exploring different feature representation and attention-based strategies to improve recognition performance.",
    shortDetails: [
      {
        title: "Date",
        content: "Apr 2024"
      },
      {
        title: "Role",
        content: "Model Implementation & Evaluation"
      },
      {
        title: "Technologies",
        content: "Computer Vision, Image Classification"
      },
      {
        title: "Context",
        content: "Industry–Academic Collaboration"
      }
    ],
    tags: [ "CV", "Image Classification" ]
  },
  img1: "/img/project/insect-pest-identification/1920_1200_home.png",
  content: [
    {
      title: "Task Decomposition",
      desc: "The task involves large-scale insect pest and disease classification under challenging conditions, including a high number of categories, severe class imbalance, and complex visual patterns. To address these challenges, multiple model families were explored:\n" +
        "\n" +
        "- **CNN-based Models**  \n" +
        "  Pre-trained **AlexNet, GoogLeNet, VGG16, and ResNet50** were used as baseline classifiers.  \n" +
        "  After extensive experiments, **ResNet50** showed better generalization on the imbalanced dataset, while VGG16 tended to overfit despite strong initial performance.\n" +
        "\n" +
        "- **MSA-ResNet (Multi-Scale Attention ResNet)**  \n" +
        "  Built on top of ResNet, this model integrates **multi-scale convolution** with **channel and spatial attention mechanisms** to capture both local details and global structures.  \n" +
        "  The model was fine-tuned for insect classification and evaluated using accuracy, precision, recall, and F1 score.\n" +
        "\n" +
        "- **Swin Transformer (Swin-T)**  \n" +
        "  A Transformer-based architecture was introduced to further improve classification performance through **hierarchical self-attention** and strong global feature modeling.  \n" +
        "  Swin-T served as the highest-performing classification backbone in this project.\n" +
        "\n" +
        "- **Variational Autoencoder (VAE)**  \n" +
        "  VAE was explored for **latent feature representation learning**, data augmentation potential, and robustness under limited or noisy labels.  \n" +
        "  However, the simplified architecture limited its ability to capture fine-grained discriminative features in this task.",
      type: "content"
    },
    {
      type: "image-gallery",
      list: [
        {
          src: "/img/project/insect-pest-identification/1920_1920_structure1.png",
          caption: "Attention-based heatmap-guided classification Structure",
          span: 5
        },
        {
          src: "/img/project/insect-pest-identification/2800_2200_structure2.png",
          caption: "Attention Module Structure",
          span: 7
        },
      ],
    },
    {
      title: "My Contributions",
      desc: "Implemented and evaluated **Swin Transformer** and **Variational Autoencoder (VAE)** as initial classification and representation learning models, analyzing their behavior on large-scale, imbalanced pest and disease datasets.\n" +
        "\n" +
        "Tried to implement and experiment with an **attention-based heatmap-guided classification pipeline**, consisting of:\n" +
        "\n" +
        "  - Generating class activation maps (CAMs) from **multiple backbones** (ResNet, ViT, and Swin Transformer)\n" +
        "\n" +
        "  - Learning to **select and fuse heatmaps** through an attention module\n" +
        "\n" +
        "  - Performing **ROI extraction based on the fused heatmap**\n" +
        "\n" +
        "  - Applying **SVM** for final classification on discriminative regions\n" +
        "\n" +
        "The pipeline aims to **suppress irrelevant background regions** while integrating the **local feature sensitivity of CNNs (ResNet)** and the **global context modeling capability of Transformer-based models (ViT/Swin-T)**. \n" +
        "\n" +
        "Due to time constraints, **per-image heatmap generation and ROI processing were not completed for the entire dataset**, and therefore the final SVM-based classification stage was **not fully trained end-to-end**.",
    type: "content"
    },
    {
      type: "large-image",
      src: "/img/project/insect-pest-identification/1920_711_result.png",
      width: 1920,
      height: 711
    },
    {
      title: "Results and Analysis",
      desc: "Overall performance was limited by the nature of the dataset:\n" +
        "  - Some categories represent **disease symptoms rather than visible insects**\n" +
        "\n" +
        "  - Target insects are sometimes absent from the image\n" +
        "\n" +
        "  - A large number of classes leads to high inter-class similarity and class imbalance\n" +
        "\n" +
        "These factors also explain the **relatively weaker performance of the VAE-based approach**, which struggled to capture fine-grained discriminative features.",
      type: "content"
    },
    {
      title: "References",
      desc: "An, J., Du, Y., Hong, P. et al. Insect recognition based on complementary features from multiple views. Sci Rep 13, 2966 (2023). [https://doi.org/10.1038/s41598-023-29600-1](https://doi.org/10.1038/s41598-023-29600-1)",
      type: "content"
    }
  ],
  links: [
    { href: "https://github.com/xpwu95/IP102/tree/master", text: "Dataset" },
    { href: "https://github.com/EnmmmmOvO/Information-Technology/tree/master/COMP9444/project", text: "Github" },
  ],
  related: {
    prev: { href: "/projects/stet", title: "RWA Tokenization" },
    next: { href: "/projects/turtle-segmentation", title: "Sea Turtle Segmentation" }
  }
}

export default data;