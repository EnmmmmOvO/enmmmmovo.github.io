type Footer1Props = {
  title: string;
  links: { label: string; href: string }[];
}

type FooterSection = | Footer1Props | { groups: Footer1Props[]; };