import {
  DetailProjectProps,
  LinkProps, RelatedProjectProps
} from '@/types/project';

export interface PortfolioProps {
  detail: DetailProjectProps;
  links: LinkProps[];
  related: RelatedProjectProps;
}