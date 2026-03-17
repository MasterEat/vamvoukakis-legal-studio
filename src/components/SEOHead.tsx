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
  const alternateLinks = hrefLangs
    ? (() => {
        const hasXDefault = hrefLangs.some((hl) => hl.lang === "x-default");

        if (hasXDefault) {
          return hrefLangs;
        }

        const xDefaultHref = hrefLangs.find((hl) => hl.lang === "el")?.href ?? canonical;

        return xDefaultHref
          ? [...hrefLangs, { lang: "x-default", href: xDefaultHref }]
          : hrefLangs;
      })()
    : undefined;

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

      {alternateLinks?.map((hl) => (
        <link key={`${hl.lang}-${hl.href}`} rel="alternate" hrefLang={hl.lang} href={`${baseUrl}${hl.href}`} />
      ))}

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
