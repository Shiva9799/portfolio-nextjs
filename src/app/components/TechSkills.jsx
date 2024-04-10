import React from "react";
import TechButton from "./TechButton";

const TechSkills = () => {
  return (
    <section className="text-white my-7 sm:my-14" id="about">
      <div className="items-center py-4 xl:gap-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-center text-5xl font-bold text-white pb-3">
            My Skills
          </h2>
          <p className="text-[#b7b0b0] text-base lg:text-lg py-3 place-self-center text-center sm:text-left">
            With a diverse skill set, I excel in numerous technologies and
            frameworks, specializing as a Full Stack Web Developer and Android
            enthusiast. From architecting scalable web solutions to crafting
            innovative Android applications, I thrive on transforming ideas into
            impactful creations.
          </p>
        </div>
      </div>
      <TechButton />
    </section>
  );
};

export default TechSkills;
