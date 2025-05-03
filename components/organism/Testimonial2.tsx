import React from "react";
import TestimonialCard2 from "../molecules/TestimonialCard2";
import Image from "next/image";

const Testimonial2 = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between  gap-[30px] py-[4.5rem] bg-[#F8FCFC] dark:bg-secondary px-[20px] md:px-[50px] lg:px-[70px]">
      <div className="flex flex-col justify-start gap-[25px] w-[50%]">
        <TestimonialCard2 />
        <div className="ml-10">
          <TestimonialCard2 />
        </div>
        <TestimonialCard2 />
      </div>
      <div className="w-[50%]">
        <Image
          src={"/images/about_img.png"}
          alt=""
          className="
          object-cover w-full h-full rounded-[10px]"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Testimonial2;
