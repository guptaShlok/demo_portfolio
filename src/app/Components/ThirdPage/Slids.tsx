"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
const Slids = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const height = useTransform(scrollYProgress, [0.1, 1.2], [100, 0]);
  const slider1 = [
    {
      color: "#e3e5e7",
      src: "c2.jpg",
    },
    {
      color: "#d6d7dc",
      src: "decimal.jpg",
    },
    {
      color: "#e3e3e3",
      src: "funny.jpg",
    },
    {
      color: "#21242b",
      src: "google.jpg",
    },
  ];

  const slider2 = [
    {
      color: "#d4e3ec",
      src: "maven.jpg",
    },
    {
      color: "#e5e0e1",
      src: "panda.jpg",
    },
    {
      color: "#d7d4cf",
      src: "powell.jpg",
    },
    {
      color: "#e1dad6",
      src: "wix.jpg",
    },
  ];
  return (
    <>
      <div
        ref={container}
        className="  !bg-white !text-black flex flex-col mt-[20vh] justify-center gap-10 items-center w-full h-[80vh]"
      >
        <motion.div
          style={{ x: x1 }}
          className="w-[100%] h-auto flex items-center relative z-30 overflow-x-hidden"
        >
          {slider1.map((data, index) => (
            <div
              key={index}
              className=" w-[120%] flex justify-center relative z-30  items-center "
            >
              <img
                src={`/${data.src}`}
                className={`h-[280px] object-cover border-x-[50px] rounded-md border-y-[30px]`}
                style={{ borderColor: `${data.color}` }}
                alt="slider"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="w-[100%] h-auto flex items-center relative z-30  overflow-hidden"
        >
          {slider2.map((data, index) => (
            <div
              key={index}
              className=" w-[120%] flex justify-center items-center"
            >
              <img
                src={`/${data.src}`}
                className={`h-[280px] object-cover border-x-[50px] rounded-md border-y-[30px]`}
                style={{ borderColor: `${data.color}` }}
                alt="slider"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ height }}
          className={
            "relative flex justify-center items-center m-auto w-full h-[20vh]"
          }
        >
          <div
            className={
              " !bg-white !text-black rounded-b-full absolute z-10 w-[120%] h-[1000%] shadow-custom-white shadow-2xl"
            }
          ></div>
        </motion.div>
      </div>
    </>
  );
};

export default Slids;
