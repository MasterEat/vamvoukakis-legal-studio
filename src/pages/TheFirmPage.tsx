import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function TheFirmPage() {
  return (
    <Layout>
      <SEOHead title="Το Γραφείο" description="Η φιλοσοφία και η προσέγγιση του Δικηγορικού Γραφείου Βαμβουκάκη. Εξατομικευμένη νομική καθοδήγηση με αξιοπιστία και διακριτικότητα." canonical="/to-grafeio" />
      
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">Το Γραφείο</h1>
          <div className="w-16 h-px bg-accent mb-12" />
          
          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground text-lg">
              Το Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ ιδρύθηκε με στόχο την παροχή 
              νομικών υπηρεσιών υψηλής ποιότητας, βασισμένων σε ακαδημαϊκή αριστεία και 
              πρακτική εμπειρία.
            </p>
            <p>
              Η φιλοσοφία μας εστιάζει στην προσωπική σχέση εμπιστοσύνης με τον εντολέα. 
              Κάθε υπόθεση αντιμετωπίζεται ως μοναδική, με σεβασμό στις ιδιαίτερες ανάγκες 
              και τις προσδοκίες κάθε πελάτη.
            </p>
            <p>
              Με έδρα την Ομόνοια, εξυπηρετούμε ιδιώτες και επιχειρήσεις σε 
              ολόκληρη την Αττική, προσφέροντας νομική καθοδήγηση σε θέματα αστικού, 
              ποινικού, εμπορικού δικαίου και δικαίου ακινήτων.
            </p>

            <h2 className="font-heading text-2xl text-foreground pt-8">Η Προσέγγισή Μας</h2>
            <div className="w-12 h-px bg-accent" />
            <p>
              Πιστεύουμε ότι η αποτελεσματική νομική εκπροσώπηση απαιτεί βαθιά κατανόηση 
              τόσο του νομικού πλαισίου όσο και του ανθρώπινου παράγοντα. Ο συνδυασμός 
              σπουδών στη Γερμανία και την Ελλάδα μας δίνει μια ευρωπαϊκή οπτική, ενώ η 
              πολυετής εμπειρία μας εξασφαλίζει πρακτικές και αξιόπιστες λύσεις.
            </p>
            <p>
              Η διακριτικότητα, η ακεραιότητα και η αφοσίωση στο συμφέρον του εντολέα 
              αποτελούν τις βασικές αρχές που διέπουν κάθε πτυχή της λειτουργίας μας.
            </p>

            <h2 className="font-heading text-2xl text-foreground pt-8">Αξίες</h2>
            <div className="w-12 h-px bg-accent" />
            <ul className="space-y-3 pl-0">
              {["Εξατομικευμένη νομική προσέγγιση", "Εμπιστευτικότητα και διακριτικότητα", "Ακαδημαϊκή αριστεία και συνεχής ενημέρωση", "Ανθρώπινη επικοινωνία και σεβασμός"].map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
