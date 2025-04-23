// ======== React ======== //
import { useNavigate } from "react-router-dom";

// ======== Mantine ======== //
import { Button, Paper, Text, Title } from "@mantine/core";

// ======== Styles ======== //
import blogClasses from "../pages/Blog.module.css";

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
 * BlogPostCard component displays an individual blog post in a horizontal list item format
 *
 * This component is used in the Blog page to display a preview of each blog post in a list.
 * It shows a thumbnail image on the left and content on the right with a "Read article" button
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

  // This component renders a blog post card in a horizontal list format
  return (
    <Paper
      shadow="md"
      p="md"
      radius="md"
      className={blogClasses.card}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Left side - Image thumbnail with larger dimensions for wider screens */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "160px",
          borderRadius: "6px",
          margin: "0 24px",
        }}
      />

      {/* Right side - Content with improved spacing for wider layout */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "4px 0",
          width: "100%",
        }}
      >
        <div>
          <Text className={blogClasses.category} size="md">
            # {category}
          </Text>
          <Title
            order={3}
            className={blogClasses.title}
            style={{ marginTop: "8px", marginBottom: "12px" }}
          >
            {title}
          </Title>
        </div>
        <Button
          variant="white"
          color="dark"
          onClick={() => navigate(`/blog/${id}`)}
          style={{ alignSelf: "flex-start" }}
        >
          Read article
        </Button>
      </div>
    </Paper>
  );
}
