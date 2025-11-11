import React from "react";

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <a href="#home" className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </a>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
