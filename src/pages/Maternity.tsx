import { useState } from "react";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import Lightbox from "@/components/Lightbox";

const Maternity = () => {
  const ref = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // В массиве могут быть строки или объекты { src, alt }
  const items = photos.maternity;

  const getSrc = (item: string | { src: string; alt?: string }) =>
    typeof item === "string" ? item : item.src;

  const getAlt = (item: string | { src: string; alt?: string }) =>
    typeof item === "string"
      ? "Maternity photograph by Anya Rozen"
      : item.alt || "Maternity photograph by Anya Rozen";

  const images = items.map((item) => getSrc(item));

  return (
    <div ref={ref} className="pt-16 md:pt-24 pb-16 px-3 md:px-6 min-h-screen">
      {items.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="font-sans text-sm tracking-[0.15em] uppercase text-foreground/40">
            Coming soon
          </p>
        </div>
      ) : (
        <div className="fade-in-section max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {items.map((item, i) => {
            const src = getSrc(item);
            const alt = getAlt(item);

            return (
              <div
                key={src}
                className="cursor-pointer overflow-hidden group"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + images.length) % images.length,
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Maternity;
