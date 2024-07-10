"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Index() {
  const [initialPath, setInitialPath] = useState("");
  const [targetPath, setTargetPath] = useState("");
  useEffect(() => {
    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
      window.innerHeight
    } Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
      window.innerHeight
    } Q100 ${window.innerHeight / 2} 100 0`;

    setInitialPath(initialPath);
    setTargetPath(targetPath);
  }, []);

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute bg-transparent top-0 w-30 h-[100vh] -left-32 stroke-none fill-[rgb(41, 41, 41)]  ">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
