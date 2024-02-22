import React from "react";
import DownButton from "./DownButton";
import blogImg from "../img/blogImg.png";
import shopImg from "../img/shopImg.png";
import webGameImg from "../img/webGameImg.png";

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ id, downButton }) => {
  const projects = [
    { id: 1, name: "개인 블로그", img: blogImg },
    { id: 2, name: "쇼핑몰", img: shopImg },
    { id: 3, name: "리액트 웹게임", img: webGameImg },
  ];

  return (
    <section className="projects" id={id}>
      <h2>Projects</h2>
      <div className="project-wrapper">
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.img} alt={project.name} />
          </div>
        ))}
      </div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
