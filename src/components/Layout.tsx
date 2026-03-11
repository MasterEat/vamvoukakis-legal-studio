import { ReactNode } from "react";
import { matchPath, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCallButton from "./StickyCallButton";
import FloatingContactWidget from "./FloatingContactWidget";

interface LayoutProps {
  children: ReactNode;
}

const HOME_PATHS = ["/", "/en", "/de"];

type BannerContent = { title: string; subtitle: string };

const BANNER_CONFIG: { path: string; content: BannerContent }[] = [
  { path: "/to-grafeio", content: { title: "Το Γραφείο", subtitle: "Η φιλοσοφία, οι αξίες και η ευρωπαϊκή νομική προσέγγιση του γραφείου μας." } },
  { path: "/viografiko", content: { title: "Βιογραφικό", subtitle: "Ακαδημαϊκή κατάρτιση, διεθνής εμπειρία και στοχευμένη νομική εκπροσώπηση." } },
  { path: "/tomeis-eidikefsis", content: { title: "Τομείς Ειδίκευσης", subtitle: "Εξειδικευμένες υπηρεσίες σε βασικούς τομείς του ιδιωτικού και ποινικού δικαίου." } },
  { path: "/astiko-dikaio", content: { title: "Αστικό Δίκαιο", subtitle: "Στρατηγική νομική καθοδήγηση για ιδιώτες και επιχειρήσεις." } },
  { path: "/poiniko-dikaio", content: { title: "Ποινικό Δίκαιο", subtitle: "Διακριτική και αποτελεσματική υπεράσπιση σε κάθε στάδιο της διαδικασίας." } },
  { path: "/emporiko-dikaio", content: { title: "Εμπορικό Δίκαιο", subtitle: "Σύγχρονες λύσεις για εμπορικές σχέσεις, συμβάσεις και εταιρική δραστηριότητα." } },
  { path: "/dikaio-akiniton", content: { title: "Δίκαιο Ακινήτων", subtitle: "Ολοκληρωμένη νομική υποστήριξη σε αγοραπωλησίες, μισθώσεις και επενδύσεις." } },
  { path: "/apofaseis", content: { title: "Αποφάσεις", subtitle: "Ενδεικτική νομολογιακή εμπειρία με έμφαση στην ουσία και το αποτέλεσμα." } },
  { path: "/arthra", content: { title: "Νομικά Άρθρα", subtitle: "Σύντομες νομικές αναλύσεις για θέματα που απασχολούν πολίτες και επιχειρήσεις." } },
  { path: "/epikoinonia", content: { title: "Επικοινωνία", subtitle: "Είμαστε στη διάθεσή σας για εμπιστευτική νομική συμβουλή κατόπιν ραντεβού." } },
  { path: "/politiki-aporritou", content: { title: "Πολιτική Απορρήτου", subtitle: "Υπεύθυνη επεξεργασία δεδομένων με διαφάνεια και πλήρη συμμόρφωση." } },
  { path: "/cookies", content: { title: "Πολιτική Cookies", subtitle: "Πληροφορίες για την ασφαλή και ορθή χρήση cookies στον ιστότοπο." } },
  { path: "/en/the-firm", content: { title: "The Firm", subtitle: "Our philosophy, values, and premium client-focused legal approach." } },
  { path: "/en/profile", content: { title: "Profile", subtitle: "Academic depth, international background, and practical legal precision." } },
  { path: "/en/practice-areas", content: { title: "Practice Areas", subtitle: "Focused legal services across core private and criminal law disciplines." } },
  { path: "/en/contact", content: { title: "Contact", subtitle: "Get in touch to arrange a confidential legal consultation." } },
  { path: "/de/kanzlei", content: { title: "Kanzlei", subtitle: "Philosophie, Werte und maßgeschneiderte Rechtsberatung auf höchstem Niveau." } },
  { path: "/de/profil", content: { title: "Profil", subtitle: "Akademische Exzellenz, internationale Erfahrung und präzise Rechtsvertretung." } },
  { path: "/de/rechtsgebiete", content: { title: "Rechtsgebiete", subtitle: "Spezialisierte Rechtsdienstleistungen in zentralen Bereichen des Rechts." } },
  { path: "/de/kontakt", content: { title: "Kontakt", subtitle: "Vereinbaren Sie ein vertrauliches Beratungsgespräch mit unserer Kanzlei." } },
];

function getBannerContent(pathname: string): BannerContent {
  const match = BANNER_CONFIG.find(({ path }) => matchPath({ path, end: true }, pathname));
  return match?.content ?? { title: "Νομικές Υπηρεσίες", subtitle: "Εξειδικευμένη νομική υποστήριξη με συνέπεια, διακριτικότητα και ευρωπαϊκή προοπτική." };
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = HOME_PATHS.includes(location.pathname);
  const banner = getBannerContent(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {!isHomePage && (
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-14 border-b border-white/10 bg-[linear-gradient(135deg,rgba(12,27,45,0.94),rgba(22,40,63,0.9)),radial-gradient(circle_at_15%_20%,rgba(178,145,85,0.18),transparent_48%),radial-gradient(circle_at_80%_0%,rgba(120,140,170,0.14),transparent_52%)]">
          <div className="absolute inset-0 opacity-25 bg-[url('/images/image1.webp')] bg-cover bg-center mix-blend-overlay" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-slate-200/70 mb-3">Vamvoukakis Law Office</p>
              <h1 className="font-heading text-3xl md:text-4xl text-white mb-3 md:mb-4">{banner.title}</h1>
              <p className="font-body text-sm md:text-base text-slate-200/85 leading-relaxed">{banner.subtitle}</p>
            </div>
          </div>
        </section>
      )}

      <main className="flex-1">{children}</main>
      <FloatingContactWidget />
      <StickyCallButton />
      <Footer />
    </div>
  );
}
