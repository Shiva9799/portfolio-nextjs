"use client";
import { useRef } from "react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Alasso",
    description:
      "Established Alasso, an online educational platform, achieving a 200% user base growth in 4 months.",
    image: "Images/Alasso.png",
    giturl: "/",
    previewUrl: "https://alasso.study",
  },
  {
    id: 2,
    title: "AIML-Society Website",
    description:
      "Led frontend development for AIML society’s hackathon registration platform, demonstrating expertise in dynamic web solutions.",
    image: "Images/AIML-Society.png",
    giturl: "/",
    previewUrl: "https://aiml-society.netlify.app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Crafted a personal portfolio website to showcase my projects and skills.",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
