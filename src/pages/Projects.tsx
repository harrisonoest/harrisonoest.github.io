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
      id: "primate",
      title: "PRimate",
      description:
        "Created a Node.js Slack bot for pull requests. Reduces review time through automated notifications. Enhances team collaboration with centralized feedback tracking.",
      image:
        "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?q=80&w=2400&auto=format&fit=crop", // Placeholder image for PRimate
      tags: ["Node.js", "Slack", "Bot", "Collaboration", "Automation"],
      repoUrl: "https://github.com/harrisonoest/PRimate",
    },
    {
      id: "pegasus",
      title: "Pegasus",
      description:
        "Created a Rust web server for downloading and delivering media. Grabs media links, downloads them in various formats, and delivers them to the client.",
      image:
        "https://images.unsplash.com/photo-1628250193602-2ccd39756e78?q=80&w=2400&auto=format&fit=crop", // Placeholder image for Pegasus
      tags: ["Rust", "Web Server", "Media", "Downloader", "API"],
      repoUrl: "https://github.com/harrisonoest/Pegasus",
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

      <Text size="sm" className={classes.projectDescription}>
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
