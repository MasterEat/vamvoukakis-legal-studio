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
  const htmlTagPattern = /<html[^>]*>/i;
  const headClosePattern = /<\/head>/i;
  const rootOpenMarker = '<div id="root">';
  const divTagPattern = /<\/?div\b[^>]*>/gi;

  if (!htmlTagPattern.test(template)) {
    throw new Error("Failed to locate <html> tag in template.");
  }

  if (!headClosePattern.test(template)) {
    throw new Error("Failed to locate </head> in template.");
  }

  const htmlOpenTag = htmlAttributes ? `<html ${htmlAttributes}>` : "<html>";
  const withHtmlAttrs = template.replace(htmlTagPattern, htmlOpenTag);
  const withHead = withHtmlAttrs.replace(headClosePattern, `${headTags}</head>`);
  const rootStart = withHead.indexOf(rootOpenMarker);

  if (rootStart === -1) {
    throw new Error("Failed to locate SSR root container opening marker (<div id=\"root\">) in template.");
  }

  const rootContentStart = rootStart + rootOpenMarker.length;
  divTagPattern.lastIndex = rootContentStart;

  let depth = 1;
  let rootEnd = -1;
  let match;

  while ((match = divTagPattern.exec(withHead)) !== null) {
    if (match[0].startsWith("</")) {
      depth -= 1;
    } else {
      depth += 1;
    }

    if (depth === 0) {
      rootEnd = match.index + match[0].length;
      break;
    }
  }

  if (rootEnd === -1) {
    throw new Error("Failed to locate matching closing </div> for SSR root container.");
  }

  return `${withHead.slice(0, rootStart)}<div id="root">${appHtml}</div>${withHead.slice(rootEnd)}`;
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
const generatedFiles = [];

console.log(`[prerender] Resolved prerenderRoutes (${prerenderRoutes.length}):`);
console.log(JSON.stringify(prerenderRoutes, null, 2));

for (const route of prerenderRoutes) {
  const renderedRoute = render(route);
  const appHtmlLength = renderedRoute?.appHtml?.trim()?.length ?? 0;
  const headTagsLength = renderedRoute?.headTags?.trim()?.length ?? 0;
  const html = injectPrerenderedHtml(template, renderedRoute);

  const outputPath = getOutputPath(route);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html, "utf-8");

  const relativeOutputPath = path.relative(rootDir, outputPath);
  generatedFiles.push(relativeOutputPath);

  console.log(
    `[prerender] route=${route} appHtmlNonEmpty=${appHtmlLength > 0} appHtmlLength=${appHtmlLength} headTagsNonEmpty=${headTagsLength > 0} headTagsLength=${headTagsLength} output=${relativeOutputPath}`,
  );
}

const reportPath = path.join(clientOutDir, "prerendered-routes.json");
writeFileSync(reportPath, JSON.stringify(prerenderRoutes, null, 2), "utf-8");

rmSync(ssrOutDir, { recursive: true, force: true });
console.log(`[prerender] SUCCESS: Prerendered ${prerenderRoutes.length} routes.`);
console.log("[prerender] Generated route files:");
for (const filePath of generatedFiles) {
  console.log(`- ${filePath}`);
}
