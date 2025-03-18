import "./App.css";

// === Mantine ===
import { MantineProvider, createTheme, AppShell, Text } from "@mantine/core";

// === React ===
import { BrowserRouter, Route, Routes } from "react-router-dom";

// === Components ===
import { HeaderSimple } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { Blog } from "./Blog/Blog";

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
        <AppShell.Main>
          {/* <Text size="xl">Coming Soon...</Text> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
        </AppShell.Main>
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
