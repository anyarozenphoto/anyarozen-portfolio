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

export const photos = {
  /** Fullscreen hero image on the home page */
  hero: "https://p-lux3.pcloud.com/DLZASgIpV7Z5l9Ucx7Ztbnx7ZZ55hX5kZNVZZ7T0ZZCtFHZU4ZhmZRmZHVEa3xYuEDzEKBCnJivNdVS9pCY7/bridge-%D1%81alatrava-lights-night-israel.jpg",

  /** Images for the Portraits page */
  portraits: [
    "https://p-lux2.pcloud.com/DLZOPL0HV7Zyk6Yox7Ztbnx7ZZqUjX5kZNVZZ7T0ZZdrvkZwRZPmZQQZLmGG6UcAzb5q2yoNwBjwYFtXP2Ay/sunlit-window-portrait-warm-glow-playful.jpg",
    "https://p-lux1.pcloud.com/DLZw3L0HV7Z0e6Yox7Ztbnx7ZZoUjX5kZNVZZ7T0ZZb95kZ5LZMQZaYZVDT11w7pUIuM6JAuHcDGCbMONDny/black-and-white-portrait-smiling-woman-natural-light.jpg",
    "https://p-lux2.pcloud.com/DLZ8covpV7ZXXRyox7Ztbnx7ZZ0ehX5kZNVZZ7T0ZZQTskZw4ZsYZ5QZN2nmYNGMwDBQOi1rIUTwCzUCAXDV/mirror-reflection-red-dress-portrait-serene.jpg",
    "https://p-lux4.pcloud.com/DLZ1wIvpV7ZonNocx7Ztbnx7ZZbehX5kZNVZZ7T0ZZHhnXZKQZkFZETZptIYPDxLf7uqkeaW5NtL4kLwjlz7/reflection-portrait-dual-color-artistic.jpg",
  ],

  /** Images for the Maternity page — add URLs here */
  maternity: [
    "https://p-lux3.pcloud.com/DLZLNAXHV7Z1G18ox7Ztbnx7ZZ49jX5kZNVZZ7T0ZZgwdkZipZzmZe4ZIgwPVonaX65mQUPtiqOI0jm5gaVk/pregnancy-gypsophila-bouquet-tender-portrait.jpg",
    "https://p-lux3.pcloud.com/DLZvEAXHV7Z7U18ox7Ztbnx7ZZy9jX5kZNVZZ7T0ZZo2U7ZwmZ5RZv4ZQB4RpHujK1LlFR3eXHWF38VQgUBV/pregnancy-glowing-serene-portrait-bokeh-lights.jpg",
    "https://p-lux2.pcloud.com/DLZvGAXHV7ZJye8ox7Ztbnx7ZZi9jX5kZNVZZ7T0ZZTyy0ZWQZNQZiRZfPcgE3M6oNfN8O3zIh4BKVDT2O5X/pregnancy-sunflower-bouquet-portrait-serene.jpg",
    "https://p-lux1.pcloud.com/DLZ4NAXHV7ZTG18ox7Ztbnx7ZZD9jX5kZNVZZ7T0ZZWCnZIYZuQZvLZ5z7uxcWEhVY0XE3ufDeUNLqWTlMV/pregnancy-silhouette-artistic-portrait-dramatic-lighting.jpg",
    "https://p-lux1.pcloud.com/DLZmiAXHV7ZC7e8ox7Ztbnx7ZZKgjX5kZNVZZ7T0ZZaJ9ZXzZULZERZagjKOmIDAC0ScV5xO4ldCyzvzyS7/pregnancy-silhouette-black-and-white-artistic-portrait.jpg",
  ],

  /** Images for the Families page — add URLs here */
  families: [] as string[],

  /** Images for the Lifestyle page */
  lifestyle: [
    "https://p-lux1.pcloud.com/DLZikn0HV7ZSo8mox7Ztbnx7ZZPajX5kZNVZZ7T0ZZxGckZy9Ze4ZzQZmWLXjTu7CKu8HLiQLA6as7FRmlpX/black-and-white-plant-texture-contrast-photography.jpg",
    "https://p-lux4.pcloud.com/DLZKugIpV7ZTq9Ucx7Ztbnx7ZZA5hX5kZNVZZ7T0ZZsV0kZ2YZAmZDLZRpm20FQbWDYQlr7yg2iBeQtwjpxk/cafe-summer-mood-limonade-glare.jpg",
    "https://p-lux1.pcloud.com/DLZ8nMIpV7ZL41Ucx7Ztbnx7ZZw8hX5kZNVZZ7T0ZZS6hkZIFZA8Z3QZcYBFscb6pfQ6NMqYxO5mFHSognJV/dead-sea-road-judean-desert-landscape.JPEG",
    "https://p-lux2.pcloud.com/DLZj9MIpV7Zi81Ucx7Ztbnx7ZZXQhX5kZNVZZ7T0ZZFvBJZlHZ4zZiQZnEpy6zYzt8yKWAYG9q9tF0xpnupX/haifa-botanica-rooftop.JPEG",
    "https://p-lux1.pcloud.com/cfZnsgIpV7ZMG9Ucx7Ztbnx7ZZ4QhX5kZNVZZ7T0ZZoFwLZl4Z6QZv4ZH4ZLQZTYZwTZ5LZ28ZAYZ9zZJHZbYZk8ZmSpa5JzKgiFWtiHil5ig7hx0eV0X/haifa-brutalist-building-palms.JPEG",
    "https://p-lux3.pcloud.com/DLZwsgIpV7ZGN9Ucx7Ztbnx7ZZDQhX5kZNVZZ7T0ZZ5Ja7ZmLZ3YZP8ZMsOIwMCFn9h8vfQa5dFbo5YO5ihk/haifa-hotel-red-art.JPEG",
    "https://p-lux1.pcloud.com/DLZUegIpV7ZKi9Ucx7Ztbnx7ZZdQhX5kZNVZZ7T0ZZwQU7ZyzZ8LZPYZWiyeBJdMUWbhsE43l7pQj50sF36y/kids-purim-portrait-israel.jpg",
    "https://p-lux4.pcloud.com/DLZrPgIpV7Zx5MUcx7Ztbnx7ZZvQhX5kZNVZZ7T0ZZmWgpZMYZ2mZ4RZNr6c2rB19ruacDqGVIsFKmg6Hpb7/lights-reflections-museum-tbilisi.jpg",
    "https://p-lux2.pcloud.com/DLZ7MgIpV7Z3yMUcx7Ztbnx7ZZFYhX5kZNVZZ7T0ZZUJS7Z7QZEQZvFZYI3iXqxpH6mcwAENPHRbmpOuLd47/night-camping-city-view-bonfire.JPEG",
    "https://p-lux2.pcloud.com/DLZ2tgIpV7ZjhMUcx7Ztbnx7ZZ2YhX5kZNVZZ7T0ZZAK0VZGFZfYZNmZI3dIcOgE0cz0q7c1YbAaeRvozRhy/street-night-sky-tel-aviv.jpg",
    "https://p-lux4.pcloud.com/DLZKdgIpV7ZFmMUcx7Ztbnx7ZZhmhX5kZNVZZ7T0ZZaqmJZN4Z4YZ18ZKfRuyEOoPLJVC2XEnk2IRyRqXxf7/tel-aviv-pink-glass.jpg",
    "https://p-lux3.pcloud.com/DLZf6gIpV7ZDSMUcx7Ztbnx7ZZCmhX5kZNVZZ7T0ZZyVX7ZPmZcYZVLZE5dT862qG4uIcVUuzqRo9yvMYkHX/two-falcons-street-light.JPEG",
  ],
};
