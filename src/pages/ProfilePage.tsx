import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import portraitImg from "../../images/image2.webp";

const academicMilestones = [
  {
    title: "Σπουδές Νομικής στη Γερμανία",
    details: "Philipps-Universität Marburg",
  },
  {
    title: "Νομική εκπαίδευση στη Φρανκφούρτη",
    details: "Πρακτική και ακαδημαϊκή εμβάθυνση στη γερμανική νομική παράδοση",
  },
  {
    title: "LL.M Αστικού Δικαίου",
    details: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
  },
];

const professionalActivity = [
  {
    title: "Δικηγόρος από το 2002",
    description: "Συνεχής άσκηση της δικηγορίας με εστίαση στην υπεύθυνη νομική υποστήριξη υποθέσεων ιδιωτικού δικαίου.",
  },
  {
    title: "Ανεξάρτητη άσκηση δικηγορίας από το 2003",
    description: "Προσωπικός χειρισμός κάθε υπόθεσης, με άμεση επικοινωνία, διακριτικότητα και στρατηγική συνέπεια.",
  },
  {
    title: "Πολυετής πρακτική ενασχόληση",
    description:
      "Εμπειρία σε συμβάσεις, μεταβιβάσεις ακινήτων, μισθώσεις, οικογενειακές και κληρονομικές υποθέσεις με έμφαση στην ουσία κάθε διαφοράς.",
  },
];

const legalAreas = [
  "Αστικό Δίκαιο",
  "Συμβάσεις",
  "Μεταβιβάσεις Ακινήτων",
  "Μισθώσεις",
  "Νομική Υποστήριξη Ακινήτων",
  "Οικογενειακό Δίκαιο",
  "Κληρονομικό Δίκαιο",
  "Νομικές Συμβουλές",
];

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
        title="Εμμανουήλ Βαμβουκάκης | Δικηγόρος Αθήνα"
        description="Ο Εμμανουήλ Βαμβουκάκης είναι δικηγόρος με διεθνή ακαδημαϊκή πορεία, πολυετή εμπειρία στο ιδιωτικό αστικό δίκαιο και προσωπική, μεθοδική προσέγγιση σε κάθε υπόθεση."
        canonical="/viografiko"
        hrefLangs={[
          { lang: "el", href: "/viografiko" },
          { lang: "en", href: "/en/profile" },
          { lang: "de", href: "/de/profil" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <img
                src={portraitImg}
                alt="Εμμανουήλ Βαμβουκάκης"
                className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover sticky top-28"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-3">
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-2">Εμμανουήλ Βαμβουκάκης</h1>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-10">Δικηγόρος – LL.M Αστικού Δικαίου</p>

              <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
                <section className="space-y-5">
                  <h2 className="font-heading text-2xl text-foreground">Επαγγελματικό Προφίλ</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground text-lg">
                    Ο Εμμανουήλ Βαμβουκάκης διαθέτει διεθνή ακαδημαϊκή κατάρτιση και πολυετή δικηγορική εμπειρία, με διαρκή εστίαση στο ιδιωτικό
                    αστικό δίκαιο και στην υπεύθυνη εκπροσώπηση φυσικών προσώπων και επιχειρήσεων.
                  </p>
                  <p>
                    Η άσκηση της δικηγορίας βασίζεται σε προσωπική ενασχόληση με κάθε υπόθεση, σε μεθοδική προετοιμασία και σε σαφή στρατηγική
                    κατεύθυνση, ώστε η νομική υποστήριξη να ανταποκρίνεται ουσιαστικά στις ανάγκες του εντολέα.
                  </p>
                  <p>
                    Με έμφαση στην ακρίβεια, τη συνέπεια και την ποιότητα της νομικής συμβουλής, παρέχεται εξατομικευμένη καθοδήγηση από το πρώτο
                    στάδιο αξιολόγησης έως την ολοκλήρωση της υπόθεσης.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Ακαδημαϊκή Κατάρτιση</h2>
                  <div className="w-12 h-px bg-accent" />
                  <ul className="space-y-4">
                    {academicMilestones.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="text-accent mt-1">—</span>
                        <div>
                          <p className="text-foreground font-medium">{item.title}</p>
                          <p className="text-sm">{item.details}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Επαγγελματική Δραστηριότητα</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {professionalActivity.map((item) => (
                      <article key={item.title} className="border border-border/60 bg-secondary/30 px-5 py-4 space-y-2 md:first:col-span-2">
                        <h3 className="text-foreground font-medium">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Τομείς Νομικής Ενασχόλησης</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {legalAreas.map((area) => (
                      <div key={area} className="border border-border/60 px-4 py-3 bg-background/70 text-foreground">
                        {area}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Νομική Προσέγγιση</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>
                    Κάθε υπόθεση αντιμετωπίζεται με προσωπική ενασχόληση και προσοχή στη λεπτομέρεια, ώστε η νομική στρατηγική να ευθυγραμμίζεται
                    με τα πραγματικά δεδομένα και τον επιδιωκόμενο στόχο του εντολέα.
                  </p>
                  <p>
                    Η ακρίβεια στη νομική τεκμηρίωση, η μεθοδικότητα στη διαχείριση των διαδικαστικών σταδίων και η διαφάνεια στην επικοινωνία
                    αποτελούν σταθερές αρχές συνεργασίας. Ο εντολέας ενημερώνεται έγκαιρα για τις επιλογές, τους κινδύνους και τις πιθανές εξελίξεις.
                  </p>
                  <p>
                    Με συνεχή παρακολούθηση της νομολογίας και της νομοθετικής εξέλιξης, κάθε υπόθεση προσεγγίζεται πρακτικά και στρατηγικά,
                    επιδιώκοντας λειτουργικές λύσεις με νομική ασφάλεια και συνέπεια.
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
                  <p className="text-foreground">Μέλος Δικηγορικού Συλλόγου Αθηνών.</p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Βιογραφικό Σημείωμα</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>Για την πλήρη έκδοση του βιογραφικού, μπορείτε να πραγματοποιήσετε λήψη σε μορφή PDF.</p>
                  {hasCvPdf ? (
                    <Button variant="outline" asChild>
                      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                        Λήψη πλήρους βιογραφικού
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      Λήψη πλήρους βιογραφικού
                    </Button>
                  )}
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Τοποθεσία</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>Πειραιώς 6, Ομόνοια, ΤΚ 10434, Αθήνα</p>
                </section>

                <section className="border-t border-border/50 pt-8">
                  <div className="border border-border/60 bg-secondary/40 p-7 md:p-9">
                    <p className="text-foreground text-lg md:text-xl font-heading leading-relaxed mb-6">
                      Για προσωπική αξιολόγηση της υπόθεσής σας και υπεύθυνη νομική καθοδήγηση, επικοινωνήστε με το γραφείο.
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
