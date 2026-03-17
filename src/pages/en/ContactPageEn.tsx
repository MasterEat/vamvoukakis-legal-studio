import { ArrowRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { contactDetails, getContactStructuredData } from "@/lib/contactSeo";

export default function ContactPageEn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const hasConsent = formData.get("consent");

    if (!hasConsent) {
      setSubmitError("Please accept the Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xpqyojpn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      form.reset();
    } catch {
      setSubmitError("An error occurred while sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact a Lawyer in Athens | Vamvoukakis Law Office"
        description="Contact details and contact form for Vamvoukakis Legal Studio."
        canonical="/en/contact"
        lang="en"
        hrefLangs={[
          { lang: "el", href: "/epikoinonia" },
          { lang: "en", href: "/en/contact" },
          { lang: "de", href: "/de/kontakt" },
        ]}
        structuredData={getContactStructuredData("en", "/en/contact")}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">Contact</h1>
              <p className="font-heading text-lg text-foreground mb-6">{contactDetails.officeName}</p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground font-body">{contactDetails.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Phone</p>
                    <a href={contactDetails.telUri} className="text-muted-foreground font-body hover:text-accent transition-colors">
                      {contactDetails.telephone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <a href={contactDetails.emailUri} className="text-muted-foreground font-body hover:text-accent transition-colors break-all">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock3 size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Office Hours</p>
                    {contactDetails.officeHours.en.map((line) => (
                      <p key={line} className="text-muted-foreground font-body">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="premium-card">
                <h2 className="font-heading text-2xl mb-6">Contact Form</h2>
                {isSubmitted ? (
                  <p className="font-body text-sm text-foreground leading-relaxed mb-5">
                    Your message has been sent successfully. We will contact you as soon as possible.
                  </p>
                ) : null}
                <form
                  className="space-y-5"
                  action="https://formspree.io/f/xpqyojpn"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value="New message from advocat.gr" />
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Full Name</label>
                    <input type="text" name="name" required className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Phone</label>
                    <input type="tel" name="phone" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Email</label>
                    <input type="email" name="email" required className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Message</label>
                    <textarea name="message" required rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <div className="flex items-start gap-2">
                    <input id="consent" type="checkbox" name="consent" required className="mt-1" />
                    <label htmlFor="consent" className="font-body text-sm text-muted-foreground leading-relaxed">
                      I accept the{" "}
                      <Link to="/en/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {submitError ? <p className="font-body text-sm text-destructive">{submitError}</p> : null}
                  <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                    Send <ArrowRight size={14} />
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
