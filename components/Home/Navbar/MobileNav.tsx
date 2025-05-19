import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]`}
      >
        {NavLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.url}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(link.url);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  closeNav(); // Close the mobile nav after click
                }
              }}
              className="group ml-12 w-fit"
            >
              <div className="text-white text-xl sm:text-[30px] border-b-[1.5px] border-white pb-1 px-2 py-1 rounded transition-all duration-300 ease-in-out group-hover:bg-white group-hover:text-pink-400">
                {link.label}
              </div>
            </a>
          );
        })}

        {/* Cross icon for closing the NavBar */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 "
        />
      </div>
    </div>
  );
};

export default MobileNav;
