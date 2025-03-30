// === Mantine ===
import { Button, Grid, Paper, Text, Title } from "@mantine/core";

// === React Router ===
import { useNavigate } from "react-router-dom";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Styles ===
import classes from "./Blog.module.css";

interface BlogPostProps {
  id: string;
  image: string;
  title: string;
  category: string;
}

/**
 * BlogPost component displays an individual blog post card
 * @param id - Unique identifier for the blog post
 * @param image - Background image URL for the blog post
 * @param title - Title of the blog post
 * @param category - Category tag for the blog post
 */
function BlogPost({ id, image, title, category }: BlogPostProps) {
  const navigate = useNavigate();
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '280px',
      }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button 
        variant="white" 
        color="dark"
        onClick={() => navigate(`/blog/${id}`)}
      >
        Read article
      </Button>
    </Paper>
  );
}

// Sample blog posts data with IDs for routing
const data = [
  {
    id: "blog-post-one",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    title: "Blog Post One",
    category: "git",
  },
  {
    id: "blog-post-two",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop",
    title: "Blog Post Two",
    category: "docker",
  },
  {
    id: "blog-post-three",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop",
    title: "Blog Post Three",
    category: "git",
  },
  {
    id: "blog-post-four",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1374&auto=format&fit=crop",
    title: "Blog Post Four",
    category: "docker",
  },
];

/**
 * Blog page component that displays a grid of blog posts
 */
export function Blog() {
  return (
    <ContentColumn
      width="100%"
      padding="40px"
      height="auto"
      minHeight="auto"
    >
      <Title order={2} mb="xl" style={{ textAlign: 'center' }}>
        Latest Blog Posts
      </Title>

      {/* Grid layout for blog posts */}
      <Grid gutter="xl">
        {data.map((post) => (
          <Grid.Col key={post.title} span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
            <BlogPost {...post} />
          </Grid.Col>
        ))}
      </Grid>
    </ContentColumn>
  );
}
