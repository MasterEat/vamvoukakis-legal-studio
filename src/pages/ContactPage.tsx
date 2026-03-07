import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function ContactPage() {
  return (
    <Layout>
      <SEOHead title="Επικοινωνία" description="Επικοινωνήστε με το Δικηγορικό Γραφείο Βαμβουκάκη. Γούναρη 5Α, Κεφαλάρι - Κηφισιά. Κλείστε ραντεβού." canonical="/epikoinonia" />
      
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Επικοινωνία</h1>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">
                Είμαστε στη διάθεσή σας για κάθε νομικό ερώτημα. Μη διστάσετε να 
                επικοινωνήσετε μαζί μας για να κλείσετε ένα ραντεβού ή να συζητήσουμε 
                την υπόθεσή σας.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Διεύθυνση</p>
                    <p className="text-muted-foreground font-body text-sm">Γούναρη 5Α, Κεφαλάρι - Κηφισιά</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Τηλέφωνο</p>
                    <p className="text-muted-foreground font-body text-sm">+30 210 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground font-body text-sm">info@advocat.gr</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground font-body text-sm">Χάρτης — Google Maps Embed</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="premium-card">
                <h2 className="font-heading text-2xl mb-6">Φόρμα Επικοινωνίας</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Ονοματεπώνυμο</label>
                    <input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Τηλέφωνο</label>
                    <input type="tel" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Email</label>
                    <input type="email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Μήνυμα</label>
                    <textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <Button variant="default" size="lg" className="w-full">
                    Αποστολή <ArrowRight size={14} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
