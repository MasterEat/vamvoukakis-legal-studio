import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getDefaultHreflangs } from "@/lib/hreflang";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  lang?: string;
  ogType?: string;
  structuredData?: object;
  hrefLangs?: { lang: string; href: string }[] | null;
}

const BASE_URL = "https://advocat.gr";

const hasProtocol = (url: string) => /^https?:\/\//i.test(url);

const normalizePath = (path: string) => {
  if (!path) {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;

  if (withLeadingSlash === "/") {
    return "/";
  }

  return withLeadingSlash.replace(/\/+$/, "");
};

const toAbsoluteUrl = (pathOrUrl: string) => {
  if (hasProtocol(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = normalizePath(pathOrUrl);
  return `${BASE_URL}${normalizedPath}`;
};

export default function SEOHead({
  title,
  description,
  canonical,
  lang = "el",
  ogType = "website",
  structuredData,
  hrefLangs,
}: SEOHeadProps) {
  const { pathname } = useLocation();

  const fullTitle = `${title} | Δικηγορικό Γραφείο Βαμβουκάκη`;
  const canonicalPath = normalizePath(canonical ?? pathname);
  const canonicalUrl = toAbsoluteUrl(canonicalPath);

  const alternateLinks = hrefLangs === null
    ? null
    : hrefLangs
      ? (() => {
        const hasXDefault = hrefLangs.some((hl) => hl.lang === "x-default");

        if (hasXDefault) {
          return hrefLangs;
        }

        const xDefaultHref = hrefLangs.find((hl) => hl.lang === "el")?.href ?? canonicalPath;
        return [...hrefLangs, { lang: "x-default", href: xDefaultHref }];
      })()
      : getDefaultHreflangs(canonicalPath);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="advocat.gr" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {alternateLinks?.map((hl) => (
        <link key={`${hl.lang}-${hl.href}`} rel="alternate" hrefLang={hl.lang} href={toAbsoluteUrl(hl.href)} />
      ))}

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
