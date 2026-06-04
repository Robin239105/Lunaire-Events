import { createContext, useContext, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const ease = [0.76, 0, 0.24, 1] as const;

/** Navigation direction: +1 = moving forward through the nav order, -1 = back. */
export const DirectionContext = createContext(1);

const content: Variants = {
  initial: (d: number) => ({ x: d > 0 ? '6%' : '-6%', opacity: 0 }),
  animate: { x: '0%', opacity: 1, transition: { duration: 0.6, ease, delay: 0.45 } },
  exit: (d: number) => ({ x: d > 0 ? '-6%' : '6%', opacity: 0, transition: { duration: 0.4, ease } }),
};

/** Directional content reveal. The full-screen colour wipe lives in <RouteSweep>. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const dir = useContext(DirectionContext);
  return (
    <motion.div
      custom={dir}
      variants={content}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
}
