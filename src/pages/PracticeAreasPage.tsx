import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Briefcase, Home } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const areas = [
  {
    icon: Scale,
    title: "Αστικό Δίκαιο",
    intro:
      "Χειριζόμαστε με υπευθυνότητα υποθέσεις που αφορούν την καθημερινότητα και τις προσωπικές σχέσεις των εντολέων μας.",
    sections: [
      {
        title: "Οικογενειακό Δίκαιο:",
        desc: "Συναινετικά διαζύγια, θέματα επιμέλειας, διατροφής και ρύθμισης των σχέσεων των συζύγων.",
      },
      {
        title: "Κληρονομικό Δίκαιο:",
        desc: "Αποδοχές κληρονομιάς, δημοσίευση διαθηκών, διεκδίκηση νόμιμης μοίρας και επίλυση κληρονομικών διενέξεων.",
      },
      {
        title: "Ενοχικό Δίκαιο:",
        desc: "Διεκδίκηση αποζημιώσεων, συμβάσεις και αστικές διαφορές κάθε φύσεως.",
      },
    ],
    path: "/astiko-dikaio",
  },
  {
    icon: Shield,
    title: "Ποινικό Δίκαιο",
    intro:
      "Παρέχουμε διακριτική και μεθοδική υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας, με έμφαση στην προστασία των δικαιωμάτων σας.",
    sections: [
      {
        title: "Πλημμελήματα & Κακουργήματα:",
        desc: "Νομική εκπροσώπηση και υπεράσπιση ενώπιον ανακριτικών και δικαστικών αρχών.",
      },
      {
        title: "Προδικασία:",
        desc: "Στρατηγική καθοδήγηση από το στάδιο της προκαταρκτικής εξέτασης έως και την απολογία.",
      },
      {
        title: "Υπεράσπιση στο Ακροατήριο:",
        desc: "Προετοιμασία υποθέσεων με συνέπεια και αποτελεσματική παρουσία ενώπιον των ποινικών δικαστηρίων.",
      },
    ],
    path: "/poiniko-dikaio",
  },
  {
    icon: Briefcase,
    title: "Εμπορικό Δίκαιο",
    intro:
      "Υποστηρίζουμε επιχειρήσεις και επαγγελματίες σε συναλλαγές, συμβάσεις και εμπορικές διαφορές με πρακτική νομική προσέγγιση.",
    sections: [
      {
        title: "Εμπορικές Συμβάσεις:",
        desc: "Σύνταξη, έλεγχος και διαπραγμάτευση συμβάσεων με γνώμονα τη νομική ασφάλεια της δραστηριότητάς σας.",
      },
      {
        title: "Εταιρική Υποστήριξη:",
        desc: "Καθοδήγηση σε ζητήματα λειτουργίας, εκπροσώπησης και συμμόρφωσης επιχειρήσεων.",
      },
      {
        title: "Εμπορικές Διαφορές:",
        desc: "Στρατηγική διαχείριση διενέξεων με στόχο την προστασία των συμφερόντων της επιχείρησής σας.",
      },
    ],
    path: "/emporiko-dikaio",
  },
  {
    icon: Home,
    title: "Δίκαιο Ακινήτων",
    intro:
      "Παρέχουμε ολοκληρωμένη νομική κάλυψη σε κάθε στάδιο της αξιοποίησης της ακίνητης περιουσίας σας.",
    sections: [
      {
        title: "Μεταβιβάσεις Ακινήτων:",
        desc: "Πλήρης έλεγχος τίτλων στο Υποθηκοφυλακείο και το Κτηματολόγιο για την ασφάλεια της συναλλαγής σας.",
      },
      {
        title: "Αγορές & Πωλήσεις:",
        desc: "Νομική συμβουλευτική και σύνταξη συμβολαίων για την προστασία των συμφερόντων σας.",
      },
      {
        title: "Μισθώσεις:",
        desc: "Διαχείριση μισθωτικών διαφορών, σύνταξη ιδιωτικών συμφωνητικών και διεκδίκηση οφειλόμενων μισθωμάτων.",
      },
    ],
    path: "/dikaio-akiniton",
  },
];

export default function PracticeAreasPage() {
  return (
    <Layout>
      <SEOHead title="Αστικό Δίκαιο & Δίκαιο Ακινήτων στην Αθήνα | Νομικές Υπηρεσίες" description="Εξειδικευμένες νομικές υπηρεσίες σε Αστικό, Ποινικό, Εμπορικό Δίκαιο και Δίκαιο Ακινήτων. Δικηγορικό Γραφείο Βαμβουκάκη." canonical="/tomeis-eidikefsis" hrefLangs={[{ lang: "el", href: "/tomeis-eidikefsis" }, { lang: "en", href: "/en/practice-areas" }, { lang: "de", href: "/de/rechtsgebiete" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Τομείς Εξειδίκευσης</h1>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Παρέχουμε ολοκληρωμένη νομική υποστήριξη σε τέσσερις βασικούς τομείς δικαίου, με εξειδίκευση, υπευθυνότητα και προσωπική προσέγγιση σε κάθε υπόθεση.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Για εξατομικευμένη καθοδήγηση από <Link to="/epikoinonia" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">δικηγόρο στην Αθήνα</Link>, μπορείτε να επικοινωνήσετε μαζί μας. Δείτε επίσης τα <Link to="/arthra" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">νομικά άρθρα για αστικό δίκαιο και δίκαιο ακινήτων</Link>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {areas.map((area) => (
              <Link key={area.title} to={area.path} className="premium-card group">
                <area.icon size={28} className="text-accent mb-6" />
                <h2 className="font-heading text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">{area.title}</h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{area.intro}</p>
                <div className="text-muted-foreground font-body text-sm leading-relaxed mb-6 space-y-3">
                  {area.sections.map((section) => (
                    <p key={section.title}>
                      <strong className="text-foreground">{section.title}</strong> {section.desc}
                    </p>
                  ))}
                </div>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                  Μάθετε περισσότερα <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-sm font-body text-muted-foreground leading-relaxed space-y-2">
            <p>
              Σχετικά άρθρα: <Link to="/arthra/misthotirio-symvolaio-ti-prepei-na-prosexete" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">Μισθωτήριο Συμβόλαιο: Τι Πρέπει να Προσέξετε</Link> και <Link to="/arthra/synainetiko-diazygio-stin-ellada" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">Συναινετικό Διαζύγιο στην Ελλάδα</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
