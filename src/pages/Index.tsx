import { Link } from "react-router-dom";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";
import { navigation } from "@/data/navigation";

const Index = () => {
  const ref = useFadeIn();

  // Фильтруем пункты меню для отображения карточек на главной
  const galleryCards = navigation.filter(
    (n) => !n.hidden && !n.isPage && n.photosKey && photos[n.photosKey] && photos[n.photosKey].length > 0
  );

  // Функция для безопасного получения пути к картинке (поддерживает и строку, и объект)
  const getSrc = (item: any) => {
    if (!item) return "";
    return typeof item === "string" ? item : item.src;
  };

  // Функция для безопасного получения alt-текста
  const getAlt = (item: any, fallback: string) => {
    if (!item || typeof item === "string") return fallback;
    return item.alt || fallback;
  };

  return (
    <div ref={ref}>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={getSrc(photos.hero)} // Исправлено: используем getSrc
          alt={getAlt(photos.hero, "Anya Rozen Photography")} // Исправлено: используем getAlt
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </section>

      {/* Gallery Links (Карточки разделов) */}
      <section className="px-3 md:px-6 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-3">
            {galleryCards.map((card) => {
              // Берем первый элемент из массива соответствующей категории
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
