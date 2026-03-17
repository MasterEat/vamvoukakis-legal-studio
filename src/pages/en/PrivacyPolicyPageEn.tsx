import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicyPageEn() {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="Privacy policy and personal data protection information for Vamvoukakis Legal Studio."
        canonical="/en/privacy-policy"
        lang="en"
      />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <h2 className="font-heading text-xl text-foreground">Data Controller</h2>
            <p>
              The website data controller is Vamvoukakis Legal Studio, Pireos 6, Omonia, 10434 Athens,
              Greece.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Data We Collect</h2>
            <p>
              Through the contact form, we collect the data you submit: name, phone number, email address,
              and message content.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Purpose of Processing</h2>
            <p>
              This data is collected solely to communicate with you regarding your request and to respond to
              your inquiry.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Data Sharing</h2>
            <p>
              Your personal data is not shared with third parties except where necessary for technical
              service providers that support the website and communication services. The contact form is
              processed through Formspree.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Your Rights</h2>
            <p>
              You have rights regarding your personal data, including access, correction, deletion,
              restriction of processing, objection, and data portability, as provided by applicable law.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Privacy Contact</h2>
            <p>For privacy-related requests, please contact: emmanouil.vamvoukakis@outlook.com.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
