import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Blog.module.css";

interface BlogPostProps {
  image: string;
  title: string;
  category: string;
}

function BlogPost({ image, title, category }: BlogPostProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: "",
    title: "Blog Post One",
    category: "git",
  },
  {
    image: "",
    title: "Blog Post Two",
    category: "docker",
  },
];

export function Blog() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <BlogPost {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: 2, sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
