import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Email icon

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-icons">
        {/* GitHub */}
        <a href="https://github.com/sankalpa03" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        {/* Email */}
        <a href="mailto:sankalpa085@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/sankalpa.bhandaari" target="_blank" rel="noreferrer">
          <FaFacebookSquare />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/itzz_sankalpa/?__pwa=1" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
      </div>

      <p>© Sankalpa Bhandaari - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
