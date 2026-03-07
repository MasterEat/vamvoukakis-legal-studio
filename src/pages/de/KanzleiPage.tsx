import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function KanzleiPage() {
  return (
    <Layout>
      <SEOHead title="Kanzlei" description="Philosophie und Ansatz der Kanzlei Vamvoukakis. Personalisierte Rechtsberatung mit Vertrauen und Diskretion." canonical="/de/kanzlei" lang="de" />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">Die Kanzlei</h1>
          <div className="w-16 h-px bg-accent mb-12" />
          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground text-lg">Die Kanzlei Vamvoukakis wurde gegründet, um hochwertige Rechtsdienstleistungen zu erbringen, die auf akademischer Exzellenz und praktischer Erfahrung basieren.</p>
            <p>Unsere Philosophie konzentriert sich auf den Aufbau persönlicher Vertrauensbeziehungen mit jedem Mandanten. Jeder Fall wird als einzigartig behandelt, mit vollem Respekt für die spezifischen Bedürfnisse.</p>
            <p>Mit Sitz in Kefalari, Kifissia, betreuen wir Privatpersonen und Unternehmen in ganz Attika und bieten Rechtsberatung im Zivil-, Straf-, Handels- und Immobilienrecht.</p>
            <h2 className="font-heading text-2xl text-foreground pt-8">Werte</h2>
            <div className="w-12 h-px bg-accent" />
            <ul className="space-y-3">
              {["Personalisierter rechtlicher Ansatz", "Vertraulichkeit und Diskretion", "Akademische Exzellenz", "Menschliche Kommunikation und Respekt"].map((v) => (
                <li key={v} className="flex items-start gap-3"><span className="text-accent mt-1">—</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
