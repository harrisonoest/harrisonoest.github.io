import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

function copyMarkdownPlugin() {
  return {
    name: "copy-markdown-files",
    writeBundle() {
      const contentDir = resolve(__dirname, "dist/content/blog");
      if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
      }

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

export default defineConfig({
  plugins: [react(), copyMarkdownPlugin()],
  server: {
    port: 5000,
  },
  base: "/",
});
