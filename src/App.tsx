import "./App.css";

// === Mantine ===
import { MantineProvider, AppShell } from "@mantine/core";
import { Global } from "@mantine/styles"; // Why: Mantine v7 exports Global from @mantine/styles, not @mantine/core
import { tokyoNightTheme, tokyoNightGlobalStyles } from "./theme";
// Why: Mantine v7 requires custom global styles to be rendered with the <Global /> component, not as a prop.

// === React ===
import { BrowserRouter, Route, Routes } from "react-router-dom";

// === Components ===
import { HeaderSimple } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./organisms/BlogPost";

export default function App() {
  return (
    <MantineProvider theme={tokyoNightTheme} defaultColorScheme="dark">
      {/* Why: Custom global styles must be rendered as a child using <Global /> in Mantine v7 */}
      <Global styles={tokyoNightGlobalStyles} />
      <BrowserRouter>
        <AppShell>
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
