// === React ===
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// === Markdown ===
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// === Mantine ===
import { Button, Image, Loader, Paper, Text, Title } from "@mantine/core";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Styles ===
import classes from "./BlogPost.module.css";

// ====== Constants ====== //
import { blogPosts } from "../content/blog/constants";

/**
 * BlogPost component displays a single blog post with Markdown content
 */
export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get blog post metadata
  const post = id ? blogPosts.find((post) => post.id === id) : null;

  useEffect(() => {
    // If post doesn't exist, navigate back to blog list
    if (!post) {
      navigate("/blog");
      return;
    }

    // Fetch the markdown content
    const loadBlogPost = async () => {
      try {
        // Try multiple paths to find the blog post content
        const paths = [
          // Path 1: GitHub Pages deployment path with BASE_URL
          `${import.meta.env.BASE_URL || ""}/content/blog/${id}.md`,
          // Path 2: Development path
          `/src/content/blog/${id}.md`,
          // Path 3: Alternative GitHub Pages path
          `/content/blog/${id}.md`,
        ];

        let content = null;
        let lastError = null;

        // Try each path until one works
        for (const path of paths) {
          try {
            const response = await fetch(path);

            if (response.ok) {
              content = await response.text();
              break; // Exit the loop if successful
            }
          } catch (err) {
            lastError = err;
          }
        }

        if (content) {
          setContent(content);
          setLoading(false);
        } else {
          throw (
            lastError || new Error("Failed to load blog post from all paths")
          );
        }
      } catch (err) {
        setError("Failed to load blog post content. Please try again later.");
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [id, navigate, post]);

  // Handle loading state
  if (loading) {
    return (
      <ContentColumn
        width="100%"
        padding="40px"
        height="auto"
        minHeight="400px"
      >
        <Loader size="lg" />
      </ContentColumn>
    );
  }

  // Handle error state
  if (error || !post) {
    return (
      <ContentColumn
        width="100%"
        padding="40px"
        height="auto"
        minHeight="400px"
      >
        <Text color="red">{error || "Blog post not found"}</Text>
        <Button onClick={() => navigate("/blog")} mt="md">
          Back to Blog
        </Button>
      </ContentColumn>
    );
  }

  return (
    <ContentColumn
      width="60vw"
      padding="40px"
      height="auto"
      minHeight="auto"
      textAlign="left"
    >
      {/* Blog post header with image */}
      <Paper
        radius="md"
        className={classes.header}
        style={{
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${post.image})`,
        }}
      >
        <div className={classes.headerContent}>
          <Text className={classes.category} size="xs">
            {post.category}
          </Text>
          <Title className={classes.title} order={1}>
            {post.title}
          </Title>
        </div>
      </Paper>

      {/* Blog post content */}
      <Paper
        p="xl"
        radius="md"
        className={classes.content}
        style={{ textAlign: "left" }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom rendering for markdown elements
            h1: ({ node, ...props }) => <Title order={1} my="md" {...props} />,
            h2: ({ node, ...props }) => <Title order={2} my="md" {...props} />,
            h3: ({ node, ...props }) => <Title order={3} my="md" {...props} />,
            p: ({ node, ...props }) => <Text my="sm" {...props} />,
            img: ({ node, src, alt, ...props }) => (
              <div className={classes.imageWrapper}>
                <Image src={src} alt={alt} radius="md" my="lg" {...props} />
              </div>
            ),
            code: ({ className, children, ...props }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className={classes.inlineCode} {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <Paper
                  p="md"
                  radius="md"
                  className={classes.codeBlock}
                  withBorder
                >
                  <pre>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </Paper>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>

        <Button
          variant="outline"
          onClick={() => navigate("/blog")}
          mt="xl"
          className={classes.backButton}
        >
          Back to Blog
        </Button>
      </Paper>
    </ContentColumn>
  );
}
