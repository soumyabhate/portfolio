import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 text-text font-body">
        <div className="text-xl font-semibold text-accent2">Soumya Bhate</div>
        <ul className="flex space-x-6 text-base">
          <li className="hover:text-lavender transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-lavender transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-lavender transition">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-lavender transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;