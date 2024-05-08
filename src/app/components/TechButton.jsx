"use client";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// import { FaNode, FaReact, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  // SiMongodb,
  // SiExpress,
  // SiNextdotjs,
  // SiDart,
  // SiFlutter,
  // SiJavascript,
  // SiPython,
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
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 bg-lime-900 rounded-2xl"
      >
        <div className="flex flex-col items-center mx-3 my-3">
          <Image src="/Images/matlab.svg" alt="matlab" />
          <span className="text-xl">MatLab</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-20 m-2"
            src="/Images/STM_logo.png"
            alt="stm32"
          />
          <span className="text-xl">STM32</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-20 m-2"
            src="/Images/KiCad-Logo.png"
            alt="kicad"
          />
          <span className="text-xl">KiCad</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-8 m-2"
            src="/Images/altium-designer.png"
            alt="altium"
          />
          <span className="text-xl">Alitum</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-15 m-2"
            src="/Images/Arduino_Logo.png"
            alt="arduino"
          />
          <span className="text-xl">Arduino</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-8 m-2"
            src="/Images/microchip_round_logo.avif"
            alt="matlab"
          />
          <span className="text-xl">MicroChip</span>
        </div>
        <div className="flex flex-col items-center mx-3 my-3">
          <Image className="h-8 w-25 m-2" src="/Images/Ros_log.png" alt="ROS" />
          <span className="text-xl">ROS</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-6 m-2"
            src="/Images/Fusion_360_Logo.png"
            alt="matlab"
          />
          <span className="text-xl">Fusion 360</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image className="h-8 w-18 m-2" src="/Images/Keil.png" alt="keil" />
          <span className="text-xl">Keil</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <Image
            className="h-8 w-14 m-2"
            src="/Images/raspberry.png"
            alt="matlab"
          />
          <span className="text-xl">Raspberry</span>
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiC className="text-blue-600 text-5xl m-1" />
          {/* <span className="text-xl">C Language</span> */}
        </div>

        <div className="flex flex-col items-center mx-3 my-3">
          <SiCplusplus className="text-blue-600 text-5xl m-1" />
          <span className="text-xl">C++</span>
        </div>
      </motion.li>
    </ul>
  );
};

export default Badge;
