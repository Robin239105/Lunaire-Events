import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Reusable scroll-reveal: fades + translates up as it enters the viewport. */
export default function Reveal({ children, delay = 0, y = 36, className, once = true }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Masked word-by-word headline reveal (overflow-hidden lines rise from below).
 * `immediate` plays on mount (use for above-the-fold heroes); otherwise it
 * waits until scrolled into view. */
export function MaskedText({
  text,
  className,
  delay = 0,
  immediate = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  const trigger = immediate
    ? { animate: { y: 0 } }
    : { whileInView: { y: 0 }, viewport: { once: true, amount: 0.3 } };
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={reduced ? false : { y: '110%' }}
            {...trigger}
            transition={{ duration: 0.8, delay: delay + i * 0.06, ease: [0.65, 0, 0.35, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
