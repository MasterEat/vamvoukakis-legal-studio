import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import { QueryClientProvider } from "@tanstack/react-query";

import { createAppQueryClient } from "@/App";
import AppRoutes from "@/AppRoutes";
import { prerenderRoutes } from "@/lib/routeManifest";

interface HelmetContext {
  helmet?: {
    htmlAttributes: { toString: () => string };
    title: { toString: () => string };
    meta: { toString: () => string };
    link: { toString: () => string };
    script: { toString: () => string };
  };
}

export function render(url: string) {
  const helmetContext: HelmetContext = {};
  const queryClient = createAppQueryClient();

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;

  return {
    appHtml,
    headTags: `${helmet?.title.toString() ?? ""}${helmet?.meta.toString() ?? ""}${helmet?.link.toString() ?? ""}${helmet?.script.toString() ?? ""}`,
    htmlAttributes: helmet?.htmlAttributes.toString() ?? "",
  };
}

export { prerenderRoutes };
