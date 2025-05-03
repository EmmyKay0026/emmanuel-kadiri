"use client";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa6";

const HireMeCTA = () => {
  return (
    <article className="relative">
      {/* CONTACT BUTTON */}
      <motion.a
        target="_blank"
        href="https://wa.me/+2348104064231?text=Hello Emmanuel,"
        className="contactLink"
        // Removed fade-in effect by setting opacity to 1
        animate={{
          x: [200, 0],
          opacity: 1, // Set opacity to 1 for no fade-in
        }}
        transition={{
          duration: 2,
        }}
      >
        <motion.div
          className=""
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <svg viewBox="0 0 200 200" className="" width="120" height="120">
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="#008273"
              stroke="#c8c8c8"
              className="  shadow-nav-shadow border-[1px] border-solid border-accent blur__bg  "
            />
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            />
            <text className="tracking-[3px] " fill="white">
              <textPath href="#innerCirclePath">Hire Now •</textPath>
            </text>

            <text className="tracking-[3px] " fill="white">
              <textPath href="#innerCirclePath" startOffset="44%">
                Contact Me •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </motion.a>

      <div className="bg"></div>
      <div className="absolute cursor-pointer top-[34%] left-[34%] bg-accent rounded-full px-[10px] py-[10px] ">
        <FaWhatsapp className="text-[1.3rem] text-secondary" />
      </div>
    </article>
  );
};

export default HireMeCTA;
