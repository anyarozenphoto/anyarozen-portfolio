import { useState } from "react";
import { Link } from "react-router-dom";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import Lightbox from "@/components/Lightbox";

const Index = () => {
  const ref = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={photos.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </section>

      {/* Gallery Links — so users know there are more pages */}
      <section className="px-3 md:px-6 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Portraits card */}
            <Link
              to="/portraits"
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
            >
              <img
                src={photos.portraits[0]}
                alt="Portraits"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <h2 className="font-sans text-sm md:text-base tracking-[0.25em] uppercase text-white">
                  Portraits
                </h2>
              </div>
            </Link>

            {/* Add more category cards here when you create new pages */}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-3 md:px-6 pb-16 md:pb-24">
        <div className="fade-in-section max-w-[1600px] mx-auto columns-2 md:columns-3 lg:columns-4 gap-1.5">
          {photos.home.map((src, i) => (
            <div
              key={i}
              className="mb-1.5 break-inside-avoid cursor-pointer overflow-hidden group"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={src}
                alt=""
                className="w-full block transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={photos.home}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + photos.home.length) % photos.home.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % photos.home.length)}
        />
      )}
    </div>
  );
};

export default Index;
