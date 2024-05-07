import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
interface ProjectPageProps {
  setIsMainPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ setIsMainPage }) => {
  setIsMainPage(false);
  const { id } = useParams();
  const navigator = useNavigate();
  const project = projectsData.find((project) => project.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

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
        <p className="description">{project.description}</p>
        <p>
          <a className="site" href={project.url} target="blank">
            홈페이지
          </a>
          <a className="site" href={project.gitHub} target="blank">
            깃허브
          </a>
        </p>
      </div>
      <button onClick={handleBack} className="backButton">
        뒤로
      </button>
    </div>
  );
};

export default ProjectPage;
