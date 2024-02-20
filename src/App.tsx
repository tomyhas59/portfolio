import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
