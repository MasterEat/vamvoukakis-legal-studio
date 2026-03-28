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
  const rootOpenPattern = /<div\b[^>]*\bid=(["'])root\1[^>]*>/i;

  if (!htmlTagPattern.test(template)) {
    throw new Error("Failed to locate <html> tag in template.");
  }

  if (!headClosePattern.test(template)) {
    throw new Error("Failed to locate </head> in template.");
  }

  const htmlOpenTag = htmlAttributes ? `<html ${htmlAttributes}>` : "<html>";
  const withHtmlAttrs = template.replace(htmlTagPattern, htmlOpenTag);
  const withHead = withHtmlAttrs.replace(headClosePattern, `${headTags}</head>`);
  const rootOpenMatch = rootOpenPattern.exec(withHead);

  if (!rootOpenMatch || rootOpenMatch.index < 0) {
    throw new Error("Failed to locate SSR root container opening marker (<div id=\"root\">) in template.");
  }

  const rootContentStart = rootOpenMatch.index + rootOpenMatch[0].length;
  let depth = 1;
  let cursor = rootContentStart;
  let rootCloseStart = -1;
  let rootEnd = -1;

  while (cursor < withHead.length) {
    const nextTagStart = withHead.indexOf("<", cursor);
    if (nextTagStart === -1) {
      break;
    }

    if (withHead.startsWith("<!--", nextTagStart)) {
      const commentEnd = withHead.indexOf("-->", nextTagStart + 4);
      cursor = commentEnd === -1 ? withHead.length : commentEnd + 3;
      continue;
    }

    if (withHead.startsWith("<![CDATA[", nextTagStart)) {
      const cdataEnd = withHead.indexOf("]]>", nextTagStart + 9);
      cursor = cdataEnd === -1 ? withHead.length : cdataEnd + 3;
      continue;
    }

    const tagEnd = withHead.indexOf(">", nextTagStart + 1);
    if (tagEnd === -1) {
      break;
    }

    const rawTag = withHead.slice(nextTagStart, tagEnd + 1);
    const tagNameMatch = /^<\/?\s*([a-zA-Z0-9:-]+)/.exec(rawTag);
    cursor = tagEnd + 1;

    if (!tagNameMatch) {
      continue;
    }

    const tagName = tagNameMatch[1].toLowerCase();

    if (tagName === "script" || tagName === "style" || tagName === "textarea" || tagName === "title") {
      const isClosingRawTextTag = /^<\s*\//.test(rawTag);
      const isSelfClosingRawTextTag = /\/\s*>$/.test(rawTag);
      if (!isClosingRawTextTag && !isSelfClosingRawTextTag) {
        const closeTag = `</${tagName}>`;
        const closeTagIndex = withHead.toLowerCase().indexOf(closeTag, cursor);
        if (closeTagIndex === -1) {
          break;
        }
        cursor = closeTagIndex + closeTag.length;
      }
      continue;
    }

    if (tagName !== "div") {
      continue;
    }

    const isClosingTag = /^<\s*\//.test(rawTag);
    const isSelfClosingTag = /\/\s*>$/.test(rawTag);

    if (isClosingTag) {
      depth -= 1;
    } else {
      if (isSelfClosingTag) {
        continue;
      }

      depth += 1;
    }

    if (depth === 0) {
      rootCloseStart = nextTagStart;
      rootEnd = tagEnd + 1;
      break;
    }
  }

  if (rootCloseStart === -1 || rootEnd === -1) {
    throw new Error("Failed to locate matching closing </div> for SSR root container.");
  }

  return `${withHead.slice(0, rootContentStart)}${appHtml}${withHead.slice(rootCloseStart)}`;
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
  const renderedRoute = await render(route);
  const appHtml = typeof renderedRoute?.appHtml === "string" ? renderedRoute.appHtml : "";
  const appHtmlLength = appHtml.length;
  const headTagsLength = renderedRoute?.headTags?.trim()?.length ?? 0;
  const html = injectPrerenderedHtml(template, { ...renderedRoute, appHtml });
  const hasMainCloseInApp = appHtml.includes("</main>");
  const hasFooterCloseInApp = appHtml.includes("</footer>");
  const hasMainCloseInOutput = html.includes("</main>");
  const hasFooterCloseInOutput = html.includes("</footer>");

  const outputPath = getOutputPath(route);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html, "utf-8");

  const relativeOutputPath = path.relative(rootDir, outputPath);
  generatedFiles.push(relativeOutputPath);

  console.log(
    `[prerender] route=${route} appHtmlNonEmpty=${appHtmlLength > 0} appHtmlLength=${appHtmlLength} finalHtmlLength=${html.length} headTagsNonEmpty=${headTagsLength > 0} headTagsLength=${headTagsLength} hasMainClosingTag=${hasMainCloseInOutput} hasFooterClosingTag=${hasFooterCloseInOutput} appHadMainClosingTag=${hasMainCloseInApp} appHadFooterClosingTag=${hasFooterCloseInApp} output=${relativeOutputPath}`,
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
