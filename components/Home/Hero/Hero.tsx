"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-in-out w-full h-screen flex justify-center flex-col ${
        scrolled ? "bg-white text-black" : "bg-blue-950 text-white"
      }`}
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div data-aos="fade-up">
          {/* Sub-heading */}
          <p className="text-sm sm:text-base md:text-xl font-bold">
            The Top Software Development Company
          </p>
          {/* Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-7xl mt-6 mb-6 font-bold leading-[2.5rem] md:leading-[4rem]`}
          >
            Providing software solutions for
            <br />
            your <span className="text-yellow-300">business</span>
          </h1>
          {/* Description */}
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-300 dark:text-gray-700">
            Empowering your business with tailored software solutions. From
            startups to enterprises, we turn your vision into digital reality.
          </p>
          <br />

          {/* Button */}
          <a
            href="#_"
            className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded group ${
              scrolled ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left font-bold transition-colors duration-300 ease-in-out group-hover:text-white">
              Discover More
            </span>
          </a>
        </div>
        {/* Image content */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block"
        >
          <Image src="/images/hero.png" alt="hero" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
