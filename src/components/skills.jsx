// src/components/skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  const tech = [
    "Python", "SQL", "Power BI", "Tableau", "React",
    "JavaScript", "HTML", "CSS", "Git", "GitHub",
    "MongoDB", "Azure", "VS Code", "Adobe Launch", "Excel"
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">Skills & Tools</h2>
      <div className="skills-grid">
        {tech.map((item, i) => (
          <div className="skill-card" key={i} data-aos="fade-up" data-aos-delay={i * 50}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
