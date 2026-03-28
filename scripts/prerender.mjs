import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const rootDir = process.cwd();
const clientOutDir = path.join(rootDir, "dist");
const ssrOutDir = path.join(rootDir, ".ssr-temp");

function findServerEntryFile(directory) {
  const entries = readdirSync(directory, { withFileTypes: true });
  const serverEntry = entries.find((entry) => entry.isFile() && /^entry-server\.(m?js|cjs)$/.test(entry.name));

  if (!serverEntry) {
    throw new Error(`Unable to locate SSR entry output in ${directory}.`);
  }

  return path.join(directory, serverEntry.name);
}

function getOutputPath(route) {
  if (route === "/") {
    return path.join(clientOutDir, "index.html");
  }

  return path.join(clientOutDir, route.replace(/^\//, ""), "index.html");
}

function injectPrerenderedHtml(template, { appHtml, headTags, htmlAttributes }) {
  const htmlOpenTag = htmlAttributes ? `<html ${htmlAttributes}>` : "<html>";
  const withHtmlAttrs = template.replace(/<html[^>]*>/i, htmlOpenTag);

  if (withHtmlAttrs === template) {
    throw new Error("Failed to locate <html> tag in template.");
  }

  const withHead = withHtmlAttrs.replace(/<\/head>/i, `${headTags}</head>`);

  if (withHead === withHtmlAttrs) {
    throw new Error("Failed to locate </head> in template.");
  }

  const withApp = withHead.replace(/<div id="root"><\/div>/i, `<div id="root">${appHtml}</div>`);

  if (withApp === withHead) {
    throw new Error("Failed to locate SSR root placeholder (<div id=\"root\"></div>) in template.");
  }

  return withApp;
}

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

const serverEntryFile = findServerEntryFile(ssrOutDir);
const serverEntryModule = await import(pathToFileURL(serverEntryFile).href);

const { render, prerenderRoutes } = serverEntryModule;

if (typeof render !== "function") {
  throw new Error("SSR entry must export a render(url) function.");
}

if (!Array.isArray(prerenderRoutes) || prerenderRoutes.length === 0) {
  throw new Error("SSR entry must export a non-empty prerenderRoutes array.");
}

const template = readFileSync(path.join(clientOutDir, "index.html"), "utf-8");

for (const route of prerenderRoutes) {
  const renderedRoute = render(route);
  const html = injectPrerenderedHtml(template, renderedRoute);

  const outputPath = getOutputPath(route);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html, "utf-8");
}

const reportPath = path.join(clientOutDir, "prerendered-routes.json");
writeFileSync(reportPath, JSON.stringify(prerenderRoutes, null, 2), "utf-8");

rmSync(ssrOutDir, { recursive: true, force: true });
console.log(`Prerendered ${prerenderRoutes.length} routes.`);
