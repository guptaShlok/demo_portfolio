"use client";
import React, { useEffect, useState } from "react";
import Header from "./Components/LandingPage/Header";
import Slider from "./Components/LandingPage/Slider";
import Projects from "./Components/SecondPage/Projects";
import Slids from "./Components/ThirdPage/Slids";
import Footer from "./Footer.tsx/Footer";
import Preloader from "./Components/Preloader/Preloader";
const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#141516]">
      {/* <Preloader /> */}
      <Slider />
      <Header />
      <Projects />
      <Slids />
      <Footer />
    </div>
  );
};

export default page;
