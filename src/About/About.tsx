// === Mantine ===
import { Container, Text } from "@mantine/core";
import classes from "./About.module.css";

export function About() {
  return (
    <div className={classes.about}>
      <Container className={classes.inner}>
        <Text size="xl">Coming Soon...</Text>
      </Container>
    </div>
  );
}
