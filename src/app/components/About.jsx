import React from "react";

const About = () => {
  return (
    <section className="text-white my-7 sm:my-14" id="about">
      <div className="container items-center py-8 xl:gap-16">
        <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-center text-5xl font-bold text-white pb-3">
            About Me
          </h2>
          <p className="text-[#b7b0b0] text-base lg:text-lg py-3 place-self-center text-center sm:text-left">
            Thrive on the dynamic interplay between multiple microcontroller
            platforms, programming languages, and hardware design tools. From
            breathing life into circuits with diverse programming languages to
            sculpting hardware masterpieces using cutting-edge design software,
            I revel in the multifaceted journey of embedded engineering.
          </p>

          <h3 className="text-3xl font-bold text-teal-400 pt-4 my-9">
            Education
          </h3>

          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-700 sm:ring-8 dark:ring-slate-800 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-lime-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                  Bachelor&apos;s of Engineering
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021-2025
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  BE in Electronics and Communication Engineering from
                  Chandigarh University.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-700 sm:ring-8 dark:ring-slate-800 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-lime-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                  Senior Secondary School
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2020-2021
                </time>
                <p className="text-base font-normal text-blue-500 dark:text-gray-400">
                  I completed my secondary school education at Career Point.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-700 sm:ring-8 dark:ring-slate-800 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-lime-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                  Secondary School
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2018-2019
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  I completed my secondary school education at Career Point.
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
