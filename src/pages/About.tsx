// === Mantine ===
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  Group,
  List,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Icons ===
import {
  IconBrandTypescript,
  IconBrandRust,
  IconBrandCSharp,
  IconBrandPython,
  IconTerminal2,
  IconBrandGolang,
  IconBrandReact,
  IconBrandNodejs,
  IconPuzzle, // Using IconPuzzle as a generic for QML & Qt for now
  IconBrandMongodb,
  IconBrandMysql,
  IconDatabase, // Using IconDatabase as a generic for MySQL
  IconBrandAws,
  IconServer, // Using IconServer as a generic for NGINX
  IconBrandDocker,
  IconBrandUbuntu,
  IconBrandGitlab,
} from "@tabler/icons-react";

// === Styles ===
import classes from "./About.module.css";

// === Constants ===
import HarrisonHeadshot from "../assets/harrison.jpeg";

/**
 * About page component that displays personal information and professional profile
 */
export function About() {
  const theme = useMantineTheme();

  // Skills with categories from resume
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

  // Experience items from resume
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

  // Education items from resume
  const education = [
    {
      degree: "B.S. Computer Science + Business",
      institution: "Colorado School of Mines",
      year: "May 2020",
      description: "Combined degree in Computer Science and Business",
    },
  ];

  return (
    <Box className={classes.container}>
      {/* Hero section with profile info */}
      <ContentColumn
        padding="60px"
        height="auto"
        minHeight="auto"
        textAlign="left"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Box className={classes.avatarContainer}>
              <Avatar
                src={HarrisonHeadshot}
                size={200}
                radius={100}
                className={classes.avatar}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Title order={1} className={classes.name}>
              Hello!
            </Title>
            <Text size="lg" c="dimmed" className={classes.title}>
              Lead Back End Engineer
            </Text>

            <Text mt="xl" size="md" className={classes.bio}>
              I'm a skilled developer with expertise in TypeScript, Rust, and
              cloud infrastructure. I specialize in designing high-availability
              production services, optimizing system performance, and leading
              development teams to deliver quality software solutions.
            </Text>

            {/* <Group mt="md">
              <Badge size="lg" radius="sm">
                Available for hire
              </Badge>
              <Badge size="lg" radius="sm" color="blue">
                Remote
              </Badge>
              <Badge size="lg" radius="sm" color="teal">
                Freelance
              </Badge>
            </Group> */}
          </Grid.Col>
        </Grid>
      </ContentColumn>

      {/* Skills section */}
      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        backgroundColor={theme.colors.tokyoBlue[2]} // Keep existing background for the section
      >
        <div className={classes.sectionTitleContainer}>
          <Title order={2} mb="xl" className={classes.sectionTitle}>
            Skills
          </Title>
        </div>

        <Box className={classes.skillsContainer}>
          {skills.map((skillGroup) => (
            <Box key={skillGroup.category} mb="xl">
              <Title order={3} className={classes.skillCategoryTitle} mb="md">
                {skillGroup.category}
              </Title>
              <Box className={classes.skillItemsWrapper}>
                {skillGroup.items.map((skill) => (
                  <Paper
                    key={skill.name}
                    className={classes.skillItemPill}
                    p="sm"
                    radius="xl"
                    withBorder
                    shadow="xs" // Added a light shadow for better visual separation
                  >
                    <Group
                      gap="sm"
                      align="center"
                      style={{ justifyContent: "center" }}
                    >
                      <skill.icon
                        size={32} // Larger icon
                        stroke={1.5}
                        color={theme.colors.tokyoBlue[4]}
                        style={{ display: "flex", alignItems: "center" }}
                      />
                      <Text
                        size="lg"
                        fw={500}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {skill.name}
                      </Text>
                    </Group>
                  </Paper>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </ContentColumn>

      {/* Experience section */}
      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        textAlign="left"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Title order={2} mb="xl" className={classes.sectionTitle}>
          Experience
        </Title>

        {experiences.map((exp, index) => (
          <Box
            key={exp.title}
            mb={index === experiences.length - 1 ? 0 : "xl"}
            w="100%"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div>
                <Title order={4}>{exp.title}</Title>
                <Text size="sm" c="dimmed">
                  {exp.company}
                </Text>
              </div>
              <Badge
                size="lg"
                style={{ textAlign: "right", minWidth: "140px" }}
              >
                {exp.period}
              </Badge>
            </div>
            <List mt="md" spacing="xs">
              {exp.description.map((item, i) => (
                <List.Item key={i}>{item}</List.Item>
              ))}
            </List>
            {index !== experiences.length - 1 && <Divider my="lg" />}
          </Box>
        ))}
      </ContentColumn>

      {/* Education section */}
      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        textAlign="left"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Title order={2} mb="xl" className={classes.sectionTitle}>
          Education
        </Title>

        {education.map((edu, index) => (
          <Box
            key={edu.degree}
            mb={index === education.length - 1 ? 0 : "xl"}
            w="100%"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div>
                <Title order={4}>{edu.degree}</Title>
                <Text size="sm" c="dimmed">
                  {edu.institution}
                </Text>
              </div>
              <Badge
                size="lg"
                style={{ textAlign: "right", minWidth: "100px" }}
              >
                {edu.year}
              </Badge>
            </div>
            <Text mt="md">{edu.description}</Text>
            {index !== education.length - 1 && <Divider my="lg" />}
          </Box>
        ))}
      </ContentColumn>

      {/* Projects section */}
      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        textAlign="left"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Title order={2} mb="xl" className={classes.sectionTitle}>
          Projects
        </Title>

        <Box mb="xl" w="100%">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Title order={4}>PRimate</Title>
            <Text size="sm" style={{ textAlign: "right" }}>
              <a
                href="https://github.com/harrisonoest/PRimate"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.projectLink}
              >
                github.com/harrisonoest/PRimate
              </a>
            </Text>
          </div>
          <List mt="md" spacing="xs">
            <List.Item>Created a Node.js Slack bot for pull requests</List.Item>
            <List.Item>
              Reduces review time through automated notifications
            </List.Item>
            <List.Item>
              Enhances team collaboration with centralized feedback tracking
            </List.Item>
          </List>
        </Box>

        <Box mb="xl" w="100%">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Title order={4}>Pegasus</Title>
            <Text size="sm" style={{ textAlign: "right" }}>
              <a
                href="https://github.com/harrisonoest/Pegasus"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.projectLink}
              >
                github.com/harrisonoest/Pegasus
              </a>
            </Text>
          </div>
          <List mt="md" spacing="xs">
            <List.Item>
              Created a Rust web server for downloading and delivering media
            </List.Item>
            <List.Item>
              Grabs media links, downloads them in various formats, and delivers
              them to the client
            </List.Item>
          </List>
        </Box>
      </ContentColumn>
    </Box>
  );
}
