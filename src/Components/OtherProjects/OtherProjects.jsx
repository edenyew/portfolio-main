import React from "react";
import lightbulb from "../../Assets/lightbulb.png";
import "./OtherProjects.scss";
import { otherProjects } from "../../Data/OtherProjects";

const OtherProjects = () => {
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
    <div className="otherProjectContainer">
      <div className="">
        <img src={lightbulb} className="aboutMeEmoji" />
      </div>
      <div className="experienceBorder">
        <h1 className="heading">other projects.</h1>
      </div>
      <div className="displayProjects">
        {otherProjects.map((project, index) => (
          <div className="otherProjectBorder">
            <div className="otherProjectImage">
              <img src={project.projectImage} className="otherProjectImage" />
            </div>
            <div className="">
              <h1 className="projectTitle">{project.title}</h1>
            </div>
            <div className="projectSubheading">{project.subheading}</div>
            <div className="sourceCode">
              {project.sourcecode ? (
                <a className="body-link" href={project.sourcecode}>
                  View Source Code
                </a>
              ) : (
                <span>No code available 😢</span>
              )}
            </div>
            <div className="otherProjectsBorder">
              {project.skills.map((tech, techIndex) => (
                <div className="eachSkills" key={techIndex}>
                  <img
                    className="projectimagescript"
                    src={project.techstack[techIndex]}
                    alt={tech}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  <span className="imageDescription">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
