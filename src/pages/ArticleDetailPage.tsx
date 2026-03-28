import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { legalArticles } from "./articlesData";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = legalArticles.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/arthra" replace />;
  }

  const articleUrl = `https://advocat.gr/arthra/${article.slug}`;
  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.authorBlock?.[0] ?? "Εμμανουήλ Βαμβουκάκης",
    },
    publisher: {
      "@type": "LegalService",
      name: "Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ",
      url: "https://advocat.gr",
    },
    mainEntityOfPage: articleUrl,
    url: articleUrl,
  };

  if (article.heroImage) {
    articleSchema.image = `https://advocat.gr${article.heroImage}`;
  }

  return (
    <Layout>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        canonical={`/arthra/${article.slug}`}
        ogType="article"
        hrefLangs={null}
        structuredData={articleSchema}
      />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <nav className="text-xs tracking-widest uppercase font-body text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Αρχική</Link>
            <span className="mx-2">/</span>
            <Link to="/arthra" className="hover:text-accent transition-colors">Άρθρα</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{article.title}</span>
          </nav>

          <div className="gold-divider-left mb-8" />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">{article.title}</h1>

          {article.authorBlock && (
            <div className="mb-8 border-l-2 border-accent/60 pl-5 py-1">
              {article.authorBlock.map((line, index) => (
                <p
                  key={line}
                  className={index === 0 ? "font-heading text-xl text-foreground" : "text-sm md:text-base text-muted-foreground"}
                >
                  {line}
                </p>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-widest font-body text-accent uppercase">{article.category}</span>
            <span className="text-xs font-body text-muted-foreground">{article.date}</span>
          </div>

          {article.heroImage && (
            <figure className="mb-12">
              <img
                src={article.heroImage}
                alt={article.heroImageAlt || article.title}
                className="w-full h-auto max-h-[520px] object-cover rounded-sm border border-border"
                loading="eager"
              />
            </figure>
          )}

          <article className="space-y-10 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground text-lg">{article.intro}</p>

            {article.sections.map((section, index) => (
              <div key={`${section.heading}-${index}`}>
                {section.heading && (
                  <>
                    <h2 className="font-heading text-2xl text-foreground mb-4">{section.heading}</h2>
                    <div className="w-12 h-px bg-accent mb-6" />
                  </>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            <p className="pt-4 border-t border-border">
              Για σχετική υποστήριξη στο <Link to="/tomeis-eidikefsis" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">αστικό δίκαιο και το δίκαιο ακινήτων</Link> μπορείτε να δείτε τους τομείς εξειδίκευσης ή να <Link to="/epikoinonia" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">επικοινωνήσετε με δικηγόρο στην Αθήνα</Link>.
            </p>

            {article.signatureBlock ? (
              <div className="pt-6">
                <div className="space-y-1 text-sm text-muted-foreground">
                  {article.signatureBlock.map((line, index) => (
                    <p key={line} className={index === 0 ? "text-base font-heading text-foreground" : undefined}>
                      {line}
                    </p>
                  ))}
                </div>

                {article.contactBlock && (
                  <div className="mt-6 text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">Επικοινωνία:</p>
                    <p>{article.contactBlock.email}</p>
                    <p>{article.contactBlock.phone}</p>
                  </div>
                )}

                <div className="mt-8">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/epikoinonia">
                      Επικοινωνήστε μαζί μας <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="pt-4 border-t border-border">
                <p className="text-foreground mb-6">
                  Για περισσότερες πληροφορίες ή νομική συμβουλή μπορείτε να επικοινωνήσετε με το Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ στην Αθήνα.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/epikoinonia">
                    Επικοινωνήστε μαζί μας <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            )}
          </article>
        </div>
      </section>
    </Layout>
  );
}
