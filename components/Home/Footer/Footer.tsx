import React from "react";
import { GrTechnology } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-blue-950 text-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <GrTechnology className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white text-2xl font-extrabold tracking-wide">
              NestCraft
            </h1>
          </div>
          <p className="text-sm text-gray-300">
            NestCraft Web Agency builds stunning, high-performance websites
            tailored to elevate your brand online. We specialize in design,
            development, and digital solutions that drive results.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">{"  Follow Us"}</h2>
          <div className="flex space-x-4 text-blue-300">
            <a href="https://facebook.com" className="hover:text-white">
              <FaFacebookF className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" className="hover:text-white">
              <FaTwitter className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" className="hover:text-white">
              <FaInstagram className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="hover:text-white">
              <FaLinkedinIn className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-lg text-gray-300">Email:</p>
          <a
            href="mailto:contact@nestcraft.com"
            className="text-lg text-yellow-300 hover:underline"
          >
            <b>contact@nestcraft.com</b>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-[80%] mx-auto mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} NestCraft. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
