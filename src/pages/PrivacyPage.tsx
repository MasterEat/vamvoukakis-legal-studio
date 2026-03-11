import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPage() {
  return (
    <Layout>
      <SEOHead title="Πολιτική Απορρήτου" description="Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων του Δικηγορικού Γραφείου Βαμβουκάκη." canonical="/politiki-aporritou" />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl mb-8">Πολιτική Απορρήτου</h1>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>Η προστασία των προσωπικών σας δεδομένων είναι σημαντική για εμάς. Η παρούσα πολιτική εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα δεδομένα σας σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).</p>
            <h2 className="font-heading text-xl text-foreground pt-4">Υπεύθυνος Επεξεργασίας</h2>
            <p>Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ, Πειραιώς 6, Ομόνοια, ΤΚ 10434.</p>
            <h2 className="font-heading text-xl text-foreground pt-4">Δεδομένα που Συλλέγουμε</h2>
            <p>Συλλέγουμε μόνο τα δεδομένα που είναι απαραίτητα για την παροχή νομικών υπηρεσιών: ονοματεπώνυμο, στοιχεία επικοινωνίας και πληροφορίες σχετικές με την υπόθεσή σας.</p>
            <h2 className="font-heading text-xl text-foreground pt-4">Δικαιώματά σας</h2>
            <p>Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής και φορητότητας των δεδομένων σας. Για κάθε αίτημα, επικοινωνήστε μαζί μας στο emmanouil.vamvoukakis@outlook.com.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
