import { defineRouting } from "next-intl/routing";

// Single source of truth for supported locales.
// Keep in sync with src/i18n/request.ts, src/components/language-switcher.tsx
// and the src/locales/*.json file set.
export const locales = ["en", "fr", "de", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
