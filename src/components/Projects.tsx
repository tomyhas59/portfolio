import DownButton from "./DownButton";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json"; // Assuming the JSON file is in the same directory

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Projects = ({ id, downButton }: ProjectsProps) => {
  return (
    <section className="projects" id={id}>
      <h1>Projects</h1>
      <div className="project-wrapper">
        {projectsData.map((project) => (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <div className="project">
                <img
                  src={require(`../img/${project.img}`)}
                  alt={project.name}
                />
              </div>
              <div>{project.name}</div>
            </Link>
          </div>
        ))}
      </div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
