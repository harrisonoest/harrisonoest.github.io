import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderSimple } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./organisms/BlogPost";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderSimple />
      <main style={{ padding: '2rem 1rem', flex: 1 }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
