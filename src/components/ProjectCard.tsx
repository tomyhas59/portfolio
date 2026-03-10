import React, { useRef } from "react";
import { Project } from "../data/projects";
import "../styles/Projects.css";

interface ProjectCardProps { project:Project; index:number; onOpen:(p:Project)=>void; }

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => {
  const cardRef = useRef<HTMLElement>(null);

  /* 3D tilt on mouse move */
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-8px)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  const allTags = [
    ...project.stack.backend.slice(0,2).map(t=>({label:t,type:"backend"})),
    ...project.stack.frontend.slice(0,2).map(t=>({label:t,type:"frontend"})),
    ...project.stack.deploy.slice(0,1).map(t=>({label:t,type:"deploy"})),
  ];

  return (
    <article ref={cardRef} className="project-card reveal"
      onClick={() => onOpen(project)} role="button" tabIndex={0}
      onKeyDown={e => e.key==="Enter" && onOpen(project)}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ animationDelay:`${index*.12}s` }}>

      <div className="project-card__thumb">
        <div className="project-card__thumb-placeholder">
          <img src={`/img/${project.mainImg[0]}`} alt={project.name} />
        </div>
        {project.teamSize && (
          <span className="project-card__team-badge">👥 팀 {project.teamSize}인</span>
        )}
        <div className="project-card__overlay">
          <button className="project-card__overlay-btn project-card__overlay-btn--primary"
            onClick={e=>{e.stopPropagation();onOpen(project);}}>
            상세 보기
          </button>
          {project.url && (
            <a className="project-card__overlay-btn project-card__overlay-btn--secondary"
              href={project.url} target="_blank" rel="noreferrer"
              onClick={e=>e.stopPropagation()}>
              Live ↗
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <span className="project-card__number">{String(index+1).padStart(2,"0")} / 04</span>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {allTags.map(t=>(
            <span key={t.label} className={`tag tag--${t.type}`}>{t.label}</span>
          ))}
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
