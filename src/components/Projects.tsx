import DownButton from "./DownButton";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json"; // Assuming the JSON file is in the same directory

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Projects = ({ id, downButton }: ProjectsProps) => {
  return (
    <section className="projectsWrapper" id={id}>
      <h2>Projects</h2>
      <div className="projects">
        {projectsData.map((project) => (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <div className="project">
                <img
                  src={require(`../img/${project.mainImg}`)}
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
