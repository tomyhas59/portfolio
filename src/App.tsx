import React, { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

const App: React.FC = () => {
  const [isMainPage, setIsMainPage] = useState(false);

  const downButton = () => {
    const currnetScrollY = window.scrollY;
    const aboutMeOffset = document.getElementById("aboutMe")?.offsetTop || 0;
    const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
    const contactOffset = document.getElementById("contact")?.offsetTop || 0;

    const aboutMeTitle: any = document.querySelector(".aboutMeTitle");
    const aboutMeContent: any = document.querySelector(".aboutMeContent");

    const changeStyle = (opacity: number, transform: number) => {
      aboutMeTitle.style.opacity = opacity;
      aboutMeTitle.style.transform = `translateX(-${transform}px)`;
      aboutMeContent.style.opacity = opacity;
      aboutMeContent.style.transform = `translateX(${transform}px)`;
    };

    if (currnetScrollY < aboutMeOffset) {
      window.scrollTo({
        top: aboutMeOffset,
        behavior: "smooth",
      });
      changeStyle(1, 0);
    } else if (
      currnetScrollY <
      projectsOffset - 100 /**projects에서 내려가게 동작 */
    ) {
      window.scrollTo({
        top: projectsOffset,
        behavior: "smooth",
      });
    } else if (currnetScrollY < contactOffset) {
      window.scrollTo({
        top: contactOffset,
        behavior: "smooth",
      });
      changeStyle(0, 500);
    }
  };

  useEffect(() => {
    const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
    if (isMainPage) {
      window.scrollTo({
        top: projectsOffset,
      });
    }
  }, [isMainPage]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Main downButton={downButton} />
              <AboutMe id="aboutMe" downButton={downButton} />
              <Projects id="projects" downButton={downButton} />
              <Contact id="contact" />
              <Footer />
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
