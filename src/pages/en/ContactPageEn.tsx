import { MapPin, Phone, Mail, Clock, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { contactDetails, getContactStructuredData } from "@/lib/contactSeo";

export default function ContactPageEn() {
  return (
    <Layout>
      <SEOHead
        title="Contact"
        description="Contact Vamvoukakis Law Office at Pireos 6, Omonoia, Athens. By-appointment legal consultations for Athens, Attica and the wider Athens area."
        canonical="/en/contact"
        lang="en"
        structuredData={getContactStructuredData("en", "/en/contact")}
      />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">Contact</h1>
              <p className="font-heading text-lg text-foreground mb-6">{contactDetails.officeName}</p>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">
                Our office serves clients in Athens, Attica and the wider Athens metropolitan area,
                while also accepting selected matters across Greece by prior arrangement.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground font-body text-sm">{contactDetails.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Phone</p>
                    <a href={contactDetails.telUri} className="text-muted-foreground font-body text-sm hover:text-accent transition-colors">
                      {contactDetails.telephone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <a href={contactDetails.emailUri} className="text-muted-foreground font-body text-sm hover:text-accent transition-colors break-all">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Office hours</p>
                    <p className="text-muted-foreground font-body text-sm">Monday–Friday, 09:00–21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CalendarCheck size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Appointments</p>
                    <p className="text-muted-foreground font-body text-sm">By appointment only.</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-72 overflow-hidden border border-border">
                <iframe
                  title="Office map - Pireos 6, Omonoia"
                  src={contactDetails.mapEmbedUrl}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
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
