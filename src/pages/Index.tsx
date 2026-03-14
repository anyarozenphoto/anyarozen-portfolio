// src/pages/Index.tsx

import { useRef } from "react";
import { Link } from "react-router-dom";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import { navigation } from "@/data/navigation";

const Index = () => {
  const ref = useFadeIn();

  // Ref for the gallery section (cards) that we want to scroll to
  const galleryRef = useRef<HTMLElement | null>(null);

  // Filter navigation items to show gallery cards on the homepage
  const galleryCards = navigation.filter(
    (n) =>
      !n.hidden &&
      !n.isPage &&
      n.photosKey &&
      photos[n.photosKey] &&
      photos[n.photosKey].length > 0
  );

  // Helper to safely get image src (supports both string and object)
  const getSrc = (item: any) => {
    if (!item) return "";
    return typeof item === "string" ? item : item.src;
  };

  // Helper to safely get alt text
  const getAlt = (item: any, fallback: string) => {
    if (!item || typeof item === "string") return fallback;
    return item.alt || fallback;
  };

  // Scroll from hero to the gallery section
  const handleHeroScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={ref}>
      {/* Hero Section */}
      {/* We make the whole hero clickable/hoverable to trigger scroll, similar to Chihiro */}
      <section
        className="relative h-screen w-full overflow-hidden cursor-pointer group"
        onClick={handleHeroScroll}
        // you can also add onMouseEnter if you ever want auto-scroll on hover,
        // but click is more user‑friendly:
        // onMouseEnter={handleHeroScroll}
      >
        <img
          src={getSrc(photos.hero)}
          alt={getAlt(photos.hero, "Anya Rozen Photography")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />

        {/* SCROLL label like on Chihiro */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition-colors">
          SCROLL
        </div>
      </section>

      {/* Gallery Links (Cards sections) */}
      {/* This is the target section we scroll to from the hero */}
      <section
        ref={galleryRef}
        className="px-3 md:px-6 py-12 md:py-16"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-3">
            {galleryCards.map((card) => {
              // Take the first photo from the corresponding category
              const firstItem = photos[card.photosKey!][0];
              const imageSrc = getSrc(firstItem);
              const imageAlt = getAlt(firstItem, card.label);

              return (
                <Link
                  key={card.to}
                  to={card.to}
                  className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
                >
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 md:p-10">
                    <h2 className="font-sans text-sm md:text-base tracking-[0.1em] uppercase text-white">
                      {card.label}
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
