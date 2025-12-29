import React from "react";
import "../App.css";

const projects = [
  {
    title: "Cable Car Booking",
    desc: "A simple website built using HTML, CSS, and JavaScript for booking cable car tickets. Users can book tickets and download them as PDF.",
    link: "https://github.com/sankalpa03/CableCar_booking.git",
    demo: "https://cable-car-booking.vercel.app/",
    image: "/project1.png",
  },
  {
    title: "Web Kitchen",
    desc: "A modern recipe web application built using React.js with user authentication, recipe management, and ingredient search.",
    link: "https://github.com/sankalpa03/Web_Kitchen_Frontend.git",
    image: "/project2.png",
  },
  {
    title: "My Pasal",
    desc: "A modern web application built using React.js for creating, managing, and exploring glossary terms with search and categories.",
    link: "https://github.com/sankalpa03/my_pasal.git",
    image: "/project3.png",
  },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="project-image"
            />
          )}
          <h3>{p.title}</h3>
          <p>{p.desc}</p>

          <div className="project-links">
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
            )}

            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
