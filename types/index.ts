import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};
export type InputProps = {
  className?: string;
  min?: number;
  type?: string;
  placeholder?: string;
  inputClassName?: string;
  id?: string;
  name: string;
  value?: any;
  htmlFor?: string;
  label?: string;
  checked?: boolean;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;

  autoComplete?: React.HTMLInputAutoCompleteAttribute;
};

export type BlurbProp = {
  image: string | StaticImport;
  heading: string;
  body: string;
};

export interface PortfolioCardListType {
  img: string;
  jobDone: string;
  title: string;
  shortDes: string;
  link: string;
  ctaText: string;
}

export interface ProjectDetailType {
  slug: string;
  title: string;
  jobDone: string;
  cardCtaText: string;
  shortDes: string;
  description: string;
  coverImage: string;
  overview: string;
  technologies: string[];
  features: string[];
  client: string;
  timeline: string;
  role: string;
  images: string[];
  moreImages?: string[];
  website: string;
  ctaText: string;
  challenges: string;
  challengesList: string[];
  solution: string;
  solutionList: string[];
  learnings: string[];
  featured: boolean;
  problemImg?: string;
  solutionImg?: string;
}

export type AwardCertificate = {
  id?: number;
  img: string[];
  title: string;
  desc?: string;
  link?: string;
  date: string;
};
