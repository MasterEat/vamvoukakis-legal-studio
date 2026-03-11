import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import portraitImg from "../../images/image2.webp";

const experienceAreas = [
  {
    title: "Ανεξάρτητη Δικηγορική Πρακτική",
    description:
      "Συστηματική υποστήριξη φυσικών προσώπων και επιχειρήσεων με προσωπική ευθύνη χειρισμού σε κάθε στάδιο της υπόθεσης.",
  },
  {
    title: "Υποθέσεις Αστικού Δικαίου",
    description:
      "Αντιμετώπιση σύνθετων ιδιωτικών διαφορών με έμφαση στη νομική ακρίβεια, τη σαφή στρατηγική και την ουσιαστική προστασία συμφερόντων.",
  },
  {
    title: "Συμβάσεις & Νομικός Έλεγχος",
    description:
      "Σύνταξη, διαπραγμάτευση και έλεγχος συμβάσεων με πρόβλεψη νομικών κινδύνων και τεκμηριωμένη καθοδήγηση.",
  },
  {
    title: "Ακίνητα & Μεταβιβάσεις",
    description:
      "Νομική υποστήριξη σε αγοραπωλησίες, εμπράγματα δικαιώματα και συνοδευτικές διαδικασίες ακινήτων.",
  },
  {
    title: "Μισθωτικές Σχέσεις",
    description:
      "Χειρισμός θεμάτων εμπορικών και αστικών μισθώσεων, από τη σύναψη έως την επίλυση διαφορών.",
  },
  {
    title: "Οικογενειακό & Κληρονομικό Δίκαιο",
    description:
      "Διακριτική και μεθοδική διαχείριση υποθέσεων οικογενειακού και κληρονομικού δικαίου με σεβασμό στις προσωπικές ισορροπίες.",
  },
  {
    title: "Νομική Συμβουλευτική",
    description:
      "Σταθερή συμβουλευτική παρουσία με πρακτικές λύσεις, σαφή ενημέρωση και προληπτική νομική θωράκιση.",
  },
];

const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Εμμανουήλ Βαμβουκάκης",
  jobTitle: "Δικηγόρος",
  description:
    "Δικηγόρος με διεθνή ακαδημαϊκή κατάρτιση και εστίαση στο αστικό δίκαιο, τις συμβάσεις, τα ακίνητα και τη νομική συμβουλευτική.",
  url: "https://advocat.gr/viografiko",
  image: "https://advocat.gr/images/image2.webp",
  knowsLanguage: ["el", "de", "en"],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Philipps-Universität Marburg",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
    },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "LL.M Αστικού Δικαίου",
  },
  memberOf: {
    "@type": "Organization",
    name: "Δικηγορικός Σύλλογος Αθηνών",
  },
  worksFor: {
    "@type": "LegalService",
    name: "Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ",
    url: "https://advocat.gr",
  },
};

export default function ProfilePage() {
  const [hasCvPdf, setHasCvPdf] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkCvFile = async () => {
      try {
        const response = await fetch("/cv.pdf", { method: "HEAD" });
        if (isMounted) {
          setHasCvPdf(response.ok);
        }
      } catch {
        if (isMounted) {
          setHasCvPdf(false);
        }
      }
    };

    void checkCvFile();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Βιογραφικό"
        description="Ο Εμμανουήλ Βαμβουκάκης είναι δικηγόρος με διεθνή ακαδημαϊκή πορεία, πολυετή εμπειρία στο αστικό δίκαιο και προσωπική προσέγγιση σε κάθε υπόθεση."
        canonical="/viografiko"
        structuredData={profileStructuredData}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <img src={portraitImg} alt="Εμμανουήλ Βαμβουκάκης" className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover sticky top-28" loading="lazy" />
            </div>
            <div className="lg:col-span-3">
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-2">Εμμανουήλ Βαμβουκάκης</h1>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-10">Rechtsanwalt · Δικηγόρος</p>

              <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
                <section className="space-y-5">
                  <h2 className="font-heading text-2xl text-foreground">Επαγγελματικό Προφίλ</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground text-lg">
                    Ο Εμμανουήλ Βαμβουκάκης ασκεί τη δικηγορία επί σειρά ετών, με σταθερή προσήλωση στην προσωπική διαχείριση κάθε υπόθεσης και
                    στην ουσιαστική προστασία των συμφερόντων των εντολέων του.
                  </p>
                  <p>
                    Η επαγγελματική του προσέγγιση στηρίζεται στην εμπιστοσύνη, στη μεθοδική νομική ανάλυση και στη διακριτικότητα, στοιχεία που
                    θεωρούνται κρίσιμα για τη συνεπή και αποτελεσματική άσκηση της δικηγορίας.
                  </p>
                  <p>
                    Με διεθνές ακαδημαϊκό υπόβαθρο και εμβάθυνση στο αστικό δίκαιο, παρέχει υψηλού επιπέδου νομική εκπροσώπηση και συμβουλευτική
                    καθοδήγηση σε υποθέσεις ιδιωτικού δικαίου.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Ακαδημαϊκή Κατάρτιση</h2>
                  <div className="w-12 h-px bg-accent" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">—</span>
                      <div>
                        <p className="text-foreground font-medium">Σπουδές Νομικής στη Γερμανία</p>
                        <p className="text-sm">Philipps-Universität Marburg</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">—</span>
                      <div>
                        <p className="text-foreground font-medium">LL.M στο Αστικό Δίκαιο</p>
                        <p className="text-sm">Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών</p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Επαγγελματική Εμπειρία</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experienceAreas.map((item) => (
                      <article key={item.title} className="border border-border/60 bg-secondary/30 px-5 py-4 space-y-2">
                        <h3 className="text-foreground font-medium">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Νομική Προσέγγιση</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>
                    Κάθε υπόθεση αντιμετωπίζεται με προσωπική προσοχή, ώστε η νομική στρατηγική να ανταποκρίνεται στα πραγματικά δεδομένα και στις
                    ανάγκες του εντολέα. Η εξατομικευμένη συνεργασία αποτελεί βασική προϋπόθεση για ένα ασφαλές και αξιόπιστο αποτέλεσμα.
                  </p>
                  <p>
                    Η νομική ακρίβεια, η διαφανής ενημέρωση και η καθαρή αποτύπωση των διαθέσιμων επιλογών αποτελούν σταθερές αρχές της καθημερινής
                    πρακτικής. Ο εντολέας ενημερώνεται έγκαιρα για τα ουσιώδη βήματα, τους κινδύνους και τις δυνατότητες της υπόθεσής του.
                  </p>
                  <p>
                    Με συνεχή παρακολούθηση της νομολογίας και της νομοθετικής εξέλιξης, η διαχείριση κάθε υπόθεσης παραμένει πρακτική, στρατηγική
                    και προσαρμοσμένη στις σύγχρονες απαιτήσεις της νομικής πραγματικότητας.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Γλώσσες</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm tracking-wide">
                    {[
                      { label: "Ελληνικά", level: "Μητρική" },
                      { label: "Γερμανικά", level: "Επαγγελματική επάρκεια" },
                      { label: "Αγγλικά", level: "Επαγγελματική επάρκεια" },
                    ].map((language) => (
                      <div key={language.label} className="border border-border/60 px-4 py-3">
                        <p className="text-foreground">{language.label}</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{language.level}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Επαγγελματική Ιδιότητα</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground">Μέλος του Δικηγορικού Συλλόγου Αθηνών.</p>
                </section>

                {hasCvPdf && (
                  <section className="space-y-5 border-t border-border/50 pt-8">
                    <h2 className="font-heading text-2xl text-foreground">Βιογραφικό Σημείωμα</h2>
                    <div className="w-12 h-px bg-accent" />
                    <p>Για την πλήρη έκδοση του βιογραφικού, μπορείτε να πραγματοποιήσετε λήψη σε μορφή PDF.</p>
                    <Button variant="outline" asChild>
                      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                        Λήψη Βιογραφικού (PDF)
                      </a>
                    </Button>
                  </section>
                )}

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Τοποθεσία</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>Πειραιώς 6, Ομόνοια, ΤΚ 10434, Αθήνα</p>
                </section>

                <section className="border-t border-border/50 pt-8">
                  <div className="border border-border/60 bg-secondary/40 p-7 md:p-9">
                    <p className="text-foreground text-lg md:text-xl font-heading leading-relaxed mb-6">
                      Για νομική καθοδήγηση και προσωπική αξιολόγηση της υπόθεσής σας, επικοινωνήστε με το γραφείο.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/epikoinonia">
                        Επικοινωνία <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
