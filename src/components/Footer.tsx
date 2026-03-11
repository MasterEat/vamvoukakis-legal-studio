import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactDetails } from "@/lib/contactSeo";

export default function Footer() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : location.pathname.startsWith("/de") ? "de" : "el";

  const t = {
    el: {
      firm: "Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ",
      desc: "Εξειδικευμένες νομικές υπηρεσίες στην Αθήνα, στην Αττική και στην ευρύτερη περιοχή Αθηνών.",
      quickLinks: "Σύνδεσμοι",
      contact: "Επικοινωνία",
      legal: "Νομικά",
      home: "Αρχική",
      firm2: "Το Γραφείο",
      profile: "Βιογραφικό",
      areas: "Τομείς Ειδίκευσης",
      contactPage: "Επικοινωνία",
      privacy: "Πολιτική Απορρήτου",
      cookies: "Cookies",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      address: "Πειραιώς 6, Ομόνοια, ΤΚ 10434, Αθήνα",
      links: [
        { label: "Αρχική", path: "/" },
        { label: "Το Γραφείο", path: "/to-grafeio" },
        { label: "Βιογραφικό", path: "/viografiko" },
        { label: "Τομείς Ειδίκευσης", path: "/tomeis-eidikefsis" },
        { label: "Επικοινωνία", path: "/epikoinonia" },
      ],
      legalLinks: [
        { label: "Πολιτική Απορρήτου", path: "/politiki-aporritou" },
        { label: "Cookies", path: "/cookies" },
      ],
    },
    en: {
      firm: "Vamvoukakis Law Office",
      desc: "Specialized legal services in Athens, Attica and the wider Athens area.",
      quickLinks: "Quick Links",
      contact: "Contact",
      legal: "Legal",
      home: "Home",
      firm2: "The Firm",
      profile: "Profile",
      areas: "Practice Areas",
      contactPage: "Contact",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      rights: "All rights reserved.",
      address: "Pireos 6, Omonoia, 10434 Athens",
      links: [
        { label: "Home", path: "/en" },
        { label: "The Firm", path: "/en/the-firm" },
        { label: "Profile", path: "/en/profile" },
        { label: "Practice Areas", path: "/en/practice-areas" },
        { label: "Contact", path: "/en/contact" },
      ],
      legalLinks: [
        { label: "Privacy Policy", path: "/politiki-aporritou" },
        { label: "Cookies", path: "/cookies" },
      ],
    },
    de: {
      firm: "Kanzlei Vamvoukakis",
      desc: "Spezialisierte Rechtsdienstleistungen in Athen, Attika und dem Großraum Athen.",
      quickLinks: "Links",
      contact: "Kontakt",
      legal: "Rechtliches",
      home: "Startseite",
      firm2: "Kanzlei",
      profile: "Profil",
      areas: "Rechtsgebiete",
      contactPage: "Kontakt",
      privacy: "Datenschutz",
      cookies: "Cookies",
      rights: "Alle Rechte vorbehalten.",
      address: "Pireos 6, Omonoia, 10434 Athen",
      links: [
        { label: "Startseite", path: "/de" },
        { label: "Kanzlei", path: "/de/kanzlei" },
        { label: "Profil", path: "/de/profil" },
        { label: "Rechtsgebiete", path: "/de/rechtsgebiete" },
        { label: "Kontakt", path: "/de/kontakt" },
      ],
      legalLinks: [
        { label: "Datenschutz", path: "/politiki-aporritou" },
        { label: "Cookies", path: "/cookies" },
      ],
    },
  };

  const c = t[lang];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg mb-4">{c.firm}</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-body">{c.desc}</p>
            <div className="flex items-center gap-3 mt-6">
              {(["el", "en", "de"] as const).map((l) => (
                <Link
                  key={l}
                  to={l === "el" ? "/" : `/${l}`}
                  className={`text-[10px] tracking-widest uppercase font-body transition-colors hover:text-accent ${
                    lang === l ? "text-accent" : "text-primary-foreground/40"
                  }`}
                >
                  {l === "el" ? "ΕΛ" : l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-body text-accent mb-6">{c.quickLinks}</h4>
            <ul className="space-y-3">
              {c.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-body text-accent mb-6">{c.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/60 font-body">{c.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a href={contactDetails.telUri} className="text-sm text-primary-foreground/60 font-body hover:text-accent transition-colors">{contactDetails.telephone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a href={contactDetails.emailUri} className="text-sm text-primary-foreground/60 font-body hover:text-accent transition-colors break-all">{contactDetails.email}</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-body text-accent mb-6">{c.legal}</h4>
            <ul className="space-y-3">
              {c.legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 text-center font-body">
            © {new Date().getFullYear()} {c.firm}. {c.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
