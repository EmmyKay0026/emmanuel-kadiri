"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      id="about"
      className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <Image
            src="/images/about_img.png"
            alt="Emmanuel Kadiri"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full mb-6 md:mb-0 md:mr-8 shadow-lg"
            width={200}
            height={200}
          />
          <div>
            <p className="text-lg mb-4">
              Hi, I&apos;m Emmanuel Kadiri, a passionate developer and designer
              with a knack for creating impactful digital experiences. I
              specialize in web development, UI/UX design, and building scalable
              applications.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Skills & Tools:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript, TypeScript, React, Next.js</li>
              <li>Tailwind CSS, Framer Motion</li>
              <li>Node.js, Express, MongoDB</li>
              <li>Figma, Adobe XD</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
