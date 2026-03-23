import React, { useState, useEffect, useCallback, useRef } from "react";
import { Project } from "../data/projects";
import "../styles/Modal.css";
import "../styles/Projects.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const STACK_LOGO: Record<string, { file: string; ext: "svg" | "png" }> = {
  React: { file: "React", ext: "svg" },
  TypeScript: { file: "TypeScript", ext: "svg" },
  "Next.js": { file: "NextJS", ext: "svg" },
  Redux: { file: "Redux", ext: "svg" },
  Recoil: { file: "React", ext: "svg" },
  "styled-components": { file: "CSS", ext: "svg" },
  JavaScript: { file: "JavaScript", ext: "svg" },
  HTML: { file: "HTML", ext: "svg" },
  CSS: { file: "CSS", ext: "svg" },
  Sass: { file: "Sass", ext: "svg" },
  GraphQL: { file: "GraphQL", ext: "svg" },
  "React Query": { file: "React", ext: "svg" },
  "Socket.IO-client": { file: "NodeJS", ext: "svg" },
  "Node.js": { file: "NodeJS", ext: "svg" },
  Express: { file: "NodeJS", ext: "svg" },
  PostgreSQL: { file: "MySQL", ext: "svg" },
  Sequelize: { file: "MySQL", ext: "svg" },
  JWT: { file: "Javascript", ext: "svg" },
  "Socket.IO": { file: "NodeJS", ext: "svg" },
  Java: { file: "JAVA", ext: "png" },
  "Spring Boot": { file: "SpringBoot", ext: "svg" },
  MariaDB: { file: "MySQL", ext: "svg" },
  "Oracle DB": { file: "MySQL", ext: "svg" },
  Python: { file: "Python", ext: "svg" },
  "Apollo Server": { file: "GraphQL", ext: "svg" },
  "Firebase Firestore": { file: "Firebase", ext: "svg" },
  Firebase: { file: "Firebase", ext: "svg" },
  MySQL: { file: "MySQL", ext: "svg" },
  Vercel: { file: "Github", ext: "svg" },
  Koyeb: { file: "Github", ext: "svg" },
  CloudType: { file: "Github", ext: "svg" },
  "GitHub Pages": { file: "Github", ext: "svg" },
};

const StackIcon: React.FC<{ name: string }> = ({ name }) => {
  const logo = STACK_LOGO[name];
  return (
    <div className="modal__stack-icon" title={name}>
      <div className="modal__stack-icon-img">
        {logo ? (
          <img src={`/img/skills/${logo.file}.${logo.ext}`} alt={name} />
        ) : (
          <span
            style={{
              fontSize: ".65rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
            }}
          >
            {name.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="modal__stack-icon-name">{name}</span>
    </div>
  );
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === project.imgs.length - 1 ? 0 : prev + 1,
    );
  }, [project.imgs.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.imgs.length - 1 : prev - 1,
    );
  }, [project.imgs.length]);

  // 자동 넘김 로직
  useEffect(() => {
    if (project.imgs.length <= 1 || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isPaused, project.imgs.length]);

  // 키보드 이벤트 (방향키 제어)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        handlePrev();
        setIsPaused(true);
      }
      if (e.key === "ArrowRight") {
        handleNext();
        setIsPaused(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  // 바디 스크롤 차단
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const isTeam = !!project.teamSize;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        <div className="modal__gallery">
          <div
            className="modal__main-img-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {project.imgs.length > 1 && (
              <button
                className="modal__nav-btn modal__nav-btn--prev"
                onClick={() => {
                  handlePrev();
                  setIsPaused(true);
                }}
              >
                ◀
              </button>
            )}

            <div className="modal__main-img">
              <img
                src={`/img/${project.imgs[currentIndex]}`}
                alt={`${project.name} ${currentIndex + 1}`}
              />
              {project.imgs.length > 1 && !isPaused && (
                <div className="modal__autoplay-indicator" key={currentIndex} />
              )}
            </div>

            {project.imgs.length > 1 && (
              <button
                className="modal__nav-btn modal__nav-btn--next"
                onClick={() => {
                  handleNext();
                  setIsPaused(true);
                }}
              >
                ▶
              </button>
            )}
          </div>

          {project.imgs.length > 1 && (
            <div className="modal__thumb-strip">
              {project.imgs.map((img, i) => (
                <button
                  key={img}
                  className={`modal__thumb ${currentIndex === i ? "active" : ""}`}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsPaused(true);
                  }}
                >
                  <img src={`/img/${img}`} alt={`thumb-${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal__content">
          {isTeam && (
            <div className="modal__badges">
              <span className="modal__badge modal__badge--team">
                👥 팀 프로젝트 ({project.teamSize}인)
              </span>
              <span className="modal__badge modal__badge--role">
                🙋 {project.role}
              </span>
            </div>
          )}

          <div className="modal__header">
            <h2 className="modal__title">{project.name}</h2>
            <div className="modal__links">
              {project.url && (
                <a
                  className="modal__link modal__link--live"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
              {project.gitHub && (
                <a
                  className="modal__link modal__link--github"
                  href={project.gitHub}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/img/skills/Github.svg"
                    alt="github"
                    style={{ width: 14, height: 14 }}
                  />{" "}
                  GitHub
                </a>
              )}
            </div>
          </div>

          <p className="modal__desc">{project.description}</p>
          <p className="modal__section-title">
            {isTeam ? "담당 구현 기능" : "주요 기능"}
          </p>
          <ul className="modal__features">
            {project.features.map((f) => (
              <li className="modal__feature-item" key={f}>
                <span className="modal__feature-dot" />
                {f}
              </li>
            ))}
          </ul>

          <p className="modal__section-title">기술 스택</p>
          <div className="modal__stack">
            {project.stack.backend.length > 0 && (
              <div className="modal__stack-group">
                <p className="modal__stack-group-title modal__stack-group-title--backend">
                  Backend
                </p>
                <div className="modal__stack-icons">
                  {project.stack.backend.map((t) => (
                    <StackIcon key={t} name={t} />
                  ))}
                </div>
              </div>
            )}
            {project.stack.frontend.length > 0 && (
              <div className="modal__stack-group">
                <p className="modal__stack-group-title modal__stack-group-title--frontend">
                  Frontend
                </p>
                <div className="modal__stack-icons">
                  {project.stack.frontend.map((t) => (
                    <StackIcon key={t} name={t} />
                  ))}
                </div>
              </div>
            )}
            {project.stack.deploy.length > 0 && (
              <div className="modal__stack-group">
                <p className="modal__stack-group-title modal__stack-group-title--deploy">
                  Deploy
                </p>
                <div className="modal__stack-icons">
                  {project.stack.deploy.map((t) => (
                    <StackIcon key={t} name={t} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
