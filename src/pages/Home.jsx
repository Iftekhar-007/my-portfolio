import React from "react";
import Hero from "../Hero";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Education from "../Components/Education";

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
    </div>
  );
};

export default Home;
