"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FaNode, FaReact, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiDart,
  SiFlutter,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const Badge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <ul ref={ref}>
      <motion.li
        variants={skills}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 bg-slate-800 rounded-2xl"
      >
        <div className="flex flex-col items-center mx-3 my-3">
          <SiMongodb className="text-lime-600 text-5xl m-1" />
          <span className="text-xl">MongoDB</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiExpress className="text-5xl m-1" />
          <span className="text-xl">Express</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <FaReact className="text-sky-400 text-5xl m-1" />
          <span className="text-xl">React</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <FaNode className="text-lime-600 text-5xl m-1" />
          <span className="text-xl">Node</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiNextdotjs className="text-white text-5xl m-1" />
          <span className="text-xl">Next</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiDart className="text-blue-500 text-5xl m-1" />
          <span className="text-xl">Dart</span>
        </div>
        <div className="flex flex-col items-center mx-3 my-3">
          <SiFlutter className="text-sky-500 text-5xl m-1" />
          <span className="text-xl">Flutter</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiJavascript className="text-yellow-400 text-5xl m-1" />
          <span className="text-xl">JavaScript</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <FaHtml5 className="text-orange-600 text-5xl m-1" />
          <span className="text-xl">HTML</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <FaCss3Alt className="text-blue-600 text-5xl m-1" />
          <span className="text-xl">CSS</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiPython className="text-sky-500 text-5xl m-1" />
          <span className="text-xl">Python</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiC className="text-blue-600 text-5xl m-1" />
          {/* <span className="text-xl">C Language</span> */}
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiCplusplus className="text-blue-600 text-5xl m-1" />
          <span className="text-xl">C++</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <FaJava className="text-blue-400 text-5xl m-1" />
          <span className="text-xl">Java</span>
        </div>
      </motion.li>
    </ul>
  );
};

export default Badge;
