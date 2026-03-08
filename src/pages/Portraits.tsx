import { useState } from "react";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import Lightbox from "@/components/Lightbox";

const Portraits = () => {
  const ref = useFadeIn();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = photos.portraits;

  return (
    <div ref={ref} className="pt-24 pb-16 px-3 md:px-6 min-h-screen">
      <div className="fade-in-section max-w-[1600px] mx-auto columns-2 md:columns-3 lg:columns-4 gap-1.5">
        {images.map((src, i) => (
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

export default Portraits;
