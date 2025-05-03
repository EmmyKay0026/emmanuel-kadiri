"use client";
import React from "react";
import TitleText from "./molecules/TitleText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projectList = [
    {
      title: "Web development",
      description:
        "Build AI integrated web applications that are fast, responsive, and user-friendly.",
      tags: ["HTML", "CSS", "JavaScript", "React js", "Next js", "Express js"],
      link: "#",
    },
    {
      title: "No-code Web Design",
      description:
        "Give your business the digital presence that shows authenticity it needs with a custom website.",
      tags: ["WordPress", "WebFlow", "Figma"],
      link: "#",
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile app for task management.",
      tags: ["React Native", "Flutter Flow", "Flutter"],
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      className=" bg-accent dark:bg-secondary text-secondary dark:text-accent py-[60px] px-[20px] md:px-[50px] lg:px-[70px] lg:py-[4.5rem] "
    >
      <div className="container">
        <TitleText smallHeading="My Services" largeHeading="What I offer you" />
        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col justify-between p-6 bg-accent dark:bg-[#222222] rounded-lg shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-primaryGreen text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* <a
                href={project.link}
                className="text-darkGreen dark:text-white hover:underline"
              >
                View Project
              </a> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
