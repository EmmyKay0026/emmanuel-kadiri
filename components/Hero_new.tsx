import { motion } from "framer-motion";
import React from "react";

const Hero_new = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Emmanuel Kadiri
      </motion.h1>
    </section>
  );
};

export default Hero_new;
