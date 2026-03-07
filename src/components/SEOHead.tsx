import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  lang?: string;
  ogType?: string;
  structuredData?: object;
  hrefLangs?: { lang: string; href: string }[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  lang = "el",
  ogType = "website",
  structuredData,
  hrefLangs,
}: SEOHeadProps) {
  const fullTitle = `${title} | Δικηγορικό Γραφείο Βαμβουκάκη`;
  const baseUrl = "https://advocat.gr";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={`${baseUrl}${canonical}`} />}
      <meta property="og:site_name" content="advocat.gr" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {hrefLangs?.map((hl) => (
        <link key={hl.lang} rel="alternate" hrefLang={hl.lang} href={`${baseUrl}${hl.href}`} />
      ))}

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
