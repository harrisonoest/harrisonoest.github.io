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
