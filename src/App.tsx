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

  const downButton = (componentId: string) => {
    const targetOffset = document.getElementById(componentId)?.offsetTop || 0;
    const aboutMeTitle: any = document.querySelector(".aboutMeTitle");
    const aboutMeContent: any = document.querySelector(".aboutMeContent");

    const changeStyle = (opacity: number, transform: number) => {
      aboutMeTitle.style.opacity = opacity;
      aboutMeTitle.style.transform = `translateX(-${transform}px)`;
      aboutMeContent.style.opacity = opacity;
      aboutMeContent.style.transform = `translateX(${transform}px)`;
    };

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
    if (componentId === "aboutMe") changeStyle(1, 0);
    else changeStyle(0, 500);
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
              <Main downButton={() => downButton("aboutMe")} />
              <AboutMe id="aboutMe" downButton={() => downButton("projects")} />
              <Projects
                id="projects"
                downButton={() => downButton("contact")}
              />
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
