import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WORD = 'LUNAIRE';

/** First-load curtain: wordmark draws in letter by letter, gold line sweeps,
 * a counter climbs to 100, then the panel wipes upward to reveal the hero. */
export default function Loader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? 100 : 0);

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(onDone, 300);
      return () => clearTimeout(t);
    }
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 8) + 3;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(onDone, 650);
      }
      setCount(n);
    }, 90);
    return () => clearInterval(id);
  }, [onDone, reduced]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <div className="flex">
          {WORD.split('').map((c, i) => (
            <motion.span
              key={i}
              className="font-display text-5xl tracking-[0.2em] text-pearl md:text-7xl"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.65, 0, 0.35, 1] }}
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-4 h-px bg-gold-gradient"
        initial={{ width: 0 }}
        animate={{ width: '14rem' }}
        transition={{ duration: 1, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
      />

      <motion.span
        className="mt-3 text-[10px] uppercase tracking-kicker text-sage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Events · Moonlit Celebrations
      </motion.span>

      <span className="absolute bottom-8 right-8 font-display text-2xl tabular-nums text-champagne/80">
        {count.toString().padStart(3, '0')}
      </span>
    </motion.div>
  );
}
