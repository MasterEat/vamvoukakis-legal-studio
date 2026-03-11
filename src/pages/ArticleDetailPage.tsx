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

  return (
    <Layout>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        canonical={`/arthra/${article.slug}`}
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

          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-widest font-body text-accent uppercase">{article.category}</span>
            <span className="text-xs font-body text-muted-foreground">{article.date}</span>
          </div>

          <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
            <p className="text-foreground text-lg">{article.intro}</p>

            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-2xl text-foreground mb-4">{section.heading}</h2>
                <div className="w-12 h-px bg-accent mb-6" />
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

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
          </div>
        </div>
      </section>
    </Layout>
  );
}
