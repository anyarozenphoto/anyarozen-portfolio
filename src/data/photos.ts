// =============================================
// 📷 PHOTO DATA — edit this file to manage all images on the site
// =============================================
//
// HOW TO ADD A NEW PAGE:
// 1. Add a new array below (e.g. "children: [...]")
// 2. Create a new page file in src/pages/ (copy Portraits.tsx as a template)
// 3. Add a <Route> in src/App.tsx
// 4. Add a nav link in src/data/navigation.ts (set hidden: false)
// 5. Add a category card in src/pages/Index.tsx

export const photos = {
  /** Fullscreen hero image on the home page */
  hero: `${import.meta.env.BASE_URL}images/lifestyle/bridge-calatrava-lights-night-israel.webp`,

  /** Images for the Portraits page */
  portraits: [
    `${import.meta.env.BASE_URL}images/portraits/portrait-long-hair-soft-lighting-natural-beauty.webp`,
    `${import.meta.env.BASE_URL}images/portraits/black-and-white-portrait-smiling-woman-natural-light.webp`,
    `${import.meta.env.BASE_URL}images/portraits/mirror-reflection-red-dress-portrait-serene.webp`,
    `${import.meta.env.BASE_URL}images/portraits/reflection-portrait-dual-color-artistic.webp`,
    `${import.meta.env.BASE_URL}images/portraits/sunlit-window-portrait-warm-glow-playful.webp`,
    `${import.meta.env.BASE_URL}images/portraits/black-and-white-skater-thoughtful-urban-portrait.webp`,
  ],

  /** Images for the Maternity page */
  maternity: [
    `${import.meta.env.BASE_URL}images/maternity/pregnancy-gypsophila-bouquet-tender-portrait.webp`,
    `${import.meta.env.BASE_URL}images/maternity/pregnancy-glowing-serene-portrait-bokeh-lights.webp`,
    `${import.meta.env.BASE_URL}images/maternity/pregnancy-sunflower-bouquet-portrait-serene.webp`,
    `${import.meta.env.BASE_URL}images/maternity/pregnancy-silhouette-artistic-portrait-dramatic-lighting.webp`,
    `${import.meta.env.BASE_URL}images/maternity/pregnancy-silhouette-black-and-white-artistic-portrait.webp`,
  ],

  /** Images for the Lifestyle page */
  lifestyle: [
    `${import.meta.env.BASE_URL}images/lifestyle/black-and-white-plant-texture-contrast-photography.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/cafe-summer-mood-limonade-glare.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/dead-sea-road-judean-desert-landscape.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/haifa-botanica-rooftop.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/haifa-brutalist-building-palms.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/haifa-hotel-red-art.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/kids-purim-portrait-israel.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/lights-reflections-museum-tbilisi.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/night-camping-city-view-bonfire.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/street-night-sky-tel-aviv.webp`,
    `${import.meta.env.BASE_URL}images/lifestyle/tel-aviv-pink-glass.webp`,
  ],

  /** Images for the Families page — add URLs here when ready */
  families: [] as string[],

  /** Images for the Children page — add URLs here when ready */
  children: [] as string[],
};
