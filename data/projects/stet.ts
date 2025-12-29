import { type ProjectProps } from '@/types/project';

const data : ProjectProps = {
  detail: {
    name: "RWA Tokenization (STET)",
    desc: "This project implements a real-world asset (RWA) tokenization workflow on a BEP-20–compatible blockchain. The system enables compliant token issuance, stablecoin-based subscriptions, and on-chain equity conversion, with built-in access control and security safeguards.\n",
    shortDetails: [
      {
        title: "Date",
        content: "Sep 2025"
      },
      {
        title: "Role",
        content: "Token Contract Design & Implementation"
      },
      {
        title: "Technologies",
        content: "RWA"
      },
      {
        title: "Context",
        content: "Company Collaboration"
      },
    ],
    tags: [ "RWA", "Solidity", "Hardhat", "Smart Contracts" ]
  },
  img1: "/img/project/stet/1920_1200_logo.png",
  content: [
    {
      title: "System Architecture",
      type: "content",
      desc: "The on-chain system is composed of three main contract components:\n" +
        "\n" +
        "- **Equity Token (STET)**  \n" +
        "  A BEP-20–compatible equity token with whitelist and blacklist enforcement, pausability, and permit-based approvals.\n" +
        "\n" +
        "- **Subscription Contract**  \n" +
        "  Handles token subscriptions using stablecoins (USDT / USDC), enforces fundraising caps, and distributes equity tokens from a treasury address.\n" +
        "\n" +
        "- **Equity Conversion Contract**  \n" +
        "  Allows users to convert equity tokens through on-chain burn operations, with optional EIP-2612 permit support for gas-efficient approvals.\n" +
        "\n" +
        "Each contract follows a clear separation of responsibilities to reduce complexity and improve auditability."
    },
    {
      title: "Security Properties Considered",
      type: "content",
      desc: "- Implemented the equity token using OpenZeppelin extensions, including **ERC20Permit**, **ERC20Burnable**, and **ERC20Pausable**.\n" +
        "\n" +
        "- Enforced **whitelist and blacklist controls** at the token transfer level to support compliance requirements.\n" +
        "\n" +
        "- Designed the subscription mechanism to support **stablecoin payments**, fundraising caps, and deterministic token issuance.\n" +
        "\n" +
        "- Implemented a **burn-based equity conversion flow**, emitting on-chain events for off-chain reconciliation.\n" +
        "\n" +
        "- Integrated **reentrancy protection** and safe transfer patterns across all state-changing operations.\n"
    },
  ],
  links: [
    { href: "https://github.com/stet-easycal/stet", text: "Github" }
  ],
  related: {
    prev: { href: "/projects/data-clean", title: "Data Cleaning Platform" },
    next: { href: "/projects/insect-pest-identification", title: "Insect Pest Specifies Identification"}
  }
};

export default data;