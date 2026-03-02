import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves at https://<user>.github.io/<repo>/
// This base is injected via workflow: VITE_BASE=/<repo>/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});
