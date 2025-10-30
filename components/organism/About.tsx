/* eslint-disable */
"use client";
// import ProfileCard from "./ProfileCard";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleText from "../molecules/TitleText";
import ProfileCard from "../molecules/ProfileCard";
import Link from "next/link";
import Button from "../atoms/Button";
// import ProfileCard from "./ProfileCard";
// import ProfileCard from "./molecules/ProfileCard";

const About = () => {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      id="about"
      className=" blacken flex flex-col justify-between items-center gap-[30px] bg-primaryGreen dark:bg-darkGreen py-[4.5rem] px-[20px] md:px-[50px] lg:px-[70px] lg:flex-row"
      //  mt-[10%] px-[6%] pb-[5%] pt-[0%]
    >
      <div className="w-full lg:w-1/2">
        <TitleText
          smallHeading="About me"
          largeHeading="Emmanuel Kadiri"
          largeClassName="hero-web-txt text-white"
          smallClassName="text-accent dark:text-primaryGreen"
        />
        <p className="text-[18px] mt-3">
          I’m a software developer who loves solving real problems and building
          systems that make life easier. I focus on building the efficient and
          cost effective products. No gimmicks just aesthetically clean
          products.
          {/* I’ve got a background in product
          development, so I understand the full cycle from idea to launch. One
          project. */}
          {/* I'm Emmanuel Kadiri, a resilient, self-taught, MERN stack developer,
          web designer, and copywriter. I am proficient with React, Next Js,
          React Native, and their related libraries. I also make use of web
          design tools such as WordPress and WebFlow.{" "} */}
          {/* I'm Kadiri Emmanuel, a skillful full-stack developer and web designer
          with a passion for mentoring up-coming web designers. With my years of
          experience, I have come to understand the challenges and mistakes
          designers make when starting out. */}
        </p>
        <p className=" text-[18px] mt-3">
          When I’m not coding, you’ll probably find me playing chess or the
          guitar and more commonly, watching an anime.
          {/* I am passionate about team building and creating aesthetically clean
          user-centric designs that have the potential to convert visitors to
          clients. With my digital marketing background, I have come to
          understand the challenges involved in turning visitors into paying
          clients.{" "} */}
          {/* When I began my web design journey, I went all out in learning and
          practice. However, I got carried away learning concepts that were not
          necessary for my development, which eventually cost me time. This
          experience has inspired me to create a comprehensive course that
          guides both intermediate and aspiring web designer on the industry's
          intricacies. */}
        </p>
        <p className="text-[18px] mt-3">
          I am always looking to connect and collaborate with people who are
          build real life solutions
          {/* That is where I come in, I help you get your product or project to
          suit the needs of your users. I prioritize the needs of your product
          through research, communication, and team-building. Among my soft
          skills, I am proficient with Google and Microsoft suites. Let’s talk
          about your project and how we can scale it. Contact me today{" "} */}
          {/* I aim at cultivating a new generation of exceptional web designers,
          capable of collaborating on with me big projects. In this course I
          would be showing you how to maximize your learning in a short period
          of time, empowering designers to hone their skills and reach their
          full potential. If you are going to succeed in the web design space,
          this course is where is begins for you.{" "} */}
          {/* <a
            target="__blank"
            href="https://selar.co/7076v9"
            className="countdown-cta about btn"
          >
            Enroll Now
          </a> */}
        </p>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/file/d/15pAirLk8ckc_KK8EjU8YFm0mIymc5OFI/view?usp=drive_link"
          }
          className="flex justify-start w-full mt-3  cursor-pointer"
        >
          <button className="testi-cta teaser-btn btn px-[30px] py-[20px] cursor-pointer rounded-[10px] font-bold my-4 bg-accent text-secondary dark:bg-primaryGreen dark:text-accent ">
            View my resume
          </button>
        </Link>
        {/* <Social className="socials" /> */}
      </div>
      {/* <section className="aboutme-sec"> */}
      {/* <div className="w-full md:w-[80%] lg:w-[45%]">
        <Image
          className="border-b-[31px] w-full rounded-xl md:border-b-[49px] border-black dark:border-primaryGreen "
          src={"/images/about_img.png"}
          alt=""
          width={400}
          height={400}
        />
      </div> */}
      <ProfileCard
        name="Emmanuel Kadiri"
        title="Software Developer"
        handle="tecko"
        status="Active"
        contactText="Contact Me"
        avatarUrl="/images/about_img_transparent.png"
        showUserInfo={true}
        enableTilt={false}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </motion.section>
  );
};

export default About;

{
  /* <div className="container mx-auto px-6 md:px-12 lg:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
    About Me
  </h2>
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <Image
      src="/images/about_img.png"
      alt="Emmanuel Kadiri"
      className="w-40 h-40 md:w-56 md:h-56 rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg"
      width={200}
      height={200}
    />
    <div>
      <p className="text-lg mb-4">
        Hi, I&apos;m Emmanuel Kadiri, a passionate developer and designer
        with a knack for creating impactful digital experiences. I
        specialize in web development, UI/UX design, and building scalable
        applications.
      </p>
      <h3 className="text-xl font-semibold mb-2">Key Skills & Tools:</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>JavaScript, TypeScript, React, Next.js</li>
        <li>Tailwind CSS, Framer Motion</li>
        <li>Node.js, Express, MongoDB</li>
        <li>Figma, Adobe XD</li>
      </ul>
    </div>
  </div>
</div> */
}
