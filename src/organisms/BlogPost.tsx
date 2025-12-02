import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ContentColumn } from "../molecules/ContentColumn";
import { blogPosts } from "../content/blog/constants";
import "./BlogPost.css";

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const post = id ? blogPosts.find((post) => post.id === id) : null;

  useEffect(() => {
    if (!post) {
      navigate("/blog");
      return;
    }

    const loadBlogPost = async () => {
      try {
        const paths = [
          `${import.meta.env.BASE_URL || ""}/content/blog/${id}.md`,
          `/src/content/blog/${id}.md`,
          `/content/blog/${id}.md`,
        ];

        let content = null;
        let lastError = null;

        for (const path of paths) {
          try {
            const response = await fetch(path);
            if (response.ok) {
              content = await response.text();
              break;
            }
          } catch (err) {
            lastError = err;
          }
        }

        if (content) {
          setContent(content);
          setLoading(false);
        } else {
          throw lastError || new Error("Failed to load blog post from all paths");
        }
      } catch (err) {
        setError("Failed to load blog post content. Please try again later.");
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [id, navigate, post]);

  if (loading) {
    return (
      <ContentColumn>
        <div className="loader">Loading...</div>
      </ContentColumn>
    );
  }

  if (error || !post) {
    return (
      <ContentColumn>
        <p style={{ color: 'var(--red)' }}>{error || "Blog post not found"}</p>
        <button onClick={() => navigate("/blog")}>Back to Blog</button>
      </ContentColumn>
    );
  }

  return (
    <ContentColumn style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div
        className="blog-post-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${post.image})`,
        }}
      >
        <span className="blog-post-category">{post.category}</span>
        <h1 className="blog-post-title">{post.title}</h1>
      </div>

      <article className="blog-post-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => <h1 {...props} />,
            h2: ({ ...props }) => <h2 {...props} />,
            h3: ({ ...props }) => <h3 {...props} />,
            p: ({ ...props }) => <p {...props} />,
            img: ({ src, alt, ...props }) => (
              <img src={src} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px' }} {...props} />
            ),
            code: ({ className, children, ...props }) => {
              const isInline = !className;
              if (isInline) {
                return <code className="inline-code" {...props}>{children}</code>;
              }
              return (
                <pre className="code-block">
                  <code className={className} {...props}>{children}</code>
                </pre>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>

        <button onClick={() => navigate("/blog")} className="back-button">
          Back to Blog
        </button>
      </article>
    </ContentColumn>
  );
}
