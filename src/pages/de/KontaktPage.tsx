import { ArrowRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { contactDetails, getContactStructuredData } from "@/lib/contactSeo";

export default function KontaktPage() {
  return (
    <Layout>
      <SEOHead
        title="Kontakt | Vamvoukakis Legal Studio"
        description="Kontaktdaten und Kontaktformular des Vamvoukakis Legal Studio."
        canonical="/de/kontakt"
        structuredData={getContactStructuredData("de", "/de/kontakt")}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">Kontakt</h1>
              <p className="font-heading text-lg text-foreground mb-6">{contactDetails.officeName}</p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground font-body">{contactDetails.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Telefon</p>
                    <a href={contactDetails.telUri} className="text-muted-foreground font-body hover:text-accent transition-colors">
                      {contactDetails.telephone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">E-Mail</p>
                    <a href={contactDetails.emailUri} className="text-muted-foreground font-body hover:text-accent transition-colors break-all">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock3 size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Öffnungszeiten</p>
                    {contactDetails.officeHours.de.map((line) => (
                      <p key={line} className="text-muted-foreground font-body">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="premium-card">
                <h2 className="font-heading text-2xl mb-6">Kontaktformular</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Vollständiger Name</label>
                    <input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Telefon</label>
                    <input type="tel" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">E-Mail</label>
                    <input type="email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Nachricht</label>
                    <textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <Button variant="default" size="lg" className="w-full">
                    Senden <ArrowRight size={14} />
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
