import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-text bg-background px-4">
      <h1 className="text-4xl md:text-6xl font-heading text-center mb-6">
        Hi, I’m <span className="text-accent1">Soumya</span>
      </h1>

      <TypeAnimation
        sequence={[
          'Data Enthusiast.',
          1500,
          'Builder.',
          1500,
          'Analyst.',
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl text-accent2"
      />

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-2 border rounded-lg border-accent1 text-accent1 hover:bg-accent1 hover:text-background transition">
          View Projects
        </a>
        <a href="/Soumya_Bhate_Resume.pdf" className="px-6 py-2 border rounded-lg border-orange text-orange hover:bg-orange hover:text-background transition" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;