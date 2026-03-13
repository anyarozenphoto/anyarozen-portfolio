// src/pages/Portraits.tsx
import { useState } from "react";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import Lightbox from "@/components/Lightbox";

const Portraits = () => {
  const ref = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 1. Берем исходные данные (могут быть строками или объектами)
  const items = photos.portraits || [];

  // 2. Функции для безопасного получения данных
  const getSrc = (item: any) => {
    if (!item) return "";
    return typeof item === "string" ? item : item.src;
  };

  const getAlt = (item: any) => {
    if (typeof item === "object" && item?.alt) return item.alt;
    return "Portrait photograph by Anya Rozen";
  };

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

            if (!src) return null;

            return (
              <div
                key={`${src}-${i}`}
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
          images={items} // Передаем исходные объекты, чтобы Lightbox видел alt
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((lightboxIndex - 1 + items.length) % items.length)
          }
          onNext={() => setLightboxIndex((lightboxIndex + 1) % items.length)}
        />
      )}
    </div>
  );
};

export default Portraits;
