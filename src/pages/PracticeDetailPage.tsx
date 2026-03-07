import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

interface PracticePageProps {
  title: string;
  metaTitle: string;
  metaDesc: string;
  canonical: string;
  intro: string;
  services: string[];
  forWhom: string;
  whyUs: string;
}

export default function PracticeDetailPage({ title, metaTitle, metaDesc, canonical, intro, services, forWhom, whyUs }: PracticePageProps) {
  return (
    <Layout>
      <SEOHead title={metaTitle} description={metaDesc} canonical={canonical} />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <nav className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Αρχική</Link>
            <span className="mx-2">/</span>
            <Link to="/tomeis-eidikefsis" className="hover:text-accent transition-colors">Τομείς Ειδίκευσης</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>

          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">{title}</h1>

          <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground text-lg">{intro}</p>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Υπηρεσίες</h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Σε Ποιους Απευθύνεται</h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p>{forWhom}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">Γιατί Εμείς</h2>
              <div className="w-12 h-px bg-accent mb-6" />
              <p>{whyUs}</p>
            </div>

            <div className="pt-8">
              <Button variant="default" size="lg" asChild>
                <Link to="/epikoinonia">Κλείστε Ραντεβού <ArrowRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Individual pages
export function CivilLawPage() {
  return <PracticeDetailPage
    title="Αστικό Δίκαιο"
    metaTitle="Αστικό Δίκαιο"
    metaDesc="Εξειδικευμένες υπηρεσίες αστικού δικαίου: οικογενειακό, κληρονομικό, ενοχικό και εμπράγματο δίκαιο στην Κηφισιά και Αθήνα."
    canonical="/astiko-dikaio"
    intro="Το αστικό δίκαιο αποτελεί τον πυρήνα της νομικής μας πρακτικής. Με μεταπτυχιακή εξειδίκευση (LL.M) στο Αστικό Δίκαιο, παρέχουμε ολοκληρωμένη νομική υποστήριξη σε κάθε ζήτημα ιδιωτικού δικαίου."
    services={["Οικογενειακό δίκαιο: διαζύγια, επιμέλεια, διατροφή", "Κληρονομικό δίκαιο: διαθήκες, αποδοχή κληρονομίας, κληρονομικές διαφορές", "Ενοχικό δίκαιο: συμβάσεις, αποζημιώσεις, αδικοπραξίες", "Εμπράγματο δίκαιο: κυριότητα, νομή, δουλείες"]}
    forWhom="Ιδιώτες, οικογένειες και κληρονόμους που αντιμετωπίζουν νομικά ζητήματα στον τομέα του ιδιωτικού δικαίου."
    whyUs="Η μεταπτυχιακή εξειδίκευση LL.M στο Αστικό Δίκαιο και οι σπουδές στη Γερμανία μας δίνουν μια ξεχωριστή οπτική. Κάθε υπόθεση αντιμετωπίζεται με μεθοδικότητα, ευαισθησία και αφοσίωση."
  />;
}

export function CriminalLawPage() {
  return <PracticeDetailPage
    title="Ποινικό Δίκαιο"
    metaTitle="Ποινικό Δίκαιο"
    metaDesc="Ποινική υπεράσπιση και νομική εκπροσώπηση σε υποθέσεις κάθε βαθμού. Δικηγορικό Γραφείο Βαμβουκάκη, Κηφισιά."
    canonical="/poiniko-dikaio"
    intro="Η ποινική υπεράσπιση απαιτεί ταχύτητα, εμπειρία και στρατηγική σκέψη. Εκπροσωπούμε κατηγορούμενους και πολιτικώς ενάγοντες σε υποθέσεις ποινικού δικαίου κάθε βαθμού."
    services={["Ποινική υπεράσπιση σε πλημμελήματα και κακουργήματα", "Παράσταση πολιτικής αγωγής", "Οικονομικά ποινικά αδικήματα", "Αδικήματα κατά της τιμής και της περιουσίας", "Κυβερνοεγκλήματα"]}
    forWhom="Ιδιώτες που αντιμετωπίζουν ποινικές κατηγορίες ή επιθυμούν να ασκήσουν τα δικαιώματά τους ως θύματα αξιοποίνων πράξεων."
    whyUs="Η μεθοδική προσέγγιση, η ακαδημαϊκή μας κατάρτιση και η πρακτική εμπειρία εξασφαλίζουν αποτελεσματική υπεράσπιση σε κάθε στάδιο της ποινικής διαδικασίας."
  />;
}

export function CommercialLawPage() {
  return <PracticeDetailPage
    title="Εμπορικό Δίκαιο"
    metaTitle="Εμπορικό Δίκαιο"
    metaDesc="Εταιρικό δίκαιο, εμπορικές συμβάσεις και νομική υποστήριξη επιχειρήσεων. Δικηγορικό Γραφείο Βαμβουκάκη."
    canonical="/emporiko-dikaio"
    intro="Παρέχουμε ολοκληρωμένη νομική υποστήριξη σε επιχειρήσεις κάθε μεγέθους, από τη σύσταση εταιρείας έως τη διαχείριση σύνθετων εμπορικών διαφορών."
    services={["Σύσταση και μετατροπή εταιρειών", "Σύνταξη και έλεγχος εμπορικών συμβάσεων", "Αξιόγραφα και πιστωτικοί τίτλοι", "Πτώχευση και αναδιάρθρωση", "Δίκαιο ανταγωνισμού"]}
    forWhom="Επιχειρήσεις, εμπόρους, εταίρους και στελέχη που χρειάζονται αξιόπιστη νομική καθοδήγηση σε εμπορικά ζητήματα."
    whyUs="Η ευρωπαϊκή νομική μας παιδεία και η κατανόηση του επιχειρηματικού περιβάλλοντος μας επιτρέπουν να προσφέρουμε στρατηγικές λύσεις με πρακτικό αντίκτυπο."
  />;
}

export function RealEstateLawPage() {
  return <PracticeDetailPage
    title="Δίκαιο Ακινήτων"
    metaTitle="Δίκαιο Ακινήτων"
    metaDesc="Αγοραπωλησίες, μισθώσεις, κτηματολόγιο και διαχείριση ακίνητης περιουσίας. Δικηγορικό Γραφείο Βαμβουκάκη, Κηφισιά."
    canonical="/dikaio-akiniton"
    intro="Το δίκαιο ακινήτων απαιτεί ιδιαίτερη προσοχή στη λεπτομέρεια και βαθιά γνώση του νομικού πλαισίου. Παρέχουμε πλήρη νομική κάλυψη σε κάθε θέμα ακίνητης περιουσίας."
    services={["Νομικός έλεγχος ακινήτων (due diligence)", "Αγοραπωλησίες και μεταβιβάσεις", "Μισθώσεις εμπορικές και αστικές", "Κτηματολόγιο: δηλώσεις, διορθώσεις, αιτήσεις", "Πολεοδομικά ζητήματα και οικοδομικές άδειες", "Διαχείριση ακίνητης περιουσίας"]}
    forWhom="Ιδιοκτήτες, αγοραστές, μισθωτές, εκμισθωτές και επενδυτές ακινήτων που επιζητούν ασφαλή νομική καθοδήγηση."
    whyUs="Η εξειδίκευσή μας στο εμπράγματο δίκαιο, σε συνδυασμό με την τοπική μας παρουσία στα Βόρεια Προάστια, εξασφαλίζει αποτελεσματική διαχείριση κάθε υπόθεσης ακινήτων."
  />;
}
