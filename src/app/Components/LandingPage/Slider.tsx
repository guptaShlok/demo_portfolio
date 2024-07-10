"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Slider() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let direction = -1;
  let xPercent = 0;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
    <main className={"relative flex h-[100vh] overflow-hidden "}>
      <Image
        className="object-cover"
        src="/background.jpg"
        fill={true}
        alt="background"
      />
      <div className="absolute top-[80vh] md:top-[calc(100vh-150px)] lg:top-[calc(100vh-300px)]">
        <div ref={slider} className="text-white relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-[50px] md:text-[120px] lg:text-[200px] font-normal"
          >
            {" "}
            Dennis Snelleberg -
          </p>
          <p
            ref={secondText}
            className="absolute m-0 text-[50px] md:text-[120px] lg:text-[200px] font-normal left-[100%] top-0"
          >
            Dennis Snelleberg -
          </p>
        </div>
      </div>
    </main>
  );
}
