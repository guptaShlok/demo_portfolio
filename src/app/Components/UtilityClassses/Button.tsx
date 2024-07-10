import React, { useEffect, useRef, ReactNode } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "./Magnetic";

interface IndexProps {
  children: ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

const Index: React.FC<IndexProps> = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    if (circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter"
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    }

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={
          "rounded-full border border-[ rgb(136, 136, 136)] cursor-pointer relative flex items-center justify-center px-4 py-10"
        }
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={"w-full h-[150%] absolute rounded-full top-[100%]"}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Index;
