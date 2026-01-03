export const CONFIG = {
  HOME: "/",
  PROJECTS: {
    base: "/projects",
    detail: (id: string) => `/projects/${id}`,
  },
  PORTFOLIOS: {
    base: "/portfolios",
    detail: (id: string) => `/portfolios/${id}`,
  },
  CONTACT: "/contact",
}

export const ProjectIntl = (key?: string) =>
  key ? `data.projects.${key}` as const : `projects` as const;

export const PortfolioIntl = (key?: string) =>
  key ? `data.portfolios.${key}` as const : `portfolios` as const;

export const WorkIntl = (key: string) => `data.work.${key}` as const;
export const EducationIntl = (key: string) => `data.education.${key}` as const;

