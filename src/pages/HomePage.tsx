import { Link } from "react-router-dom";
import { ArrowRight, Scale, Building2, Briefcase, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-law-office.jpg";
import portraitImg from "@/assets/lawyer-portrait.jpg";

const practiceAreas = [
  { icon: Scale, title: "Αστικό Δίκαιο", desc: "Οικογενειακό, κληρονομικό, ενοχικό και εμπράγματο δίκαιο με εξειδίκευση και ανθρώπινη προσέγγιση.", path: "/astiko-dikaio" },
  { icon: Briefcase, title: "Ποινικό Δίκαιο", desc: "Υπεράσπιση και νομική εκπροσώπηση σε ποινικές υποθέσεις κάθε βαθμού.", path: "/poiniko-dikaio" },
  { icon: Building2, title: "Εμπορικό Δίκαιο", desc: "Εταιρικό δίκαιο, συμβάσεις, εμπορικές διαφορές και νομική υποστήριξη επιχειρήσεων.", path: "/emporiko-dikaio" },
  { icon: Home, title: "Δίκαιο Ακινήτων", desc: "Αγοραπωλησίες, μισθώσεις, κτηματολόγιο και διαχείριση ακίνητης περιουσίας.", path: "/dikaio-akiniton" },
];

const decisions = [
  { title: "Ακύρωση Πλειστηριασμού Πρώτης Κατοικίας", year: "2024", excerpt: "Επιτυχής ακύρωση πλειστηριασμού βάσει διατάξεων προστασίας πρώτης κατοικίας." },
  { title: "Αποζημίωση Εργατικού Ατυχήματος", year: "2023", excerpt: "Δικαίωση εργαζομένου με πλήρη αποζημίωση για βλάβη κατά την εργασία." },
  { title: "Διαφορά Κληρονομικής Διαδοχής", year: "2023", excerpt: "Επίλυση πολύπλοκης κληρονομικής διαφοράς μεταξύ πολλών κληρονόμων." },
];

const articles = [
  { title: "Ο νέος νόμος για τις ηλεκτρονικές συναλλαγές ακινήτων", date: "Φεβρουάριος 2024", excerpt: "Ανάλυση του νομοθετικού πλαισίου που αλλάζει τον τρόπο μεταβίβασης ακινήτων." },
  { title: "Δικαιώματα καταναλωτή σε ελαττωματικά προϊόντα", date: "Ιανουάριος 2024", excerpt: "Τι προβλέπει η ελληνική και ευρωπαϊκή νομοθεσία για την προστασία του καταναλωτή." },
  { title: "Αλλαγές στο οικογενειακό δίκαιο: Τι πρέπει να γνωρίζετε", date: "Δεκέμβριος 2023", excerpt: "Οι πρόσφατες τροποποιήσεις στον Αστικό Κώδικα και οι επιπτώσεις τους." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ",
  url: "https://advocat.gr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Γούναρη 5Α",
    addressLocality: "Κεφαλάρι, Κηφισιά",
    addressRegion: "Αττική",
    postalCode: "14562",
    addressCountry: "GR",
  },
  areaServed: ["Κηφισιά", "Βόρεια Προάστια", "Αθήνα"],
};

export default function HomePage() {
  return (
    <Layout>
      <SEOHead
        title="Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ"
        description="Εξειδικευμένες νομικές υπηρεσίες για ιδιώτες και επιχειρήσεις στην Κηφισιά, στα Βόρεια Προάστια και στην Αθήνα. Αστικό, Ποινικό, Εμπορικό Δίκαιο και Δίκαιο Ακινήτων."
        canonical="/"
        structuredData={structuredData}
        hrefLangs={[
          { lang: "el", href: "/" },
          { lang: "en", href: "/en" },
          { lang: "de", href: "/de" },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Δικηγορικό Γραφείο Βαμβουκάκη - Εσωτερικό γραφείου" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container-wide py-20">
          <div className="max-w-3xl">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Δικηγορικό Γραφείο<br />
              <span className="italic font-normal">Βαμβουκάκη Εμμανουήλ</span>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg font-body leading-relaxed max-w-xl mb-10">
              Εξειδικευμένες νομικές υπηρεσίες για ιδιώτες και επιχειρήσεις στην Κηφισιά, στα Βόρεια Προάστια και στην Αθήνα.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-primary" asChild>
                <Link to="/epikoinonia">Κλείστε Ραντεβού</Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/tomeis-eidikefsis">Δείτε τους Τομείς Ειδίκευσης</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-8">
            Νομική Καθοδήγηση με Αξιοπιστία
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Το γραφείο μας παρέχει εξατομικευμένες νομικές υπηρεσίες υψηλού επιπέδου, 
            συνδυάζοντας ακαδημαϊκή κατάρτιση και πρακτική εμπειρία. Κάθε υπόθεση αντιμετωπίζεται 
            με διακριτικότητα, επαγγελματισμό και προσωπική φροντίδα, εξασφαλίζοντας στον εντολέα 
            το βέλτιστο νομικό αποτέλεσμα.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4">Τομείς Ειδίκευσης</h2>
            <p className="text-muted-foreground font-body">Εξειδικευμένη νομική υποστήριξη σε κάθε τομέα του δικαίου.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {practiceAreas.map((area) => (
              <Link key={area.path} to={area.path} className="premium-card group">
                <area.icon size={28} className="text-accent mb-6" />
                <h3 className="font-heading text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">{area.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{area.desc}</p>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                  Περισσότερα <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src={portraitImg}
                alt="Εμμανουήλ Βαμβουκάκης - Δικηγόρος"
                className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="gold-divider-left mb-8" />
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-6">
                Εμμανουήλ Βαμβουκάκης
              </h2>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-6">Rechtsanwalt · Δικηγόρος</p>
              <ul className="space-y-3 mb-8">
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">—</span> Philipps-Universität Marburg, Deutschland
                </li>
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">—</span> LL.M Αστικού Δικαίου, Πανεπιστήμιο Αθηνών
                </li>
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">—</span> Κεφαλάρι, Κηφισιά
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/viografiko">
                  Πλήρες Βιογραφικό <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4">Αποφάσεις</h2>
            <p className="text-muted-foreground font-body">Ενδεικτικές δικαστικές αποφάσεις και νομολογιακά αποτελέσματα.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decisions.map((d, i) => (
              <div key={i} className="premium-card">
                <span className="text-xs tracking-widest font-body text-accent">{d.year}</span>
                <h3 className="font-heading text-lg mt-3 mb-4">{d.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{d.excerpt}</p>
                <Link to="/apofaseis" className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 hover:gap-3 transition-all">
                  Διαβάστε <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4">Άρθρα</h2>
            <p className="text-muted-foreground font-body">Νομικά άρθρα και αναλύσεις για τρέχοντα νομοθετικά θέματα.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <div key={i} className="premium-card">
                <span className="text-xs tracking-widest font-body text-muted-foreground">{a.date}</span>
                <h3 className="font-heading text-lg mt-3 mb-4">{a.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{a.excerpt}</p>
                <Link to="/arthra" className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 hover:gap-3 transition-all">
                  Διαβάστε <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-6">
            Επικοινωνήστε Μαζί Μας
          </h2>
          <p className="text-primary-foreground/70 font-body mb-4">Γούναρη 5Α, Κεφαλάρι - Κηφισιά</p>
          <p className="text-primary-foreground/70 font-body mb-2">+30 210 XXX XXXX</p>
          <p className="text-primary-foreground/70 font-body mb-10">info@advocat.gr</p>
          <Button variant="hero-outline" asChild>
            <Link to="/epikoinonia">Κλείστε Ραντεβού <ArrowRight size={14} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
