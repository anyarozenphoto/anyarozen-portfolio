import { useEffect, useRef } from "react";

export const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      const sections = el.querySelectorAll(".fade-in-section");
      sections.forEach((s) => observer.observe(s));
      return () => sections.forEach((s) => observer.unobserve(s));
    }
  }, []);

  return ref;
};
