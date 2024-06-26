import React from "react";
import { IoCodeSlashOutline, IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

const ProjectCard = ({ imgurl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group aspect-auto"
        style={{ background: `url(${imgurl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 m-2 relative rounded-full border-[#ADB7DE] hover:border-white group/link"
          >
            <IoCodeSlashOutline className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 m-2 relative rounded-full border-[#ADB7DE] hover:border-white group/link"
          >
            <IoEyeOutline className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#252222] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
