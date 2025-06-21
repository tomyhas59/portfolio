import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";

gsap.registerPlugin(ScrollTrigger);

const MainPage: React.FC<{
  isDarkMode: boolean;
  darkModeToggle: () => void;
}> = ({ isDarkMode, darkModeToggle }) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // ScrollTrigger: 섹션 활성화 감지
    const sections = ["home", "about-me", "projects", "contact"];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

    // GSAP 애니메이션 등록
    gsap.fromTo(
      ".about-me-title",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      ".about-me-content",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      ".skills",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#about-me",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".project-title",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      ".projects",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      [".left-arrow", ".right-arrow"],
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#projects",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        delay: 0.8,
      }
    );

    gsap.fromTo(
      ".contact-title",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );

    gsap.fromTo(
      ".contact-content",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const downButton = (sectionId: string) => {
    const targetOffset = document.getElementById(sectionId)?.offsetTop || 0;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  };

  return (
    <div className="app">
      <nav className="section-menu">
        <ul className="section-list">
          {["home", "about-me", "projects", "contact"].map((section) => (
            <li
              key={section}
              className={activeSection === section ? "active" : ""}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1).replace("-", " ")}
            </li>
          ))}
          <li>
            <button onClick={darkModeToggle} className="mode-toggle">
              {isDarkMode ? <div className="moon" /> : <div className="sun" />}
            </button>
          </li>
        </ul>
      </nav>

      <Main id="home" downButton={() => downButton("about-me")} />
      <AboutMe id="about-me" downButton={() => downButton("projects")} />
      <Projects id="projects" downButton={() => downButton("contact")} />
      <Contact id="contact" />
    </div>
  );
};

export default MainPage;
