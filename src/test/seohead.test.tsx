import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import SEOHead from "@/components/SEOHead";

function renderSEO(pathname: string, canonical?: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[pathname]}>
        <SEOHead
          title="Test"
          description="Test description"
          canonical={canonical}
          hrefLangs={[
            { lang: "el", href: "/" },
            { lang: "en", href: "/en" },
            { lang: "de", href: "/de" },
          ]}
        />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe("SEOHead canonical and og:url", () => {
  it("uses the current pathname when canonical is not provided", async () => {
    renderSEO("/en/contact");

    await waitFor(() => {
      const canonical = document.head.querySelector('link[rel="canonical"]');
      const ogUrl = document.head.querySelector('meta[property="og:url"]');

      expect(canonical).toHaveAttribute("href", "https://advocat.gr/en/contact");
      expect(ogUrl).toHaveAttribute("content", "https://advocat.gr/en/contact");
    });
  });

  it("keeps homepage as self-canonical", async () => {
    renderSEO("/");

    await waitFor(() => {
      const canonical = document.head.querySelector('link[rel="canonical"]');
      const ogUrl = document.head.querySelector('meta[property="og:url"]');

      expect(canonical).toHaveAttribute("href", "https://advocat.gr/");
      expect(ogUrl).toHaveAttribute("content", "https://advocat.gr/");
    });
  });

  it("normalizes explicit canonical values", async () => {
    renderSEO("/de/rechtsgebiete", "de/rechtsgebiete/");

    await waitFor(() => {
      const canonical = document.head.querySelector('link[rel="canonical"]');
      const ogUrl = document.head.querySelector('meta[property="og:url"]');

      expect(canonical).toHaveAttribute("href", "https://advocat.gr/de/rechtsgebiete");
      expect(ogUrl).toHaveAttribute("content", "https://advocat.gr/de/rechtsgebiete");
    });
  });
});
