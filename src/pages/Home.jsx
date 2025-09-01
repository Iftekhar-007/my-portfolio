import React from "react";
import Hero from "../Hero";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import ContactForm from "../Components/ContactForm";
import Contact from "../Components/Contact";
import Inspiration from "../Components/Inspiration";
import ProjectCrad from "../Components/ProjectCrad";
import Certificates from "../Components/Certificates";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div id="hero" className="my-10">
        <Hero></Hero>
      </div>

      <div id="about-me">
        <AboutMe />
      </div>

      <div id="skills" className="my-10">
        <Skills />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="projects" className="my-10">
        <ProjectCrad />
      </div>

      <div id="contact" className="">
        <Contact />
      </div>
      <div className="my-10">
        <Certificates></Certificates>
      </div>
    </div>
  );
};

export default Home;
