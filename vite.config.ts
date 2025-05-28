import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// Function to copy markdown files during build
function copyMarkdownPlugin() {
  return {
    name: "copy-markdown-files",
    writeBundle() {
      // Create content directory in build output if it doesn't exist
      const contentDir = resolve(__dirname, "dist/content/blog");
      if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
      }

      // Copy all markdown files from src/content/blog to dist/content/blog
      const srcDir = resolve(__dirname, "src/content/blog");
      const files = fs.readdirSync(srcDir);

      files.forEach((file) => {
        if (file.endsWith(".md")) {
          fs.copyFileSync(resolve(srcDir, file), resolve(contentDir, file));
          console.log(`Copied ${file} to build output`);
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyMarkdownPlugin()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  // Ensure base URL is correctly set for GitHub Pages
  base: "/",
});
