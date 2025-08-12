import React from "react";
import Hero from "../Hero";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import ContactForm from "../Components/ContactForm";
import Contact from "../Components/Contact";
import Inspiration from "../Components/Inspiration";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="my-10">
        <Hero></Hero>
      </div>

      <div>
        <AboutMe></AboutMe>
      </div>

      <div className="my-10">
        <Skills></Skills>
      </div>

      <div>
        <Education></Education>
      </div>

      <div className="my-10">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
