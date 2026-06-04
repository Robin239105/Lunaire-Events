import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Circular custom cursor that grows + labels over interactive / media elements. */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');
  const enabled = useRef(true);

  useEffect(() => {
    enabled.current = window.matchMedia('(min-width: 901px)').matches;
    if (!enabled.current) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        'a, button, [data-cursor], img, [role="button"]',
      ) as HTMLElement | null;
      setHovering(!!el);
      setLabel(el?.dataset.cursor || '');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-champagne/80 text-[10px] uppercase tracking-kicker text-champagne"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? (label ? 88 : 56) : 14,
          height: hovering ? (label ? 88 : 56) : 14,
          backgroundColor: hovering ? 'rgba(232,217,181,0.08)' : 'rgba(232,217,181,0.9)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        {label && hovering ? label : ''}
      </motion.div>
    </motion.div>
  );
}
