"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-6 mb-3 sm:mt-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="mb-4 font-bold">Hello 👋, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                "SHIVAM KUMAR",
                1000,
                "WEB DEVELOPER",
                1000,
                "CODER",
                1000,
                "ANDROID DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."
            />
          </h1>
          <p className="text-[#b7b0b0] mb-6 text-base sm:text-lg lg:text-xl">
            Full Stack Software Developer with UI/UX expertise, skilled in
            building scalable and user-centric digital solutions. Proven ability
            to resolve complex technical challenges and drive project success
            through comprehensive front-end and back-end development.
          </p>
          <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-sky-400 hover:bg-violet-500 text-black">
            <Link href="mailto:shivam.sp645@gmail.com">Hire Me!</Link>
          </button>
          <button className="px-1  py-1 sm:w-fit rounded-full hover:bg-violet-800 text-white mt-3">
            <span className="block bg-[#3f3c3c] hover:bg-slate-800 rounded-full px-5 py-2">
              <a
                href="assets/ShivamResumeOrg.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="ShivamResumeOrg.pdf"
              >
                Download CV
              </a>
            </span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          div
          className="col-span-5 place-self-center  mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:h-[370px] lg:w-[370px]">
            <Image
              src="/Images/portfolio-img.png"
              alt="Hero Image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            ></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
