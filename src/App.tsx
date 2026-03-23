import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/global.css";
import "./styles/About.css";

const SECTIONS = ["hero", "projects", "about", "contact"];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  /* ── Custom cursor ── */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = e.clientX + "px";
        cursorDotRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ring lerp */
  useEffect(() => {
    let raf: number;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = ring.current.x + "px";
        cursorRingRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* hover state */
  useEffect(() => {
    const over = () => document.body.classList.add("cursor-hover");
    const out = () => document.body.classList.remove("cursor-hover");
    const els = document.querySelectorAll("a,button,[role=button]");
    els.forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
  });

  /* ── Scroll reveal ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll(".reveal,.reveal-left,.reveal-right")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Active section ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef}>
        <div
          className="cursor__dot"
          ref={cursorDotRef}
          style={{ position: "fixed" }}
        />
        <div
          className="cursor__ring"
          ref={cursorRingRef}
          style={{ position: "fixed" }}
        />
      </div>

      <Header onNavClick={scrollTo} activeSection={activeSection} />
      <main>
        <Hero onScrollToProjects={() => scrollTo("projects")} />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          © 2026 TomyHas · Built with <span>React</span> &{" "}
          <span>TypeScript</span>
        </p>
      </footer>
    </>
  );
};

export default App;
