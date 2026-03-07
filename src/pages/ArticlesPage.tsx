import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const articles = [
  { id: 1, title: "Ο νέος νόμος για τις ηλεκτρονικές συναλλαγές ακινήτων", date: "15 Φεβρουαρίου 2024", category: "Δίκαιο Ακινήτων", excerpt: "Ανάλυση του νομοθετικού πλαισίου που αλλάζει τον τρόπο μεταβίβασης ακινήτων στην Ελλάδα. Τι αλλάζει και πώς επηρεάζει τους ιδιοκτήτες." },
  { id: 2, title: "Δικαιώματα καταναλωτή σε ελαττωματικά προϊόντα", date: "28 Ιανουαρίου 2024", category: "Αστικό Δίκαιο", excerpt: "Τι προβλέπει η ελληνική και ευρωπαϊκή νομοθεσία για την προστασία του καταναλωτή. Πρακτικός οδηγός δικαιωμάτων." },
  { id: 3, title: "Αλλαγές στο οικογενειακό δίκαιο: Τι πρέπει να γνωρίζετε", date: "10 Δεκεμβρίου 2023", category: "Οικογενειακό Δίκαιο", excerpt: "Οι πρόσφατες τροποποιήσεις στον Αστικό Κώδικα σχετικά με τη συνεπιμέλεια τέκνων και οι πρακτικές επιπτώσεις τους." },
  { id: 4, title: "Πτώχευση μικρών επιχειρήσεων: Νέο πλαίσιο", date: "5 Νοεμβρίου 2023", category: "Εμπορικό Δίκαιο", excerpt: "Ο νέος πτωχευτικός νόμος και οι δυνατότητες που προσφέρει στις μικρομεσαίες επιχειρήσεις." },
  { id: 5, title: "Κτηματολόγιο: Συχνές ερωτήσεις και απαντήσεις", date: "20 Οκτωβρίου 2023", category: "Δίκαιο Ακινήτων", excerpt: "Πρακτικός οδηγός για τις δηλώσεις στο Κτηματολόγιο, τις προθεσμίες και τη διαδικασία διόρθωσης." },
  { id: 6, title: "Τα δικαιώματά σας ως εργαζόμενος", date: "8 Σεπτεμβρίου 2023", category: "Εργατικό Δίκαιο", excerpt: "Ανάλυση βασικών δικαιωμάτων στην εργασία: άδειες, υπερωρίες, απόλυση και αποζημίωση." },
];

export default function ArticlesPage() {
  return (
    <Layout>
      <SEOHead title="Άρθρα" description="Νομικά άρθρα, αναλύσεις και ενημέρωση για τρέχοντα νομοθετικά θέματα από το Δικηγορικό Γραφείο Βαμβουκάκη." canonical="/arthra" />
      
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Άρθρα</h1>
            <p className="text-muted-foreground font-body leading-relaxed">
              Νομικά άρθρα και αναλύσεις για τρέχοντα ζητήματα δικαίου, 
              με στόχο την ενημέρωση και την κατανόηση σύνθετων νομικών θεμάτων.
            </p>
          </div>

          {/* Featured article */}
          <div className="premium-card mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest font-body text-accent uppercase">{articles[0].category}</span>
              <span className="text-xs font-body text-muted-foreground">{articles[0].date}</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl mb-4">{articles[0].title}</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-2xl">{articles[0].excerpt}</p>
            <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
              Διαβάστε Περισσότερα <ArrowRight size={14} />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((a) => (
              <div key={a.id} className="premium-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-widest font-body text-accent uppercase">{a.category}</span>
                </div>
                <span className="text-xs font-body text-muted-foreground">{a.date}</span>
                <h3 className="font-heading text-lg mt-3 mb-4">{a.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{a.excerpt}</p>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
                  Διαβάστε <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
