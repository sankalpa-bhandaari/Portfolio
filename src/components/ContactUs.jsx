import React from "react";
import "../App.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-card">
          <h3>Email</h3>
          <p>sankalpa085@gmail.com</p>
          <a href="mailto:sankalpa085@gmail.com">Send Email</a>
        </div>
        <div  className="contact-card">
          <h3>Phone</h3>
          <p>+977-9765944251</p>
          <a href="tel:+9779765944251">Call Now</a>

        </div>
        <div className="contact-card">
          <h3>Social Media</h3>
          <div className="social-icons">
          
            <a href="https://www.instagram.com/sankalpa.b_03/?__pwa=1" target="_blank" rel="noreferrer">
              <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/sankalpa.bhandaari" target="_blank" rel="noreferrer">
           <FaFacebook/>
           </a>
           <a href="https://www.linkedin.com/in/sankalpa-bhandaari/" target="_blank" rel="noreferrer">
           <FaLinkedin/>
            </a>
            </div>


           
          </div>
      </div>
    </section>
  );
};

export default ContactUs;
