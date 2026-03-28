import type { ComponentType, ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "@/AppRoutes";

interface AppContentProps {
  Router: ComponentType<{ children: ReactNode }>;
  queryClient: QueryClient;
}

export const createAppQueryClient = () => new QueryClient();

export const AppContent = ({ Router, queryClient }: AppContentProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AppRoutes />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

const clientQueryClient = createAppQueryClient();

const BrowserRouterWrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const App = () => (
  <HelmetProvider>
    <AppContent Router={BrowserRouterWrapper} queryClient={clientQueryClient} />
  </HelmetProvider>
);

export default App;
