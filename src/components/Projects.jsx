// src/components/projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Spam SMS Detector",
      desc: "An ML-powered app to detect and filter spam messages using Naive Bayes, SVM, and Decision Tree.",
      tools: ["Python", "Sklearn", "NLP"],
    },
    {
      title: "Business Banking - Malaysia",
      desc: "Created dashboards, audit flows, and TSDs using Adobe tools for a multinational banking client.",
      tools: ["Adobe Launch", "Power BI", "Excel"],
    },
    {
      title: "Pizza Delivery Website",
      desc: "A full-stack pizza ordering system with pricing logic and location-based review analysis.",
      tools: ["HTML", "CSS", "JS", "PHP"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tools">
              {proj.tools.map((tool, i) => (
                <span key={i}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
