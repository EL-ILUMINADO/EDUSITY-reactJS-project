import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_img}
          alt="Image of Edusity students"
          className="about-img"
        />
        <img
          src={play_icon}
          alt="Play button"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a Transformative Educational Journey With Our University's
          Comprehensive Education Programs. Our Cutting-edge Curriculum is
          Designed to Empower Students With the Knowledge, Skills, and
          Experiences Needed to Excel in the Dynamic Field of Education.
        </p>
        <p>
          With a Focus on Innovation, Hands-on Learning, and Personalized
          Mentorship, Our Programs Prepare Aspiring Educators to Make a
          Meaningful Impact in Classrooms, Schools, and Communities.
        </p>
        <p>
          Whether You Aspire to Become a Teacjher, Administrator, Counselor, or
          Educational Leader, Our Diverse Range of Programs Offers the Perfect
          Pathway to Achieve Your Goals and Unlock Your Full Potential in
          Shaping the Future of Education.
        </p>
      </div>
    </div>
  );
};

export default About;
