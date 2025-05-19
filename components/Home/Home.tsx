"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import Software from "./Software/Software";
import Project from "./Project/Project";
import Review from "./Reviews/Review";
import Blog from "./Blog/Blog";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="content">
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="why-choose">
        <WhyChoose />
      </div>
      <div id="software">
        <Software />
      </div>
      <div id="portfolio">
        <Project />
      </div>
      <div id="reviews">
        <Review />
      </div>
      <div id="blog">
        <Blog />
      </div>
    </div>
  );
};

export default Home;
