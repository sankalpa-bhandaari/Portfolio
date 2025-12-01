import React, { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT LOGO + NAME */}
      <div className="nav-left">
        <a href="#home">
          <img
            src="/logo1.png"
            alt="Logo"
            className="nav-profile"
          />
        </a>
        <span className="nav-title">Sankalpa</span>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
