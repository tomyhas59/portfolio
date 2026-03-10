import React, { useState, useEffect } from "react";
import "../styles/Header.css";

interface HeaderProps { onNavClick:(s:string)=>void; activeSection:string; }
const NAV = [
  {id:"hero",     label:"Home"},
  {id:"projects", label:"Projects"},
  {id:"about",    label:"About"},
  {id:"contact",  label:"Contact"},
];

const Header: React.FC<HeaderProps> = ({ onNavClick, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__logo">
        <div className="header__logo-dot" />
        TomyHas
      </div>
      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        {NAV.map(n => (
          <button key={n.id}
            className={`header__nav-link ${activeSection===n.id?"active":""}`}
            onClick={() => { onNavClick(n.id); setMenuOpen(false); }}>
            {n.label}
          </button>
        ))}
      </nav>
      <button className="header__menu-btn" onClick={() => setMenuOpen(p=>!p)}>
        <span/><span/><span/>
      </button>
    </header>
  );
};
export default Header;
