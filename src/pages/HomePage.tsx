import { Link } from "react-router-dom";
import { ArrowRight, Scale, Briefcase, Home, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-law-office.jpg";
import portraitImg from "../../images/image1.webp";
import { contactDetails } from "@/lib/contactSeo";

const practiceAreas = [
  { icon: Home, title: "Ακίνητα & Εμπράγματο Δίκαιο", desc: "Αγοραπωλησίες, μισθώσεις, κτηματολόγιο και ζητήματα εμπράγματου δικαίου με ακρίβεια και ασφάλεια.", path: "/dikaio-akiniton" },
  { icon: Scale, title: "Αστικό Δίκαιο", desc: "Οικογενειακό, κληρονομικό, ενοχικό και εμπράγματο δίκαιο με εξειδίκευση και ανθρώπινη προσέγγιση.", path: "/astiko-dikaio" },
  { icon: Briefcase, title: "Ποινικό Δίκαιο", desc: "Υπεράσπιση και νομική εκπροσώπηση σε ποινικές υποθέσεις κάθε βαθμού.", path: "/poiniko-dikaio" },
];

const whyChooseUs = [
  {
    title: "Προσωπική Ενασχόληση",
    text: "Κάθε υπόθεση εξετάζεται διεξοδικά από τον ίδιο τον Εμμανουήλ Βαμβουκάκη, διασφαλίζοντας την υψηλότερη ποιότητα νομικής εκπροσώπησης.",
  },
  {
    title: "Ειλικρίνεια & Διαφάνεια",
    text: "Σας ενημερώνουμε ρεαλιστικά για τις πιθανότητες επιτυχίας και τους βέλτιστους χειρισμούς από την πρώτη κιόλας συνάντηση.",
  },
  {
    title: "Αποτελεσματικότητα",
    text: "Συνδυάζουμε τη μαχητική δικαστηριακή πρακτική με τη συμβουλευτική δικηγορία για την ταχύτερη δυνατή επίλυση των διαφορών σας.",
  },
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
  telephone: contactDetails.telephone,
  email: contactDetails.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Πειραιώς 6, Ομόνοια",
    addressLocality: "Αθήνα",
    addressRegion: "Αττική",
    postalCode: "10434",
    addressCountry: "GR",
  },

};

export default function HomePage() {
  return (
    <Layout>
      <SEOHead
        title="Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ"

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
        <div className="relative container-wide pt-28 pb-20 md:pt-36">
          <div className="max-w-3xl">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              ΕΜΜΑΝΟΥΗΛ ΒΑΜΒΟΥΚΑΚΗΣ &amp; ΣΥΝΕΡΓΑΤΕΣ
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg font-body leading-relaxed max-w-xl mb-10">
              Νομική Υπεροχή με Ανθρώπινο Πρόσωπο
              <br />
              Απόλυτη Προσήλωση στο Αποτέλεσμα
              <br />
              <br />
              Καλωσορίσατε στο δικηγορικό μας γραφείο.
              <br />
              Με βαθιά γνώση της νομολογίας και σύγχρονη αντίληψη της δικηγορίας,
              <br />
              παρέχουμε εξειδικευμένες νομικές υπηρεσίες που ανταποκρίνονται
              <br />
              με ακρίβεια στις ανάγκες σας.
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

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4">Γιατί να μας εμπιστευτείτε</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="premium-card">
                <h3 className="font-heading text-xl md:text-2xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-6">
            "Η δικαιοσύνη δεν είναι απλώς μια έννοια,
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            είναι το αποτέλεσμα της σωστής στρατηγικής
            <br />
            και της αδιάκοπης προσπάθειας."
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
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-6">Επικοινωνήστε Μαζί Μας</h2>
          <div className="space-y-4 mb-10 max-w-2xl mx-auto">
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Διεύθυνση:</span> {contactDetails.addressLine}</p>
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Τηλέφωνο:</span> <a href={contactDetails.telUri} className="hover:text-accent transition-colors">{contactDetails.telephone}</a></p>
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Email:</span> <a href={contactDetails.emailUri} className="hover:text-accent transition-colors break-all">{contactDetails.email}</a></p>
            <div className="flex items-start justify-center gap-2 text-primary-foreground/80 font-body">
              <Clock3 size={16} className="text-accent mt-1 shrink-0" />
              <div>
                <p><span className="text-primary-foreground/55">Ώρες Λειτουργίας:</span> {contactDetails.officeHours.el[0]}</p>
                <p>{contactDetails.officeHours.el[1]}</p>
              </div>
            </div>
          </div>
          <Button variant="hero-outline" asChild><Link to="/epikoinonia">Κλείστε Ραντεβού <ArrowRight size={14} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
}
