// ServiceCard.tsx
import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  image: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, title, description }: Props) => {
  return (
    <div className="p-6 cursor-pointer transition-all duration-500 group relative bg-gray-100 dark:bg-blue-950 dark:hover:bg-white shadow rounded-xl hover:bg-blue-800">
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="object-contain"
      />
      <h1 className="text-xl mt-5 font-semibold transition-all duration-500 group-hover:text-white dark:group-hover:text-black">
        {title}
      </h1>
      <p className="mt-4 font-medium text-gray-500 dark:text-gray-200 transition-all duration-500 group-hover:text-gray-300 dark:group-hover:text-gray-600">
        {description}
      </p>
      <div className="mt-6 text-xl font-medium flex items-center gap-1 transition-all duration-500 group-hover:text-white dark:group-hover:text-black">
        <span>Learn More</span>
        <span>
          <GoArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
