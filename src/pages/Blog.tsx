import { ContentColumn } from "../molecules/ContentColumn";
import { BlogPostCard } from "../organisms/BlogPostCard";
import { blogPosts } from "../content/blog/constants";
import "./Blog.css";

export function Blog() {
  return (
    <div className="blog-container">
      <ContentColumn>
        <h1>Latest Blog Posts</h1>
        <p>Just some random thoughts and things I find interesting!</p>
      </ContentColumn>

      <ContentColumn>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </ContentColumn>
    </div>
  );
}
