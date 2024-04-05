import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";

const ProjectPage = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const handleBack = () => {
    navigator("/");
  };

  return (
    <div className="projectPageWrapper">
      <h2 className="projectName">{project.name}</h2>
      {project.imgs.map((img, index) => (
        <img
          key={index}
          src={require(`../img/${img}`)}
          alt={`${project.name} 이미지 ${index}`}
        />
      ))}
      <p>{project.description}</p>
      <button onClick={handleBack} className="backButton">
        뒤로
      </button>
    </div>
  );
};

export default ProjectPage;
