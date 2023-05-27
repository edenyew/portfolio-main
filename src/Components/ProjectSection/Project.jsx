import React from "react";
import projectEmoji from "../../Assets/projectEmoji.png";
import "./Project.scss";
import { projectsData } from "../../Data/ProjectsData";
import running from "../../Assets/Projects-Images/runwithme.png";

const Project = () => {
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
    <div className="projectContainer" id="projects">
      <div className="">
        <img src={projectEmoji} className="aboutMeEmoji" />
      </div>
      <div className="experienceBorder">
        <h1 className="heading">recent projects.</h1>
      </div>
      {projectsData.map((projectData, index) => (
        <div className="individualproject">
          <div className="titleborder">
            <h1 className="forTitle">{projectData.title}</h1>
            <div className="subheading">{projectData.subheading}</div>
            <div className="sourceCode">
              <a className="body-link" href={projectData.sourcecode}>
                View Source Code
              </a>
            </div>
            <div className="icons">
              {projectData.skills.map((tech, techIndex) => (
                <div className="eachSkills" key={techIndex}>
                  <img
                    className="imagescript"
                    src={projectData.techstack[techIndex]}
                    alt={tech}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  <span className="imageDescription">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="imageforproject">
            <img src={projectData.projectImage} className="projectImage" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
