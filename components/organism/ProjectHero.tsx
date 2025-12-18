import React from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Pause, User2Icon, Timer } from "lucide-react"; // Assuming lucide-react is available, common in nextjs projects
import { ProjectDetailType } from "@/types";
import Button from "../atoms/Button";
import { CgOrganisation } from "react-icons/cg";
import Link from "next/link";

const ProjectHero = ({
  title,
  description,
  coverImage,
  ctaText,
  role,
  timeline,
  client,
  website,
}: Partial<ProjectDetailType>) => {
  return (
    <div
      className="w-full bg-accent dark:bg-secondary px-[20px] md:px-[50px] lg:px-[70px] pt-20"
      style={{
        backgroundImage: `url(/images/masked_design.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      {/* <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100 overflow-hidden relative"> */}
      {/* Background Gradients/Blobs specific to this design */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" /> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" /> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 pt-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-black dark:text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-secondary dark:text-accent leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Content - Stats & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6 pt-2">
          {role && (
            <div className="bg-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 pr-8">
              <div className="flex items-center space-x-4">
                <User2Icon className="w-6 h-6 text-slate-800" />
                <span className="font-bold text-slate-800 text-sm">
                  {role}{" "}
                </span>
              </div>
            </div>
          )}

          {timeline && (
            <div className="bg-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 pr-8">
              <div className="flex items-center space-x-4">
                <Timer className="w-6 h-6 text-slate-800" />
                <span className="font-bold text-slate-800 text-sm">
                  {timeline}{" "}
                </span>
              </div>
            </div>
          )}

          {client && (
            <div className="bg-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 pr-8">
              <div className="flex items-center space-x-4">
                <CgOrganisation className="w-6 h-6 text-slate-800" />
                <span className="font-bold text-slate-800 text-sm">
                  {client}
                </span>
              </div>
            </div>
          )}

          {ctaText && (
            <Link href={website || "#"} className="">
              <Button className=" px-8 py-4 ">{ctaText}</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Hero Image */}
      <div className="mt-16 relative">
        <div className="relative w-full aspect-[2/1.4] lg:aspect-[2/.8]  bg-[#ffffff73] backdrop-blur-sm rounded-[32px] overflow-hidden shadow-inner border border-gray-200/50">
          {/* Simulated 3D Character Image Placeholder */}

          <div className="absolute inset-0 flex items-center justify-center m-[20px] rounded-[32px] bg-[#222222a8] ">
            <Image
              src={coverImage!}
              alt="3D Character"
              fill
              className="w-full h-full object-contain opacity-90 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Floating UI Elements on Image */}
          {/* <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white">
                                        <Pause size={20} fill="currentColor" className="opacity-90" />
                                    </div> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProjectHero;
