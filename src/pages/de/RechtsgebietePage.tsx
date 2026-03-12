import { Scale, Briefcase, Building2, Home } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const areas = [
  { icon: Scale, title: "Zivilrecht", desc: "Familien-, Erb-, Schuld- und Sachenrecht. Personalisierter Ansatz für jede privatrechtliche Angelegenheit." },
  { icon: Briefcase, title: "Strafrecht", desc: "Strafverteidigung und rechtliche Vertretung in Strafsachen jeder Instanz." },
  { icon: Building2, title: "Handelsrecht", desc: "Gesellschaftsrecht, Handelsverträge und rechtliche Unterstützung für Unternehmen." },
  { icon: Home, title: "Immobilienrecht", desc: "Kauf und Verkauf, Mietrecht, Grundbuch und Immobilienverwaltung." },
];

export default function RechtsgebietePage() {
  return (
    <Layout>
      <SEOHead title="Rechtsgebiete" description="Spezialisierte Rechtsdienstleistungen in Zivilrecht, Strafrecht, Handelsrecht und Immobilienrecht. Kanzlei Vamvoukakis." canonical="/de/rechtsgebiete" lang="de" hrefLangs={[{ lang: "el", href: "/tomeis-eidikefsis" }, { lang: "en", href: "/en/practice-areas" }, { lang: "de", href: "/de/rechtsgebiete" }]} />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Rechtsgebiete</h1>
            <p className="text-muted-foreground font-body leading-relaxed">Umfassende rechtliche Unterstützung in vier Kernbereichen des Rechts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {areas.map((area) => (
              <div key={area.title} className="premium-card">
                <area.icon size={28} className="text-accent mb-6" />
                <h2 className="font-heading text-xl md:text-2xl mb-3">{area.title}</h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
