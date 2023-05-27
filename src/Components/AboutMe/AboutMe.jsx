import React from "react";
import graduationCap from "../../Assets/graduationCapEmoji.png";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer" id="about-me">
      <div className="emojiContainer">
        <img src={graduationCap} className="aboutMeEmoji" />
      </div>
      <div className="aboutMeHeading">
        <h1 className="heading">about me.</h1>
      </div>
      <div className="subheading">
        Since I started coding, I have discovered a great joy in building
        projects from scratch. I strive to integrate technology into my daily
        life by creating various software products.
        <br />
        <br />
        My interests lie in AI, IoT and Full Stack Development. I hope to use my
        creativity and technical skills and apply them to the field of Software
        Development. Always striving my best to better myself and contribute in
        any way I can.
      </div>
    </div>
  );
};

export default AboutMe;
