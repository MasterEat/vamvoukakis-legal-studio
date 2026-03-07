import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import portraitImg from "@/assets/lawyer-portrait.jpg";

export default function ProfilPage() {
  return (
    <Layout>
      <SEOHead title="Profil" description="Emmanouil Vamvoukakis - Rechtsanwalt. Absolvent der Philipps-Universität Marburg, LL.M im Zivilrecht." canonical="/de/profil" lang="de" />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <img src={portraitImg} alt="Emmanouil Vamvoukakis" className="w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover sticky top-28" loading="lazy" />
            </div>
            <div className="lg:col-span-3">
              <div className="gold-divider-left mb-8" />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-2">Emmanouil Vamvoukakis</h1>
              <p className="text-xs tracking-widest uppercase font-body text-accent mb-10">Rechtsanwalt</p>
              <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
                <p className="text-foreground text-lg">Emmanouil Vamvoukakis ist Rechtsanwalt mit internationaler akademischer Ausbildung und umfangreicher Erfahrung im Zivil-, Handels- und Strafrecht.</p>
                <h2 className="font-heading text-2xl text-foreground pt-4">Akademischer Werdegang</h2>
                <div className="w-12 h-px bg-accent" />
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span><div><p className="text-foreground font-medium">Philipps-Universität Marburg</p><p className="text-sm">Jurastudium in Deutschland</p></div></li>
                  <li className="flex items-start gap-3"><span className="text-accent mt-1">—</span><div><p className="text-foreground font-medium">LL.M im Zivilrecht</p><p className="text-sm">Nationale und Kapodistrias-Universität Athen</p></div></li>
                </ul>
                <h2 className="font-heading text-2xl text-foreground pt-4">Sprachen</h2>
                <div className="w-12 h-px bg-accent" />
                <div className="flex gap-8">{["Griechisch", "Deutsch", "Englisch"].map((l) => <span key={l} className="text-foreground">{l}</span>)}</div>
                <h2 className="font-heading text-2xl text-foreground pt-4">Standort</h2>
                <div className="w-12 h-px bg-accent" />
                <p>Gounari 5A, Kefalari - Kifissia, Athen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
