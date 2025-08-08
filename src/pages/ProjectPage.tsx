import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobe,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectPage: React.FC<{
  isDarkMode: boolean;
  darkModeToggle: () => void;
}> = ({ isDarkMode, darkModeToggle }) => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));
  const navigator = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".project-name",
      { opacity: 0, y: -500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-name",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".description",
      { opacity: 0, y: -500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".description",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".project-item",
      { opacity: 0, x: -500 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: ".project-item",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".right-section",
      { opacity: 0, x: 500 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: ".right-section",
          start: "top 90%",
        },
      }
    );
  }, [id]);

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

  const nextProject = () => handleProject(1);
  const prevProject = () => handleProject(-1);

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
      <div className="go-to-site">
        <a className="site" href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </a>
        <a className="site" href={project.url} target="blank">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
        </a>
        <a className="site" href={project.gitHub} target="blank">
          <FontAwesomeIcon icon={faCodeBranch} className="icon" />
        </a>
        <button onClick={darkModeToggle} className="mode-toggle">
          {isDarkMode ? <li className="moon"></li> : <li className="sun"></li>}
        </button>
      </div>

      <div className="project-page-content">
        <h2 className="project-page-project-name">{project.name}</h2>
        <p className="description">{project.description}</p>
        <div className="project-section">
          <div className="left-section">
            <Slider {...settings} className="project-item">
              {project.imgs.map((img, index) => (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <img
                    className="project-img"
                    src={require(`../assets/img/${img}`)}
                    alt={`${project.name} 이미지 ${index}`}
                  />
                </a>
              ))}
            </Slider>
          </div>
          <div className="right-section">
            <div className="features-section">
              <h3>주요 기능</h3>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="stack-section">
              <h3>기술 스택</h3>
              <div className="stack-list">
                <ul>
                  <h6>Frontend</h6>
                  {project.stack.frontend.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
                {project.stack.backend.length > 1 && (
                  <ul>
                    <h6>Backend</h6>
                    {project.stack.backend.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                )}
                <ul>
                  <h6>Deploy</h6>
                  {project.stack.deploy.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {id === "1" ? null : (
        <button className="prev-project" onClick={prevProject}>
          이전 프로젝트
        </button>
      )}
      {id === `${projectsData.length}` ? null : (
        <button className="next-project" onClick={nextProject}>
          다음 프로젝트
        </button>
      )}
    </div>
  );
};

export default ProjectPage;
