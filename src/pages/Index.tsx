import { useState } from "react";
import { Link } from "react-router-dom";
import { photos } from "@/data/photos";
import { useFadeIn } from "@/hooks/useFadeIn";

const Index = () => {
  const ref = useFadeIn();

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

      {/* Gallery Links */}
      <section className="px-3 md:px-6 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Lifestyle card */}
            <Link
              to="/lifestyle"
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
            >
              <img
                src={photos.lifestyle[0]}
                alt="Lifestyle"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-10">
                <h2 className="font-sans text-sm md:text-base tracking-[0.25em] uppercase text-white">
                  Lifestyle
                </h2>
              </div>
            </Link>

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
