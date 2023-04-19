import { CardProps } from ".";

export type LogoDescrpitionCardProps = {
  logo: string;
  actions?: {
    label: string;
    link: string;
  }[];
  properties: {
    label: string;
    value: string;
    badge?: JSX.Element;
  }[];
} & Partial<CardProps>;
