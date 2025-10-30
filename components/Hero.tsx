import Image from "next/image";
import React from "react";
import Button from "./atoms/Button";
import HireMeCTA from "./molecules/HireMeCTA";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      className="relative  flex flex-col justify-center items-center py-[2.5rem] bg-accent dark:bg-secondary"
      style={{
        // background:
        //   "linear-gradient(to bottom, var(--color-primary), var(--color-secondary))",
        color: "var(--color-text)",
      }}
    >
      <Image
        src={"/images/hero_decor.png"}
        alt="hero decor"
        width={550}
        height={250}
        className="absolute  top-[40%] right-0 z-[-1]  invert dark:invert-0 md:top-[25%] lg:bottom-5 lg:top-[initial] lg:left-0"
      />
      <section className="flex flex-col justify-between px-[20px] md:px-[50px] lg:px-[70px] lg:flex-row bg-accent dark:bg-secondary ">
        <div className="w-full z-[2] lg:qw-[73%]">
          <h1 className="sm:text-[1.6rem] text-[2rem] leading-[2.4rem]  text-pretty  text-secondary dark:text-accent md:text-[2.7rem] md:leading-[3.4rem] lg:text-[4rem] lg:leading-[5rem]">
            <span className="text-primaryGreen mb-4  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ">
              Hello, I&apos;m Emmanuel Kadiri
            </span>
            Software developer specialized in designing and developing solutions
            for businesses.
            {/* There is way to make your business easier. I design and
            develop solutions for businesses. */}
            {/* I make making money easy for you. */}
            {/* Similar to the <span className="hero-web-txt">popular</span>{" "}
            creation story, I give{" "}
            <span className="text-primaryGreen">life</span> to any project I
            work on. */}
          </h1>
          <div className="h-[10px] lg:h-[60px]" />
          <article className="flex flex-col-reverse justify-between lg:flex-row">
            <div className="hero-btn-cont flex gap-[9px] md:gap-[20px]">
              <Link href={"/#portfolio"} className="">
                <Button outline className="whitespace-nowrap m-0">
                  My Work
                </Button>
              </Link>
              <Link
                target="_blank"
                href={"https://wa.me/+2348104064231?text=Hello Emmanuel,"}
                className=""
              >
                <Button className="whitespace-nowrap m-0">Hire Me</Button>
              </Link>
            </div>
            <div className="h-[10px] lg:h-[60px]" />
            <p className="text-[1.2rem] lg:text-[1.5rem] text-secondary dark:text-accent lg:w-[50%]">
              {/* I analyse, design build and scale solutions for businesses.
              Helping you focus on business growth and revenue */}
              {/* Similar to the popular creation story, I give life to any project
              I work on. */}
              {/* As a Product Manager and Digital Transformation Consultant, I help
              businesses design, develop, and scale impactful digital solutions.
              From Website Design and Branding to Marketing, App Development,
              and Product Management—I turn ideas into reality. */}
            </p>
          </article>
        </div>
        {/* <div className="w-[100%] md:w-[50%] lg:w-[34%]">
          <Image
            src={"/images/hero_img.png"}
            alt="image of Emmanuel"
            width={200}
            height={200}
            className="object-cover  sw-[20%]   static top-0 md:dw-[50%] lg:relative lg:bottom-0 lg:w-[100%] lg:right-[200px] lg:pt-[100px] "
          />
        </div> */}
        {/* <div className="">
          <div className="hidden flex-col justify-end items-end gap-3 bg-white py-2 px-[8px] rounded-b-[3px] dark:bg-darkGreen lg:flex ">
            <a href="" className="">
              <Image
                src={"/images/github.png"}
                alt="github icon"
                width={20}
                height={20}
                className="saturate-0 hover:saturate-100"
              />
            </a>
            <a href="" className="">
              <Image
                src={"/images/x.png"}
                alt="twitter icon"
                width={20}
                height={20}
                className="saturate-0 hover:saturate-100"
              />
            </a>
            <a href="" className="">
              <Image
                src={"/images/linkedin.png"}
                alt="linkedin icon"
                width={20}
                height={20}
                className="saturate-0 hover:saturate-100"
              />
            </a>
            <a href="" className="">
              <Image
                src={"/images/instagram.png"}
                alt="instagram icon"
                width={20}
                height={20}
                className="saturate-0 hover:saturate-100"
              />
            </a>
          </div>
        </div> */}
      </section>
      <div className="hidden fixed right-[20px] bottom-0 md:block lg:right-[40px] z-[997]">
        <HireMeCTA />
      </div>
      {/* <h1 className="text-5xl md:text-7xl font-bold mb-4">Emmanuel Kadiri</h1>
      <p className="text-lg md:text-2xl mb-6 text-center max-w-2xl">
        A passionate developer and designer creating impactful digital
        experiences.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100"
        style={{
          background: "var(--color-button-bg)",
          color: "var(--color-button-text)",
        }}
      >
        View My Work
      </a> */}
    </section>
  );
};
