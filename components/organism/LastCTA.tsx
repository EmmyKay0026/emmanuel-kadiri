import React from "react";
import Link from "next/link";
import TitleText from "../molecules/TitleText";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "Linkedin", url: "https://www.linkedin.com/in/kadiri-o-emmanuel/" },
  { name: "Twitter", url: "https://x.com/emmykay26" },
  { name: "Instagram", url: "https://www.instagram.com/kadiri___emmanuel/" },
  { name: "Github", url: "https://github.com/EmmyKay0026" },
];

const LastCTA = () => {
  return (
    <div className=" relative w-full bg-primaryGreen text-accent dark:bg-darkGreen dark:text-accent min-h-[100vh] flex flex-col justify-between py-[60px] px-[20px] md:px-[50px] lg:px-[70px] lg:py-[4.5rem] overflow-clip">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full z-1 ">
        <div className="mb-20 ">
          <TitleText
            largeClassName="text-white font-bold "
            smallClassName="text-accent dark:text-primaryGreen "
            smallHeading=" What are you building? or do you need any of my services?"
            largeHeading="Let's Build your Project Together"
          />

          <div className="w-full flex justify-end mt-8">
            <Link
              target="_blank"
              href={"https://wa.me/+2348104064231?text=Hello Emmanuel,"}
            >
              <button className=" px-[50px] btn py-[20px] cursor-pointer rounded-[90px] font-bold my-4 border-[2px] border-primaryGreen transition-all duration-300 ease-in-outrounded-full  bg-accent text-secondary dark:bg-primaryGreen dark:text-accent  ">
                Hire Me! →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info and Social Links */}
      <div className="max-w-7xl mx-auto w-full z-1 ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 md:mb-0 space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href={`mailto:kadiriemmanueloshio0026@gmail.com`}
              className="flex items-center space-x-2 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[.9rem] md:text-[1rem]">
                kadiriemmanueloshio0026@gmail.com
              </span>
            </a>
            <a
              href={`tel:${"+234 810 406 4231".replace(/\s/g, "")}`}
              className="flex items-center space-x-2 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-[.9rem] md:text-[1rem]">
                +234 810 406 4231
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xl hover:text-gray-400 transition-colors"
            >
              <span>{link.name}</span>
              <FiArrowUpRight />
            </a>
          ))}
        </div>
      </div>
      <Image
        src={"/footer_bg.gif"}
        alt=""
        width={700}
        unoptimized
        height={500}
        className="absolute left-0 top-[40%] rounded-2xl"
      />
      <Link
        href={
          "https://www.dropbox.com/scl/fo/jq74hj3ncqbb05pg1jmtc/ANRp7Q8mAmhSMxUtMKy0FFE?rlkey=zh8vkv54fxyekqp2zrhbnv7wb&e=1&st=c10t1khm&dl=0"
        }
        target="_blank"
      >
        dropbox
      </Link>
      <div
        style={{
          backgroundImage:
            " linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
          backgroundPosition: "0px 100%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
      />
    </div>
  );
};

export default LastCTA;
