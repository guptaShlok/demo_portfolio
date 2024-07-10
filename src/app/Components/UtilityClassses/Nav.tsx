import React, { useState } from "react";
import Index from "./Curve";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dawning_of_a_New_Day } from "next/font/google";

export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
    }),
    exit: (i: number) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 * i },
    }),
  };
  const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" bg-black h-[100vh] bg-[rgb(41, 41, 41)] justify-between fixed z-10 right-0 top-0 text-white lg:w-[35%] md:w-[45%] sm:w-[55%]"
      >
        <div className=" h-[100%] select-none lg:p-28 md:p-20 sm:p-16 right-0 w-full text-white flex flex-col justify-start">
          <div className="relative flex flex-col gap-2 px-3 top-8 text-gray-500 ">
            <span className=" mt-10 text-xs">Navigation</span>
            <div className=" h-[1px] w-full bg-gray-500"></div>
          </div>
          <div className="flex flex-col justify-around items-start font-thin text-4xl h-[50%] mt-10">
            {navItems.map((index, data) => (
              <motion.div
                key={data}
                variants={slide}
                initial="initial"
                custom={data}
                animate="enter"
                exit="exit"
                className="group relative flex flex-col justify-around items-start font-thin text-4xl h-[50%] mt-10"
              >
                <Link href={navItems[data].href}>{navItems[data].title}</Link>
                <div className=" w-3 h-3 rounded-full transition-transform delay-300 absolute left-0 top-0 translate-y-[125%] -translate-x-[200%] scale-0 bg-white group-hover:scale-100 "></div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="  bg-transparent select-none absolute z-[2] right-0 bottom-[15%] text-xs font-light w-full text-white flex justify-center gap-[7%]">
          <Link href="">Awwwards</Link>
          <Link href="">Instagram</Link>
          <Link href="">Dribble/</Link>
          <Link href="">LinkedIn</Link>
        </div>
        <Index />
      </motion.div>
    </>
  );
}
