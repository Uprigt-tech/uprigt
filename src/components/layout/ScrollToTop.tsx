import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // On initial load / first render - scroll instantly without animation
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Use setTimeout to ensure this runs after React renders
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto', // Instant scroll on initial load
        });
      }, 0);
      return;
    }

    // On route change - scroll smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}
