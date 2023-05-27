import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [mobileState, setMobileState] = useState(true);

  const toggleMobile = () => {
    setMobileState(!mobileState);

    const navbar = document.getElementById("navbar-menu");
    if (mobileState) {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <div className="nav-brand">
        <h1>EdenYew.</h1>
      </div>
      <div className="nav_spacing">
        <ul id="navbar-menu">
          <li>
            <Link className="is-pointer" smooth={true} to="about-me">
              about me.
            </Link>
          </li>
          <li>
            <Link className="is-pointer" smooth={true} to="skills">
              skills.
            </Link>
          </li>
          <li>
            <Link className="is-pointer" smooth={true} to="experience">
              experience.
            </Link>
          </li>
          <li>
            <Link className="is-pointer" smooth={true} to="projects">
              projects.
            </Link>
          </li>
          <li>
            <Link className="is-pointer" smooth={true} to="contact">
              contact.
            </Link>
          </li>
        </ul>
      </div>
      <div className="darkModeButton">
        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          moonColor="#53b7b9"
          sunColor="#eb5c60"
        /> */}
      </div>
      <div className="toggleMobileButton" id="mobile">
        <i
          id="bar"
          onClick={toggleMobile}
          className={mobileState ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
