import { Route, Routes } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import { appRoutes } from "@/lib/routeManifest";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {appRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
