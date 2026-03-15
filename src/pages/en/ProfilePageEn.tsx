import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import portraitImg from "../../../images/image2.webp";

const academicMilestones = [
  {
    title: "Legal Studies in Germany",
    details: "Philipps-Universität Marburg",
  },
  {
    title: "Legal Training in Frankfurt",
    details: "Practical and academic engagement with the German legal tradition",
  },
  {
    title: "LL.M in Civil Law",
    details: "National and Kapodistrian University of Athens",
  },
];

const professionalActivity = [
  {
    title: "Lawyer since 2002",
    description: "Continuous legal practice focused on responsible legal support in matters of private law.",
  },
  {
    title: "Independent legal practice since 2003",
    description: "Personal handling of each case, with direct communication, discretion, and strategic consistency.",
  },
  {
    title: "Extensive practical experience",
    description:
      "Experience in contracts, real estate transfers, leases, family law matters, and inheritance cases, with emphasis on the substance of each dispute.",
  },
];

const legalAreas = [
  "Civil Law",
  "Contracts",
  "Real Estate Transfers",
  "Leases",
  "Real Estate Legal Support",
  "Family Law",
  "Inheritance Law",
  "Legal Advice",
];

export default function ProfilePageEn() {
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
      <SEOHead title="Profile" description="Emmanouil Vamvoukakis - Rechtsanwalt, Attorney at Law. Graduate of Philipps-Universität Marburg, LL.M in Civil Law." canonical="/en/profile" lang="en" hrefLangs={[{ lang: "el", href: "/viografiko" }, { lang: "en", href: "/en/profile" }, { lang: "de", href: "/de/profil" }]} />

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
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-10">Lawyer – LL.M in Civil Law</p>

              <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
                <section className="space-y-5">
                  <h2 className="font-heading text-2xl text-foreground">Professional Profile</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground text-lg">
                    Emmanouil Vamvoukakis has received international academic training and possesses extensive legal experience, with a consistent
                    focus on private civil law and the responsible representation of individuals and businesses.
                  </p>
                  <p>
                    His legal practice is based on personal involvement in every case, thorough preparation, and a clear strategic direction,
                    ensuring that legal support meaningfully addresses the needs of each client.
                  </p>
                  <p>
                    With emphasis on accuracy, consistency, and the quality of legal advice, individualized legal guidance is provided from the
                    initial case evaluation through to the final resolution of the matter.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Academic Background</h2>
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
                  <h2 className="font-heading text-2xl text-foreground">Professional Activity</h2>
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
                  <h2 className="font-heading text-2xl text-foreground">Areas of Legal Practice</h2>
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
                  <h2 className="font-heading text-2xl text-foreground">Legal Approach</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>
                    Each case is handled with personal attention and careful consideration of detail, ensuring that the legal strategy aligns with
                    the actual circumstances and the objectives of the client.
                  </p>
                  <p>
                    Accuracy in legal documentation, methodological handling of procedural stages, and transparency in communication constitute
                    fundamental principles of cooperation. Clients are informed in a timely manner about available options, potential risks, and
                    possible developments.
                  </p>
                  <p>
                    Through continuous monitoring of case law and legislative developments, each matter is approached practically and strategically,
                    aiming for effective solutions with legal certainty and consistency.
                  </p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Languages</h2>
                  <div className="w-12 h-px bg-accent" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm tracking-wide">
                    {[
                      { label: "Greek", level: "Native" },
                      { label: "German", level: "Professional proficiency" },
                      { label: "English", level: "Professional proficiency" },
                    ].map((language) => (
                      <div key={language.label} className="border border-border/60 px-4 py-3">
                        <p className="text-foreground">{language.label}</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{language.level}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Professional Membership</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-foreground">Member of the Athens Bar Association.</p>
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Curriculum Vitae</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>For the complete version of the CV, you may download the full document in PDF format.</p>
                  {hasCvPdf ? (
                    <Button variant="outline" asChild>
                      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                        Download full CV (PDF)
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      Download full CV (PDF)
                    </Button>
                  )}
                </section>

                <section className="space-y-5 border-t border-border/50 pt-8">
                  <h2 className="font-heading text-2xl text-foreground">Location</h2>
                  <div className="w-12 h-px bg-accent" />
                  <p>6 Pireos Street, Omonia, 10434 Athens, Greece</p>
                </section>

                <section className="border-t border-border/50 pt-8">
                  <div className="border border-border/60 bg-secondary/40 p-7 md:p-9">
                    <p className="text-foreground text-lg md:text-xl font-heading leading-relaxed mb-6">
                      For a personal assessment of your case and responsible legal guidance, please contact the law office.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/en/contact">
                        Contact <ArrowRight size={14} />
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
