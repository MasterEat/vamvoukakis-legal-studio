import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function DatenschutzerklarungPage() {
  return (
    <Layout>
      <SEOHead
        title="Datenschutzerklärung"
        description="Datenschutzerklärung und Informationen zum Schutz personenbezogener Daten der Kanzlei Vamvoukakis."
        canonical="/de/datenschutzerklarung"
        lang="de"
      />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl mb-8">Datenschutzerklärung</h1>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <h2 className="font-heading text-xl text-foreground">Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist die Kanzlei Vamvoukakis,
              Pireos 6, Omonia, 10434 Athen, Griechenland.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Welche Daten wir erheben</h2>
            <p>
              Über das Kontaktformular erheben wir die von Ihnen eingegebenen Daten: Name, Telefonnummer,
              E-Mail-Adresse und Inhalt Ihrer Nachricht.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Zweck der Verarbeitung</h2>
            <p>
              Diese Daten werden ausschließlich verwendet, um Ihre Anfrage zu bearbeiten und mit Ihnen in
              Bezug auf Ihr Anliegen zu kommunizieren.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Weitergabe an Dritte</h2>
            <p>
              Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, außer soweit dies für
              technische Dienstleister erforderlich ist, die den Betrieb der Website und der
              Kommunikationsdienste ermöglichen. Die Verarbeitung des Kontaktformulars erfolgt über
              Formspree.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Ihre Rechte</h2>
            <p>
              Sie haben Rechte in Bezug auf Ihre personenbezogenen Daten, insbesondere auf Auskunft,
              Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit
              gemäß den geltenden gesetzlichen Bestimmungen.
            </p>
            <h2 className="font-heading text-xl text-foreground pt-4">Kontakt zum Datenschutz</h2>
            <p>
              Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:
              emmanouil.vamvoukakis@outlook.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
