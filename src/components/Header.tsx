import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItemsEl = [
  { label: "Αρχική", path: "/" },
  { label: "Το Γραφείο", path: "/to-grafeio" },
  { label: "Βιογραφικό", path: "/viografiko" },
  { label: "Τομείς Ειδίκευσης", path: "/tomeis-eidikefsis" },
  { label: "Αποφάσεις", path: "/apofaseis" },
  { label: "Άρθρα", path: "/arthra" },
  { label: "Επικοινωνία", path: "/epikoinonia" },
];

const navItemsEn = [
  { label: "Home", path: "/en" },
  { label: "The Firm", path: "/en/the-firm" },
  { label: "Profile", path: "/en/profile" },
  { label: "Practice Areas", path: "/en/practice-areas" },
  { label: "Contact", path: "/en/contact" },
];

const navItemsDe = [
  { label: "Startseite", path: "/de" },
  { label: "Kanzlei", path: "/de/kanzlei" },
  { label: "Profil", path: "/de/profil" },
  { label: "Rechtsgebiete", path: "/de/rechtsgebiete" },
  { label: "Kontakt", path: "/de/kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const lang = location.pathname.startsWith("/en") ? "en" : location.pathname.startsWith("/de") ? "de" : "el";
  const navItems = lang === "en" ? navItemsEn : lang === "de" ? navItemsDe : navItemsEl;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const langSwitchPaths: Record<string, string> = {
    el: "/",
    en: "/en",
    de: "/de",
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to={lang === "en" ? "/en" : lang === "de" ? "/de" : "/"} className="flex flex-col">
          <span className="font-heading text-sm md:text-base font-semibold text-foreground tracking-wide">
            {lang === "en" ? "Vamvoukakis Law Office" : lang === "de" ? "Kanzlei Vamvoukakis" : "Δ.Γ. Βαμβουκάκη"}
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase font-body">
            {lang === "en" ? "Attorneys at Law" : lang === "de" ? "Rechtsanwälte" : "Δικηγορικό Γραφείο"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-widest uppercase font-body transition-colors duration-200 hover:text-accent ${
                location.pathname === item.path ? "text-accent" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
            {(["el", "en", "de"] as const).map((l) => (
              <Link
                key={l}
                to={langSwitchPaths[l]}
                className={`text-[10px] tracking-widest uppercase font-body transition-colors hover:text-accent ${
                  lang === l ? "text-accent font-semibold" : "text-foreground/50"
                }`}
              >
                {l === "el" ? "ΕΛ" : l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="container-wide py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-widest uppercase font-body transition-colors hover:text-accent ${
                  location.pathname === item.path ? "text-accent" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <Globe size={14} className="text-muted-foreground" />
              {(["el", "en", "de"] as const).map((l) => (
                <Link
                  key={l}
                  to={langSwitchPaths[l]}
                  className={`text-xs tracking-widest uppercase font-body transition-colors hover:text-accent ${
                    lang === l ? "text-accent font-semibold" : "text-foreground/50"
                  }`}
                >
                  {l === "el" ? "Ελληνικά" : l === "en" ? "English" : "Deutsch"}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
