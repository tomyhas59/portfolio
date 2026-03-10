import React, { useState } from "react";
import { projects, Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project|null>(null);
  return (
    <section className="section" id="projects">
      <div className="section__header reveal">
        <p className="section__label">Work</p>
        <h2 className="section__title">프로젝트 <span>포트폴리오</span></h2>
      </div>
      <div className="projects__grid">
        {projects.map((p,i)=>(
          <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected}/>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={()=>setSelected(null)}/>}
    </section>
  );
};
export default Projects;
