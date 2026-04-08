import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function LawLessonsPage() {
  return (
    <Layout>
      <SEOHead
        title="Μαθήματα Νομικής | Προετοιμασία σε Αστικό Δίκαιο & Πολιτική Δικονομία"
        description="Μαθήματα Νομικής για Δοκιμασία Επάρκειας, κατατακτήριες και φοιτητές Νομικής, με έμφαση σε Αστικό Δίκαιο και Πολιτική Δικονομία, μέσω WebEx."
        canonical="/mathimata-nomikis"
        lang="el"
        hrefLangs={[{ lang: "el", href: "/mathimata-nomikis" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Μαθήματα Νομικής – Προετοιμασία για Εξετάσεις Αστικού Δικαίου & Πολιτικής Δικονομίας
              </h1>
              <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg mb-8 max-w-2xl">
                Εξειδικευμένη προετοιμασία για φοιτητές Νομικής, κατατακτήριες εξετάσεις και τη Δοκιμασία Επάρκειας του άρθρου 16 του Κώδικα Δικηγόρων.
              </p>
              <Button variant="default" asChild>
                <a href="#epikoinonia-mathimata">
                  Δήλωσε Ενδιαφέρον <ArrowRight size={14} />
                </a>
              </Button>
            </div>

            <div className="premium-card p-4 md:p-5 lg:p-6">
              <div className="aspect-video overflow-hidden rounded-sm border border-border bg-black/5">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/eYT8xW4fzfU"
                  title="Μαθήματα Νομικής - Προετοιμασία εξετάσεων"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl mb-6">Προετοιμασία Εξετάσεων Νομικής</h2>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              Προετοιμασία Εξετάσεων Νομικής στα μαθήματα Αστικό Δίκαιο & Πολιτική Δικονομία για:
            </p>
            <ul className="space-y-3">
              {[
                "Δοκιμασία Επάρκειας του άρθρου 16 του Κώδικα Δικηγόρων",
                "Κατατακτήριες εξετάσεις Νομικών Σχολών",
                "Νομικές Σχολές",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Η επιτυχία στις εξετάσεις επάρκειας απαιτεί κάτι περισσότερο από απλή ανάγνωση: απαιτεί συστηματική προσέγγιση, ορθή νομική μεθοδολογία και εξοικείωση με τη δομή των θεμάτων.
            </p>
            <p>
              Προσφέρω εξειδικευμένα τμήματα προετοιμασίας αποκλειστικά μέσω της πλατφόρμας WebEx, συνδυάζοντας την ευελιξία της εξ αποστάσεως εκπαίδευσης με την αμεσότητα του ζωντανού μαθήματος.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-3">Τι περιλαμβάνει το πρόγραμμα</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="premium-card">
              <h3 className="font-heading text-xl mb-4">Αστικό Δίκαιο</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                Εστίαση στις θεμελιώδεις έννοιες του Αστικού Δικαίου (Γενικές Αρχές, Ενοχικό, Εμπράγματο, Οικογενειακό, Κληρονομικό).
              </p>
            </article>
            <article className="premium-card">
              <h3 className="font-heading text-xl mb-4">Πολιτική Δικονομία</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                Πλήρης καθοδήγηση στη διαδικασία (Αγωγές, Ένδικα Μέσα, Αναγκαστική Εκτέλεση) με έμφαση στις πρόσφατες τροποποιήσεις του ΚΠολΔ.
              </p>
            </article>
            <article className="premium-card">
              <h3 className="font-heading text-xl mb-4">Επίλυση Πρακτικών</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                Κάθε μάθημα περιλαμβάνει ανάλυση πραγματικών θεμάτων παρελθόντων ετών, διδάσκοντας τον τρόπο σκέψης επίλυσης πρακτικών.
              </p>
            </article>
            <article className="premium-card">
              <h3 className="font-heading text-xl mb-4">Σημειώσεις & Υλικό</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">
                Παροχή στοχευμένου υλικού για γρήγορη επανάληψη.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl mb-6">Τρόπος διεξαγωγής</h2>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg">
            Τα μαθήματα πραγματοποιούνται online μέσω WebEx, με ζωντανή διδασκαλία και δυνατότητα άμεσης αλληλεπίδρασης.
          </p>
        </div>
      </section>

      <section id="epikoinonia-mathimata" className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto premium-card bg-background">
            <h2 className="font-heading text-2xl md:text-3xl mb-8">Επικοινωνία</h2>
            <div className="space-y-4 font-body text-muted-foreground mb-8">
              <p className="text-foreground font-heading text-xl">ΒΑΜΒΟΥΚΑΚΗΣ ΕΜΜΑΝΟΥΗΛ</p>
              <p>ΔΙΚΗΓΟΡΟΣ (ΔΣΑ 24321)</p>
              <p>ΠΜΔ Αστικού Δικαίου Παν. Αθηνών</p>
              <p className="flex items-start gap-3"><MapPin size={18} className="text-accent mt-0.5 shrink-0" /> ΓΟΥΝΑΡΗ 5Α, ΚΕΦΑΛΑΡΙ - ΚΗΦΙΣΙΑ</p>
              <p className="flex items-start gap-3"><Phone size={18} className="text-accent mt-0.5 shrink-0" /> <a className="hover:text-accent transition-colors" href="tel:+306936324806">ΚΙΝ. 693-6324806</a></p>
              <p className="flex items-start gap-3 break-all"><Mail size={18} className="text-accent mt-0.5 shrink-0" /> <a className="hover:text-accent transition-colors" href="mailto:emmanouil.vamvoukakis@outlook.com">emmanouil.vamvoukakis@outlook.com</a></p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" asChild>
                <Link to="/epikoinonia">Επικοινώνησε για πληροφορίες</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/epikoinonia">Δήλωσε ενδιαφέρον</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
