import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import portraitImg from "../../images/image2.webp";

export default function ProfilePage() {
  return (
    <Layout>
      <SEOHead title="Βιογραφικό" description="Εμμανουήλ Βαμβουκάκης - Rechtsanwalt, Δικηγόρος. Απόφοιτος Philipps-Universität Marburg, LL.M Αστικού Δικαίου Πανεπιστημίου Αθηνών." canonical="/viografiko" />
      
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

              <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
                <p className="text-foreground text-lg">
                  Ο Εμμανουήλ Βαμβουκάκης είναι δικηγόρος με διεθνή ακαδημαϊκή κατάρτιση 
                  και πολυετή εμπειρία σε θέματα αστικού, εμπορικού και ποινικού δικαίου.
                </p>

                <h2 className="font-heading text-2xl text-foreground pt-4">Ακαδημαϊκή Κατάρτιση</h2>
                <div className="w-12 h-px bg-accent" />
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <div>
                      <p className="text-foreground font-medium">Philipps-Universität Marburg, Deutschland</p>
                      <p className="text-sm">Σπουδές Νομικής στη Γερμανία</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">—</span>
                    <div>
                      <p className="text-foreground font-medium">LL.M Αστικού Δικαίου</p>
                      <p className="text-sm">Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών</p>
                    </div>
                  </li>
                </ul>

                <h2 className="font-heading text-2xl text-foreground pt-4">Φιλοσοφία Παροχής Υπηρεσιών</h2>
                <div className="w-12 h-px bg-accent" />
                <p>
                  Η προσωπική ενασχόληση με κάθε υπόθεση, η συνεχής ενημέρωση για τις 
                  εξελίξεις της νομολογίας και η διαφανής επικοινωνία με τον εντολέα 
                  αποτελούν τους πυλώνες της επαγγελματικής μου δεοντολογίας.
                </p>
                <p>
                  Η εμπειρία μου στη Γερμανία μου έχει δώσει μια ευρωπαϊκή οπτική 
                  γωνία στη νομική πρακτική, ενώ η εξειδίκευση στο Αστικό Δίκαιο μου 
                  επιτρέπει να αντιμετωπίζω σύνθετα ζητήματα με ακρίβεια και μεθοδικότητα.
                </p>

                <h2 className="font-heading text-2xl text-foreground pt-4">Γλώσσες</h2>
                <div className="w-12 h-px bg-accent" />
                <div className="flex gap-8">
                  {["Ελληνικά", "Γερμανικά", "Αγγλικά"].map((l) => (
                    <span key={l} className="text-foreground">{l}</span>
                  ))}
                </div>

                <h2 className="font-heading text-2xl text-foreground pt-4">Τοποθεσία</h2>
                <div className="w-12 h-px bg-accent" />
                <p>Πειραιώς 6, Ομόνοια, ΤΚ 10434, Αθήνα</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
