import { GITHUB_URL, LINKEDIN_URL, OLD_WEBSITE_URL, RESUME_URL } from '@/data/metadata';
import { CONFIG } from '@/config';

const data = [
  { title: "home", href: CONFIG.HOME },
  { title: "projects", href: CONFIG.PROJECTS.base },
  { title: "portfolios", href: CONFIG.PORTFOLIOS.base },
  { title: "contact", href: CONFIG.CONTACT },
  {
    title: "links",
    submenu: [
      { label: "github", href: GITHUB_URL },
      { label: "linkedin", href: LINKEDIN_URL },
      { label: "resume", href: RESUME_URL },
      { label: "oldVersion", href: OLD_WEBSITE_URL },
    ]
  }
]

export default data;
