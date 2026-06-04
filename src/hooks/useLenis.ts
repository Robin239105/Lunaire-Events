import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mounts a single Lenis smooth-scroll instance for the app. */
export function useLenis() {
  useEffect(() => {
    if (prefersReduced()) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.6,
    });
    lenisInstance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
