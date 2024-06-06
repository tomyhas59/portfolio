import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const ProjectPage: React.FC<{
  isDarkMode: boolean;
  darkModeToggle: () => void;
}> = ({ isDarkMode, darkModeToggle }) => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

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
      <button onClick={darkModeToggle} className="modeToggle">
        {isDarkMode ? (
          <li className="moon">DARK</li>
        ) : (
          <li className="sun">LIGHT</li>
        )}
      </button>
      <h2 className="projectName">{project.name}</h2>
      <p className="description">{project.description}</p>
      <Slider {...settings} className="projectItem">
        {project.imgs.map((img, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              className="projectImg"
              src={require(`../img/${img}`)}
              alt={`${project.name} 이미지 ${index}`}
            />
          </a>
        ))}
      </Slider>
      <div className="goToSite">
        <a className="site" href={project.url} target="blank">
          사이트
        </a>
        <a className="site" href={project.gitHub} target="blank">
          깃허브
        </a>
      </div>
      {project.detail && (
        <div className="projectDetail">
          <div>
            <div className="detailTitle">client</div>
            <ul>
              {project.detail?.client.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            {project.detail?.server && (
              <>
                <div className="detailTitle">server</div>
                <ul>
                  {project.detail.server.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
