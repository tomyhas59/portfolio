import React, { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
  //dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const darkModeToggle = () => {
    setIsDarkMode((preMode) => {
      const newMode = !preMode;
      localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
      return newMode;
    });
  };
  //show animation
  const showAboutMe = (sectionId: string) => {
    const aboutMeTitle: HTMLElement | null =
      document.querySelector(".aboutMeTitle");
    const aboutMeContent: HTMLElement | null =
      document.querySelector(".aboutMeContent");
    const skills: HTMLElement | null = document.querySelector(".skills");

    const changeStyle = (opacity: number, transform: number) => {
      if (aboutMeTitle) {
        aboutMeTitle.style.opacity = opacity.toString();
        aboutMeTitle.style.transform = `translateX(-${transform}px)`;
      }

      if (aboutMeContent) {
        aboutMeContent.style.opacity = opacity.toString();
        aboutMeContent.style.transform = `translateX(${transform}px)`;
      }
      if (skills) {
        setTimeout(() => {
          skills.style.opacity = opacity.toString();
        }, 1000);
      }
    };

    if (sectionId === "aboutMe") changeStyle(1, 0);
    else changeStyle(0, 500);
  };

  const showProjects = (sectionId: string) => {
    const projects: HTMLElement | null = document.querySelector(".projects");

    const changeStyle = (
      opacity: number,
      transform: number,
      visibility: string
    ) => {
      if (projects) {
        projects.style.opacity = opacity.toString();
        projects.style.transform = `translateY(${transform}px)`;
        projects.style.visibility = visibility;
      }
    };
    if (sectionId === "projects") changeStyle(1, 0, "visible");
    else changeStyle(0, -1000, "hidden");
  };

  const showContact = (sectionId: string) => {
    const contactTitle: HTMLElement | null =
      document.querySelector(".contactTitle");
    const contactContent: HTMLElement | null =
      document.querySelector(".contactContent");

    const changeStyle = (opacity: number, transform: number) => {
      if (contactTitle) {
        contactTitle.style.opacity = opacity.toString();
        contactTitle.style.transform = `translateX(-${transform}px)`;
      }

      if (contactContent) {
        contactContent.style.opacity = opacity.toString();
        contactContent.style.transform = `translateX(${transform}px)`;
      }
    };

    if (sectionId === "contact") changeStyle(1, 0);
    else changeStyle(0, 500);
  };
  //-----------------------------------------------------
  const downButton = (sectionId: string) => {
    const targetOffset = document.getElementById(sectionId)?.offsetTop || 0;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutMeOffset = document.getElementById("aboutMe")?.offsetTop || 0;
      const projectsOffset =
        document.getElementById("projects")?.offsetTop || 0;
      const contactOffset = document.getElementById("contact")?.offsetTop || 0;

      if (scrollPosition < aboutMeOffset - 500) {
        setActiveSection("home");
        showAboutMe("");
      } else if (
        scrollPosition >= aboutMeOffset - 100 &&
        scrollPosition < aboutMeOffset + 500
      ) {
        setActiveSection("aboutMe");
        showAboutMe("aboutMe");
        showProjects("");
      } else if (
        scrollPosition >= projectsOffset - 100 &&
        scrollPosition < projectsOffset + 500
      ) {
        setActiveSection("projects");
        showProjects("projects");
        showAboutMe("");
        showContact("");
      } else if (
        scrollPosition >= contactOffset - 100 &&
        scrollPosition < contactOffset + 500
      ) {
        setActiveSection("contact");
        showProjects("");
        showContact("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <nav className="sectionMenu">
                <ul className="sectionList">
                  {["home", "aboutMe", "projects", "contact"].map((section) => (
                    <li
                      id="list"
                      key={section}
                      className={activeSection === section ? "active" : ""}
                      onClick={() => scrollToSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </li>
                  ))}
                  <button onClick={darkModeToggle} className="modeToggle">
                    {isDarkMode ? (
                      <div className="moon">DARK</div>
                    ) : (
                      <div className="sun">LIGHT</div>
                    )}
                  </button>
                </ul>
              </nav>

              <Main downButton={() => downButton("aboutMe")} />
              <AboutMe id="aboutMe" downButton={() => downButton("projects")} />
              <Projects
                id="projects"
                downButton={() => downButton("contact")}
              />
              <Contact id="contact" />
            </div>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProjectPage
              isDarkMode={isDarkMode}
              darkModeToggle={darkModeToggle}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
