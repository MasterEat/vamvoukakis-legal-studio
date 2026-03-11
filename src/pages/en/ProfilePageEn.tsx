import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import portraitImg from "@/assets/lawyer-portrait.jpg";

export default function ProfilePageEn() {
  return (
    <Layout>
      <SEOHead title="Profile" description="Emmanouil Vamvoukakis - Rechtsanwalt, Attorney at Law. Graduate of Philipps-Universität Marburg, LL.M in Civil Law." canonical="/en/profile" lang="en" />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <img src={portraitImg} alt="Emmanouil Vamvoukakis" className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover sticky top-28" loading="lazy" />
            </div>
            <div className="lg:col-span-3">
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-2">Emmanouil Vamvoukakis</h1>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-10">Rechtsanwalt · Attorney at Law</p>
              <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
                <p className="text-foreground text-lg">Emmanouil Vamvoukakis is an attorney with international academic training and extensive experience in civil, commercial and criminal law.</p>
                <h2 className="font-heading text-2xl text-foreground pt-4">Academic Background</h2>
                <div className="w-12 h-px bg-accent" />
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span><div><p className="text-foreground font-medium">Philipps-Universität Marburg, Germany</p><p className="text-sm">Law Studies in Germany</p></div></li>
                  <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span><div><p className="text-foreground font-medium">LL.M in Civil Law</p><p className="text-sm">National and Kapodistrian University of Athens</p></div></li>
                </ul>
                <h2 className="font-heading text-2xl text-foreground pt-4">Languages</h2>
                <div className="w-12 h-px bg-accent" />
                <div className="flex gap-8">{["Greek", "German", "English"].map((l) => <span key={l} className="text-foreground">{l}</span>)}</div>
                <h2 className="font-heading text-2xl text-foreground pt-4">Location</h2>
                <div className="w-12 h-px bg-accent" />
                <p>Pireos 6, Omonoia, 10434 Athens</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
