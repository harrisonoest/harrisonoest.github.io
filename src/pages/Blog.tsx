// ====== Mantine ====== //
import { Box, Text, Title } from "@mantine/core";

// ====== Components ====== //
import { ContentColumn } from "../molecules/ContentColumn";
import { BlogPostCard } from "../organisms/BlogPostCard";

// ====== Styles ====== //
import classes from "./Blog.module.css";

// ====== Constants ====== //
import { blogPosts } from "../content/blog/constants";

/**
 * Blog page component that displays a list of blog posts
 */
export function Blog() {
  return (
    <Box className={classes.container}>
      <ContentColumn
        width="100%"
        padding="40px"
        height="auto"
        minHeight="auto"
        textAlign="left"
        // Override the default Container size constraint to allow full width
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <Title order={1} mb="xl" style={{ textAlign: "center" }}>
          Latest Blog Posts
        </Title>
        <Text mb="xl" style={{ textAlign: "center" }}>
          Just some random thoughts and things I find interesting!
        </Text>

        {/* List layout for blog posts with wider content area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "40vw", // Ensure full width utilization
            maxWidth: "80vw", // Prevent any constraints
          }}
        >
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </ContentColumn>
    </Box>
  );
}
