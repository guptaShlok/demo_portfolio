"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let direction = -1;
  let xPercent = 0;
  let animationFrameId: number;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sliderElement = slider.current;

    if (!sliderElement) return;

    const updateDirection = () => {
      direction *= -1;
    };

    const scrollTriggerInstance = gsap.to(sliderElement, {
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
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      if (firstText.current) {
        gsap.set(firstText.current, { xPercent });
      }

      if (secondText.current) {
        gsap.set(secondText.current, { xPercent });
      }

      animationFrameId = requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Image src="/image.png" fill={true} alt="background" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Papa -</p>
        </div>
      </div>
    </main>
  );
}
