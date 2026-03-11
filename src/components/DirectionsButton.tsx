import { MapPinned } from "lucide-react";
import { contactDetails } from "@/lib/contactSeo";

interface DirectionsButtonProps {
  className?: string;
  compact?: boolean;
}

export default function DirectionsButton({ className = "", compact = false }: DirectionsButtonProps) {
  return (
    <a
      href={contactDetails.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_24px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${
        compact ? "px-4 py-2.5 text-xs tracking-wide uppercase" : ""
      } ${className}`}
      aria-label="Get directions to the law office"
    >
      <MapPinned size={compact ? 14 : 16} aria-hidden="true" />
      <span>Get Directions</span>
    </a>
  );
}
