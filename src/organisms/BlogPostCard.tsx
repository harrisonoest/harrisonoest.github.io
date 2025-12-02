import { useNavigate } from "react-router-dom";
import "./BlogPostCard.css";

interface BlogPostCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
}

export function BlogPostCard({ id, image, title, category }: BlogPostCardProps) {
  const navigate = useNavigate();

  return (
    <article className="blog-card">
      <div className="blog-card-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="blog-card-content">
        <span className="blog-card-category">#{category}</span>
        <h3 className="blog-card-title">{title}</h3>
        <button onClick={() => navigate(`/blog/${id}`)} className="blog-card-button">
          Read Article
        </button>
      </div>
    </article>
  );
}
