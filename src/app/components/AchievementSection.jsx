"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsList = [
  { metric: "Projects Completed", value: "10" },
  { metric: "Users", value: "3000", postfix: "+" },
  { metric: "Awards", value: "3" },
  { metric: "Years", value: "2", postfix: "+" },
];

const AchievementSection = () => {
  return (
    <div className="py-2 px-4 xl:gap-16 sm:gap-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-col items-center justify-between sm:flex-row sm:items-stretch">
        {AchievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center my-4 sm:my-0 sm:mx-4"
            >
              <h1 className="text-4xl font-bold text-white flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h1>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
