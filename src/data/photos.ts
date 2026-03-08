import hero from "@/assets/hero.jpg";
import portrait1 from "@/assets/portrait1.jpg";
import portrait2 from "@/assets/portrait2.jpg";
import portrait3 from "@/assets/portrait3.jpg";
import portrait4 from "@/assets/portrait4.jpg";
import portrait5 from "@/assets/portrait5.jpg";
import portrait6 from "@/assets/portrait6.jpg";
import portrait7 from "@/assets/portrait7.jpg";
import portrait8 from "@/assets/portrait8.jpg";
import portrait9 from "@/assets/portrait9.jpg";

export interface PhotoCollection {
  hero: string;
  [category: string]: string | string[];
}

export const photos: PhotoCollection = {
  hero,
  portraits: [
    portrait1,
    portrait2,
    portrait3,
    portrait4,
    portrait5,
    portrait6,
    portrait7,
    portrait8,
    portrait9,
  ],
};

export const getCategory = (category: string): string[] => {
  const cat = photos[category];
  if (Array.isArray(cat)) return cat;
  return [];
};
