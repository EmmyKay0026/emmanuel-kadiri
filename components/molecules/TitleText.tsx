import React from "react";
import { cn } from "../../lib/utils";

type TitleTextProp = {
  smallHeading: string;
  largeHeading: string;
  smallClassName?: string;
  largeClassName?: string;
};
const TitleText = ({
  smallHeading,
  largeHeading,
  smallClassName,
  largeClassName,
}: TitleTextProp) => {
  return (
    <>
      <h1
        className={cn(
          "text-[2rem] leading-[2.4rem] font-mono  text-black dark:text-white md:text-[2.4rem] md:leading-[2.8rem] lg:text-[3rem] lg:leading-[3.4rem]",
          largeClassName
        )}
      >
        <span
          className={cn(
            "text-primaryGreen  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ",
            smallClassName
          )}
        >
          {smallHeading}
        </span>
        {largeHeading}
      </h1>
    </>
  );
};

export default TitleText;
