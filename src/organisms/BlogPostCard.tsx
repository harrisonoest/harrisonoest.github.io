// === React ===
import { useNavigate } from "react-router-dom";

// === Mantine ===
import { Button, Paper, Text, Title } from "@mantine/core";

// === Styles ===
import classes from "./BlogPostCard.module.css";

/**
 * Props for the BlogPostCard component
 */
interface BlogPostCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
}

/**
 * BlogPostCard component displays an individual blog post in a vertical card format
 *
 * This component is used in the Blog page to display a preview of each blog post in a list.
 * It shows a thumbnail image on top and content below with a "Read article" button
 * that navigates to the full blog post.
 *
 * @param id - Unique identifier for the blog post
 * @param image - Background image URL for the blog post
 * @param title - Title of the blog post
 * @param category - Category tag for the blog post
 */
export function BlogPostCard({
  id,
  image,
  title,
  category,
}: BlogPostCardProps) {
  const navigate = useNavigate();

  // This component renders a blog post card in a vertical format
  return (
    <Paper shadow="md" p="md" radius="md" className={classes.cardContainer}>
      {/* Top - Image thumbnail */}
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Bottom - Content section */}
      <div className={classes.contentContainer}>
        <div>
          <Text className={classes.category} size="md">
            # {category}
          </Text>
          <Title className={classes.title} order={3}>
            {title}
          </Title>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant="white"
            onClick={() => navigate(`/blog/${id}`)}
            className={classes.readButton}
          >
            Read Article
          </Button>
        </div>
      </div>
    </Paper>
  );
}
