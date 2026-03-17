import { ArrowRight, Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import DirectionsButton from "@/components/DirectionsButton";
import { contactDetails, getContactStructuredData } from "@/lib/contactSeo";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const hasConsent = formData.get("consent");

    if (!hasConsent) {
      setSubmitError("Παρακαλούμε αποδεχτείτε την Πολιτική Απορρήτου.");
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
      setSubmitError("Παρουσιάστηκε σφάλμα κατά την αποστολή. Παρακαλούμε δοκιμάστε ξανά.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Επικοινωνία"
        description="Στοιχεία επικοινωνίας και φόρμα επικοινωνίας του Δικηγορικού Γραφείου Βαμβουκάκη."
        canonical="/epikoinonia"
        lang="el"
        hrefLangs={[
          { lang: "el", href: "/epikoinonia" },
          { lang: "en", href: "/en/contact" },
          { lang: "de", href: "/de/kontakt" },
        ]}
        structuredData={getContactStructuredData("el", "/epikoinonia")}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">Επικοινωνία</h1>
              <p className="font-heading text-lg text-foreground mb-6">{contactDetails.officeName}</p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Διεύθυνση</p>
                    <p className="text-muted-foreground font-body">{contactDetails.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-foreground">Τηλέφωνο</p>
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
                    <p className="font-body font-medium text-foreground">Ώρες Λειτουργίας</p>
                    {contactDetails.officeHours.el.map((line) => (
                      <p key={line} className="text-muted-foreground font-body">{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <DirectionsButton />
            </div>

            <div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-6">Επικοινωνία</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Είμαστε δίπλα σας για κάθε νομική σας ανάγκη.
                <br />
                <br />
                Η έγκαιρη νομική συμβουλή είναι ο καλύτερος τρόπος
                <br />
                για την πρόληψη προβλημάτων και τη διασφάλιση
                <br />
                των δικαιωμάτων σας.
                <br />
                <br />
                Στο γραφείο μας δίνουμε προτεραιότητα
                <br />
                στην άμεση ανταπόκριση και την προσωπική επαφή
                <br />
                με κάθε εντολέα.
              </p>
              <div className="premium-card">
                <h2 className="font-heading text-2xl mb-6">Φόρμα Επικοινωνίας</h2>
                {isSubmitted ? (
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    Το μήνυμά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
                  </p>
                ) : null}
                <form
                  className="space-y-5"
                  action="https://formspree.io/f/xpqyojpn"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value="Νέο μήνυμα από το advocat.gr" />
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Ονοματεπώνυμο</label>
                    <input type="text" name="name" required className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Τηλέφωνο</label>
                    <input type="tel" name="phone" className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Email</label>
                    <input type="email" name="email" required className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-muted-foreground mb-2">Μήνυμα</label>
                    <textarea name="message" required rows={5} className="w-full bg-background border border-border px-4 py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                  </div>
                  <div className="flex items-start gap-2">
                    <input id="consent" type="checkbox" name="consent" required className="mt-1" />
                    <label htmlFor="consent" className="font-body text-sm text-muted-foreground leading-relaxed">
                      Αποδέχομαι την{" "}
                      <Link to="/politiki-aporritou" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">
                        Πολιτική Απορρήτου
                      </Link>
                    </label>
                  </div>
                  {submitError ? <p className="font-body text-sm text-destructive">{submitError}</p> : null}
                  <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                    Αποστολή <ArrowRight size={14} />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="max-w-3xl mb-8">
              <h2 className="font-heading text-2xl md:text-3xl mb-3">Τοποθεσία Γραφείου</h2>
              <p className="text-muted-foreground font-body">Πειραιώς 6, Ομόνοια, Αθήνα · +30 693 632 4806 · emmanouil.vamvoukakis@outlook.com</p>
            </div>
            <div className="overflow-hidden rounded-md border border-border shadow-[0_18px_44px_-32px_rgba(0,0,0,0.9)]">
              <iframe
                src={contactDetails.mapEmbedUrl}
                title="Vamvoukakis Law Office map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
