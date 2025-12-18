import Link from "next/link";
import React from "react";
import Button from "../atoms/Button";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section
      className="flex flex-wrap justify-center md:flex-row flex-col items-center  md:items-start gap-4  "
      style={{ backgroundImage: `url(/images/masked_design.png)` }}
    >
      <article className="flex-1 w-full lg:w-[50%] flex flex-col justify-center items-start gap-6 pl-[20px] md:pl-[50px] lg:pl-[70px] pt-10 pb-10 lg:pb-30 ">
        <div className="">
          <h1 className="sm:text-[2.9rem] text-[2.5rem] leading-[2.4rem]  text-pretty  text-secondary dark:text-accent md:text-[2.7rem] md:leading-[3.4rem] lg:text-[4rem] lg:leading-[5rem]">
            <span className="text-primaryGreen lg:mb-4  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ">
              Hello, I&apos;m Emmanuel Kadiri
            </span>
            I turn ideas{" "}
            <Image
              width={90}
              height={80}
              src="/images/idea.gif"
              alt="idea"
              unoptimized
              className="object-contain  inline-block ml-2 "
            />{" "}
            into software solutions{" "}
            <Image
              width={90}
              height={80}
              src="/images/software.gif"
              alt="solution"
              unoptimized
              className="object-contain inline-block ml-2"
            />
            {"."}
          </h1>
          {/* <p className="">WIth</p> */}
        </div>
        <div className="hero-btn-cont flex gap-[9px] md:gap-[20px]">
          <Link href={"/#portfolio"} className="">
            <Button outline className="whitespace-nowrap m-0">
              My Work
            </Button>
          </Link>
          <Link
            target="_blank"
            href={"mailto:kadiriemmanueloshio0026@gmail.com"}
            className=""
          >
            <Button className="whitespace-nowrap m-0">Email Me</Button>
          </Link>
        </div>
      </article>
      <article className="relative hidden lg:block w-[60%] lg:w-[45%]  h-[400px] lg:h-dvh  ">
        <Image
          src={"/images/hero-emmanuel.png"}
          alt="Emmanuel Kadiri"
          fill
          className="absolute w-[40%] rounded-t-2xl h-full object-cover object-top"
        />

        {/* <div className="bg-accent dark:bg-secondary absolute top-0 left-0 w-[100px] rounded-br-[30px] h-[200px]  pointer-events-none">
  <p className="">5+ years of experience</p>
  <p className="">10+ projects delivered</p>
</div> */}
        {/* Social Icons */}

        <div className="absolute  right-10 ">
          <div className="hidden flex-col justify-end items-end gap-3 py-2 px-[8px] rounded-b-[3px] lg:flex ">
            <Link
              href="https://github.com/EmmyKay0026"
              target="_blank"
              className=""
            >
              <Image
                src={"/images/github.png"}
                alt="github icon"
                width={30}
                height={30}
                className="saturate-0 hover:saturate-100"
              />
            </Link>
            <Link href="https://x.com/emmykay26" target="_blank" className="">
              <Image
                src={"/images/x.png"}
                alt="twitter icon"
                width={30}
                height={30}
                className="saturate-0 hover:saturate-100"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kadiri-o-emmanuel"
              target="_blank"
              className=""
            >
              <Image
                src={"/images/linkedin.png"}
                alt="linkedin icon"
                width={30}
                height={30}
                className="saturate-0 hover:saturate-100"
              />
            </Link>
            <Link
              href="https://www.instagram.com/kadiri___emmanuel"
              target="_blank"
              className=""
            >
              <Image
                src={"/images/instagram.png"}
                alt="instagram icon"
                width={30}
                height={30}
                className="saturate-0 hover:saturate-100"
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeHero;
