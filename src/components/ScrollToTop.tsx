// src/components/ScrollToTop.tsx
// This component scrolls the window to the top
// every time the route (pathname) changes.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // no animation to avoid weird mid‑scroll states
    });
  }, [pathname]);

  // Nothing to render
  return null;
};

export default ScrollToTop;
