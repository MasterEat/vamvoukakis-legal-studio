import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StaticRouter } from "react-router-dom/server";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  const queryClient = new QueryClient();

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
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
