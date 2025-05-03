import Image from "next/image";
import React from "react";

const TestimonialCard2 = () => {
  return (
    <article
      style={{
        boxShadow:
          "0px 10px 40px -10px rgba(65.00000000000003, 62.00000000000004, 101.00000000000006, 0.27)",
      }}
      className="w-[85%] rounded-[10px] p-[35px] "
    >
      <p className="">
        I’ve had the privilege of knowing Mr Emmanuel for four months, and
        during that time, I’ve always been amazed his technical expertise. He is
        passionate about learning and sharing his knowledge with others.
      </p>
      <div className="mt-[20px] flex items-center">
        <div className="card-img-cont h-[42px] w-[42px]  mr-[20px]">
          <Image
            className="rounded-[10px] w-full"
            src={"/images/shulammite.jpg"}
            alt=""
            width={42}
            height={42}
          />
        </div>{" "}
        <div className="card-name m-0 ">
          <h4 className="text-[1rem] text-black dark:text-white font-bold">
            {"Shulammite Ughojo"}
          </h4>
          <span className="text-[.8rem] italic text-secondary dark:text-accent">
            {"UI/UX and Web designer"}{" "}
          </span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard2;
