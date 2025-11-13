import React from "react";
import "../App.css";

const projects = [
 {
  title: "Web Kitchen",
  desc: "A modern recipe web application built using React.js with user authentication, recipe management, and ingredient search.",
  link: "https://github.com/sankalpa03/Web_Kitchen_Frontend.git"
},
{
  title: "My Pasal",
  desc: "A modern web application built using React.js for creating, managing, and exploring glossary terms with search and categories.",
  link: "https://github.com/sankalpa03/my_pasal.git"
},

{
  title: "Portfolio Website",
  desc: "A responsive personal portfolio website built using React and modern CSS, showcasing projects and skills.",
  link: "https://github.com/sankalpa03/portfolio"
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