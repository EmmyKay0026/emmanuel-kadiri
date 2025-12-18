import { AwardCertificate } from "@/types";
import Image from "next/image";
import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const JourneySoFarMobCard = ({ img, title, date }: AwardCertificate) => {
  const [experienceImg, setExperienceImg] = useState<number>(0);

  const prevImage = () => {
    setExperienceImg((prev) => (prev === 0 ? 0 : prev - 1));
    // console.log(experienceImg);
  };
  const nextImage = () => {
    setExperienceImg((prev) => (prev === img.length - 1 ? 0 : prev + 1));
    // console.log(experienceImg);
  };
  return (
    <div
      className="flex flex-col wh-screen w-screen items-start justify-left gap-[20px]  overflow-hidden lg:flex-row"
      //   ref={ref}
    >
      <article className="relative w-[80%]">
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
                className="text-[2rem] cursor-pointer "
              />
              <IoIosArrowDroprightCircle
                onClick={nextImage}
                className="text-[2rem] cursor-pointer "
              />
            </div>
          )}
        </div>
      </article>
      <div className="w-[80%] flex flex-col gap-[24px]">
        <h1 className="text-[1.6rem] leading-[2rem] font-bold  text-black dark:text-white md:text-[2.4rem] md:leading-[2.8rem] lg:text-[3rem] lg:leading-[3.4rem]">
          <span className="text-primaryGreen  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ">
            {date}
          </span>
          {title}
        </h1>
        {/* <p className="font-light text-secondary dark:text-accent">
          {desc}
        </p> */}
        {/* <a
          href={link}>
          <Button
          //   className="bg-pink-500 text-white px-6 py-3 rounded-[10px] font-medium hover:bg-pink-600 transition"
          >
            Learn more
          </Button>
        </a> */}
      </div>
    </div>
  );
};

export default JourneySoFarMobCard;
