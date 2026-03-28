import type { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";

import { AppContent, createAppQueryClient } from "@/App";
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

  const StaticRouterWrapper = ({ children }: { children: ReactNode }) => (
    <StaticRouter location={url}>{children}</StaticRouter>
  );

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <AppContent Router={StaticRouterWrapper} queryClient={queryClient} />
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
