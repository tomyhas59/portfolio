import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import DownButton from "./DownButton";

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Projects = ({ id, downButton }: ProjectsProps) => {
  return (
    <section className="projects-wrapper" id={id}>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, idx) => (
          <Link
            to={`/projects/${project.id}`}
            className="project-link"
            key={idx}
          >
            <img
              src={require(`../assets/img/${project.mainImg[0]}`)}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
          </Link>
        ))}
      </div>

      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
