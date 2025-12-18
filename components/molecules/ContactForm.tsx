"use client";
import React, { useRef, useState } from "react";
import TitleText from "./TitleText";
import Input from "../atoms/Input";
import emailjs from "@emailjs/browser";
import Button from "../atoms/Button";
import { CgSpinner } from "react-icons/cg";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);

  interface EmailFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    tel_no: HTMLInputElement;
    message: HTMLTextAreaElement;
    checkboxes: NodeListOf<HTMLInputElement>;
  }

  interface EmailForm extends HTMLFormElement {
    elements: EmailFormElements;
  }

  const sendEmail = async (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID!,
        }
      );
      // console.log(result);

      e.currentTarget.reset();
      setSubmit(true);
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const closeThankyou = () => {
    setSubmit(false);
  };

  return (
    <>
      {/* Thank you component */}
      {submit ? (
        <section
          onClick={closeThankyou}
          className="flex flex-col justify-center h-full items-start"
        >
          <TitleText
            smallHeading="Thank you for reaching out"
            largeHeading="Your request is been reviewed, you would get a response soon"
          />
          <div className="flex flex-col justify-start items-start  rounded-[28px] py-[26px] px-[24px]  w-[86vw] md:px-[34px]  md:w-[55vw] lg:w-[45vw] ">
            {/* <p className="text-[1.1rem]  text-secondary  dark:text:accent mb-[10px]">
              In the meantime, feel free to explore my previous projects and learn more
              about what we can offer.
            </p> */}
          </div>
        </section>
      ) : (
        <>
          <TitleText
            smallHeading="Contact me"
            largeHeading="Let's talk about your next project"
          />
          <form ref={form} onSubmit={sendEmail} className="mt-[40px]">
            <div className=" mt-10">
              <Input
                label="Full Name"
                name="name"
                id="name"
                type="text"
                placeholder="John Doe"
                inputClassName="bg-transparent  px-[10px] "
                className=""
                required
              />
            </div>
            <div className=" mt-10">
              <Input
                label="Email"
                name="email"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                inputClassName="bg-transparent  px-[10px] "
                className=""
                required
              />
            </div>
            <div className=" mt-10">
              <Input
                label="Phone Number"
                name="tel_no"
                id="tel_no"
                type="tel"
                placeholder="+2340000000"
                inputClassName="bg-transparent  px-[10px] "
                className=""
                required
              />
            </div>
            {/* Interests start */}
            <div className={"my-[16px]"}>
              <label
                className={
                  "text-black my-[30px]  dark:text-white text-[1rem] md:text-[1.2rem]  font-monst"
                }
                htmlFor={"checkboxes"}
              >
                Interested In
                <span className="text-red-600">*</span>
              </label>
              <div className="h-[15px]" />
              <div className="flex flex-wrap gap-x-[7px]  whitespace-nowrap w-full md:gap-x-[10px] gap-y-[35px]">
                <div className="">
                  <input
                    className="w-0 hidden peer"
                    type="checkbox"
                    name="checkboxes"
                    id="web-design"
                    value="Web design"
                  />
                  <label
                    htmlFor="web-design"
                    className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full  mr-[15px] border-secondary dark:border-accent border-2 border-solid md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
                  >
                    Web Design
                  </label>
                </div>
                <div className="">
                  <input
                    className="w-0 hidden peer"
                    type="checkbox"
                    name="checkboxes"
                    id="web-development"
                    value="Web development"
                  />
                  <label
                    htmlFor="web-development"
                    className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full  mr-[15px] border-secondary dark:border-accent border-2 border-solid md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
                  >
                    Web Development
                  </label>
                </div>
                <div className="">
                  <input
                    className="w-0 hidden peer"
                    type="checkbox"
                    name="checkboxes"
                    id="mobile-app"
                    value="Mobile App Development"
                  />
                  <label
                    htmlFor="mobile-app"
                    className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-secondary dark:border-accent border-2 border-solid  md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
                  >
                    Mobile App Development
                  </label>
                </div>
                <div className="">
                  <input
                    className="w-0 hidden peer"
                    type="checkbox"
                    name="checkboxes"
                    id="marketing"
                    value="Marketing"
                  />
                  <label
                    htmlFor="marketing"
                    className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-secondary dark:border-accent border-2 border-solid  md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
                  >
                    Marketing
                  </label>
                </div>
                <div className="">
                  <input
                    className="w-0 hidden peer"
                    type="checkbox"
                    name="checkboxes"
                    id="others"
                    value="Others"
                  />
                  <label
                    htmlFor="others"
                    className="abg-white cursor-pointer text-secondary dark:text-accent px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-secondary dark:border-accent border-2 border-solid  md:text-[1rem] lg:text-[1.125rem] peer-checked:border-primaryGreen peer-checked:bg-primaryGreen peer-checked:text-accent dark:peer-checked:text-accent"
                  >
                    Others
                  </label>
                </div>
              </div>
            </div>
            {/* Interests End  */}
            <div className=" mt-1-[10px] md:mt-[30px] ">
              <label className="text-black dark:text-white text-[1rem] md:text-[1.2rem]  font-monst ">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                className="w-full  px-[10px]  bg-transparent text-[.9rem] md:text-[1rem] outline-none border-b-[1.5px] rounded-[15px] border-solid text-black dark:text-white  border-secondary dark:border-accent py-[10px] dark:placeholder:text-gray-400 placeholder:text-gray-600 "
                // type="text"
                placeholder="Tell Us About Your Project"
                name="message"
                autoComplete="off"
                required
              />
            </div>
            {/* <div className="text-upsel-white text-[16px] mt-[10px] bg-upsel-light-purple cursor-pointer rounded-[4px] text-center mb-[10px] md:mb-[30px] lg:text-[18px] hover:bg-upsel-purple">
              <input
                className="py-[8px] px-[16px]  cursor-pointer w-full"
                type="submit"
                value="Send your request"
              /></ */}
            <Button
              disabled={isLoading}
              // onClick={sendEmail}
              type="submit"
              className="mt-[30px]"
            >
              {isLoading ? (
                <CgSpinner className="animate-spin" />
              ) : (
                "Send your request"
              )}
            </Button>
          </form>
        </>
      )}
    </>
  );
};
export default ContactForm;
