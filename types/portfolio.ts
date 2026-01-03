import {
  LinkProps, RelatedProjectProps
} from '@/types/project';

export interface PortfolioProps {
  title: string;
  key: string;
  ignoreDetails?: string[];
  links: LinkProps[];
  related: RelatedProjectProps;
}