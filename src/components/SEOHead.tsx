import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  lang?: string;
  ogType?: string;
  structuredData?: object | object[];
  hrefLangs?: { lang: string; href: string }[] | null;
  ogImage?: string;
  twitterImage?: string;
  appendSiteName?: boolean;
}

const BASE_URL = "https://advocat.gr";
const SITE_TITLE_SUFFIX = "Δικηγορικό Γραφείο Βαμβουκάκη";
const DEFAULT_SOCIAL_IMAGE = "/web-app-manifest-512x512.png";

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
  ogImage,
  twitterImage,
  appendSiteName = true,
}: SEOHeadProps) {
  const { pathname } = useLocation();

  const hasSiteSuffix = title.includes(`| ${SITE_TITLE_SUFFIX}`);
  const fullTitle = appendSiteName && !hasSiteSuffix ? `${title} | ${SITE_TITLE_SUFFIX}` : title;
  const canonicalPath = normalizePath(canonical ?? pathname);
  const canonicalUrl = toAbsoluteUrl(canonicalPath);
  const resolvedSocialImage = toAbsoluteUrl(ogImage ?? DEFAULT_SOCIAL_IMAGE);

  const alternateLinks = hrefLangs
    ? (() => {
      const hasXDefault = hrefLangs.some((hl) => hl.lang === "x-default");

      if (hasXDefault) {
        return hrefLangs;
      }

      const xDefaultHref = hrefLangs.find((hl) => hl.lang === "el")?.href ?? canonicalPath;
      return [...hrefLangs, { lang: "x-default", href: xDefaultHref }];
    })()
    : null;

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
      <meta property="og:image" content={resolvedSocialImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={toAbsoluteUrl(twitterImage ?? ogImage ?? DEFAULT_SOCIAL_IMAGE)} />

      {alternateLinks?.map((hl) => (
        <link key={`${hl.lang}-${hl.href}`} rel="alternate" hrefLang={hl.lang} href={toAbsoluteUrl(hl.href)} />
      ))}

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
