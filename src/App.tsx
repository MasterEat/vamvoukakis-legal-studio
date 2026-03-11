import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage";
import TheFirmPage from "./pages/TheFirmPage";
import ProfilePage from "./pages/ProfilePage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import { CivilLawPage, CriminalLawPage, CommercialLawPage, RealEstateLawPage } from "./pages/PracticeDetailPage";
import DecisionsPage from "./pages/DecisionsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";

import HomePageEn from "./pages/en/HomePageEn";
import TheFirmPageEn from "./pages/en/TheFirmPageEn";
import ProfilePageEn from "./pages/en/ProfilePageEn";
import PracticeAreasPageEn from "./pages/en/PracticeAreasPageEn";
import ContactPageEn from "./pages/en/ContactPageEn";

import HomePageDe from "./pages/de/HomePageDe";
import KanzleiPage from "./pages/de/KanzleiPage";
import ProfilPage from "./pages/de/ProfilPage";
import RechtsgebietePage from "./pages/de/RechtsgebietePage";
import KontaktPage from "./pages/de/KontaktPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Greek */}
            <Route path="/" element={<HomePage />} />
            <Route path="/to-grafeio" element={<TheFirmPage />} />
            <Route path="/viografiko" element={<ProfilePage />} />
            <Route path="/tomeis-eidikefsis" element={<PracticeAreasPage />} />
            <Route path="/astiko-dikaio" element={<CivilLawPage />} />
            <Route path="/poiniko-dikaio" element={<CriminalLawPage />} />
            <Route path="/emporiko-dikaio" element={<CommercialLawPage />} />
            <Route path="/dikaio-akiniton" element={<RealEstateLawPage />} />
            <Route path="/apofaseis" element={<DecisionsPage />} />
            <Route path="/arthra" element={<ArticlesPage />} />
            <Route path="/arthra/:slug" element={<ArticleDetailPage />} />
            <Route path="/epikoinonia" element={<ContactPage />} />
            <Route path="/politiki-aporritou" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />

            {/* English */}
            <Route path="/en" element={<HomePageEn />} />
            <Route path="/en/the-firm" element={<TheFirmPageEn />} />
            <Route path="/en/profile" element={<ProfilePageEn />} />
            <Route path="/en/practice-areas" element={<PracticeAreasPageEn />} />
            <Route path="/en/contact" element={<ContactPageEn />} />

            {/* German */}
            <Route path="/de" element={<HomePageDe />} />
            <Route path="/de/kanzlei" element={<KanzleiPage />} />
            <Route path="/de/profil" element={<ProfilPage />} />
            <Route path="/de/rechtsgebiete" element={<RechtsgebietePage />} />
            <Route path="/de/kontakt" element={<KontaktPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
