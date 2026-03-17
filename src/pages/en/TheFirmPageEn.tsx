import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function TheFirmPageEn() {
  return (
    <Layout>
      <SEOHead
        title="The Firm"
        description="Philosophy and approach of Vamvoukakis Law Office. Personalized legal guidance with trust and discretion."
        canonical="/en/the-firm"
        lang="en"
        hrefLangs={[
          { lang: "el", href: "/to-grafeio" },
          { lang: "en", href: "/en/the-firm" },
          { lang: "de", href: "/de/kanzlei" },
        ]}
      />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">The Firm</h1>
          <div className="w-16 h-px bg-accent mb-12" />
          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground text-lg">Vamvoukakis Law Office was founded to deliver high-quality legal services built on academic excellence and practical experience.</p>
            <p>Our philosophy centers on building personal relationships of trust with each client. Every case is treated as unique, with full respect for the specific needs and expectations of each individual.</p>
            <p>Based in Omonoia, Athens, we serve individuals and businesses across Attica, providing legal guidance in civil, criminal, commercial and real estate law.</p>
            <h2 className="font-heading text-2xl text-foreground pt-8">Our Approach</h2>
            <div className="w-12 h-px bg-accent" />
            <p>We believe effective legal representation requires deep understanding of both the legal framework and the human element. Our studies in Germany and Greece provide a European perspective, while extensive experience ensures practical, reliable solutions.</p>
            <h2 className="font-heading text-2xl text-foreground pt-8">Values</h2>
            <div className="w-12 h-px bg-accent" />
            <ul className="space-y-3">
              {["Personalized legal approach", "Confidentiality and discretion", "Academic excellence and continuous development", "Human communication and respect"].map((v) => (
                <li key={v} className="flex items-start gap-3"><span className="text-accent mt-1">—</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
