import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">{skill}</div>
      ))}
    </div>
  </section>
);

export default Skills;
