import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { legalArticles } from "./articlesData";

export default function ArticlesPage() {
  const featuredArticle = legalArticles[0];

  return (
    <Layout>
      <SEOHead
        title="Νομικά Άρθρα"
        description="Άρθρα και νομικές αναλύσεις από το Δικηγορικό Γραφείο Βαμβουκάκη για ζητήματα αστικού, ποινικού, εμπορικού δικαίου και ακινήτων."
        canonical="/arthra"
        lang="el"
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <div className="gold-divider-left mb-8" />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">Νομικά Άρθρα</h1>
            <p className="text-muted-foreground font-body leading-relaxed">

            </p>
          </div>

          <div className="premium-card mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest font-body text-accent uppercase">{featuredArticle.category}</span>
              <span className="text-xs font-body text-muted-foreground">{featuredArticle.date}</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl mb-4">{featuredArticle.title}</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-2xl">{featuredArticle.excerpt}</p>
            <Link
              to={`/arthra/${featuredArticle.slug}`}
              className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 hover:gap-3 transition-all"
            >
              Διαβάστε Περισσότερα <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalArticles.slice(1).map((article) => (
              <div key={article.slug} className="premium-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-widest font-body text-accent uppercase">{article.category}</span>
                </div>
                <span className="text-xs font-body text-muted-foreground">{article.date}</span>
                <h3 className="font-heading text-lg mt-3 mb-4">{article.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{article.excerpt}</p>
                <Link
                  to={`/arthra/${article.slug}`}
                  className="text-xs tracking-widest uppercase font-body text-accent flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Διαβάστε <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
