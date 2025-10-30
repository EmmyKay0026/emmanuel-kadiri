/* eslint-disable */
"use client";
import { motion } from "framer-motion";
import { FaCogs, FaUsers, FaEye } from "react-icons/fa";
import SpotlightCard from "../molecules/SpotlightCard";
import TitleText from "../molecules/TitleText";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const boxes = [
  {
    icon: <FaCogs size={36} className=" text-black dark:text-white" />,
    title: "Efficient & Functional Systems",
    text: "I specialize in building robust, scalable, and efficient systems that deliver real value and performance.",
  },
  {
    icon: <FaUsers size={36} className=" text-black dark:text-white" />,
    title: "Collaboration & Communication",
    text: "I thrive in team environments, communicating ideas clearly and working collaboratively to achieve shared goals.",
  },
  {
    icon: <FaEye size={36} className=" text-black dark:text-white" />,
    title: "Attention to Detail",
    text: "I pay close attention to every detail, ensuring high-quality results and a polished user experience.",
  },
];

const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

export default function WhyMe() {
  const { resolvedTheme } = useTheme();
  return (
    <section className="flex flex-col items-center  bg-white dark:bg-secondary py-[4.5rem] px-[20px] md:px-[50px] lg:px-[70px]">
      <article className="w-full">
        <TitleText
          smallHeading="Why Me?"
          largeHeading="Here are some special offer for you"
          largeClassName=""
          smallClassName="dark:text-primaryGreen"
        />
      </article>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full  mt-5 lg:mt-10">
        {boxes.map((box, i) => (
          <SpotlightCard
            key={i}
            className=" bg-accent nav-box-shadow"
            spotlightColor={
              resolvedTheme == "light"
                ? "rgba(0, 130, 115, 0.25)"
                : "rgba(255, 255, 255, 0.25)"
            }
            // spotlightColor="rgba(0, 130, 115, 0.25)"
          >
            {/* <motion.div
              key={box.title}
              className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center text-center"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={boxVariants}
            > */}
            <div className="mb-4">{box.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {box.title}
            </h3>
            <p className="text-secondary dark:text-accent text-[14px]">
              {box.text}
            </p>
            {/* </motion.div> */}
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
