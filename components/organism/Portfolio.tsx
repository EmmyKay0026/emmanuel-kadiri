"use client";
import React from "react";
import PortfolioCard from "../molecules/PortfolioCard";
import TitleText from "../molecules/TitleText";
import { PortfolioCardList } from "@/constants/protfolio";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-[4.5rem] px-[20px] md:px-[50px] lg:px-[70px]  bg-accent dark:bg-secondary"
    >
      <div className="">
        <TitleText smallHeading="Portfolio" largeHeading="Featured Projects" />
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 space-y-3 gap-[10px] md:gap-[10px] mt-5 lg:space-y-0 lg:gap-[30px] lg:mt-10 ">
        {/* <div className="overflow-x-scroll overflow-y-clip pl-[20px] md:pl-[50px] lg:pl-[70px]  scrollbar-hide">
        <div
          className="flex space-x-3 md:gap-[10px] pr-6 mt-5 lg:gap-[30px] lg:mt-10"
          style={{ width: "max-content" }}
        > */}
        {PortfolioCardList.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
        {/* <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard /> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
