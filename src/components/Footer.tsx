import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { contactDetails } from "@/lib/contactSeo";

export default function Footer() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : location.pathname.startsWith("/de") ? "de" : "el";

  const t = {
    el: {
      firm: "Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ",
      quickLinks: "Σύνδεσμοι",
      contact: "Επικοινωνία",
      legal: "Νομικά",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      labels: {
        address: "Διεύθυνση",
        phone: "Τηλέφωνο",
        email: "Email",
        officeHours: "Ώρες Λειτουργίας",
      },
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
      quickLinks: "Quick Links",
      contact: "Contact",
      legal: "Legal",
      rights: "All rights reserved.",
      labels: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        officeHours: "Office Hours",
      },
      links: [
        { label: "Home", path: "/en" },
        { label: "The Firm", path: "/en/the-firm" },
        { label: "Profile", path: "/en/profile" },
        { label: "Practice Areas", path: "/en/practice-areas" },
        { label: "Contact", path: "/en/contact" },
      ],
      legalLinks: [
        { label: "Privacy Policy", path: "/en/privacy-policy" },
        { label: "Cookies", path: "/cookies" },
      ],
    },
    de: {
      firm: "Kanzlei Vamvoukakis",
      quickLinks: "Links",
      contact: "Kontakt",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
      labels: {
        address: "Adresse",
        phone: "Telefon",
        email: "E-Mail",
        officeHours: "Öffnungszeiten",
      },
      links: [
        { label: "Startseite", path: "/de" },
        { label: "Kanzlei", path: "/de/kanzlei" },
        { label: "Profil", path: "/de/profil" },
        { label: "Rechtsgebiete", path: "/de/rechtsgebiete" },
        { label: "Kontakt", path: "/de/kontakt" },
      ],
      legalLinks: [
        { label: "Datenschutz", path: "/de/datenschutzerklarung" },
        { label: "Cookies", path: "/cookies" },
      ],
    },
  };

  const c = t[lang];

  return (
    <footer id="site-footer" className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg mb-4">{c.firm}</h3>
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

          <div>
            <h4 className="text-xs tracking-widest uppercase font-body text-accent mb-6">{c.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-body text-primary-foreground/40 mb-1">{c.labels.address}</p>
                  <span className="text-sm text-primary-foreground/70 font-body">{contactDetails.addressLine}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-body text-primary-foreground/40 mb-1">{c.labels.phone}</p>
                  <a href={contactDetails.telUri} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body">
                    {contactDetails.telephone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-body text-primary-foreground/40 mb-1">{c.labels.email}</p>
                  <a href={contactDetails.emailUri} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body break-all">
                    {contactDetails.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] tracking-widest uppercase font-body text-primary-foreground/40 mb-1">{c.labels.officeHours}</p>
                  {contactDetails.officeHours[lang].map((line) => (
                    <p key={line} className="text-sm text-primary-foreground/70 font-body">{line}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>

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

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 text-center font-body">
            © {new Date().getFullYear()} {c.firm}. {c.rights} powered by MasterEat
          </p>
        </div>
      </div>
    </footer>
  );
}
