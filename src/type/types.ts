import type { IconButtonProps } from '@mui/material';

export interface ProjectDetailProps {
  id: string;
  logo: string;
  type: string;
  link?: string;
  repo?: string;
  title: string;
  description: string;
  content: {
    type: "title" | "text" | "list";
    key?: string;
    items?: string[];
  }[];
  paper?: string;
  imageSize: number;
  image: string[];
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface MouseProps {
  hover: boolean;
  hoverOn: () => void;
  hoverOff: () => void;
}

export interface SidebarContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

export interface WindowContextProps {
  width: number;
  height: number;
}

export interface PortfolioDetailProps {
  id: string;
  logo: string;
  type: string;
  title: string;
  video?: string;
  description: string;
  paper?: string;
  repo?: string;
  image: string;
}
