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

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <a href="/">
            <img src={yetiLogo} alt="Yeti Logo" width="40" height="40" style={{ borderRadius: '4px' }} />
          </a>
          <h2 className="header-title">Harrison Oest</h2>
        </div>
        <nav className="header-nav">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.link}
              className="header-link"
              data-active={location.pathname === link.link || undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
