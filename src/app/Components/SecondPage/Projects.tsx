import React, { useState } from "react";
import Modal from "./Modal";
import AboutMe from "./AboutMe";
import Button from "../UtilityClassses/Button";
const Projects = () => {
  const projects = [
    {
      title: "C2 Montreal",
      src: "c2montreal.png",
      color: "#000000",
    },
    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3",
    },
    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <main className="text-white w-full min-h-[100vh] flex flex-col items-center justify-center">
        <AboutMe />
        <div className="relative flex flex-col justify-center items-center w-full h-[60%]  ">
          <div className="relative flex flex-col justify-evenly h-full items-stretch w-[60%]">
            {projects.map((project, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setModal({ active: true, index: index });
                }}
                onMouseLeave={() => {
                  setModal({ active: false, index: 0 });
                }}
                className=" group last-of-type:border-b-[1px] border-b-[rgb(193,191,191)] flex w-full justify-between items-center border-t-[1px] py-8 border-t-[rgb(193,191,191)] transition-all duration-300 hover:opacity-60"
              >
                <div className=" font-normal text-4xl transition-all duration-400 group-hover:-translate-x-3">
                  {project.title}
                </div>
                <div className="font-light text-sm transition-all duration-400 group-hover:translate-x-3">
                  Design & Development
                </div>
              </li>
            ))}
          </div>
        </div>
        <Modal modal={modal} projects={projects} />
        <Button className=" my-20 rounded-full border flex items-center justify-center border-white shadow-md text-white w-[200px] h-[80px]">
          <span className="relative z-30">See More</span>
        </Button>
      </main>
    </>
  );
};

export default Projects;
