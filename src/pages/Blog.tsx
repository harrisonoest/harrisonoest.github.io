// === Mantine ===
import { Box, Text, Title, useMantineTheme } from "@mantine/core";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";
import { BlogPostCard } from "../organisms/BlogPostCard";

// === Styles ===
import classes from "./Blog.module.css";

// === Constants ===
import { blogPosts } from "../content/blog/constants";

/**
 * Blog page component that displays a list of blog posts
 */

export function Blog() {
  const theme = useMantineTheme();

  // No wrapper needed as we're using the BlogPostCard directly

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
          Latest Blog Posts
        </Title>
        <Text size="lg" mt="md" mb="xl" maw="800px" mx="auto">
          Just some random thoughts and things I find interesting!
        </Text>
      </ContentColumn>

      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        textAlign="left"
        backgroundColor={theme.colors.tokyoBlue[2]}
        style={{ width: "60vw" }}
      >
        <Box className={classes.blogPostsContainer}>
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </Box>
      </ContentColumn>
    </Box>
  );
}
