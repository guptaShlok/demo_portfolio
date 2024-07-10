"use client";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  return (
    <div className=" flex justify-center items-center flex-col">
      Hello from inside of the framer motion page
      <motion.div
        className="box w-20 h-20 bg-red-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="box w-20 h-20 bg-red-500"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      />
      <motion.div
        className="box w-20 h-20 bg-red-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />
    </div>
  );
};

export default page;
