import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const decisions = [
  { id: 1, title: "Ακύρωση Πλειστηριασμού Πρώτης Κατοικίας", year: "2024", excerpt: "Επιτυχής ακύρωση πλειστηριασμού βάσει διατάξεων προστασίας πρώτης κατοικίας. Ανάλυση του νομικού πλαισίου και εφαρμογή των σχετικών διατάξεων." },
  { id: 2, title: "Αποζημίωση Εργατικού Ατυχήματος", year: "2023", excerpt: "Δικαίωση εργαζομένου με πλήρη αποζημίωση για σοβαρή βλάβη κατά την εκτέλεση εργασίας. Εφαρμογή διατάξεων εργατικού δικαίου." },
  { id: 3, title: "Διαφορά Κληρονομικής Διαδοχής", year: "2023", excerpt: "Επίλυση πολύπλοκης κληρονομικής διαφοράς μεταξύ πολλών κληρονόμων με σύνθετη περιουσιακή κατάσταση." },
  { id: 4, title: "Ακύρωση Καταγγελίας Σύμβασης Εργασίας", year: "2023", excerpt: "Επιτυχής αναγνώριση ακυρότητας απόλυσης λόγω παράβασης τυπικών και ουσιαστικών προϋποθέσεων." },
  { id: 5, title: "Αναγνώριση Κυριότητας Ακινήτου", year: "2022", excerpt: "Δικαίωση εντολέα σε αγωγή αναγνώρισης κυριότητας ακινήτου μέσω τακτικής χρησικτησίας." },
  { id: 6, title: "Διεκδίκηση Αποζημίωσης από Τροχαίο", year: "2022", excerpt: "Επιτυχής αξίωση πλήρους αποζημίωσης και ηθικής βλάβης για θύμα τροχαίου ατυχήματος." },
];

export default function DecisionsPage() {
  return (
    <Layout>
      <SEOHead title="Αποφάσεις" description="Ενδεικτικές δικαστικές αποφάσεις και νομολογιακά αποτελέσματα του Δικηγορικού Γραφείου Βαμβουκάκη." canonical="/apofaseis" />
      
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Αποφάσεις</h1>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ενδεικτικές δικαστικές αποφάσεις που αντικατοπτρίζουν την εξειδίκευση 
              και την αποτελεσματικότητα του γραφείου μας.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decisions.map((d) => (
              <div key={d.id} className="premium-card">
                <span className="text-xs tracking-widest font-body text-accent">{d.year}</span>
                <h2 className="font-heading text-lg mt-3 mb-4">{d.title}</h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{d.excerpt}</p>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
                  Λεπτομέρειες <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
