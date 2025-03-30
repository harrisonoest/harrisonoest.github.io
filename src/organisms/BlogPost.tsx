// === React ===
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// === Markdown ===
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// === Mantine ===
import { Button, Image, Loader, Paper, Text, Title } from '@mantine/core';

// === Components ===
import { ContentColumn } from '../molecules/ContentColumn';

// === Styles ===
import classes from './BlogPost.module.css';

// Blog post metadata interface
interface BlogPostMeta {
  id: string;
  title: string;
  category: string;
  image: string;
}

// Sample blog post metadata - in a real app, this would come from a database or API
const blogPosts: Record<string, BlogPostMeta> = {
  'blog-post-one': {
    id: 'blog-post-one',
    title: 'Blog Post One',
    category: 'git',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop'
  },
  'blog-post-two': {
    id: 'blog-post-two',
    title: 'Blog Post Two',
    category: 'docker',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop'
  },
  'blog-post-three': {
    id: 'blog-post-three',
    title: 'Blog Post Three',
    category: 'git',
    image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop'
  },
  'blog-post-four': {
    id: 'blog-post-four',
    title: 'Blog Post Four',
    category: 'docker',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1374&auto=format&fit=crop'
  }
};

/**
 * BlogPost component displays a single blog post with Markdown content
 */
export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get blog post metadata
  const post = id ? blogPosts[id] : null;

  useEffect(() => {
    // If post doesn't exist, navigate back to blog list
    if (!post) {
      navigate('/blog');
      return;
    }

    // Fetch the markdown content
    fetch(`/src/content/blog/${id}.md`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load blog post');
        }
        return response.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post content');
        setLoading(false);
      });
  }, [id, navigate, post]);

  // Handle loading state
  if (loading) {
    return (
      <ContentColumn width="100%" padding="40px" height="auto" minHeight="400px">
        <Loader size="lg" />
      </ContentColumn>
    );
  }

  // Handle error state
  if (error || !post) {
    return (
      <ContentColumn width="100%" padding="40px" height="auto" minHeight="400px">
        <Text color="red">{error || 'Blog post not found'}</Text>
        <Button onClick={() => navigate('/blog')} mt="md">
          Back to Blog
        </Button>
      </ContentColumn>
    );
  }

  return (
    <ContentColumn
      width="100%"
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
      <Paper p="xl" radius="md" className={classes.content} style={{ textAlign: 'left' }}>
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
                return <code className={classes.inlineCode} {...props}>{children}</code>;
              }
              return (
                <Paper p="md" radius="md" className={classes.codeBlock} withBorder>
                  <pre>
                    <code className={className} {...props}>{children}</code>
                  </pre>
                </Paper>
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>

        <Button
          variant="outline"
          onClick={() => navigate('/blog')}
          mt="xl"
          className={classes.backButton}
        >
          Back to Blog
        </Button>
      </Paper>
    </ContentColumn>
  );
}
