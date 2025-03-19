// === Mantine ===
import { Text } from "@mantine/core";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

export function About() {
  console.log('About component rendering');
  return (
    <ContentColumn>
      <Text size="xl" fw={700} >Coming soon...</Text>
    </ContentColumn>
  );
}
