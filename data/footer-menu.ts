import { GITHUB_URL, LINKEDIN_URL, OLD_WEBSITE_URL, RESUME_URL } from '@/data/metadata';
import { FooterSection } from '@/types/menu';
import { CONFIG } from '@/config';

const data : FooterSection[] = [
  {
    title: "myPages",
    links: [
      { label: "home", href: CONFIG.HOME },
      { label: "projects", href: CONFIG.PROJECTS.base },
      { label: "portfolios", href: CONFIG.PORTFOLIOS.base },
      { label: "contact", href: CONFIG.CONTACT },
    ],
  },
  {
    title: "links",
    links: [
      { label: "github", href: GITHUB_URL, blank: true },
      { label: "linkedin", href: LINKEDIN_URL, blank: true },
      { label: "resume", href: RESUME_URL, blank: true },
      { label: "oldVersion", href: OLD_WEBSITE_URL, blank: true },
    ],
  }
];

export default data;