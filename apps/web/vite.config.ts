import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "path";

export default defineConfig({
  root: __dirname, // 👈 IMPORTANT
  plugins: [react()],
  build: {
    outDir: "../../dist/apps/web",
    emptyOutDir: true
  }
});
