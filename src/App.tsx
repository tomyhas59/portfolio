import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "enabled"
  );
  const darkModeToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage isDarkMode={isDarkMode} darkModeToggle={darkModeToggle} />
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
