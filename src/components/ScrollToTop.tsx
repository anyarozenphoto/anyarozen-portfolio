// src/components/ScrollToTop.tsx
// This component makes the window scroll to the top
// every time the route (pathname) changes.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the very top on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // no animation for predictable UX
    });
  }, [pathname]);

  // This component doesn't render anything in the DOM
  return null;
};

export default ScrollToTop;
