import React from "react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      <div>
        {/* Blog Image */}
        <Image
          src={image}
          alt="image"
          width={400}
          height={400}
          className="rounded-lg w-full h-full"
        />
        {/* Box */}
        <div className="w-[90%] mx-auto bg-gray-200 dark:bg-blue-900 rounded-lg mt-[-3rem] relative z-10 p-6">
          <div className="flex items-center space-x-2">
            <BiUser className="w-5 h-5" />
            <span className="md:text-lg text-base font-semibold">By Admin</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold mt-4">{title}</h1>
          <span className="w-full h-[2px] mt-6 mb-6 bg-gray-300 block"></span>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SlCalender className="w-4 h-4" />
              <span className="md:text-lg text-base font-semibold">
                18 May 2025
              </span>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full flex-col bg-blue-800 cursor-pointer hover:bg-blue-900 transition-all duration-200 dark:bg-white ">
              <MdOutlineArrowOutward className="w-5 h-5 text-white dark:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
