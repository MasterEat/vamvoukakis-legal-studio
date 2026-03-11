import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const HOME_PATHS = ["/", "/en", "/de"];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = HOME_PATHS.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${isHomePage ? "pt-0" : "pt-16 md:pt-20"}`}>{children}</main>
      <Footer />
    </div>
  );
}
