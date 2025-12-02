import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import yetiLogo from "../assets/yeti_150x150.webp";
import "./Header.css";

const links = [
  { link: "/about", label: "About" },
  { link: "/blog", label: "Blog" },
  { link: "/projects", label: "Projects" },
  { link: "/resume", label: "Resume" },
  { link: "/contact", label: "Contact" },
];

export function HeaderSimple() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <a href="/">
            <img src={yetiLogo} alt="Yeti Logo" width="40" height="40" style={{ borderRadius: '4px' }} />
          </a>
          <h2 className="header-title">Harrison Oest</h2>
        </div>
        
        <button 
          className="header-burger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.link}
              className="header-link"
              data-active={location.pathname === link.link || undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
