import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
};

const SoftwareCard = ({ icon, title }: Props) => {
  return (
    <div className="bg-green-100 dark:bg-gray-800 p-6 rounded-lg">
      <Image src={icon} alt="icon" width={50} height={50} />
      <h1 className="text-xl mt-6 font-bold ">{title}</h1>
      <p className="text-gray-800 dark:text-gray-300 mt-3 font-medium">
        Explore our curated selection of top-performing software designed to
        elevate your business. From marketing to sales and automation, each tool
        is crafted to help you grow smarter and faster.
      </p>
      <button className="px-6 py-1.5 rounded-full bg-blue-800 mt-4 font-bold text-white transition-all  duration-200 cursor-pointer hover:bg-blue-950 dark:hover:bg-white dark:hover:text-black">
        Learn More
      </button>
    </div>
  );
};

export default SoftwareCard;
