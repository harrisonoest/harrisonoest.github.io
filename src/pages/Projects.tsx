// === React ===
import { ReactNode } from "react";

// === Mantine ===
import {
  Box,
  Text,
  Title,
  Card,
  Image,
  Badge,
  Group,
  Button,
  useMantineTheme,
  SimpleGrid,
} from "@mantine/core";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Styles ===
import classes from "./Projects.module.css";

/**
 * Projects page component that displays a collection of projects
 * Each project is displayed as a card with an image, title, description, and links
 */
export function Projects() {
  const theme = useMantineTheme();

  // Define the project interface
  interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    repoUrl?: string;
  }

  // Project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: "project-1",
      title: "Personal Website",
      description:
        "My personal website built with React, TypeScript, and Mantine UI. Features a responsive design with blog functionality.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Mantine"],
      liveUrl: "https://harrisonoest.github.io",
      repoUrl: "https://github.com/harrisonoest/harrisonoest.github.io",
    },
    {
      id: "project-2",
      title: "Rust Microservice",
      description:
        "High-performance microservice built with Rust. Optimized for speed and reliability with comprehensive test coverage.",
      image:
        "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2274&auto=format&fit=crop",
      tags: ["Rust", "Microservices", "API"],
      repoUrl: "https://github.com/harrisonoest/rust-microservice",
    },
    {
      id: "project-3",
      title: "MongoDB Data Pipeline",
      description:
        "ETL pipeline for processing and analyzing large datasets using MongoDB and Node.js.",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
      tags: ["MongoDB", "Node.js", "Data Processing"],
      repoUrl: "https://github.com/harrisonoest/mongodb-pipeline",
    },
    {
      id: "project-4",
      title: "Linux System Monitor",
      description:
        "Desktop application for monitoring system resources on Linux. Built with Qt and C++.",
      image:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2274&auto=format&fit=crop",
      tags: ["C++", "Qt", "Linux"],
      repoUrl: "https://github.com/harrisonoest/linux-monitor",
    },
  ];

  // Project card component
  const ProjectCard = ({ project }: { project: Project }): ReactNode => (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.projectCard}
    >
      <Card.Section>
        <Image src={project.image} height={160} alt={project.title} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Title order={3} className={classes.projectTitle}>
          {project.title}
        </Title>
      </Group>

      <Text size="sm" color="dimmed" className={classes.projectDescription}>
        {project.description}
      </Text>

      <Group mt="md" mb="md">
        {project.tags.map((tag: string) => (
          <Badge key={tag} color={theme.colors.tokyoBlue[5]} variant="light">
            {tag}
          </Badge>
        ))}
      </Group>

      <Group mt="md" justify="space-between">
        {project.repoUrl && (
          <Button
            component="a"
            href={project.repoUrl}
            target="_blank"
            variant="subtle"
            color={theme.colors.tokyoBlue[5]}
          >
            View Code
          </Button>
        )}
        {project.liveUrl && (
          <Button
            component="a"
            href={project.liveUrl}
            target="_blank"
            variant="filled"
            color={theme.colors.tokyoBlue[5]}
          >
            Live Demo
          </Button>
        )}
      </Group>
    </Card>
  );

  return (
    <Box className={classes.container}>
      {/* Hero section */}
      <ContentColumn
        padding="60px"
        height="auto"
        minHeight="auto"
        textAlign="center"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Title order={1} className={classes.sectionTitle}>
          My Projects
        </Title>
        <Text size="lg" mt="md" mb="xl" maw="800px" mx="auto">
          A collection of my recent work in web development, system programming,
          and data engineering. Each project demonstrates different skills and
          technologies I've worked with.
        </Text>
      </ContentColumn>

      {/* Projects grid */}
      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        backgroundColor={theme.colors.tokyoBlue[2]}
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </ContentColumn>
    </Box>
  );
}
