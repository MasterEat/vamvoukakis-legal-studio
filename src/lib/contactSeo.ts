const BASE_URL = "https://advocat.gr";

const OFFICE_NAME = "Δικηγορικό Γραφείο Βαμβουκάκη Εμμανουήλ";
const PERSON_NAME = "Εμμανουήλ Βαμβουκάκης";
const TELEPHONE = "+30 693 632 4806";
const TEL_URI = "tel:+306936324806";
const EMAIL = "emmanouil.vamvoukakis@outlook.com";
const EMAIL_URI = "mailto:emmanouil.vamvoukakis@outlook.com";
const ADDRESS_LINE = "Πειραιώς 6, Ομόνοια, ΤΚ 10434, Αθήνα, Αττική, Ελλάδα";
const MAP_QUERY = "Πειραιώς 6, Ομόνοια, ΤΚ 10434, Αθήνα";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

const BUSINESS_ID = `${BASE_URL}/#legalservice`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const PERSON_ID = `${BASE_URL}/#attorney`;

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
];

const sharedBusinessSchema = {
  "@id": BUSINESS_ID,
  "@type": ["LegalService", "LocalBusiness", "ProfessionalService"],
  name: OFFICE_NAME,
  url: BASE_URL,
  telephone: TELEPHONE,
  email: EMAIL,
  image: `${BASE_URL}/favicon.ico`,
  logo: `${BASE_URL}/favicon.ico`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Πειραιώς 6, Ομόνοια",
    addressLocality: "Αθήνα",
    addressRegion: "Αττική",
    postalCode: "10434",
    addressCountry: "GR",
  },
  openingHoursSpecification,
  areaServed: [
    { "@type": "City", name: "Αθήνα" },
    { "@type": "AdministrativeArea", name: "Αττική" },
  ],
  serviceArea: [
    { "@type": "City", name: "Αθήνα" },
    { "@type": "AdministrativeArea", name: "Αττική" },
  ],
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: TELEPHONE,
    email: EMAIL,
    availableLanguage: ["el", "en", "de"],
    areaServed: "GR",
  },
};

const personSchema = {
  "@id": PERSON_ID,
  "@type": ["Person", "Attorney"],
  name: PERSON_NAME,
  jobTitle: "Attorney at Law",
  telephone: TELEPHONE,
  email: EMAIL,
  worksFor: { "@id": BUSINESS_ID },
  hasOccupation: {
    "@type": "Occupation",
    name: "Attorney",
    occupationLocation: {
      "@type": "City",
      name: "Αθήνα",
    },
  },
};

export const contactDetails = {
  officeName: OFFICE_NAME,
  telephone: TELEPHONE,
  telUri: TEL_URI,
  email: EMAIL,
  emailUri: EMAIL_URI,
  addressLine: ADDRESS_LINE,
  mapEmbedUrl: MAP_EMBED_URL,
};

type Lang = "el" | "en" | "de";

const localizedPageMeta: Record<Lang, { pageName: string; breadcrumbHome: string; breadcrumbContact: string }> = {
  el: {
    pageName: "Επικοινωνία",
    breadcrumbHome: "Αρχική",
    breadcrumbContact: "Επικοινωνία",
  },
  en: {
    pageName: "Contact",
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
  },
  de: {
    pageName: "Kontakt",
    breadcrumbHome: "Startseite",
    breadcrumbContact: "Kontakt",
  },
};

export function getContactStructuredData(lang: Lang, pagePath: string) {
  const pageUrl = `${BASE_URL}${pagePath}`;
  const meta = localizedPageMeta[lang];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": WEBSITE_ID,
        "@type": "WebSite",
        url: BASE_URL,
        name: OFFICE_NAME,
        inLanguage: ["el", "en", "de"],
      },
      {
        ...sharedBusinessSchema,
        inLanguage: lang,
      },
      personSchema,
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contactpage`,
        url: pageUrl,
        name: meta.pageName,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        mainEntity: { "@id": BUSINESS_ID },
        inLanguage: lang,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: meta.breadcrumbHome,
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: meta.breadcrumbContact,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
