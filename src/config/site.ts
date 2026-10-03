export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    steam?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Garfield: Escape from Monday Wiki",
  shortName: "Garfield Monday",
  logoText: "G",
  tagline: "Walkthroughs, Costumes, Collectibles & Level Guides",
  description: "A complete Garfield: Escape from Monday wiki featuring walkthroughs, costumes, collectibles, levels, bosses, gameplay guides, and tips to help players escape Garfield's vegetable-filled nightmare.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://garfieldescapefrommondaywiki.top",
  supportEmail: "support@garfieldescapefrommondaywiki.top",
  gameUrl: "https://store.steampowered.com/app/3932790/Garfield__Escape_from_Monday/",
  heroVideoId: "_MYHYS5mbg8", // Garfield: Escape from Monday - Official 8-Minute Gameplay (IGN)
  social: {
    youtube: "https://www.youtube.com/watch?v=fvDvjLSoerY",
    steam: "https://steamcommunity.com/app/3932790/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
