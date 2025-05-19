"use client";
import { NavLinks } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggler from "@/components/Helper/ThemeToggler";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-blue-900 shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full `}
    >
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-white text-2xl font-extrabold tracking-wide hidden sm:block">
            NestCraft
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(link.url);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-black ">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-white transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Sign-up
            </span>
            <span className="relative invisible">Sign-up</span>
          </a>

          {/* Theme Toggler */}
          <ThemeToggler />

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
