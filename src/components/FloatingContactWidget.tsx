import { PhoneCall } from "lucide-react";
import { contactDetails } from "@/lib/contactSeo";
import DirectionsButton from "./DirectionsButton";

export default function FloatingContactWidget() {
  return (
    <aside className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={contactDetails.telUri}
        aria-label="Call the law office"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 bg-primary px-4 py-2.5 text-xs tracking-wide uppercase text-primary-foreground shadow-[0_10px_24px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <PhoneCall size={14} aria-hidden="true" />
        <span>Call</span>
      </a>
      <DirectionsButton compact />
    </aside>
  );
}
