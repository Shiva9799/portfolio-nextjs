import React from "react";

const About = () => {
  return (
    <section className="text-white my-7 sm:my-14" id="about">
      <div className="items-center py-8 xl:gap-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-center text-5xl font-bold text-white pb-3">
            About Me
          </h2>
          <p className="text-[#b7b0b0] text-base lg:text-lg py-3 place-self-center text-center sm:text-left">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, HTML, CSS,
            Flutter and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>

          <h3 className="text-3xl font-bold text-teal-400 pt-4 my-9">
            Education
          </h3>

          <ol class="items-center sm:flex pt-6">
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class=" flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-yellow-600 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Secondary School
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2018-2019
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  I completed my secondary school education at Kendriya
                  Vidyalaya No. 1, Binnaguri Cantt. with an aggregate of 89.6%.
                </p>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Senior Secondary School
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2020-2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  I completed my secondary school education at Kendriya
                  Vidyalaya No. 2, Chandimandir Cantt. with an aggregate of
                  87.6%.
                </p>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-yellow-600 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3 sm:pe-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor's of Engineering
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021-2025
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  BE in Computer Science and Engineering from Chandigarh
                  University. I am currently in my 3rd year of college.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
