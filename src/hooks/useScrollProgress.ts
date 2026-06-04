import { useEffect, useState } from 'react';

/** Returns page scroll progress 0..1 and whether the user has scrolled past `threshold`. */
export function useScrollProgress(threshold = 40) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setProgress(max > 0 ? y / max : 0);
      setScrolled(y > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { progress, scrolled };
}
