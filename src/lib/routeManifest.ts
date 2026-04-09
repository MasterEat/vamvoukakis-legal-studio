import type { ComponentType } from "react";

import HomePage from "@/pages/HomePage";
import TheFirmPage from "@/pages/TheFirmPage";
import ProfilePage from "@/pages/ProfilePage";
import PracticeAreasPage from "@/pages/PracticeAreasPage";
import { CivilLawPage, CriminalLawPage, CommercialLawPage, RealEstateLawPage } from "@/pages/PracticeDetailPage";
import DecisionsPage from "@/pages/DecisionsPage";
import LawLessonsPage from "@/pages/LawLessonsPage";
import ArticlesPage from "@/pages/ArticlesPage";
import AutonomousDrivingArticlePage from "@/pages/AutonomousDrivingArticlePage";
import DeepfakesPersonalityForgeryArticlePage from "@/pages/DeepfakesPersonalityForgeryArticlePage";
import ArticleDetailPage from "@/pages/ArticleDetailPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import CookiesPage from "@/pages/CookiesPage";

import HomePageEn from "@/pages/en/HomePageEn";
import TheFirmPageEn from "@/pages/en/TheFirmPageEn";
import ProfilePageEn from "@/pages/en/ProfilePageEn";
import PracticeAreasPageEn from "@/pages/en/PracticeAreasPageEn";
import ContactPageEn from "@/pages/en/ContactPageEn";
import PrivacyPolicyPageEn from "@/pages/en/PrivacyPolicyPageEn";

import HomePageDe from "@/pages/de/HomePageDe";
import KanzleiPage from "@/pages/de/KanzleiPage";
import ProfilPage from "@/pages/de/ProfilPage";
import RechtsgebietePage from "@/pages/de/RechtsgebietePage";
import KontaktPage from "@/pages/de/KontaktPage";
import DatenschutzerklarungPage from "@/pages/de/DatenschutzerklarungPage";

import { legalArticles } from "@/pages/articlesData";

export interface AppRoute {
  path: string;
  component: ComponentType;
}

const staticRoutes: AppRoute[] = [
  { path: "/", component: HomePage },
  { path: "/to-grafeio", component: TheFirmPage },
  { path: "/viografiko", component: ProfilePage },
  { path: "/tomeis-eidikefsis", component: PracticeAreasPage },
  { path: "/astiko-dikaio", component: CivilLawPage },
  { path: "/poiniko-dikaio", component: CriminalLawPage },
  { path: "/emporiko-dikaio", component: CommercialLawPage },
  { path: "/dikaio-akiniton", component: RealEstateLawPage },
  { path: "/apofaseis", component: DecisionsPage },
  { path: "/mathimata-nomikis", component: LawLessonsPage },
  { path: "/arthra", component: ArticlesPage },
  { path: "/arthra/aftonomi-odigisi-efthini-odigou", component: AutonomousDrivingArticlePage },
  { path: "/arthra/psifiaki-plastografia-deepfakes-astikos-kodikas", component: DeepfakesPersonalityForgeryArticlePage },
  { path: "/arthra/:slug", component: ArticleDetailPage },
  { path: "/epikoinonia", component: ContactPage },
  { path: "/politiki-aporritou", component: PrivacyPage },
  { path: "/cookies", component: CookiesPage },

  { path: "/en", component: HomePageEn },
  { path: "/en/the-firm", component: TheFirmPageEn },
  { path: "/en/profile", component: ProfilePageEn },
  { path: "/en/practice-areas", component: PracticeAreasPageEn },
  { path: "/en/contact", component: ContactPageEn },
  { path: "/en/privacy-policy", component: PrivacyPolicyPageEn },

  { path: "/de", component: HomePageDe },
  { path: "/de/kanzlei", component: KanzleiPage },
  { path: "/de/profil", component: ProfilPage },
  { path: "/de/rechtsgebiete", component: RechtsgebietePage },
  { path: "/de/kontakt", component: KontaktPage },
  { path: "/de/datenschutzerklarung", component: DatenschutzerklarungPage },
];

export const appRoutes = staticRoutes;

export const prerenderRoutes = [
  ...new Set([
    ...staticRoutes.filter((route) => !route.path.includes(":")) .map((route) => route.path),
    ...legalArticles.map((article) => `/arthra/${article.slug}`),
  ]),
];
