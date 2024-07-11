"use client";
import React, { useEffect } from "react";
import Header from "./Components/LandingPage/Header";
import Slider from "./Components/LandingPage/Slider";
import Projects from "./Components/SecondPage/Projects";
import Slids from "./Components/ThirdPage/Slids";
import Footer from "./Footer.tsx/Footer";
const Page = () => {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#141516]">
      <Slider />
      <Header />
      <Projects />
      <Slids />
      <Footer />
    </div>
  );
};

export default Page;
