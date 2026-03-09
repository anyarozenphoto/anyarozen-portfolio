// =============================================
// 📷 PHOTO DATA — edit this file to manage all images on the site
// =============================================
//
// HOW TO ADD A NEW PAGE:
// 1. Add a new array below (e.g. "landscapes: [...]")
// 2. Create a new page file in src/pages/ (copy Portraits.tsx as a template)
// 3. Add a <Route> in src/App.tsx
// 4. Add a nav link in src/data/navigation.ts (set hidden: false)
// 5. Add a category card in src/pages/Index.tsx
//
// Each page has its own array of image URLs.
// The "home" page has a "hero" — the big fullscreen image at the top.

const v = "?v=20260308";

export const photos = {
  /** Fullscreen hero image on the home page */
  hero: `/images/lifestyle/bridge-calatrava-lights-night-israel.webp`,

  /** Images for the Portraits page */
  portraits: [
    `https://lh3.googleusercontent.com/pw/AP1GczNLK-gi73snih1uHcWmJM4iDveaHEFNG9WacI5xs44e3qtCLXJ16lYVYtsHDNJpPzIbbjCIxiTl0h-119Tp4uy-PIcXZkHyMz-FdfVHZH7ZXdt00CMUknTLm3_RiLL9WKZf-iUKgByw_orxOe6PKIIl=w1862-h1241-s-no-gm?authuser=1`,
    `https://lh3.googleusercontent.com/pw/AP1GczPjt4ZywrP4KLtcVZDoOgsKTkW7o_L_6ODwciBl-ROV3cE_EeaLWoc_prTFWelt84-hvtEki3M5AZ-FOXXlaXKpFGGcE7YvJ5BLyPp1nBcalYBi1XtvnxIPXlYmUmzlIJl4CQMTlELxD3ZWT6goV4PU=w822-h1241-s-no-gm?authuser=1`,
    `https://lh3.googleusercontent.com/pw/AP1GczN5mkPB8hMWC4fbp_4Sj3m9qh3nzIu81kYbrRskCBFFT3gj4J6uvniqUQUxFsmY1yZisGc1H_lyoJw5gEOLkFfTFb1EBtz9QirNhYUo5mEztPmuq7_2TTiABvtR_nevK9OEfxR2b8htFierZ3O6kfkE=w827-h1241-s-no-gm?authuser=1`,
    `https://lh3.googleusercontent.com/pw/AP1GczOFubKq3VkoG8uWrnDTdVrvDHB42V-wb74bY_RdTamZFFnOfmyeRhw94wKdSeWliRVyFoka2TU5nE8uN1qicpXOKivOOCTM9E89Vf0RqhPSXAI9L0T4e4d6vwtcqph_4HizNAsz7YsMMO2LCIB5pqUI=w825-h1241-s-no-gm?authuser=1`,
    `https://lh3.googleusercontent.com/pw/AP1GczPKXVeC6q8BpolcQf2mT30SusDLSHbIbkijvxfkTVuzRLt2TV_neiXZ0GGdCsYYTqHhkCvtCYafI7ARKkzCEUOW25iBUIYlMkkbDXrVRZpt6ZUH_MADTAp_f9Z5JsN6L-aobXxA1BYo-H_Nu-Pugwzf=w1859-h1241-s-no-gm?authuser=1`,
  ],

  /** Images for the Maternity page — add URLs here */
  maternity: [
    `https://p-lux3.pcloud.com/DLZLNAXHV7Z1G18ox7Ztbnx7ZZ49jX5kZNVZZ7T0ZZgwdkZipZzmZe4ZIgwPVonaX65mQUPtiqOI0jm5gaVk/pregnancy-gypsophila-bouquet-tender-portrait.jpg${v}`,
    `https://p-lux3.pcloud.com/DLZvEAXHV7Z7U18ox7Ztbnx7ZZy9jX5kZNVZZ7T0ZZo2U7ZwmZ5RZv4ZQB4RpHujK1LlFR3eXHWF38VQgUBV/pregnancy-glowing-serene-portrait-bokeh-lights.jpg${v}`,
    `https://p-lux2.pcloud.com/DLZvGAXHV7ZJye8ox7Ztbnx7ZZi9jX5kZNVZZ7T0ZZTyy0ZWQZNQZiRZfPcgE3M6oNfN8O3zIh4BKVDT2O5X/pregnancy-sunflower-bouquet-portrait-serene.jpg${v}`,
    `https://p-lux1.pcloud.com/DLZ4NAXHV7ZTG18ox7Ztbnx7ZZD9jX5kZNVZZ7T0ZZWCnZIYZuQZvLZ5z7uxcWEhVY0XE3ufDeUNLqWTlMV/pregnancy-silhouette-artistic-portrait-dramatic-lighting.jpg${v}`,
    `https://p-lux1.pcloud.com/DLZmiAXHV7ZC7e8ox7Ztbnx7ZZKgjX5kZNVZZ7T0ZZaJ9ZXzZULZERZagjKOmIDAC0ScV5xO4ldCyzvzyS7/pregnancy-silhouette-black-and-white-artistic-portrait.jpg${v}`,
  ],

  /** Images for the Families page — add URLs here */
  families: [] as string[],

  /** Images for the Lifestyle page */
  lifestyle: [
    `https://p-lux1.pcloud.com/DLZikn0HV7ZSo8mox7Ztbnx7ZZPajX5kZNVZZ7T0ZZxGckZy9Ze4ZzQZmWLXjTu7CKu8HLiQLA6as7FRmlpX/black-and-white-plant-texture-contrast-photography.jpg${v}`,
    `https://p-lux4.pcloud.com/DLZKugIpV7ZTq9Ucx7Ztbnx7ZZA5hX5kZNVZZ7T0ZZsV0kZ2YZAmZDLZRpm20FQbWDYQlr7yg2iBeQtwjpxk/cafe-summer-mood-limonade-glare.jpg${v}`,
    `https://p-lux1.pcloud.com/DLZ8nMIpV7ZL41Ucx7Ztbnx7ZZw8hX5kZNVZZ7T0ZZS6hkZIFZA8Z3QZcYBFscb6pfQ6NMqYxO5mFHSognJV/dead-sea-road-judean-desert-landscape.JPEG${v}`,
    `https://p-lux2.pcloud.com/DLZj9MIpV7Zi81Ucx7Ztbnx7ZZXQhX5kZNVZZ7T0ZZFvBJZlHZ4zZiQZnEpy6zYzt8yKWAYG9q9tF0xpnupX/haifa-botanica-rooftop.JPEG${v}`,
    `https://p-lux1.pcloud.com/cfZnsgIpV7ZMG9Ucx7Ztbnx7ZZ4QhX5kZNVZZ7T0ZZoFwLZl4Z6QZv4ZH4ZLQZTYZwTZ5LZ28ZAYZ9zZJHZbYZk8ZmSpa5JzKgiFWtiHil5ig7hx0eV0X/haifa-brutalist-building-palms.JPEG${v}`,
    `https://p-lux3.pcloud.com/DLZwsgIpV7ZGN9Ucx7Ztbnx7ZZDQhX5kZNVZZ7T0ZZ5Ja7ZmLZ3YZP8ZMsOIwMCFn9h8vfQa5dFbo5YO5ihk/haifa-hotel-red-art.JPEG${v}`,
    `https://p-lux1.pcloud.com/DLZUegIpV7ZKi9Ucx7Ztbnx7ZZdQhX5kZNVZZ7T0ZZwQU7ZyzZ8LZPYZWiyeBJdMUWbhsE43l7pQj50sF36y/kids-purim-portrait-israel.jpg${v}`,
    `https://p-lux4.pcloud.com/DLZrPgIpV7Zx5MUcx7Ztbnx7ZZvQhX5kZNVZZ7T0ZZmWgpZMYZ2mZ4RZNr6c2rB19ruacDqGVIsFKmg6Hpb7/lights-reflections-museum-tbilisi.jpg${v}`,
    `https://p-lux2.pcloud.com/DLZ7MgIpV7Z3yMUcx7Ztbnx7ZZFYhX5kZNVZZ7T0ZZUJS7Z7QZEQZvFZYI3iXqxpH6mcwAENPHRbmpOuLd47/night-camping-city-view-bonfire.JPEG${v}`,
    `https://p-lux2.pcloud.com/DLZ2tgIpV7ZjhMUcx7Ztbnx7ZZ2YhX5kZNVZZ7T0ZZAK0VZGFZfYZNmZI3dIcOgE0cz0q7c1YbAaeRvozRhy/street-night-sky-tel-aviv.jpg${v}`,
    `https://p-lux4.pcloud.com/DLZKdgIpV7ZFmMUcx7Ztbnx7ZZhmhX5kZNVZZ7T0ZZaqmJZN4Z4YZ18ZKfRuyEOoPLJVC2XEnk2IRyRqXxf7/tel-aviv-pink-glass.jpg${v}`,
    `https://p-lux3.pcloud.com/DLZf6gIpV7ZDSMUcx7Ztbnx7ZZCmhX5kZNVZZ7T0ZZyVX7ZPmZcYZVLZE5dT862qG4uIcVUuzqRo9yvMYkHX/two-falcons-street-light.JPEG${v}`,
  ],
};
