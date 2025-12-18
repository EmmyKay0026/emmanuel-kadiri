import React from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Pause } from "lucide-react"; // Assuming lucide-react is available, common in nextjs projects
import { ProjectDetailType } from "@/types";
import TextType from "../TextType";
import Button from "../atoms/Button";

const HeroNew = () => {
  return (
    <div
      className="w-full  bg-accent dark:bg-secondary px-[20px] md:px-[50px] lg:px-[70px] py-10"
      style={{ backgroundImage: `url(/images/masked_design.png)` }}
    >
      {/* <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100 overflow-hidden relative"> */}
      {/* Background Gradients/Blobs specific to this design */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-9 space-y-6 pt-4">
          <h1 className="sm:text-[1.6rem] text-[1.8rem] leading-[2.4rem]  text-pretty  text-secondary dark:text-accent md:text-[2.7rem] md:leading-[3.4rem] lg:text-[4rem] lg:leading-[5rem]">
            <span className="text-primaryGreen mb-4  block text-[1rem] leading-[2rem] lg:text-[1.3rem] lg:leading-[2.6rem] ">
              Hello, I&apos;m Emmanuel Kadiri
            </span>
            I turn ideas into software solutions.
            {/* Specialized in designing and developing solutions for businesses. */}
          </h1>
          {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-slate-900">
                        
                        Unmatched creativity{' '}
                            <span className="inline-block align-middle mb-2">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-14 md:h-14 text-slate-800">
                                    <path d="M19.5 4.5L4.5 19.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 4.5H19.5V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <br />
                            reshaping <span className="text-[#0f5ca8]">experiences</span>
                    </h1> */}
          {/* <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                        Communicate any idea with maximum creativity with amazing design solution by mozconcept.
                    </p> */}
        </div>

        {/* Right Content - Stats & CTA */}
        <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-6 pt-2">
          <div className="bg-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center gap-4 pr-8">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden">
                <span className="font-bold text-slate-800 text-sm">+1k</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-900">
                Certified
              </span>
              <span className="text-xs text-slate-500">Designers</span>
            </div>
          </div>

          <Button className=" px-8 py-4 ">Get Started</Button>
        </div>
      </div>

      {/* Bottom Hero Image */}
      <div className="mt-16 relative">
        <div className="relative w-full aspect-[2/.8] bg-[#ffffff73] backdrop-blur-sm rounded-[32px] overflow-hidden shadow-inner border border-gray-200/50">
          {/* Simulated 3D Character Image Placeholder */}

          <div className="absolute inset-0 flex items-center justify-center m-[20px] rounded-[32px] bg-[#222222a8] ">
            <Image
              src="/images/emmanuel_3.png"
              alt="3D Character"
              fill
              className="w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Floating UI Elements on Image */}
          {/* <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white">
                        <Pause size={20} fill="currentColor" className="opacity-90" />
                    </div> */}
        </div>

        {/* Decorative Elements around image based on the design lines */}
        <div className="absolute -inset-[1px] border border-blue-400/30 rounded-[32px] pointer-events-none hidden md:block" />
        {/* Dimensions labels simulated from the screenshot design marks */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0085ff] text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 z-10">
          <span className="font-mono">1226</span>
          <span className="opacity-50">|</span>
          <span className="font-mono">352</span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HeroNew;
