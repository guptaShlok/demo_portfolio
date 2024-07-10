"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../UtilityClassses/Nav";
import Button from "../UtilityClassses/Button";
import Magnetic from "../UtilityClassses/Magnetic";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const Header = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <>
      <div
        ref={Header}
        className="absolute flex z-0 top-0 text-white p-12 justify-between w-full font-semibold box-border bg-none items-center"
      >
        <div className=" group flex justify-center items-center relative cursor-pointer transition-all duration-500  hover:w-44">
          <p className=" m-0 transition-all text-center duration-700 group-hover:rotate-[360deg] rotate scale-125">
            ©
          </p>
          <div className="flex whitespace-nowrap relative overflow-hidden font-light w-full p-0 m-3 transition-all">
            <p className=" relative transition-transform delay-100 duration-500 group-hover:-translate-x-[100%]">
              Code by{" "}
            </p>
            <p className=" relative transition-transform pl-1 delay-100 duration-500 group-hover:-translate-x-[121%]">
              Dennis
            </p>
            <p className=" absolute left-40 transition-transform delay-100 duration-500 pl-1 group-hover:-translate-x-[130%] ">
              Snelleberg
            </p>
          </div>
        </div>

        <div className="flex items-center font-light">
          <Magnetic>
            <div className="group flex flex-col relative z-1 p-4 cursor-pointer">
              <a>Work</a>
              <div className=" absolute w-2 top-12 h-2 left-[50%] scale-0 -translate-x-[50%] bg-white rounded-full transition-transform group-hover:scale-100"></div>
            </div>
          </Magnetic>

          <Magnetic>
            <div className="flex flex-col relative z-1 p-4 cursor-pointer group">
              <a>About</a>
              <div className=" absolute w-2 top-12 h-2 left-[50%] scale-0 -translate-x-[50%] bg-white rounded-full transition-transform group-hover:scale-100"></div>
            </div>
          </Magnetic>

          <Magnetic>
            <div className="flex flex-col relative z-1 p-4 cursor-pointer group">
              <a>Contact</a>

              <div className=" absolute w-2 top-12 h-2 left-[50%] scale-0 -translate-x-[50%] bg-white rounded-full transition-transform group-hover:scale-100"></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div className="absolute top-[60%]  left-[50%] z-40 lg:translate-x-[50%] md:translate-x-[80%] translate-x-[50%] lg:-translate-y-[150%] md:-translate-y-[100%] -translate-y-[100%]  flex flex-col text-white">
        <div className="relative" data-scroll data-scroll-speed="0.1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <p className="relative lg:text-4xl md:text-2xl text-sm lg:translate-x-4 md:translate-x-2 sm:translate-x-0 translate-y-20">
            Freelance
          </p>
          <p className="relative lg:text-4xl md:text-2xl text-sm lg:translate-x-4 md:translate-x-2 sm:translate-x-0 translate-y-24">
            Designer & Developer
          </p>
        </div>
      </div>
      {/* Navbar is added here */}
      <div ref={button} className=" fixed right-0 top-0 z-20 scale-0 ">
        <Button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="relative m-6 w-20 z-20 h-20 rounded-full bg-[#1C1D20] cursor-pointer flex justify-center items-center"
        >
          {/* <Magnetic> */}
          {/* <div className="relative m-6 w-20 z-20 h-20 rounded-full bg-[#1C1D20] cursor-pointer flex justify-center items-center"> */}
          <div
            className={`burger w-full relative z-30 ${
              isActive ? `burgerActive ` : ""
            }`}
          ></div>
          {/* </div> */}
          {/* </Magnetic> */}
        </Button>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
