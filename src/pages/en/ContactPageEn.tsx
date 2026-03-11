import { MapPin, Phone, Mail, Clock3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function ContactPageEn() {
  return (
    <Layout>
      <SEOHead title="Contact" description="Contact Vamvoukakis Law Office. Pireos 6, Omonoia, 10434 Athens. Schedule a consultation." canonical="/en/contact" lang="en" />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Contact</h1>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">We are at your disposal for any legal inquiry. Do not hesitate to contact us to schedule a consultation.</p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4"><MapPin size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Address</p><p className="text-muted-foreground font-body text-sm">Pireos 6, Omonoia, 10434 Athens</p></div></div>
                <div className="flex items-start gap-4"><Phone size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Phone</p><p className="text-muted-foreground font-body text-sm">+30 693 632 4806</p></div></div>
                <div className="flex items-start gap-4"><Mail size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Email</p><p className="text-muted-foreground font-body text-sm">emmanouil.vamvoukakis@outlook.com</p></div></div>
                <div className="flex items-start gap-4"><Clock3 size={20} className="text-accent mt-1 shrink-0" /><div><p className="font-body font-medium text-foreground">Office Hours</p><p className="text-muted-foreground font-body text-sm">Monday – Friday, 09:00 – 21:00</p><p className="text-muted-foreground font-body text-sm">By appointment only</p></div></div>
              </div>
              <div className="w-full h-64 bg-muted flex items-center justify-center"><p className="text-muted-foreground font-body text-sm">Map — Pireos 6, Omonoia, 10434 Athens</p></div>
            </div>
            <div>
              <div className="premium-card">
                <h2 className="font-heading text-2xl mb-6">Contact Form</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Full Name</label><input type="text" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Phone</label><input type="tel" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Email</label><input type="email" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" /></div>
                  <div><label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Message</label><textarea rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" /></div>
                  <Button variant="default" size="lg" className="w-full">Send <ArrowRight size={14} /></Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
