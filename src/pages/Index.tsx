import { useState } from "react";
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

      {/* Photo Grid */}
      <section className="px-3 md:px-6 py-16 md:py-24 min-h-screen">
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
