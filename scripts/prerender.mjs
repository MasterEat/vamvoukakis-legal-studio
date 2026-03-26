import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const rootDir = process.cwd();
const clientOutDir = path.join(rootDir, "dist");
const ssrOutDir = path.join(rootDir, ".ssr-temp");

if (existsSync(ssrOutDir)) {
  rmSync(ssrOutDir, { recursive: true, force: true });
}

await build({
  configFile: path.join(rootDir, "vite.config.ts"),
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

await build({
  configFile: path.join(rootDir, "vite.config.ts"),
  build: {
    ssr: "src/entry-server.tsx",
    outDir: ".ssr-temp",
    emptyOutDir: true,
  },
});

const { render, prerenderRoutes } = await import(pathToFileURL(path.join(ssrOutDir, "entry-server.mjs")).href);
const routes = prerenderRoutes;

const template = readFileSync(path.join(clientOutDir, "index.html"), "utf-8");

for (const route of routes) {
  const { appHtml, headTags, htmlAttributes } = render(route);

  const htmlWithHead = template
    .replace(/<html[^>]*>/, `<html${htmlAttributes ? ` ${htmlAttributes}` : ""}>`)
    .replace("<div id=\"root\"></div>", `<div id=\"root\">${appHtml}</div>`)
    .replace("</head>", `${headTags}</head>`);

  const outputPath = route === "/"
    ? path.join(clientOutDir, "index.html")
    : path.join(clientOutDir, route.replace(/^\//, ""), "index.html");

  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, htmlWithHead, "utf-8");
}

const reportPath = path.join(clientOutDir, "prerendered-routes.json");
writeFileSync(reportPath, JSON.stringify(routes, null, 2), "utf-8");

rmSync(ssrOutDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes.`);
