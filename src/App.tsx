import "./App.css";

// === Mantine ===
import { MantineProvider, createTheme, AppShell, Text } from "@mantine/core";

// === Components ===
import { HeaderSimple } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const theme = createTheme({
  fontFamily: "Fira Sans, sans-serif",
  primaryColor: "blue",
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        styles={{
          main: {
            background: "var(--mantine-color-dark-7)",
          },
          header: {
            background: "var(--mantine-color-dark-7)",
            borderBottom: "1px solid var(--mantine-color-dark-6)",
          },
          footer: {
            background: "var(--mantine-color-dark-7)",
            borderTop: "1px solid var(--mantine-color-dark-6)",
          },
        }}
      >
        <AppShell.Header>
          <HeaderSimple />
        </AppShell.Header>
        {/* <AppShell.Main> */}
        <Text size="xl">Coming Soon...</Text>
        {/* </AppShell.Main> */}
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
