import { ContentColumn } from "../molecules/ContentColumn";
import "./Projects.css";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: "primate",
      title: "PRimate",
      description: "Created a Node.js Slack bot for pull requests. Reduces review time through automated notifications. Enhances team collaboration with centralized feedback tracking.",
      image: "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=2400&auto=format&fit=crop",
      tags: ["Node.js", "Slack", "Bot"],
      repoUrl: "https://github.com/harrisonoest/PRimate",
    },
    {
      id: "pegasus",
      title: "Pegasus",
      description: "Created a Rust web server for downloading and delivering media. Grabs media links, downloads them in various formats, and delivers them to the client.",
      image: "https://images.unsplash.com/photo-1628250193602-2ccd39756e78?q=80&w=2400&auto=format&fit=crop",
      tags: ["Rust", "Web Server", "Media"],
      repoUrl: "https://github.com/harrisonoest/Pegasus",
    },
    {
      id: "yt-duration-filter",
      title: "YouTube Duration Filter",
      description: "A browser extension that filters YouTube videos by duration. Helps users find videos within their preferred time range for better content discovery.",
      image: "https://images.unsplash.com/photo-1521302200778-33500795e128?q=80&w=1470&auto=format&fit=crop",
      tags: ["JavaScript", "Browser Extension"],
      repoUrl: "https://github.com/harrisonoest/yt-duration-filter",
    },
    {
      id: "duplicate-line-highlighter",
      title: "Duplicate Line Highlighter",
      description: "VS Code extension that highlights all duplicate lines in the editor, ignoring whitespace and blank lines, with live updates and configurable colors.",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1489&auto=format&fit=crop",
      tags: ["VS Code", "Extension", "TypeScript"],
      repoUrl: "https://github.com/harrisonoest/duplicate-line-highlighter",
    },
    {
      id: "sshuttle-manager",
      title: "SSHuttle Manager",
      description: "CLI and TUI tool for managing sshuttle VPN connections, supporting saved configurations, groups, and automated control.",
      image: "https://images.unsplash.com/photo-1608742213509-815b97c30b36?q=80&w=1470&auto=format&fit=crop",
      tags: ["Rust", "CLI", "VPN"],
      repoUrl: "https://github.com/harrisonoest/sshuttle-manager",
    },
    {
      id: "automix-ai",
      title: "AutoMix AI",
      description: "Python CLI tool that analyzes audio files to identify optimal DJ mix transition points using beat detection, harmonic analysis, energy-aware section detection, and spectral analysis.",
      image: "https://images.unsplash.com/photo-1720962158849-2c3b22499d2b?w=500&auto=format&fit=crop&q=80",
      tags: ["Python", "Audio", "DJ", "CLI"],
      repoUrl: "https://github.com/harrisonoest/automix-ai",
    },
    {
      id: "release-radar",
      title: "Release Radar",
      description: "Go tool that tracks new music releases from artists in your Apple Music library and adds them to a playlist.",
      image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?q=80&w=1470&auto=format&fit=crop",
      tags: ["Go", "Apple Music", "CLI", "Playlist"],
      repoUrl: "https://github.com/harrisonoest/release-radar",
    },
  ];

  return (
    <div className="container">
      <ContentColumn>
        <h1>My Projects</h1>
        <p>A collection of my recent work in web development, system programming, and data engineering.</p>
      </ContentColumn>

      <ContentColumn>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Code →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </ContentColumn>
    </div>
  );
}
