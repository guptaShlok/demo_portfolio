"use client";
import Image from "next/image";
import { useRef, useEffect, MutableRefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Slider() {
  const firstText = useRef<HTMLParagraphElement | null>(null);
  const secondText = useRef<HTMLParagraphElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  const direction = useRef<number>(-1);
  const xPercent = useRef<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let animationFrameId: number;

    const updateDirection = (e: any) => {
      direction.current = e.direction * -1;
    };
    console.log(direction);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: updateDirection,
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent.current < -100) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });
      xPercent.current += 0.1 * direction.current;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative flex h-[100vh] overflow-hidden">
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
