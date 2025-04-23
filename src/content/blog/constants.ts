export interface BlogPostData {
  id: string;
  image: string;
  title: string;
  category: string;
}

export const blogPosts: BlogPostData[] = [
  {
    id: "blog-post-one",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    title: "Getting Started with Git",
    category: "git",
  },
  {
    id: "blog-post-two",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop",
    title: "Getting Started with Docker",
    category: "docker",
  },
  // {
  //   id: "blog-post-three",
  //   image:
  //     "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop",
  //   title: "Blog Post Three",
  //   category: "git",
  // },
  // {
  //   id: "blog-post-four",
  //   image:
  //     "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1374&auto=format&fit=crop",
  //   title: "Blog Post Four",
  //   category: "docker",
  // },
];
