export interface HreflangLink {
  lang: "el" | "en" | "de" | "x-default";
  href: string;
}

const equivalentRouteGroups = [
  ["/", "/en", "/de"],
  ["/to-grafeio", "/en/the-firm", "/de/kanzlei"],
  ["/viografiko", "/en/profile", "/de/profil"],
  ["/tomeis-eidikefsis", "/en/practice-areas", "/de/rechtsgebiete"],
  ["/epikoinonia", "/en/contact", "/de/kontakt"],
  ["/politiki-aporritou", "/en/privacy-policy", "/de/datenschutzerklarung"],
] as const;

export function getDefaultHreflangs(pathname: string): HreflangLink[] {
  const matchedGroup = equivalentRouteGroups.find((group) => group.includes(pathname as (typeof group)[number]));

  if (matchedGroup) {
    const [el, en, de] = matchedGroup;
    return [
      { lang: "el", href: el },
      { lang: "en", href: en },
      { lang: "de", href: de },
      { lang: "x-default", href: el },
    ];
  }

  return [
    { lang: "el", href: pathname },
    { lang: "en", href: pathname },
    { lang: "de", href: pathname },
    { lang: "x-default", href: pathname },
  ];
}
