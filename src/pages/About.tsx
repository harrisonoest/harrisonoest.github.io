import { ContentColumn } from "../molecules/ContentColumn";
import HarrisonHeadshot from "../assets/harrison.jpeg";
import {
  IconBrandTypescript,
  IconBrandRust,
  IconBrandCSharp,
  IconBrandPython,
  IconTerminal2,
  IconBrandGolang,
  IconBrandReact,
  IconBrandNodejs,
  IconPuzzle,
  IconBrandMongodb,
  IconBrandMysql,
  IconDatabase,
  IconBrandAws,
  IconServer,
  IconBrandDocker,
  IconBrandUbuntu,
  IconBrandGitlab,
} from "@tabler/icons-react";
import "./About.css";

export function About() {
  const experiences = [
    {
      title: "Back End Lead Engineer",
      company: "Nagrastar, LLC",
      period: "February 2025 - Present",
      description: [
        "Design and deploy AWS cloud infrastructure for high-availability production services",
        "Develop responsive React/TypeScript frontend features",
        "Optimize performance of Rust microservices",
        "Lead sprint planning and architectural decisions",
      ],
    },
    {
      title: "Software Developer",
      company: "Nagrastar, LLC",
      period: "March 2023 - February 2025",
      description: [
        "Enhanced Qt applications with critical features",
        "Built and maintained Node.js server for data standardization",
        "Introduced bash automation scripts for build processes and deployment workflows",
      ],
    },
    {
      title: "Software Developer II",
      company: "Electro Magnetic Applications",
      period: "February 2022 - March 2023",
      description: [
        "Led UI/Core team of 4 developers",
        "Integrated CAD visualization APIs",
        "Developed a Linux installer supporting multiple distributions",
      ],
    },
    {
      title: "Software Developer I",
      company: "Electro Magnetic Applications",
      period: "February 2021 - February 2022",
      description: [
        "Developed C#/C++ commercial simulation software",
        "Improved existing applications through algorithm optimization and memory management techniques",
      ],
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", icon: IconBrandTypescript },
        { name: "Rust", icon: IconBrandRust },
        { name: "C#", icon: IconBrandCSharp },
        { name: "Python", icon: IconBrandPython },
        { name: "Bash", icon: IconTerminal2 },
        { name: "Go", icon: IconBrandGolang },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: IconBrandReact },
        { name: "Node.js", icon: IconBrandNodejs },
        { name: "QML", icon: IconPuzzle },
        { name: "Qt", icon: IconPuzzle },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: IconBrandMongodb },
        { name: "PostgreSQL", icon: IconDatabase },
        { name: "MySQL", icon: IconBrandMysql },
      ],
    },
    {
      category: "Infrastructure",
      items: [
        { name: "AWS", icon: IconBrandAws },
        { name: "NGINX", icon: IconServer },
        { name: "Docker", icon: IconBrandDocker },
        { name: "Linux", icon: IconBrandUbuntu },
        { name: "GitLab CI/CD", icon: IconBrandGitlab },
      ],
    },
  ];

  return (
    <div className="container">
      <ContentColumn>
        <div className="about-hero">
          <img src={HarrisonHeadshot} alt="Harrison Oest" className="about-avatar" />
          <div className="about-intro">
            <h1>Hello!</h1>
            <p className="about-title">Lead Back End Engineer</p>
            <p className="about-bio">
              I'm a skilled developer with expertise in TypeScript, Rust, and cloud infrastructure. 
              I specialize in designing high-availability production services, optimizing system performance, 
              and leading development teams to deliver quality software solutions.
            </p>
          </div>
        </div>
      </ContentColumn>

      <ContentColumn>
        <h2>Skills</h2>
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skills-grid">
              {skillGroup.items.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  <skill.icon size={20} stroke={1.5} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </ContentColumn>

      <ContentColumn>
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={exp.title} className="experience-item">
            <div className="experience-header">
              <div>
                <h4>{exp.title}</h4>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-period">{exp.period}</span>
            </div>
            <ul className="experience-list">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {index !== experiences.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </ContentColumn>

      <ContentColumn>
        <h2>Education</h2>
        <div className="experience-header">
          <div>
            <h4>B.S. Computer Science + Business</h4>
            <p className="experience-company">Colorado School of Mines</p>
          </div>
          <span className="experience-period">May 2020</span>
        </div>
      </ContentColumn>
    </div>
  );
}
