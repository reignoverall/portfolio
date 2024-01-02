import React from "react";
import { NavLink } from "react-router-dom";
const Projects = () => {
  return (
    <section className="max-container h-lvh">
      <div className="text-2xl font-poppins flex">
        <h1>
          <NavLink className="text-blue-400" to="/gemini">
            Gemini Integration
          </NavLink>
          <p className="neo-btn glassmorphism">Under Construction</p>
        </h1>
      </div>
    </section>
  );
};

export default Projects;
