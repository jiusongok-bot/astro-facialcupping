// Centralised hero image imports for Astro <Picture /> optimisation
import heroBg from "./hero-bg.webp";
import learn from "./learn.webp";
import benefits from "./benefits.webp";
import howto from "./howto.webp";
import safety from "./safety.webp";
import tools from "./tools.webp";
import research from "./research.webp";
import oils from "./oils.webp";
import glowcup from "./glowcup.webp";
import about from "./about.webp";

export const heroImages: Record<string, ImageMetadata> = {
  "hero-bg": heroBg,
  learn,
  benefits,
  "how-to": howto,
  safety,
  tools,
  research,
  oils,
  glowcup,
  about,
};

/** Descriptive alt text for each section hero image */
export const heroAltText: Record<string, string> = {
  "hero-bg": "Woman performing facial cupping therapy with silicone cups on cheeks",
  learn: "Person learning facial cupping technique with a step-by-step guide overlay",
  benefits: "Close-up of radiant skin after a facial cupping session showing rejuvenation",
  "how-to": "Hands demonstrating facial cupping technique with silicone cups on a face",
  safety: "Licensed esthetician performing safe facial cupping on a client",
  tools: "Collection of silicone facial cupping tools and cups arranged on a clean surface",
  research: "Scientific research on facial cupping therapy with clinical study references",
  oils: "Facial oils and serums used for cupping therapy including jojoba and rosehip oil",
  glowcup: "GlowCup facial cupping set displayed with premium skincare products",
  about: "FacialCupping.com editorial team reviewing skincare research articles",
};
