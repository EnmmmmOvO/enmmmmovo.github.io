import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/data/metadata';

const data = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Portfolios", href: "/portfolios" },
  { title: "Contact", href: "/contact" },
  {
    title: "Links",
    submenu: [
      { label: "Github", href: GITHUB_URL },
      { label: "Linkedin", href: LINKEDIN_URL },
      { label: "Resume", href: RESUME_URL }
    ]
  }
]

export default data;
