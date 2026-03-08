import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div className="lightbox-overlay active" onClick={onClose}>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-0 top-0 h-full w-16 md:w-24 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-0 top-0 h-full w-16 md:w-24 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}

      <img
        src={images[currentIndex]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="select-none"
      />
    </div>
  );
};

export default Lightbox;
