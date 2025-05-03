import React from "react";
import Image from "next/image";
import TitleText from "../molecules/TitleText";

const Services = () => {
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

  return (
    <section
      id="services"
      className=" bg-accent dark:bg-secondary text-secondary dark:text-accent   py-[60px] px-[20px] md:px-[50px] lg:px-[70px] lg:py-[4.5rem] "
    >
      <div className="container ">
        <TitleText smallHeading="My Services" largeHeading="What I offer you" />
        <div className="flex justify-between items-start">
          <div className="flex flex-col w-[40%] gap-8 mt-5 lg:mt-10 ">
            {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 "> */}
            {projectList.map((project, index) => (
              <div
                key={index}
                style={{
                  boxShadow:
                    "0px 10px 40px -10px rgba(65.00000000000003, 62.00000000000004, 101.00000000000006, 0.27)",
                }}
                className=" flex flex-col justify-between p-6 bg-gray-100 dark:bg-gray-800 rounded-lg  transition-shadow"
              >
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
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
                <a
                  href={project.link}
                  className="text-darkGreen hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
          <div className="w-[50%]">
            <Image
              src={"/images/about_img.png"}
              alt=""
              className="object-cover w-full h-full rounded-[10px]"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
