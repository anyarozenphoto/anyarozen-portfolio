import { Link } from "react-router-dom";
import { photos, getCategory } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";

const Index = () => {
  const ref = useFadeIn();
  const previewPhotos = getCategory("portraits").slice(0, 6);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={photos.hero as string}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </section>

      {/* Preview Grid */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="fade-in-section">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
            {previewPhotos.map((src, i) => (
              <Link
                to="/gallery?category=portraits"
                key={i}
                className="aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="fade-in-section mt-12 text-center">
          <Link
            to="/gallery?category=portraits"
            className="font-sans text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-1"
          >
            View Gallery
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
