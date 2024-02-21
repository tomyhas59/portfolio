import React from "react";
import DownButton from "./DownButton";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-wrapper">
        <div className="project">1</div>
        <div className="project">2</div>
        <div className="project">3</div>
      </div>

      <DownButton />
    </section>
  );
};

export default Projects;
