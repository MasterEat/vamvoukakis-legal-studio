import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import { contactDetails } from "@/lib/contactSeo";
import { useIsMobile } from "@/hooks/use-mobile";

export default function StickyCallButton() {
  const isMobile = useIsMobile();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  if (!isMobile || isFooterVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
      <a
        href={contactDetails.telUri}
        aria-label="Call the law office"
        className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-accent/50 bg-primary px-7 py-3 text-base font-medium text-primary-foreground shadow-[0_12px_28px_-14px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <PhoneCall size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-105" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
