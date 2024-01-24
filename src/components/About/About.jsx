import React from "react";
import images from "../../assets/images";
import AnimatedWordFlip from "../Utils/AnimatedWordFlip";
import AnimatedWordSlide from "../Utils/AnimatedWordSlide";
import Hero from "../Hero/Hero";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="app__about">
      <section className="app__about-selfIntro">
        {/* <img
          className="app__about-trAI"
          src={images.trAi}
          alt="ai-logo"
        /> */}
        {/*can show the "Terrence Rosales" as a hover effect */}
        <h2 className="app__about-selfIntro_name">Terrence Rosales</h2>
        {/* end of full name */}
        <h1 className="app__about-selfIntro_titles">
          Frontend <span>| </span>
          <span className="custom__text">UI / UX</span> <span>| </span> Software
          Developer
        </h1>
        <p className="app__about-selfIntro_stmt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          expedita deleniti voluptatem possimus delectus amet quisquam commodi
        </p>
      </section>
      <section className="app__about-skillsAnimations">
        <div className="app__about-animationWordFlip">
          <AnimatedWordFlip />
        </div>
        <div className="app__about-animationWordSlide">
          <AnimatedWordSlide />
        </div>
      </section>
    </section>
  );
};

export default About;
