import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/** Counts up to `to` when scrolled into view. */
export default function Counter({
  to,
  suffix = '',
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) start = requestAnimationFrame(tick);
    };
    start = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(start);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}
