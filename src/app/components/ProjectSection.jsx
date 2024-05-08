"use client";
import { useRef } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "CANSAT",
    description:
      "Designed to be dropped from a height of 1000 meters, it's equipped with multiple sensors capturing temperature, altitude, and position. Integrated with GSM, it transmits real-time data to a ground control station (GCS), showcasing advanced telemetry capabilities in remote monitoring and data collection.",
    image: "Images/Alasso.png",
    giturl: "/",
    previewUrl: "https://alasso.study",
  },
  {
    id: 2,
    title: "Rocket Engine Test",
    description:
      "I've contributed to a rocket engine test project by developing a remote ignition system. This system initiates rocket ignition from a distance while also measuring crucial parameters like pressure in the nozzles and generated force. My role underscores my ability to innovate and execute complex solutions in aerospace engineering.",
    image: "Images/AIML-Society.png",
    giturl: "/",
    previewUrl: "https://aiml-society.netlify.app",
  },
  {
    id: 3,
    title: "PCB Designing",
    description:
      "Successfully completed multiple PCB design projects, including Arduino shields and STM32 development boards, demonstrating precision and innovation in electronics engineering. Proud to have contributed to advancing technology through meticulous design and implementation.",
    image: "Images/Portfoilo.png",
    giturl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ATAL",
    description:
      "Our project, ATAL, is a standout in the Internet of Medical Things (IoMT) field, earning the title of best project of the year at our college. It's won in two national and five college-level competitions, showcasing its impact. Additionally, we've filed three patents for our innovative healthcare technology.",
    image: "Images/Portfoilo.png",
    giturl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Robotic Dog",
    description:
      "SI've contributed to a rocket engine test project by developing a remote ignition system. This system initiates rocket ignition from a distance while also measuring crucial parameters like pressure in the nozzles and generated force. My role underscores my ability to innovate and execute complex solutions in aerospace engineering.",
    image: "Images/Portfoilo.png",
    giturl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="my-7 sm:my-14" id="projects">
      <h2 className="text-center text-5xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              imgurl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.giturl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
