import { MapPin, Phone, Mail, Clock3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function KontaktPage() {
  return (
    <Layout>
      <SEOHead title="Kontakt" description="Kontaktieren Sie die Kanzlei Vamvoukakis. Pireos 6, Omonoia, 10434 Athen. Vereinbaren Sie einen Termin." canonical="/de/kontakt" lang="de" />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Kontakt</h1>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">Wir stehen Ihnen für jede rechtliche Frage zur Verfügung. Zögern Sie nicht, uns für eine Terminvereinbarung zu kontaktieren.</p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4"><MapPin size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Adresse</p><p className="text-muted-foreground font-body text-sm">Pireos 6, Omonoia, 10434 Athen</p></div></div>
                <div className="flex items-start gap-4"><Phone size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Telefon</p><p className="text-muted-foreground font-body text-sm">+30 693 632 4806</p></div></div>
                <div className="flex items-start gap-4"><Mail size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">E-Mail</p><p className="text-muted-foreground font-body text-sm">emmanouil.vamvoukakis@outlook.com</p></div></div>
                <div className="flex items-start gap-4"><Clock3 size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Öffnungszeiten</p><p className="text-muted-foreground font-body text-sm">Montag – Freitag, 09:00 – 21:00</p><p className="text-muted-foreground font-body text-sm">Nur nach Terminvereinbarung</p></div></div>
              </div>
              <div className="w-full h-64 bg-muted flex items-center justify-center"><p className="text-muted-foreground font-body text-sm">Karte — Pireos 6, Omonoia, 10434 Athen</p></div>
            </div>
            <div>
              <div className="premium-card">
                <h2 className="font-heading text-2xl mb-6">Kontaktformular</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Vollständiger Name</label><input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Telefon</label><input type="tel" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">E-Mail</label><input type="email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Nachricht</label><textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" /></div>
                  <Button variant="default" size="lg" className="w-full">Senden <ArrowRight size={14} /></Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
