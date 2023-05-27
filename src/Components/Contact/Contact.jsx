import React from "react";
import "./Contact.scss";
import { BsLinkedin, BsGithub, BsFillFileEarmarkFill } from "react-icons/bs";
import resume from "../../Assets/resume.pdf";

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <div className="aboutMeHeading">
        <h1 className="heading">contact.</h1>
      </div>
      <div className="contactSubtext">
        Feel free to reach out to me at{" "}
        <span className="email">eden_yew@u.nus.edu</span> or grab my{" "}
        <span className="email">resume</span> below.
        <br />
        <br />
        Lets connect and make things happen!
        <br />
        <br />
        <div className="contactIcons">
          <a href={resume} download="resume">
            <BsFillFileEarmarkFill className="eachIcon" />
          </a>
          <a href="https://www.linkedin.com/in/eden-yew-435512207/">
            <BsLinkedin className="eachIcon" />
          </a>
          <a href="https://github.com/edenyew">
            <BsGithub className="eachIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
