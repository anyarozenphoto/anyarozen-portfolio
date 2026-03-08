import { useState } from "react";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import Lightbox from "@/components/Lightbox";

const Maternity = () => {
  const ref = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = photos.maternity;

  return (
    <div ref={ref} className="pt-16 md:pt-24 pb-16 px-3 md:px-6 min-h-screen">
      {images.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <p className="font-sans text-sm tracking-[0.15em] uppercase text-foreground/40">
            Coming soon
          </p>
        </div>
      ) : (
        <div className="fade-in-section max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {images.map((src, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden group"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Maternity;
