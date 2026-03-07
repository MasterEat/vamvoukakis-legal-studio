import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function CookiesPage() {
  return (
    <Layout>
      <SEOHead title="Πολιτική Cookies" description="Πολιτική χρήσης cookies του ιστοτόπου advocat.gr." canonical="/cookies" />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl mb-8">Πολιτική Cookies</h1>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>Ο ιστότοπος advocat.gr χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας περιήγησης. Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας.</p>
            <h2 className="font-heading text-xl text-foreground pt-4">Τύποι Cookies</h2>
            <p><strong className="text-foreground">Απαραίτητα:</strong> Εξασφαλίζουν τη βασική λειτουργικότητα του ιστοτόπου.</p>
            <p><strong className="text-foreground">Ανάλυσης:</strong> Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε τον ιστότοπο.</p>
            <h2 className="font-heading text-xl text-foreground pt-4">Διαχείριση Cookies</h2>
            <p>Μπορείτε να διαχειριστείτε τις ρυθμίσεις cookies μέσω του φυλλομετρητή σας.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
