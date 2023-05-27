import React from "react";
import experience from "../../Assets/experienceEmoji.png";
import "./Experience.scss";
import { experienceData } from "../../Data/ExperienceData";

const Experience = () => {
  const [elitely, serverSam] = experienceData;

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
    <div className="experienceContainer" id="experience">
      <div className="">
        <img src={experience} className="aboutMeEmoji" />
      </div>
      <div className="experienceBorder">
        <h1 className="heading">experience.</h1>
      </div>
      {experienceData.map((experience, index) => (
        <div className="individualExperience" key={index}>
          <div className="experience_subheading">{experience.duration}</div>
          <div className="role_and_company_border">
            <span>
              {experience.role}{" "}
              <span className="company">@ {experience.company}</span>
            </span>
          </div>
          <div className="jobscope">
            {experience.jobscope.map((job, jobIndex) => (
              <p className="scope" key={jobIndex}>{`> ${job}`}</p>
            ))}
          </div>
          <div className="techStack">
            <p className="tech_subheading">Tech Stack</p>
            <div className="tech_icons">
              {experience.tech.map((tech, techIndex) => (
                <div className="eachSkills" key={techIndex}>
                  <img
                    className="imagescript"
                    src={experience.images[techIndex]}
                    alt={tech}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  <span className="imageDescription">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
