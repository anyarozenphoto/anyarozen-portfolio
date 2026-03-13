// =============================================
// PHOTO DATA — edit this file to manage all images on the site
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
  hero: {
    src: `${import.meta.env.BASE_URL}images/explorations/bridge-calatrava-lights-night-israel.webp`,
    alt: "The Chords Bridge (Calatrava) in Jerusalem illuminated at night",
  },


  /** Images for the Portraits page */
  portraits: [
  {
    src: `${import.meta.env.BASE_URL}images/portraits/portrait-long-hair-soft-lighting-natural-beauty.webp`,
    alt: "Portrait of a woman with long straight brown hair in soft lighting, natural beauty and calm expression against a dark background",
  },
  {
    src: `${import.meta.env.BASE_URL}images/portraits/black-and-white-portrait-smiling-woman-natural-light.webp`,
    alt: "Black and white portrait of a smiling woman captured in natural light with a joyful expression",
  },
  {
    src: `${import.meta.env.BASE_URL}images/portraits/mirror-reflection-red-dress-portrait-serene.webp`,
    alt: "Serene mirror reflection portrait of a woman in an elegant red dress",
  },
  {
    src: `${import.meta.env.BASE_URL}images/portraits/reflection-portrait-dual-color-artistic.webp`,
    alt: "Artistic reflection portrait with dual-color lighting and creative conceptual composition",
  },
  {
    src: `${import.meta.env.BASE_URL}images/portraits/sunlit-window-portrait-warm-glow-playful.webp`,
    alt: "Playful portrait by a sunlit window with a warm golden glow and cinematic atmosphere",
  },
  {
    src: `${import.meta.env.BASE_URL}images/portraits/black-and-white-skater-thoughtful-urban-portrait.webp`,
    alt: "Thoughtful urban portrait of a skater in black and white, artistic street photography style",
  },
],

 /** Images for the Maternity page */
  maternity: [
    {
      src: `${import.meta.env.BASE_URL}images/maternity/pregnancy-gypsophila-bouquet-tender-portrait.webp`,
      alt: "Tender maternity portrait of a pregnant woman holding a delicate gypsophila bouquet",
    },
    {
      src: `${import.meta.env.BASE_URL}images/maternity/pregnancy-glowing-serene-portrait-bokeh-lights.webp`,
      alt: "Serene and glowing pregnancy portrait featuring beautiful bokeh lights background",
    },
    {
      src: `${import.meta.env.BASE_URL}images/maternity/pregnancy-sunflower-bouquet-portrait-serene.webp`,
      alt: "Serene maternity photography of a woman with a sunflower bouquet in natural warm light",
    },
    {
      src: `${import.meta.env.BASE_URL}images/maternity/pregnancy-silhouette-artistic-portrait-dramatic-lighting.webp`,
      alt: "Artistic pregnancy silhouette portrait with dramatic professional lighting",
    },
    {
      src: `${import.meta.env.BASE_URL}images/maternity/pregnancy-silhouette-black-and-white-artistic-portrait.webp`,
      alt: "Black and white artistic silhouette portrait of a pregnant woman emphasizing elegant lines",
    },
  ],

  /** Images for the Explorations page */
  explorations: [
    {
      src: `${import.meta.env.BASE_URL}images/explorations/black-and-white-plant-texture-contrast-photography.webp`,
      alt: "Dramatic black and white photography of plant textures with high contrast and organic shadows",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/cafe-summer-mood-limonade-glare.webp`,
      alt: "Summer mood lifestyle shot of a lemonade glass with sun glares on a cafe terrace",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/dead-sea-road-judean-desert-landscape.webp`,
      alt: "Scenic landscape of the road to the Dead Sea through the Judean Desert in Israel",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/haifa-botanica-rooftop.webp`,
      alt: "View of Haifa's urban landscape and greenery from a botanica-style rooftop",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/haifa-brutalist-building-palms.webp`,
      alt: "Contrast of brutalist architecture and tropical palm trees in Haifa",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/haifa-hotel-red-art.webp`,
      alt: "Artistic interior shot of a Haifa hotel featuring red accents and modern design",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/kids-purim-portrait-israel.webp`,
      alt: "Authentic portrait of children celebrating Purim holiday in Israel",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/lights-reflections-museum-tbilisi.webp`,
      alt: "Abstract lights and reflections in a museum interior, captured in Tbilisi",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/night-camping-city-view-bonfire.webp`,
      alt: "Cozy night camping scene with a bonfire and distant city lights view",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/street-night-sky-tel-aviv.webp`,
      alt: "Night street photography of Tel Aviv under a dark urban sky",
    },
    {
      src: `${import.meta.env.BASE_URL}images/explorations/tel-aviv-pink-glass.webp`,
      alt: "Urban aesthetic of Tel Aviv architecture through pink tinted glass",
    },
  ],
  /** Images for the Families page — add URLs here when ready */
  families: [] as string[],

  /** Images for the Children page — add URLs here when ready */
  children: [] as string[],
};
