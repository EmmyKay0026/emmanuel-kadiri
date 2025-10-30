/* eslint-disable */
"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
// import SectionHeader from "../Molecules/SectionHeader";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface CareerJourneyItem {
  key: string;
  title: string;
  description: string;
  activities: string[];
  image: string;
  color: string;
  icon: string;
  date: string;
  location?: string;
  type?: string;
}

const priorities: CareerJourneyItem[] = [
  {
    key: "kageo",
    title: "Lead web designer at Kaego",
    description:
      "At Kaego, a leading travel agency in Nigeria, I worked as a web designer helping to reshape  customer acquisition, user experience and inter-team communications.",
    activities: [
      "redesign their website, making it responsive and user-friendly",
      "executed on-page SEO optimization, improving search engine visibility ",
      "built automated workflows integrating the website and Cliq (Zoho) for client acquisition",
    ],

    image:
      "https://trykaego.com/wp-content/uploads/2025/01/Screenshot_2024-09-07_at_4.11.29_PM-removebg-preview-1.png",
    color: "#2267D1",
    icon: "https://trykaego.com/wp-content/uploads/2025/01/Screenshot_2024-09-07_at_4.11.29_PM-removebg-preview-1.png",
    date: "Jan 2024 - Dec 2024",
    location: "Lagos, Nigeria - Remote",
    type: "Contract",
  },
  {
    key: "gravid",
    title: "Software engineer  at Grav id",
    description:
      "As a software developer at Gravid, I contributed to building, maintaining, and improving the performance of the company's products and tools. This increased the speed of their mobile app by over 40%.",
    activities: [
      "create pixel-perfect web pages",
      "collaborate with other developers to manage and merge our codebase",
      "implement mobile app designs and functionality",
      "participate in hackathons",
    ],
    image: "https://www.grav.id/appicon.svg",
    color: "#3f51b5",
    icon: "https://www.grav.id/appicon.svg",
    date: "June 2024 - present",
    location: "San Francisco, US - Remote",
    type: "Contract",
  },
  {
    key: "amplity",
    title: "Fullstack developer at Amplity",
    description:
      "Amplity is a digital agency that builds websites and web applications for clients across various industries. As a fullstack developer, I work on both the frontend and backend of web projects.",
    activities: [
      "designed database achitectures and APIs for web applications",
      "collaborate with product designers to create pixel-perfect, user-centric websites",
      "manage, maintain, and keep the websites updated",
    ],
    image:
      "https://amplity.agency/wp-content/uploads/2022/06/amplitynewhiRES-e1693831760554-2048x651.png",
    color: "#1297d5",
    icon: "https://amplity.agency/wp-content/uploads/2022/06/amplity-icon.png",
    date: "Apr 2022 - present",
    location: "Warri, Nigeria - Hybrid",
    type: "Contract",
  },
  // {
  //   key: "High Income Skills",
  //   title: "High Income Skills",
  //   description:
  //     "Learn skills that pay the bills and set you up for life. Master in-demand technologies and methodologies.",
  //   activities: [
  //     "collaborate with product designers to create pixel-perfect, user-centric websites",
  //     "manage, maintain, and keep the websites updated",
  //     "",
  //   ],
  //   image: "/assets/images/DSC_0014.jpg",
  //   color: "#9c27b0",
  //   icon: "/assets/images/ri_funds-fill.png",
  //   date: "Jan 2024 - Dec 2024",
  // },
  // {
  //   key: "Physical classes",
  //   title: "Physical classes",
  //   description:
  //     "Face-to-face, undistracted learning in an engaging classroom setting. Experience hands-on learning at its finest.",
  //   activities: ["", "", ""],
  //   image: "/assets/images/Img11.webp",
  //   color: "#009688",
  //   icon: "/assets/images/material-symbols_home-pin-rounded.png",
  //   date: "Jan 2024 - Dec 2024",
  // },
  // {
  //   key: "Networking",
  //   title: "Strategic Networking",
  //   description:
  //     "Build valuable connections with like-minded peers who will challenge and inspire you to grow beyond your limits.",
  //   activities: ["", "", ""],
  //   image: "/assets/images/Img2.webp",
  //   color: "#ff9800",
  //   icon: "/assets/images/game-icons_fist.png",
  //   date: "Jan 2024 - Dec 2024",
  // },
];

export default function CareerJourney() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  // const blockPositions = useRef([]);
  const activeIndexRef = useRef(0);
  const blockPositions = useRef<{ top: number; height: number }[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const { resolvedTheme } = useTheme();
  // Precompute block positions
  useEffect(() => {
    const updateBlockPositions = () => {
      blockPositions.current = blockRefs.current.map((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollTop = window.scrollY || window.pageYOffset;
          return { top: rect.top + scrollTop, height: rect.height };
        }
        return { top: 0, height: 0 };
      });
    };
    updateBlockPositions();
    window.addEventListener("resize", updateBlockPositions);
    return () => window.removeEventListener("resize", updateBlockPositions);
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let closest = 0;
    let minDist = Infinity;

    blockPositions.current.forEach((pos, index) => {
      const blockCenter = pos.top + pos.height / 2;
      const dist = Math.abs(blockCenter - scrollMiddle);

      if (dist < minDist) {
        minDist = dist;
        closest = index;
      }
    });

    if (closest !== activeIndexRef.current) {
      activeIndexRef.current = closest;
      setActiveIndex(closest);
    }

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;
    const activeBlock = blockPositions.current[closest];

    if (dotRef.current && progressRef.current && activeBlock) {
      const dotPosition =
        activeBlock.top + activeBlock.height / 10 - sectionTop;
      dotRef.current.style.transform = `translateY(${dotPosition}px)`;
      progressRef.current.style.height = `${Math.max(0, dotPosition)}px`;
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const handleBlockClick = (index: number) => {
    const block = blockRefs.current[index];
    if (block) {
      block.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center px-4 md:px-10 gap-8 pb-[5%] relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-primaryGreen dark:via-[#222] dark:to-[#131314]"
    >
      {/* <header className="text-center space-y-4 max-w-4xl mx-auto">
        {!isHome ? (
          <SectionHeader
            className="flex justify-center items-center"
            headingClassName=""
            pClassName=""
            headingText="The DYEN Advantage"
            pText="Discover what makes our program exceptional"
          />
        ) : (
          <SectionHeader
            className="flex justify-center items-center"
            headingClassName=""
            pClassName=""
            headingText="What We Do"
            pText="We tackle the globally increasing unemployment rate and uneven wealth distribution by providing a platform for training, mentorship, and internship placements to help youths develop the skills necessary to start their own businesses or land high-income jobs."
          />
        )}
      </header> */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 relative w-full max-w-7xl">
        ` {/* Left Circular Image */}
        <div className="w-full md:top-0 lg:w-auto hidden lg:flex justify-center items-center relative lg:sticky lg:top-[19%] z-10">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[70vh] lg:h-[70vh] arounded-full overflow-hidden ashadow-2xl aring-4 aring-white/50">
            {priorities.map((item, index) => (
              <div key={item.key} className="absolute w-full ">
                <h2
                  // className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-500 leading-tight ${
                  //   index === activeIndex
                  //     ? "text-gray-900 transform translate-x-1 sm:translate-x-2"
                  //     : "text-gray-700 group-hover:text-gray-800"
                  // }`}

                  className={`relative inset-0  object-contain transition-all duration-700 ease-out text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal mb-2 text-black dark:text-white ${
                    index === activeIndex
                      ? "opacity-100 scale-100 rotate-0 z-10"
                      : "opacity-0 scale-110 rotate-3 z-0"
                  }`}
                  //    className=" inset-0 w-full h-full transition-all duration-700 ease-out text-secondary dark:text-primary"
                >
                  {item.title}
                </h2>
                <p
                  className={`relative text-sm sm:text-base mb-[6px] lg:text-xl leading-relaxed transition-all duration-500 text-secondary dark:text-accent ${
                    index === activeIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-110 z-0"
                    //   ? "text-gray-700 transform translate-x-1 sm:translate-x-2"
                    //   : "text-gray-600 group-hover:text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
              </div>
              //   <Image
              //     key={item.key}
              //     src={item.image}
              //     alt={item.title}
              //     loading="lazy"
              //     width={480}
              //     height={480}
              //     className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out ${
              //       index === activeIndex
              //         ? "opacity-100 scale-100 rotate-0 z-10"
              //         : "opacity-0 scale-110 rotate-3 z-0"
              //     }`}
              //   />
            ))}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none" /> */}
          </div>
        </div>
        {/* Center Progress Line */}
        <div className="relative justify-center min-h-full flex-shrink-0 hidden lg:flex">
          <div className="w-2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 absolute rounded-full h-full" />
          <div
            ref={progressRef}
            className="w-1.5 will-change-transform bg-gradient-to-b from-[#03d8bf] to-[#03d8bf] absolute rounded-full transition-transform ease-out"
          />
          <div
            ref={dotRef}
            className="absolute will-change-transform w-6 h-6 rounded-full -left-2.5 transition-transform ease-out border-4 border-white shadow-xl z-30"
            style={{
              backgroundColor: priorities[activeIndex].color,
              boxShadow: `0 0 30px ${priorities[activeIndex].color}60, 0 4px 20px rgba(0,0,0,0.1)`,
            }}
          >
            <div className="absolute inset-1 rounded-full bg-white/30 animate-ping" />
          </div>
        </div>
        {/* Right Content Blocks */}
        <div className="flex flex-col w-full md:pt-[3%] sm:max-w-xl lg:max-w-2xl space-y-12 mb-[10px] md:mb-0 ">
          {priorities.map((item, index) => (
            <div
              key={item.key}
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              onClick={() => handleBlockClick(index)}
              className={`priority-block will-change-transform min-h-[55vh] md:h-[60vh] lg:min-h-[70vh] flex flex-col justify-center  space-y-6 p-4 sm:p-6 lg:p-8 rounded-3xl cursor-pointer group transition-transform duration-300 ${
                index === activeIndex
                  ? "bg-white/80 backdrop-blur-md shadow-2xl transform scale-105 border border-white/50 dark:bg-black/30"
                  : "hover:bg-white/40 lg:blur-[5px] hover:blur-none hover:backdrop-blur-sm hover:shadow-lg hover:scale-102 dark:bg-black/30"
              }`}
              style={{
                background:
                  index === activeIndex
                    ? `linear-gradient(135deg, ${
                        resolvedTheme === "light"
                          ? "rgba(255,255,255,0.95)"
                          : "#222"
                      }, ${item.color}10)`
                    : undefined,
              }}
            >
              {/* Header */}
              <div className="flex relative flex-col">
                {/* Mobile Image - Only shown on small screens */}
                <div className="flex lg:hidden justify-center mb-4 relative">
                  <div className="relative w-full h-52 sm:w-full sm:h-64 md:w-full md:h-72 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/60">
                    {/* {priorities.map((imageItem, imageIndex) => ( */}
                    <Image
                      key={item.key}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={256}
                      height={210}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out ${
                        index === activeIndex
                        // ? "opacity-100 scale-100 rotate-0 z-10"
                        // : "opacity-0 scale-110 rotate-2 z-0"
                      }`}
                    />
                    {/* ))} */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
                    {/* Mobile indicator dot */}
                    <div
                      className="absolute bottom-3 right-3 w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-500"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>

                {/* Icon and Counter Section */}
                <div className="hidden lg:flex items-center gap-3 sm:gap-4 mb-1.5">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full p-2 sm:p-[1%] flex items-center justify-center transition-all duration-300 ${
                      index === activeIndex
                        ? "scale-110 shadow-lg"
                        : "group-hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: `${item.color}20`,
                      border: `2px solid ${item.color}50`,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      loading="lazy"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-white uppercase tracking-wider">
                      {item.date}
                      {/* {String(index + 1).padStart(2, "0")} /{" "}
                      {priorities.length.toString().padStart(2, "0")} */}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 pb-[10px] sm:space-y-4">
                {/* <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-500 leading-tight ${
                    index === activeIndex
                      ? "text-gray-900 transform translate-x-1 sm:translate-x-2"
                      : "text-gray-700 group-hover:text-gray-800"
                  }`}
                >
                  {item.title}
                </h2> */}

                <ul
                  className={`text-sm sm:text-base mb-[6px] lg:text-xl leading-relaxed transition-all duration-500 ${
                    index === activeIndex
                      ? "text-gray-700 dark:text-white transform translate-x-1 sm:translate-x-2"
                      : "text-gray-600 dark:text-white justify-aroundgroup-hover:text-gray-700"
                  }`}
                >
                  {item.activities.map((activity, index) => (
                    <li key={index} className="first list-disc ">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden sticky bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-30">
          {priorities.map((item, index) => (
            <button
              key={item.key}
              onClick={() => handleBlockClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "scale-125" : "scale-95 opacity-20"
              }`}
              style={{ backgroundColor: item.color }}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </section>
      {/* Mobile Progress Indicator unchanged */}
    </div>
  );
}
