import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectPage: React.FC<{
  isDarkMode: boolean;
  darkModeToggle: () => void;
}> = ({ isDarkMode, darkModeToggle }) => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));
  const navigator = useNavigate();

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const handleProject = (num: number) => {
    const currentIndex = projectsData.findIndex(
      (project) => project.id === Number(id)
    );
    const projectId = projectsData[currentIndex + num].id;

    navigator(`/projects/${projectId}`);
  };

  const nextProject = () => {
    handleProject(1);
  };

  const prevProject = () => {
    handleProject(-1);
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
    <div className="project-page-wrapper">
      <div className="project-page-content">
        <button onClick={darkModeToggle} className="mode-toggle">
          {isDarkMode ? (
            <li className="moon">DARK</li>
          ) : (
            <li className="sun">LIGHT</li>
          )}
        </button>
        <h2 className="project-name">{project.name}</h2>
        <p className="description">{project.description}</p>
        <Slider {...settings} className="project-item">
          {project.imgs.map((img, index) => (
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                className="project-img"
                src={require(`../img/${img}`)}
                alt={`${project.name} 이미지 ${index}`}
              />
            </a>
          ))}
        </Slider>
        <div className="go-to-site">
          <a className="site" href="/">
            홈으로
          </a>
          <a className="site" href={project.url} target="blank">
            사이트
          </a>
          <a className="site" href={project.gitHub} target="blank">
            깃허브
          </a>
        </div>
        {project.detail && (
          <div className="project-detail">
            <div className="client-detail">
              <div className="detail-title">client</div>
              <ul>
                {project.detail?.client.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="server-detail">
              {project.detail?.server && (
                <>
                  <div className="detail-title">server</div>
                  <ul>
                    {project.detail.server.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      {id === "1" ? null : (
        <button className="prev-project" onClick={prevProject}>
          prev &nbsp;
        </button>
      )}
      {id === `${projectsData.length}` ? null : (
        <button className="next-project" onClick={nextProject}>
          &nbsp; next
        </button>
      )}
    </div>
  );
};

export default ProjectPage;
