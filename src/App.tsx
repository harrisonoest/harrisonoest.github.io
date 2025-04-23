import "./App.css";

// === Mantine ===
import { MantineProvider, createTheme, AppShell } from "@mantine/core";

// === React ===
import { BrowserRouter, Route, Routes } from "react-router-dom";

// === Components ===
import { HeaderSimple } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./organisms/BlogPost";

const theme = createTheme({
  fontFamily: "Fira Sans, sans-serif",
  primaryColor: "blue",
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <AppShell
          styles={{
            main: {
              background: "var(--mantine-color-dark-8)",
              height: "100%",
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
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="*" element={<About />} />
            </Routes>
          </AppShell.Main>
          <AppShell.Footer>
            <Footer />
          </AppShell.Footer>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}
