"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Button from "../UtilityClassses/Button";

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: any) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.02 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
const AboutMe = () => {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <>
      <div ref={description} className=" flex justify-center px-28 mt-52 mb-28">
        <div className=" flex items-start justify-center gap-12 relative ">
          <div className="m-0 text-4xl leading-10 px-5">
            {phrase.split(" ").map((word, index) => {
              return (
                <div className={"relative overflow-hidden px-1 inline-flex"}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-end justify-end font-normal h-[40%] w-full">
          <div className=" text-base leading-5">
            <p className="px-16 mt-2">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </p>
          </div>
          <div className=" mt-10" data-scroll data-scroll-speed={0.1}>
            <Button className="rounded-full bg-gray-600 w-[150px] h-[150px] flex items-center justify-center">
              <p className=" relative z-30">About Me</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
