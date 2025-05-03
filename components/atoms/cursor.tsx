"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
        cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
      });
    };

    const handleFocusEnter = () => cursor.classList.add("focus");
    const handleFocusLeave = () => cursor.classList.remove("focus");

    const handleBlackEnter = () => cursor.classList.add("cursor-black");
    const handleBlackLeave = () => cursor.classList.remove("cursor-black");

    const btns = document.querySelectorAll(".btn");
    const blackens = document.querySelectorAll(".blacken");

    btns.forEach((btn) => {
      btn.addEventListener("mouseenter", handleFocusEnter);
      btn.addEventListener("mouseleave", handleFocusLeave);
    });

    blackens.forEach((el) => {
      el.addEventListener("mouseenter", handleBlackEnter);
      el.addEventListener("mouseleave", handleBlackLeave);
    });

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      btns.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleFocusEnter);
        btn.removeEventListener("mouseleave", handleFocusLeave);
      });
      blackens.forEach((el) => {
        el.removeEventListener("mouseenter", handleBlackEnter);
        el.removeEventListener("mouseleave", handleBlackLeave);
      });
    };
  }, []);

  return <div id="cursor" ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
