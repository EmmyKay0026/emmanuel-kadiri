"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { awardsCertificateConstant } from "@/constants/awardsCertification";
import Image from "next/image";
import { AwardCertificate } from "@/types";

// let window: any;
const imgVariants = {
  initial: { x: -500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const textVariants = {
  initial: { x: 500, y: 500, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 },
  },
};

const ListItem = ({ img, title, desc, date }: AwardCertificate) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [experienceImg, setExperienceImg] = useState<number>(0);

  const prevImage = () => {
    setExperienceImg((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const nextImage = () => {
    setExperienceImg((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="flex flex-col wh-screen w-screen items-center justify-center gap-[100px] overflow-hidden lg:flex-row"
      ref={ref}
    >
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-full rounded-[20px] overflow-hidden lg:w-[40%]"
      >
        <article className="relative w-[100%]">
          <div className="w-full rounded-[20px] ">
            <Image
              src={img[experienceImg]}
              alt=""
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
            {img.length > 1 && (
              <div className="flex justify-between items-center w-full absolute top-0 h-full">
                <IoIosArrowDropleftCircle
                  onClick={prevImage}
                  className="text-[2rem] cursor-pointer"
                />
                <IoIosArrowDroprightCircle
                  onClick={nextImage}
                  className="text-[2rem] cursor-pointer"
                />
              </div>
            )}
          </div>
        </article>
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="w-full lg:w-[40%] flex flex-col gap-[24px]"
      >
        <motion.h1
          variants={textVariants}
          className="text-[2rem] leading-[2.4rem] font-bold  text-black dark:text-white md:text-[2.4rem] md:leading-[2.8rem] lg:text-[3rem] lg:leading-[3.4rem]"
        >
          <motion.span
            variants={textVariants}
            className="text-primaryGreen  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] "
          >
            {date}
          </motion.span>
          {title}
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="font-light text-secondary dark:text-accent"
        >
          {desc}
        </motion.p>
        {/* <motion.a variants={textVariants} href={link}>
          <Button
          //   className="bg-pink-500 text-white px-6 py-3 rounded-[10px] font-medium hover:bg-pink-600 transition"
          >
            Learn more
          </Button>
        </motion.a> */}
      </motion.div>
    </div>
  );
};

const JourneySoFarDesktop = () => {
  // const [containerDistance, setContainerDistance] = useState(0);
  const [windowsSet, setWindowsSet] = useState<string | number>();
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const calculateDistance = () => {
  //     if (ref.current && typeof window !== "undefined") {
  //       // const rect = ref.current.getBoundingClientRect();
  //       // setContainerDistance(rect.left);
  //     }
  //   };

  //   calculateDistance();

  //   window?.addEventListener("resize", calculateDistance);

  //   return () => {
  //     window?.removeEventListener("resize", calculateDistance);
  //   };
  // }, []);

  useEffect(() => {
    if (ref.current && typeof window !== "undefined") {
      setWindowsSet(window?.innerWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  // const useGetXTranslate = () => {
  //   if (typeof window !== "undefined") {
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -windowsSet! * awardsCertificateConstant.length]
  );

  //     return xTranslate;
  //   }
  // };
  return (
    <div className="relative h-[600vh] hidden lg:block " ref={ref}>
      <motion.div
        className="sticky top-0 flex h-full lg:h-screen w-max flex-row lg:flex-row"
        style={{ x: xTranslate }}
      >
        <div
        //  className={`w-[calc(100vw-var(--${containerDistance}))]`}
        />
        {awardsCertificateConstant.map((item) => (
          <ListItem
            img={item.img}
            title={item.title}
            date={item.date}
            key={item.id}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default JourneySoFarDesktop;
