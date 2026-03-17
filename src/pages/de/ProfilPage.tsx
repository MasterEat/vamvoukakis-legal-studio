import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import portraitImg from "../../../images/image2.webp";

const academicMilestones = [
  {
    title: "Jurastudium in Deutschland",
    details: "Philipps-Universität Marburg",
  },
  {
    title: "Juristische Ausbildung in Frankfurt",
    details: "Praktische und akademische Vertiefung in der deutschen Rechtstradition",
  },
  {
    title: "LL.M im Zivilrecht",
    details: "Nationale und Kapodistrias-Universität Athen",
  },
];

const professionalActivity = [
  {
    title: "Rechtsanwalt seit 2002",
    description: "Kontinuierliche anwaltliche Tätigkeit mit Schwerpunkt auf verantwortungsvoller rechtlicher Betreuung in Angelegenheiten des Privatrechts.",
  },
  {
    title: "Selbstständige anwaltliche Tätigkeit seit 2003",
    description: "Persönliche Betreuung jeder Angelegenheit mit direkter Kommunikation, Diskretion und strategischer Konsequenz.",
  },
  {
    title: "Langjährige praktische Erfahrung",
    description:
      "Erfahrung in Verträgen, Immobilienübertragungen, Mietverhältnissen, familienrechtlichen und erbrechtlichen Angelegenheiten mit Fokus auf den Kern jeder rechtlichen Streitigkeit.",
  },
];

const legalAreas = [
  "Zivilrecht",
  "Vertragsrecht",
  "Immobilienübertragungen",
  "Mietrecht",
  "Immobilienrechtliche Beratung",
  "Familienrecht",
  "Erbrecht",
  "Rechtsberatung",
];

export default function ProfilPage() {
  const [hasCvPdf, setHasCvPdf] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkCvFile = async () => {
      try {
        const response = await fetch("/cv.pdf", { method: "HEAD" });
        if (isMounted) {
          setHasCvPdf(response.ok);
        }
      } catch {
        if (isMounted) {
          setHasCvPdf(false);
        }
      }
    };

    void checkCvFile();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout>
      <SEOHead title="Emmanouil Vamvoukakis | Anwalt in Athen" description="Emmanouil Vamvoukakis - Rechtsanwalt. Absolvent der Philipps-Universität Marburg, LL.M im Zivilrecht." canonical="/de/profil" lang="de" hrefLangs={[{ lang: "el", href: "/viografiko" }, { lang: "en", href: "/en/profile" }, { lang: "de", href: "/de/profil" }]} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <img
                src={portraitImg}
                alt="Emmanouil Vamvoukakis"
                className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover sticky top-28"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-3">
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-2">Emmanouil Vamvoukakis</h1>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-10">Rechtsanwalt – LL.M im Zivilrecht</p>

              <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
                <section className="space-y-5">
                  <h2 className="font-heading text-2xl text-foreground">Berufliches Profil</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground text-lg">
                    Emmanouil Vamvoukakis verfügt über internationale akademische Ausbildung und langjährige anwaltliche Erfahrung mit einem
                    kontinuierlichen Schwerpunkt im privaten Zivilrecht sowie in der verantwortungsvollen Vertretung von Privatpersonen und
                    Unternehmen.
                  </p>
                  <p>
                    Seine anwaltliche Tätigkeit basiert auf persönlicher Betreuung jeder einzelnen Angelegenheit, methodischer Vorbereitung und klarer
                    strategischer Ausrichtung, damit die rechtliche Unterstützung den tatsächlichen Bedürfnissen des Mandanten entspricht.
                  </p>
                  <p>
                    Mit besonderem Augenmerk auf Präzision, Zuverlässigkeit und Qualität der Rechtsberatung wird eine individuelle rechtliche
                    Begleitung vom ersten Bewertungsstadium bis zum Abschluss der Angelegenheit gewährleistet.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Akademische Ausbildung</h2>
                  <div className="w-12 h-px bg-accent" />
                  <ul className="space-y-4">
                    {academicMilestones.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="text-accent mt-1">—</span>
                        <div>
                          <p className="text-foreground font-medium">{item.title}</p>
                          <p className="text-sm">{item.details}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Berufliche Tätigkeit</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {professionalActivity.map((item) => (
                      <article key={item.title} className="border border-border/60 bg-secondary/30 px-5 py-4 space-y-2 md:first:col-span-2">
                        <h3 className="text-foreground font-medium">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Rechtsgebiete</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {legalAreas.map((area) => (
                      <div key={area} className="border border-border/60 px-4 py-3 bg-background/70 text-foreground">
                        {area}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Rechtlicher Ansatz</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>
                    Jede Angelegenheit wird mit persönlicher Aufmerksamkeit und besonderer Sorgfalt behandelt, sodass die rechtliche Strategie mit den
                    tatsächlichen Umständen und den Zielen des Mandanten übereinstimmt.
                  </p>
                  <p>
                    Präzision in der rechtlichen Dokumentation, methodisches Vorgehen in den Verfahrensschritten sowie Transparenz in der Kommunikation
                    bilden grundlegende Prinzipien der Zusammenarbeit. Mandanten werden rechtzeitig über Optionen, Risiken und mögliche Entwicklungen
                    informiert.
                  </p>
                  <p>
                    Durch kontinuierliche Beobachtung der Rechtsprechung und gesetzlicher Entwicklungen wird jede Angelegenheit praxisnah und
                    strategisch behandelt, mit dem Ziel funktionaler Lösungen und rechtlicher Sicherheit.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Sprachen</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm tracking-wide">
                    {[
                      { label: "Griechisch", level: "Muttersprache" },
                      { label: "Deutsch", level: "Berufliche Sprachkompetenz" },
                      { label: "Englisch", level: "Berufliche Sprachkompetenz" },
                    ].map((language) => (
                      <div key={language.label} className="border border-border/60 px-4 py-3">
                        <p className="text-foreground">{language.label}</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{language.level}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Berufliche Mitgliedschaft</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground">Mitglied der Rechtsanwaltskammer Athen.</p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Lebenslauf</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>Die vollständige Version des Lebenslaufs kann als PDF heruntergeladen werden.</p>
                  {hasCvPdf ? (
                    <Button variant="outline" asChild>
                      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                        Vollständigen Lebenslauf herunterladen (PDF)
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      Vollständigen Lebenslauf herunterladen (PDF)
                    </Button>
                  )}
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Standort</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>Pireos Straße 6, Omonia, 10434 Athen, Griechenland</p>
                </section>

                <section className="border-t border-border/50 pt-8">
                  <div className="border border-border/60 bg-secondary/40 p-7 md:p-9">
                    <p className="text-foreground text-lg md:text-xl font-heading leading-relaxed mb-6">
                      Für eine persönliche Bewertung Ihrer Angelegenheit und verantwortungsvolle rechtliche Beratung kontaktieren Sie bitte die Kanzlei.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/de/kontakt">
                        Kontakt <ArrowRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
