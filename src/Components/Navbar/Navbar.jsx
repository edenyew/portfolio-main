import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  const navItems = [
    { id: "about-me", label: "about me." },
    { id: "skills", label: "skills." },
    { id: "experience", label: "experience." },
    { id: "projects", label: "projects." },
    { id: "contact", label: "contact." },
  ];

  const [isDarkMode, setDarkMode] = useState(false);
  const [mobileState, setMobileState] = useState(false);

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
          {navItems.map((item) => (
            <li key={item.id}>
              <Link className="is-pointer" smooth={true} to={item.id}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul id="navbar-mobile-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link className="is-pointer" smooth={true} to={item.id}>
                {item.label}
              </Link>
            </li>
          ))}
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
