// src/components/skills.jsx
import React from 'react';

const skills = {
  "Languages": ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  "Data & BI Tools": ["Power BI", "Tableau", "Excel", "Adobe Analytics"],
  "Big Data & Cloud": ["Apache Spark", "Databricks", "Hadoop", "Azure"],
  "ETL & DB": ["SSMS", "SSIS", "MongoDB", "ER Modeling"],
  "Soft Skills": ["Teamwork", "Documentation", "Project Management"]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-background text-text py-12 px-6">
      <h2 className="text-3xl font-heading text-accent2 mb-8 text-center">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-xl text-accent1 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span key={i} className="bg-lavender text-background px-3 py-1 rounded-full text-sm hover:bg-orange transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
