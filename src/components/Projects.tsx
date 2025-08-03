import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import DownButton from "./DownButton";

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const ITEM_WIDTH = 320;
const SPEED = 2;

const Projects = ({ id, downButton }: ProjectsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const position = useRef(0);

  // 무한 슬라이드용 2배 복제
  const repeatedProjects = [...projectsData, ...projectsData];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = ITEM_WIDTH * projectsData.length;

    function animate() {
      position.current -= SPEED;
      if (position.current <= -totalWidth) {
        position.current = 0;
      }

      container!.style.transform = `translateX(${position.current}px)`;

      animationFrameId.current = requestAnimationFrame(animate);
    }

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section className="projects-wrapper" id={id}>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-carousel-wrapper">
        <div className="projects-carousel" ref={containerRef}>
          {repeatedProjects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <img
                src={require(`../assets/img/${project.mainImg[0]}`)}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-name">{project.name}</h3>
              <Link to={`/projects/${project.id}`} className="project-link">
                자세히 보기 →
              </Link>
            </div>
          ))}
        </div>
      </div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
