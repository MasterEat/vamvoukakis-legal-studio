import { Link } from "react-router-dom";
import { ArrowRight, Scale, Building2, Briefcase, Home, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-law-office.jpg";
import portraitImg from "../../../images/image1.webp";
import { contactDetails } from "@/lib/contactSeo";

const practiceAreas = [
  { icon: Scale, title: "Zivilrecht", desc: "Familien-, Erb-, Schuld- und Sachenrecht mit spezialisierter Expertise und persönlichem Ansatz." },
  { icon: Briefcase, title: "Strafrecht", desc: "Strafverteidigung und rechtliche Vertretung in Strafsachen jeder Instanz." },
  { icon: Building2, title: "Handelsrecht", desc: "Gesellschaftsrecht, Verträge, Handelsstreitigkeiten und umfassende rechtliche Unterstützung." },
  { icon: Home, title: "Immobilienrecht", desc: "Kauf und Verkauf, Mietrecht, Grundbuch und Immobilienverwaltung." },
];

export default function HomePageDe() {
  return (
    <Layout>
      <SEOHead
        title="Anwalt in Athen | Zivilrecht & Immobilienrecht | Emmanouil Vamvoukakis"
        description="Anwaltskanzlei in Athen mit Spezialisierung auf Zivilrecht und Immobilienrecht. Verantwortungsvolle und strategische rechtliche Unterstützung für Privatpersonen und Unternehmen."
        canonical="/de"
        lang="de"
        hrefLangs={[
          { lang: "el", href: "/" },
          { lang: "en", href: "/en" },
          { lang: "de", href: "/de" },
        ]}
      />

      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kanzlei Vamvoukakis Büro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container-wide pt-28 pb-20 md:pt-36">
          <div className="max-w-3xl">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Kanzlei<br /><span className="italic font-normal">Vamvoukakis</span>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg font-body leading-relaxed max-w-xl mb-10">

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-primary" asChild><Link to="/de/kontakt">Termin Vereinbaren</Link></Button>
              <Button variant="hero-outline" asChild><Link to="/de/rechtsgebiete">Unsere Rechtsgebiete</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-8">Vertrauensvolle Rechtsberatung</h2>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Unsere Kanzlei bietet hochwertige, personalisierte Rechtsdienstleistungen, die akademische Exzellenz mit praktischer Erfahrung verbinden.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4">Rechtsgebiete</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {practiceAreas.map((area) => (
              <Link key={area.title} to="/de/rechtsgebiete" className="premium-card group">
                <area.icon size={28} className="text-accent mb-6" />
                <h3 className="font-heading text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">{area.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{area.desc}</p>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 group-hover:gap-3 transition-all">Mehr Erfahren <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div><img src={portraitImg} alt="Emmanouil Vamvoukakis" className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] object-cover" loading="lazy" /></div>
            <div>
              <div className="gold-divider-left mb-8" />
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-6">Emmanouil Vamvoukakis</h2>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-6">Rechtsanwalt</p>
              <ul className="space-y-3 mb-8">
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2"><span className="text-accent mt-1">—</span> Philipps-Universität Marburg, Deutschland</li>
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2"><span className="text-accent mt-1">—</span> LL.M im Zivilrecht, Universität Athen</li>

              </ul>
              <Button variant="outline" asChild><Link to="/de/profil">Vollständiges Profil <ArrowRight size={14} /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-6">Kontakt</h2>
          <div className="space-y-4 mb-10 max-w-2xl mx-auto">
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Adresse:</span> {contactDetails.addressLine}</p>
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Telefon:</span> <a href={contactDetails.telUri} className="hover:text-accent transition-colors">{contactDetails.telephone}</a></p>
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">E-Mail:</span> <a href={contactDetails.emailUri} className="hover:text-accent transition-colors break-all">{contactDetails.email}</a></p>
            <div className="flex items-start justify-center gap-2 text-primary-foreground/80 font-body">
              <Clock3 size={16} className="text-accent mt-1 shrink-0" />
              <div>
                <p><span className="text-primary-foreground/55">Öffnungszeiten:</span> {contactDetails.officeHours.de[0]}</p>
                <p>{contactDetails.officeHours.de[1]}</p>
              </div>
            </div>
          </div>
          <Button variant="hero-outline" asChild><Link to="/de/kontakt">Termin Vereinbaren <ArrowRight size={14} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
}
