import React from "react";
import "../App.css";

const projects = [
  {
  title: "Web_Kitchen",
  desc: "A modern recipe web application built with React.js. It features user authentication, recipe management, ingredient-based search, and a beautifully designed recipe catalog for easy exploration and cooking inspiration.",
  link: "https://github.com/sankalpa03/Web_Kitchen_Frontend.git"
  },

  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio website built using React and modern CSS, showcasing my projects and skills.",
    link: "https://github.com/sankalpa03/portfolio",
  }
]


const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projects.map((p, i) => (
        <div key={i} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="project-link">View Project &rarr;</a>}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;