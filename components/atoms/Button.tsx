"use client";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { HTMLMotionProps, motion } from "motion/react";
// ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProp extends ButtonHTMLAttributes<HTMLMotionProps<"button">> {
  children?: string | React.ReactNode;
  className?: string;
  outline?: boolean;
}

const Button = ({ children, outline, className }: ButtonProp) => {
  return (
    <motion.button
      whileHover={{
        borderRadius: "10px",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-[50px] btn py-[20px] cursor-pointer rounded-[90px] font-bold my-4 border-[2px] border-primaryGreen transition-all duration-300 ease-in-out",
        outline
          ? "bg-transparent text-primaryGreen rounded-[90px] hover:bg-primaryGreen hover:text-accent hover:dark:border-primaryGreen dark:text-accent dark:border-accent"
          : "bg-primaryGreen text-accent hover:bg-transparent hover:text-primaryGreen dark:hover:text-accent dark:hover:border-accent ",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default Button;
