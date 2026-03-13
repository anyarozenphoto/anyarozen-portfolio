import { useEffect, useCallback, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxImage = string | { src: string; alt?: string };

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) => {
  const [fadeKey, setFadeKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Минимальное расстояние для свайпа (в пикселях)
  const minSwipeDistance = 50;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    setFadeKey(prev => prev + 1);
  }, [currentIndex]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  // Обработка начала касания
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  // Обработка движения пальца
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  // Обработка завершения касания
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  const currentItem = images[currentIndex];
  const src = typeof currentItem === "string" ? currentItem : currentItem.src;
  const alt = typeof currentItem === "string" ? "" : currentItem.alt || "";

  return (
    <div 
      className="lightbox-overlay active" 
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-50"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Стрелки скрываем на мобилках через md:flex, так как там есть свайп */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="hidden md:flex absolute left-0 top-20 h-[calc(100%-5rem)] w-24 items-center justify-center text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="hidden md:flex absolute right-0 top-20 h-[calc(100%-5rem)] w-24 items-center justify-center text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}

      <img
        key={fadeKey}
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="select-none animate-fade-in touch-none"
      />
    </div>
  );
};

export default Lightbox;
