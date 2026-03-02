import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const index = path.join(dist, "index.html");
const notFound = path.join(dist, "404.html");

if (fs.existsSync(index)) {
  fs.copyFileSync(index, notFound);
  console.log("Created dist/404.html for GitHub Pages SPA routing.");
} else {
  console.warn("dist/index.html not found; skipping 404.html creation.");
}
