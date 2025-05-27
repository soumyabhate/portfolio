import React from 'react';

const projects = [
  {
    title: "Washington D.C. Crime Prediction",
    description: "Built ML classifiers (Decision Trees, Logistic Regression, SVM) to predict crime types using spatial-temporal features.",
    tools: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/soumyabhate/dc-crime-prediction"
  },
  {
    title: "Stock Market Volatility Analysis",
    description: "Analyzed 5 years of stock data (~8K tickers) with Spark to detect trends and spikes using time-series engineering.",
    tools: ["Apache Spark", "Databricks", "PySpark", "SQL"],
    github: "https://github.com/soumyabhate/stock-volatility"
  },
  {
    title: "Business Banking (Malaysia)",
    description: "Designed project strategy, TSDs, Adobe Launch config, and client dashboards with sprint demos.",
    tools: ["Adobe Launch", "Dashboards", "Project Mgmt"],
    github: "" // Optional: leave blank or null if not public
  },
  {
    title: "SMS Spam Classifier",
    description: "Trained and compared Naive Bayes, SVM, and Decision Trees to classify SMS messages as spam.",
    tools: ["Python", "ML", "scikit-learn"],
    github: "https://github.com/soumyabhate/sms-spam-classifier"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background text-text py-12 px-6">
      <h2 className="text-3xl font-heading text-accent2 mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border border-accent1 rounded-xl hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-accent1">{project.title}</h3>
            <p className="mt-2 text-sm">{project.description}</p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <span className="icon-wrapper">
                <i className="fab fa-github"></i>
                </span>
                View Code
              </a>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span key={i} className="bg-accent2 text-background px-2 py-1 rounded-full text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
