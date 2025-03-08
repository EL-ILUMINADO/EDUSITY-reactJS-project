import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-text">
          <h1>We Ensure Better Education for a Better World</h1>
          <p>
            Our Cutting-edge Curriculum is Designed to Empower Students With the
            Knowledge, Skills, and Experiences Needed to Excel in the Dynamic
            Field of Education
          </p>
          <a href="#" className="btn">
            Explore more <img src={arrow_icon} alt="Arrow icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
