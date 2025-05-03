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

export type AwardCertificate = {
  id?: number;
  img: string[];
  title: string;
  desc?: string;
  link?: string;
  date: string;
};
