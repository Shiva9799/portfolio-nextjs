"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/icons8-gmail.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  // const [emailsubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };

  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resdata = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message Sent");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-14 gap-4"
      id="contact"
    >
      <div>
        <h5 className="text-4xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-md">
          {""}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Shiva9799"} target="_blank">
            <Image src={GithubIcon} alt="Github" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/shivam-kumar-11493921a/"}
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin" />
          </Link>
          <Link href={"mailto:shivam.sp645@gmail.com"}>
            <Image src={GmailIcon} alt="Gmail" />
          </Link>
        </div>
      </div>

      {/* <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-1xl font-medium"
            >
              {" "}
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#112db8] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="shivam@gmail.com"
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-white mb-2 block  text-1xl font-medium"
            >
              {" "}
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#112db8] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="text-white mb-2 block text-1xl font-medium"
            >
              {" "}
              Body
            </label>
            <textarea
              name="message"
              type="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#112db8] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's connect!"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {emailsubmitted && (
            <p className="text-green-500 text-center mt-2">Message Sent!</p>
          )}
        </form>
      </div> */}
    </section>
  );
};

export default EmailSection;
