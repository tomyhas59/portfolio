import DownButton from "./DownButton";
import CSS from "../assets/img/skills/CSS.svg";
import Firebase from "../assets/img/skills/Firebase.svg";
import Git from "../assets/img/skills/Git.svg";
import Github from "../assets/img/skills/Github.svg";
import GraphQL from "../assets/img/skills/GraphQL.svg";
import HTML from "../assets/img/skills/HTML.svg";
import JavaScript from "../assets/img/skills/JavaScript.svg";
import MySQL from "../assets/img/skills/MySQL.svg";
import NextJS from "../assets/img/skills/NextJS.svg";
import NodeJS from "../assets/img/skills/NodeJS.svg";
import React from "../assets/img/skills/React.svg";
import Redux from "../assets/img/skills/Redux.svg";
import Sass from "../assets/img/skills/Sass.svg";
import TypeScript from "../assets/img/skills/TypeScript.svg";

interface AboutMeProps {
  id: string;
  downButton: () => void;
}

const AboutMe = ({ id, downButton }: AboutMeProps) => {
  const skills = [
    HTML,
    CSS,
    Sass,
    JavaScript,
    TypeScript,
    React,
    Redux,
    NextJS,
    NodeJS,
    GraphQL,
    MySQL,
    Firebase,
    Git,
    Github,
  ];

  return (
    <section className="about-me-wrapper" id={id}>
      <div className="about-me">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-content">
          <p>React, Next.js 등 다양한 프론트엔드 기술을</p>
          <p>직접 프로젝트로 경험해왔습니다.</p>
          <p>Express와 Spring Boot로 백엔드까지 구현하며</p>
          <p>전체 흐름을 이해하는 데 집중했습니다.</p>
          <p>SNS, 쇼핑몰, 가계부 등 실사용 가능한 앱을</p>
          <p>직접 설계하고 배포한 경험이 있습니다.</p>
          <p>무언가를 만드는 것보다 어떻게 보이고</p>
          <p>어떻게 느껴지는지에 더욱 관심을 갖고</p>
          <p>개발에 매진하여 성장하는 개발자가 되고 싶습니다.</p>
        </div>
      </div>
      <div className="skills">
        <div>SKILLS</div>
        <div className="skill-imgs">
          {skills.map((item, index) => (
            <img key={index} className="skill-img" src={item} alt={`${item}`} />
          ))}
        </div>
      </div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default AboutMe;
