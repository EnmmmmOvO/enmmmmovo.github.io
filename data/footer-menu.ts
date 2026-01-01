import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/data/metadata';

const data : FooterSection[] = [
  {
    title: "My Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Portfolios", href: "/portfolios" },
      { label: "Contact", href: "/contact" },
      { label: "Old Version", href: "https://enmmmmovo.github.io/" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "Github", href: GITHUB_URL },
      { label: "Linkedin", href: LINKEDIN_URL },
      { label: "Resume", href: RESUME_URL },
    ],
  }
];

export default data;