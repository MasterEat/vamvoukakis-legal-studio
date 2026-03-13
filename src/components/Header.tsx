import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import logoSymbol from "../../images/logo-symbol.svg";

const navItemsEl = [
  { label: "Αρχική", path: "/" },
  { label: "Το Γραφείο", path: "/to-grafeio" },
  { label: "Βιογραφικό", path: "/viografiko" },
  { label: "Τομείς Ειδίκευσης", path: "/tomeis-eidikefsis" },
  { label: "Αποφάσεις", path: "/apofaseis" },
  { label: "Νομικά Άρθρα", path: "/arthra" },
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

const HOME_PATHS = ["/", "/en", "/de"];
const GLASS_HEADER_CLASS = "bg-[rgba(30,53,82,0.72)] backdrop-blur-xl border-b border-white/20 shadow-[0_12px_32px_rgba(9,16,28,0.28)]";

const BRANDING_BY_LANG = {
  el: {
    line1: "Εμμανουήλ Βαμβουκάκης",
    line2: "Δικηγορικό Γραφείο",
  },
  en: {
    line1: "Emmanouil Vamvoukakis",
    line2: "Law Office",
  },
  de: {
    line1: "Emmanouil Vamvoukakis",
    line2: "Rechtsanwaltskanzlei",
  },
} as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const lang = location.pathname.startsWith("/en") ? "en" : location.pathname.startsWith("/de") ? "de" : "el";
  const branding = BRANDING_BY_LANG[lang];
  const navItems = lang === "en" ? navItemsEn : lang === "de" ? navItemsDe : navItemsEl;
  const isHomePage = HOME_PATHS.includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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

  const headerIsTransparent = isHomePage && !scrolled && !isOpen;
  const useGlassStyle = !headerIsTransparent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
        headerIsTransparent
          ? "bg-transparent border-b border-transparent"
          : GLASS_HEADER_CLASS
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link
          to={lang === "en" ? "/en" : lang === "de" ? "/de" : "/"}
          aria-label="Δικηγορικό Γραφείο Εμμανουήλ Βαμβουκάκης"
          className="flex items-center gap-2 md:gap-3"
        >
          <img
            src={logoSymbol}
            alt="Δικηγορικό Γραφείο Εμμανουήλ Βαμβουκάκης"
            className="h-10 md:h-[42px] w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="flex flex-col">
            <span className={`font-heading text-sm md:text-base font-semibold tracking-wide transition-colors duration-500 ${headerIsTransparent ? "text-white" : "text-slate-100"}`}>
              {branding.line1}
            </span>
            <span
              className={`text-[10px] md:text-xs tracking-widest font-body transition-colors duration-500 ${
                headerIsTransparent ? "text-white/75" : "text-slate-200/80"
              }`}
            >
              {branding.line2}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-widest uppercase font-body transition-colors duration-300 hover:text-accent ${
                location.pathname === item.path
                  ? "text-accent"
                  : headerIsTransparent
                    ? "text-white/85"
                    : "text-slate-100/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className={`flex items-center gap-2 ml-4 pl-4 transition-colors duration-500 ${headerIsTransparent ? "border-l border-white/30" : "border-l border-white/25"}`}>
            {(["el", "en", "de"] as const).map((l) => (
              <Link
                key={l}
                to={langSwitchPaths[l]}
                className={`text-[10px] tracking-widest uppercase font-body transition-colors hover:text-accent ${
                  lang === l
                    ? "text-accent font-semibold"
                    : headerIsTransparent
                      ? "text-white/65"
                      : "text-slate-200/75"
                }`}
              >
                {l === "el" ? "ΕΛ" : l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${headerIsTransparent ? "text-white" : "text-slate-100"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className={`lg:hidden backdrop-blur-xl border-t ${useGlassStyle ? "bg-[rgba(18,36,59,0.88)] border-white/20" : "bg-transparent border-transparent"}`}>
          <nav className="container-wide py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-widest uppercase font-body transition-colors hover:text-accent ${
                  location.pathname === item.path ? "text-accent" : "text-white/85"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <Globe size={14} className="text-white/70" />
              {(["el", "en", "de"] as const).map((l) => (
                <Link
                  key={l}
                  to={langSwitchPaths[l]}
                  className={`text-xs tracking-widest uppercase font-body transition-colors hover:text-accent ${
                    lang === l ? "text-accent font-semibold" : "text-white/70"
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
