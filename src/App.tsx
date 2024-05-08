import React, { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
  const [isMainPage, setIsMainPage] = useState(false);

  const showAboutMeText = (sectionId: string) => {
    const aboutMeTitle: HTMLElement | null =
      document.querySelector(".aboutMeTitle");
    const aboutMeContent: HTMLElement | null =
      document.querySelector(".aboutMeContent");

    const changeStyle = (opacity: number, transform: number) => {
      if (aboutMeTitle) {
        aboutMeTitle.style.opacity = opacity.toString();
        aboutMeTitle.style.transform = `translateX(-${transform}px)`;
      }

      if (aboutMeContent) {
        aboutMeContent.style.opacity = opacity.toString();
        aboutMeContent.style.transform = `translateX(${transform}px)`;
      }
    };

    if (sectionId === "aboutMe") changeStyle(1, 0);
    else changeStyle(0, 500);
  };

  const downButton = (sectionId: string) => {
    const targetOffset = document.getElementById(sectionId)?.offsetTop || 0;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });

    showAboutMeText(sectionId);
  };

  useEffect(() => {
    const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
    if (isMainPage) {
      window.scrollTo({
        top: projectsOffset,
      });
    }
  }, [isMainPage]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    showAboutMeText(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutMeOffset = document.getElementById("aboutMe")?.offsetTop || 0;
      if (scrollPosition < aboutMeOffset - 500) showAboutMeText("");
      else if (
        scrollPosition >= aboutMeOffset &&
        scrollPosition < aboutMeOffset + 500
      )
        showAboutMeText("aboutMe");
      else if (scrollPosition >= aboutMeOffset + 500) showAboutMeText("");
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
                  <li onClick={() => scrollToSection("")}>Home</li>
                  <li onClick={() => scrollToSection("aboutMe")}>About Me</li>
                  <li onClick={() => scrollToSection("projects")}>Projects</li>
                  <li onClick={() => scrollToSection("contact")}>Contact</li>
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
          element={<ProjectPage setIsMainPage={setIsMainPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
