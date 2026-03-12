import { Link } from "react-router-dom";
import { ArrowRight, Scale, Briefcase, Building2, Home } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const areas = [
  { icon: Scale, title: "Civil Law", desc: "Family, inheritance, contract and property law. Personalized approach to every private law matter." },
  { icon: Briefcase, title: "Criminal Law", desc: "Criminal defense and legal representation in cases at every level. Protection of your rights at every stage." },
  { icon: Building2, title: "Commercial Law", desc: "Corporate law, commercial contracts, negotiable instruments and business legal support." },
  { icon: Home, title: "Real Estate Law", desc: "Sales, leases, land registry, planning issues and real estate asset management." },
];

export default function PracticeAreasPageEn() {
  return (
    <Layout>
      <SEOHead title="Practice Areas" description="Specialized legal services in Civil, Criminal, Commercial and Real Estate Law. Vamvoukakis Law Office." canonical="/en/practice-areas" lang="en" hrefLangs={[{ lang: "el", href: "/tomeis-eidikefsis" }, { lang: "en", href: "/en/practice-areas" }, { lang: "de", href: "/de/rechtsgebiete" }]} />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Practice Areas</h1>
            <p className="text-muted-foreground font-body leading-relaxed">Comprehensive legal support in four core areas of law, with expertise, method and respect for every client's needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {areas.map((area) => (
              <div key={area.title} className="premium-card group">
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
