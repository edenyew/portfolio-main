import React from "react";
import { Link } from "react-scroll";
import "./Intro.scss";
import wavingHand from "../../Assets/wavingHandEmoji.png";

const Intro = () => {
  return (
    <div className="container">
      <div className="emojiContainer">
        <img src={wavingHand} className="emoji" />
      </div>
      <div className="intro">
        <h1 className="intro-heading">
          Hi there! I'm Eden, and I enjoy building software products.
        </h1>
      </div>
      <br />
      <div className="subcontainer">
        <div className="sub">
          What motivates me the most is embarking on that process of building
          effective software products.
        </div>
        <div className="bodyText">
          {/* Currently working as a SWE Intern @{" "} */}
          <a className="body-link" href="">
            {/* . */}
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="links">
        <a href="https://github.com/edenyew">github.</a>
        <a href="https://www.linkedin.com/in/eden-yew-435512207/">linkedin.</a>
      </div>
    </div>
  );
};

export default Intro;
