export interface BlogPostData {
  id: string;
  image: string;
  title: string;
  category: string;
}

export const blogPosts: BlogPostData[] = [
  {
    id: "blog-basic-sql-commands",
    image:
      "https://images.unsplash.com/photo-1662026911591-335639b11db6?q=80&w=1470&auto=format&fit=crop",
    title: "Basic SQL Commands",
    category: "sql",
  },
  {
    id: "blog-getting-started-with-docker",
    image:
      "https://www.docker.com/app/uploads/2023/08/logo-guide-logos-1.svg",
    title: "Getting Started with Docker",
    category: "docker",
  },
  {
    id: "blog-git-commands",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1470&auto=format&fit=crop",
    title: "How to Use Git",
    category: "git",
  },
  // {
  //   id: "blog-post-four",
  //   image:
  //     "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1374&auto=format&fit=crop",
  //   title: "Blog Post Four",
  //   category: "docker",
  // },
];
