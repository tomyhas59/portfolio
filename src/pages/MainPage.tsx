import { useEffect, useState } from "react";
import gsap from "gsap";
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
    const sections = ["home", "about-me", "projects", "contact"];

    // activeSection 감지
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

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
