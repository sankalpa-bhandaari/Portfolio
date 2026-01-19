import React from "react";

const educationData = [
  {
    degree: "Bachelor of Information Technology",
    institution: "Gandaki University",
    year: "2022 - Present",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Brahma Rupa Secondary School",
    year: "2017- 2022",
  },
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
