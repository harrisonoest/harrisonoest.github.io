import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderSimple } from "./organisms/Header";
import { Footer } from "./organisms/Footer";

const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Blog = lazy(() => import("./pages/Blog").then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./organisms/BlogPost").then(m => ({ default: m.BlogPost })));
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const Resume = lazy(() => import("./pages/Resume").then(m => ({ default: m.Resume })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));

export default function App() {
  return (
    <BrowserRouter>
      <HeaderSimple />
      <main style={{ padding: '2rem 1rem', flex: 1 }}>
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem', color: 'var(--dimmed)' }}>Loading...</div>}>
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
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
