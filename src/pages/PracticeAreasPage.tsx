import { Link } from "react-router-dom";
import { ArrowRight, Scale, Briefcase, Building2, Home } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const areas = [
  { icon: Scale, title: "Αστικό Δίκαιο", desc: "Οικογενειακό, κληρονομικό, ενοχικό και εμπράγματο δίκαιο. Εξατομικευμένη προσέγγιση σε κάθε υπόθεση ιδιωτικού δικαίου.", path: "/astiko-dikaio" },
  { icon: Briefcase, title: "Ποινικό Δίκαιο", desc: "Ποινική υπεράσπιση και νομική εκπροσώπηση σε υποθέσεις κάθε βαθμού. Προστασία των δικαιωμάτων σας σε κάθε στάδιο.", path: "/poiniko-dikaio" },
  { icon: Building2, title: "Εμπορικό Δίκαιο", desc: "Εταιρικό δίκαιο, εμπορικές συμβάσεις, αξιόγραφα και νομική υποστήριξη επιχειρήσεων. Στρατηγικές λύσεις για κάθε επιχειρηματική ανάγκη.", path: "/emporiko-dikaio" },
  { icon: Home, title: "Δίκαιο Ακινήτων", desc: "Αγοραπωλησίες, μισθώσεις, κτηματολόγιο, πολεοδομικά ζητήματα και διαχείριση ακίνητης περιουσίας.", path: "/dikaio-akiniton" },
];

export default function PracticeAreasPage() {
  return (
    <Layout>
      <SEOHead title="Τομείς Ειδίκευσης" description="Εξειδικευμένες νομικές υπηρεσίες σε Αστικό, Ποινικό, Εμπορικό Δίκαιο και Δίκαιο Ακινήτων. Δικηγορικό Γραφείο Βαμβουκάκη." canonical="/tomeis-eidikefsis" hrefLangs={[{ lang: "el", href: "/tomeis-eidikefsis" }, { lang: "en", href: "/en/practice-areas" }, { lang: "de", href: "/de/rechtsgebiete" }]} />
      
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Τομείς Ειδίκευσης</h1>
            <p className="text-muted-foreground font-body leading-relaxed">
              Παρέχουμε ολοκληρωμένη νομική υποστήριξη σε τέσσερις βασικούς τομείς του δικαίου, 
              με εξειδίκευση, μεθοδικότητα και σεβασμό στις ανάγκες κάθε εντολέα.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {areas.map((area) => (
              <Link key={area.path} to={area.path} className="premium-card group">
                <area.icon size={28} className="text-accent mb-6" />
                <h2 className="font-heading text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">{area.title}</h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{area.desc}</p>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                  Περισσότερα <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
