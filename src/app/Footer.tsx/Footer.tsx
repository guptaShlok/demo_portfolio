import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Button from "../Components/UtilityClassses/Button";
import Magnetic from "../Components/UtilityClassses/Magnetic";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <div className="h-[110vh] text-white mt-24 w-[80%] m-auto flex flex-col items-center justify-evenly">
      <div
        className="profile w-full h-[35%] translate-y-20 flex justify-start items-start relative"
        data-scroll
        data-scroll-speed="0.1"
      >
        <img
          src="/background.jpg"
          className=" object-cover translate-x-8 translate-y-12 h-28 w-28 absolute rounded-full"
        ></img>
        <p className="tracking-normal w-[50%] ml-4 p-5 leading-normal h-full text-8xl font-light">
          <span className=" flex pl-32"> Let's Work</span>
          Together
        </p>
      </div>
      <div className="profile w-full flex justify-end -translate-y-8 relative items-center ">
        <div className=" w-full absolute z-0 border border-400"></div>
        <Magnetic>
          <div className=" w-52 h-52 rounded-full  relative z-10 bg-[#334BD3] mr-32 flex justify-center items-center">
            Get In Touch
          </div>
        </Magnetic>
        <motion.svg
          style={{ rotate, scale: 2 }}
          className={"absolute right-12 bottom-80 "}
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="white"
          />
        </motion.svg>
      </div>
      <div className="profile flex justify-start -translate-y-20 w-full h-[30%] gap-10 pl-12 items-center">
        <Button>
          <p className=" relative z-10 px-5">info@dennissnellenberg.com</p>
        </Button>

        <Button>
          <p className="text-sm relative z-10 px-5 font-light">
            +31 6 27 84 74 30
          </p>
        </Button>
      </div>
      <div className="profile flex relative w-[125%] px-12 -translate-y-12 justify-between items-center ">
        <div className="flex gap-4">
          <span className="flex flex-col gap-2">
            <h3 className=" text-[#615F61] font-normal">Version</h3>
            <p className="text-sm font-light">2022 © Edition</p>
          </span>
          <span className="flex flex-col gap-2">
            <h3 className=" text-[#615F61] font-normal">Version</h3>

            <p className="text-sm font-light">11:49 PM GMT+2</p>
          </span>
        </div>
        <div className="flex gap-2 flex-col">
          <h3 className=" text-[#615F61] font-normal">socials</h3>
          <div className="flex gap-4">
            <Magnetic>
              <p className="text-sm font-light">Awwwards</p>
            </Magnetic>
            <Magnetic>
              <p className="text-sm font-light">Instagram</p>
            </Magnetic>
            <Magnetic>
              <p className="text-sm font-light">Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p className="text-sm font-light">Linkedin</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
