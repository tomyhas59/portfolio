import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ProjectPageProps {
  setIsMainPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ setIsMainPage }) => {
  setIsMainPage(false);
  const { id } = useParams();
  const navigator = useNavigate();
  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const handleBack = () => {
    navigator("/");
    setIsMainPage(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="projectPageWrapper">
      <h2 className="projectName">{project.name}</h2>
      <div className="projectItem">
        <Slider {...settings}>
          {project.imgs.map((img, index) => (
            <img
              className="projectImg"
              key={index}
              src={require(`../img/${img}`)}
              alt={`${project.name} 이미지 ${index}`}
            />
          ))}
        </Slider>
        <p>{project.description}</p>
      </div>
      <button onClick={handleBack} className="backButton">
        뒤로
      </button>
    </div>
  );
};

export default ProjectPage;
