import { Link } from "react-router-dom";
import { ArrowRight, Scale, Building2, Briefcase, Home, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-law-office.jpg";
import portraitImg from "../../../images/image1.webp";
import { contactDetails } from "@/lib/contactSeo";

const practiceAreas = [
  { icon: Scale, title: "Civil Law", desc: "Family, inheritance, contract and property law with specialized expertise and a personal approach.", path: "/en/practice-areas" },
  { icon: Briefcase, title: "Criminal Law", desc: "Defense and legal representation in criminal cases at every level.", path: "/en/practice-areas" },
  { icon: Building2, title: "Commercial Law", desc: "Corporate law, contracts, commercial disputes and comprehensive business legal support.", path: "/en/practice-areas" },
  { icon: Home, title: "Real Estate Law", desc: "Sales, leases, land registry and real estate asset management.", path: "/en/practice-areas" },
];

export default function HomePageEn() {
  return (
    <Layout>
      <SEOHead
        title="Law Office"
        description="Vamvoukakis Law Office in Athens offers trusted legal services in civil, criminal, commercial and real estate law."
        canonical="/en"
        lang="en"
        hrefLangs={[
          { lang: "el", href: "/" },
          { lang: "en", href: "/en" },
          { lang: "de", href: "/de" },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vamvoukakis Law Office interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container-wide pt-28 pb-20 md:pt-36">
          <div className="max-w-3xl">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Vamvoukakis<br /><span className="italic font-normal">Law Office</span>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg font-body leading-relaxed max-w-xl mb-10">

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-primary" asChild><Link to="/en/contact">Schedule a Consultation</Link></Button>
              <Button variant="hero-outline" asChild><Link to="/en/practice-areas">Our Practice Areas</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <div className="gold-divider mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-8">Legal Guidance You Can Trust</h2>
          <p className="text-muted-foreground font-body leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Our firm provides high-quality, personalized legal services combining academic excellence with practical experience. Every case is handled with discretion, professionalism and dedicated personal attention.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="gold-divider mb-8" />
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4">Practice Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {practiceAreas.map((area) => (
              <Link key={area.title} to={area.path} className="premium-card group">
                <area.icon size={28} className="text-accent mb-6" />
                <h3 className="font-heading text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">{area.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{area.desc}</p>
                <span className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img src={portraitImg} alt="Emmanouil Vamvoukakis" className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/4] object-cover" loading="lazy" />
            </div>
            <div>
              <div className="gold-divider-left mb-8" />
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-6">Emmanouil Vamvoukakis</h2>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-6">Rechtsanwalt · Attorney at Law</p>
              <ul className="space-y-3 mb-8">
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2"><span className="text-accent mt-1">—</span> Philipps-Universität Marburg, Germany</li>
                <li className="text-muted-foreground font-body text-sm flex items-start gap-2"><span className="text-accent mt-1">—</span> LL.M in Civil Law, University of Athens</li>

              </ul>
              <Button variant="outline" asChild><Link to="/en/profile">Full Profile <ArrowRight size={14} /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground mb-6">Get in Touch</h2>
          <div className="space-y-4 mb-10 max-w-2xl mx-auto">
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Address:</span> {contactDetails.addressLine}</p>
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Phone:</span> <a href={contactDetails.telUri} className="hover:text-accent transition-colors">{contactDetails.telephone}</a></p>
            <p className="text-primary-foreground/80 font-body"><span className="text-primary-foreground/55">Email:</span> <a href={contactDetails.emailUri} className="hover:text-accent transition-colors break-all">{contactDetails.email}</a></p>
            <div className="flex items-start justify-center gap-2 text-primary-foreground/80 font-body">
              <Clock3 size={16} className="text-accent mt-1 shrink-0" />
              <div>
                <p><span className="text-primary-foreground/55">Office Hours:</span> {contactDetails.officeHours.en[0]}</p>
                <p>{contactDetails.officeHours.en[1]}</p>
              </div>
            </div>
          </div>
          <Button variant="hero-outline" asChild><Link to="/en/contact">Schedule a Consultation <ArrowRight size={14} /></Link></Button>
        </div>
      </section>
    </Layout>
  );
}
