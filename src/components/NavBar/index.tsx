import React from "react";
import Logo from "../../assets/logo.svg";
import "./NavBar.scss";

const NavBar = (): JSX.Element => {
  return (
    <div className="navContainer">
      <div className="navbar">
        <div className="icon">
          <img src={Logo} />
        </div>
        <div className="navItems">
          <div className="navText">
            <p>About Me</p>
          </div>
          <div className="navText">
            <p>Experience</p>
          </div>
          <div className="navText">
            <p>Contact Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
