import React from "react";
import { TestionialCards } from "../molecules/TestimonialCard";
import TitleText from "../molecules/TitleText";
import Link from "next/link";

export const Testimonial = () => {
  return (
    <section className="test-sec blacken bg-img flex flex-col bg-primaryGreen dark:bg-darkGreen py-[40px] px-[20px] md:px-[50px] lg:px-[70px]">
      {/* <h2>Testimonials</h2> */}
      <TitleText
        largeClassName="text-white "
        smallClassName="text-darkGreen dark:text-primaryGreen"
        smallHeading="Testimonials"
        largeHeading="What my clients say about me"
      />
      <div className="testimonials grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-[10px] lg:gap-[30px]  mt-5 lg:mt-10 ">
        <TestionialCards
          imgg={"/images/ewere_raphael.jpg"}
          h4Name="Ewere Raphael"
          spanCont="Founder of Kaego"
          pCont="Emmanuel is one of the most committed and reliable person you can work with. Working with him at Kaego was a blissful experience. He's not just good at his technical skills as a Web Designer/Developer, he listens, has excellent communication skills and is way up there when it comes to work-ethics and integrity. I am happy to recommend him for any opportunity and wish him only the best in his journey ahead!"
        />
        <TestionialCards
          imgg={"/images/adetola.jpg"}
          h4Name="Adetola Ayodele"
          spanCont="Accountability Coach"
          pCont="If 'dependable' were a person, it would be Emmanuel. 

I’ve told him this countless times, and I’m happy to share it with the world—Emmanuel is someone you can always trust to handle his responsibilities flawlessly. You can go to sleep knowing he’ll get the job done, no matter what.

So, if you’re looking for an exceptional web developer who is not only proactive but also reliable to the core, Emmanuel is the one you need on your team."
        />

        <TestionialCards
          imgg={"/images/ojovictor.jpg"}
          h4Name="Victor Ojo"
          spanCont="Visionary of Charisfolks"
          pCont="Mr Emmanuel's expertise is world-class. He is also very diligent and honest. He did a great job designing our website charisfolks.org and delivered on time."
        />
      </div>
      <Link
        target="_blank"
        href={"https://wa.me/+2348104064231?text=Hello Emmanuel,"}
        className="flex justify-center w-full"
      >
        <button className="testi-cta teaser-btn btn w-[50%] md:w-[30%] px-[30px] py-[20px] rounded-[10px] font-bold my-4 bg-accent text-secondary dark:bg-primaryGreen dark:text-accent ">
          Hire Me
        </button>
      </Link>
      {/* <TrustedBy /> */}
    </section>
  );
};
