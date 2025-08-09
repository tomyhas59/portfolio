import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import DownButton from "./DownButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Projects = ({ id, downButton }: ProjectsProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 제목 등장 애니메이션
    gsap.fromTo(
      ".projects-heading",
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    if (listRef.current) {
      const targets = listRef.current.querySelectorAll(".project-link");

      targets.forEach((target, idx) => {
        // 스크롤 등장
        gsap.fromTo(
          target,
          {
            opacity: 0,
            y: idx % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: idx * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // 마우스 엔터
        target.addEventListener("mouseenter", () => {
          gsap.to(target, {
            scale: 1.04,
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            duration: 0.4,
            ease: "expo.out",
          });
        });

        // 마우스 리브
        target.addEventListener("mouseleave", () => {
          gsap.to(target, {
            scale: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "expo.inOut",
          });
        });
      });
    }
  }, []);

  return (
    <section className="projects-wrapper" id={id}>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list" ref={listRef}>
        {projectsData.map((project, idx) => (
          <Link
            to={`/projects/${project.id}`}
            className="project-link"
            key={idx}
          >
            <img
              src={require(`../assets/img/${project.mainImg[0]}`)}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
          </Link>
        ))}
      </div>

      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
