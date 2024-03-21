import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";

const ProjectPage = () => {
  const { id } = useParams();

  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <img src={require(`../img/${project.img}`)} alt={project.name} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
