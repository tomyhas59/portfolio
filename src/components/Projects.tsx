import DownButton from "./DownButton";
import blogImg from "../img/blogImg.png";
import shopImg from "../img/shopImg.png";
import webGameImg from "../img/webGameImg.png";

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Projects = ({ id, downButton }: ProjectsProps) => {
  const projects = [
    {
      id: 1,
      name: "개인 블로그",
      img: blogImg,
      descripton:
        "회원가입, 로그인, 게시글 CRUD와 추천 및 검색 기능을 구현한 블로그 사이트",
    },
    {
      id: 2,
      name: "쇼핑몰",
      img: shopImg,
      descripton: "간단한 회원가입, 로그인, 장바구니 담기 기능 쇼핑몰 사이트  ",
    },
    {
      id: 3,
      name: "리액트 웹게임",
      img: webGameImg,
      descripton: "React를 사용한 간단한 웹 게임 모음",
    },
  ];

  return (
    <section className="projects" id={id}>
      <h2>Projects</h2>
      <div className="project-wrapper">
        {projects.map((project) => (
          <div>
            <div className="project" key={project.id}>
              <img src={project.img} alt={project.name} />
            </div>
            <div>{project.name}</div>
          </div>
        ))}
      </div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
