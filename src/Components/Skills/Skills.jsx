import React from "react";
import "./Skills.scss";
import skills from "../../Assets/skillsEmoji.png";
import { skillsData } from "../../Data/SkillsData";

const Skills = () => {
  const [familiarSkills, triedSkills] = skillsData;

  const handleMouseEnter = () => {
    const imageDescription = document.getElementById("imageDescription");
    if (imageDescription) {
      imageDescription.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    const imageDescription = document.getElementById("imageDescription");
    if (imageDescription) {
      imageDescription.style.visibility = "hidden";
    }
  };

  return (
    <div className="skillsContainer" id="skills">
      <div className="">
        <img src={skills} className="aboutMeEmoji" />
      </div>
      <div className="headingBorder">
        <h1 className="heading">skills.</h1>
      </div>
      <div className="title">{familiarSkills.title}</div>
      <div className="skillsBorder">
        {familiarSkills.skills.map((skill, index) => (
          <div className="eachSkills" key={index}>
            <img
              className="imagescript"
              src={familiarSkills.images[index]}
              alt={skill}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <span className="imageDescription">{skill}</span>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="title">{triedSkills.title}</div>
      <div className="skillsBorder">
        {triedSkills.skills.map((skill, index) => (
          <div className="eachSkills" key={index}>
            <img
              className="imagescript"
              src={triedSkills.images[index]}
              alt={skill}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <span className="imageDescription">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
