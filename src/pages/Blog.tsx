// === Mantine ===
import { Carousel } from "@mantine/carousel";
import { Button, Container, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Styles ===
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
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
      }}
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

// Sample placeholder images for blog posts
const data = [
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    title: "Blog Post One",
    category: "git",
  },
  {
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop",
    title: "Blog Post Two",
    category: "docker",
  },
  {
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop",
    title: "Blog Post Three",
    category: "git",
  },
  {
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1374&auto=format&fit=crop",
    title: "Blog Post Four",
    category: "docker",
  },
];

export function Blog() {
  const theme = useMantineTheme();
  // Create responsive UI elements
  useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  // Create slides from data
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <BlogPost {...item} />
    </Carousel.Slide>
  ));

  return (
    <ContentColumn width="100%" padding="20px" height="10px">
      {/* 
        The Carousel component from @mantine/carousel displays slides horizontally
        Configure with appropriate width and spacing
      */}
      <Carousel
        withControls
        withIndicators
        height={400}
        slideSize="50%"
        slideGap="xs"
        loop
        align="start"
        slidesToScroll={1}
        styles={{
          control: {
            backgroundColor: theme.colors.dark[6],
            color: 'white',
            border: 'none',
            '&:hover': {
              backgroundColor: theme.colors.dark[4],
            },
          },
          indicator: {
            width: 12,
            height: 4,
            transition: 'width 250ms ease',
            backgroundColor: theme.colors.dark[4],
            '&[data-active="true"]': {
              width: 40,
              backgroundColor: theme.colors.blue[6],
            },
          },
        }}
      >
        {slides}
      </Carousel>
    </ContentColumn>
  );
}
