"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import { CgClose } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import { motion, Variants } from "framer-motion";
import { PortfolioCardListType, ProjectDetailType } from "@/types";
import Link from "next/link";
import Image from "next/image";

const PortfolioCard = ({ item }: { item: ProjectDetailType }) => {
  const [moreDetails, setMoreDetails] = useState<boolean>(true);

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const detailsVariants: Variants = {
    hidden: { width: "0%", opacity: 0 },
    visible: {
      width: "50%",
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <motion.article
      className="rounded-[10px] relative w-full  lg:we-[500px]  h-[328px]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{
        boxShadow:
          "0px 10px 40px -10px rgba(65.00000000000003, 62.00000000000004, 101.00000000000006, 0.27)",
      }}
    >
      <Image
        src={item.coverImage}
        alt="portfolio image"
        width={600}
        height={328}
        unoptimized={item.coverImage.split(".")[1] == "gif" ? true : false}
        // unoptimized
        className="rounded-[10px] w-full h-full object-cover"
      />
      <motion.div
        onClick={() => setMoreDetails(true)}
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 75.67%, rgba(0, 0, 0, 1) 100%)",
        }}
        className={cn(
          "absolute bottom-0 pt-[20px] cursor-pointer w-full h-[100px] rounded-b-[10px] pl-[20px] bg-portfolio_bg text-white"
        )}
      >
        <h3 className="font-bold text-[1.3rem] md:text-[1.6rem]">
          {item.title}
        </h3>
        <p className="text-[.9rem] italic flex items-center gap-1">
          {item.jobDone}
          <FaArrowRight />
        </p>
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-[50%] h-full flex flex-col justify-center pl-5 pr-2 blur_bg bg-secondary dark:bg-accent shadow-extra opacity-80 shadow-3xl rounded-[10px]"
        variants={detailsVariants}
        initial="visible"
        animate={moreDetails ? "visible" : "hidden"}
      >
        <div className="w-full relative mb-6 right-0 flex justify-end">
          <CgClose
            onClick={() => setMoreDetails(false)}
            className="cursor-pointer text-accent dark:text-secondary"
          />
        </div>
        <h2 className="text-[1.2rem] font-bold text-white dark:text-black md:text-[1.5rem]">
          {item.title}
        </h2>
        <p className="text-accent dark:text-secondary text-[.7rem] md:text-[.8rem] line-clamp-3">
          {item.shortDes}
        </p>
        <div className="w-[70%]">
          <Link
            href={`/project/${item.slug}`}
            target={item.slug.includes("http") ? "_blank" : ""}
          >
            <Button className="whitespace-nowrap px-[20px] py-[10px] text-[.7rem] md:text-[.9rem] dark:hover:text-primaryGreen dark:hover:border-primaryGreen hover:text-white hover:border-white">
              {item.cardCtaText || "Learn more"}
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default PortfolioCard;
