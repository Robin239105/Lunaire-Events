import { motion, type Variants } from 'framer-motion';

const ease = [0.76, 0, 0.24, 1] as const;

/** A champagne (then ink) panel that sweeps clear across the screen in the
 * direction of travel on every route change — left→right going forward through
 * the nav order, right→left going back. Re-keyed by pathname so it replays. */
const sweep: Variants = {
  hidden: (d: number) => ({ x: d > 0 ? '-100%' : '100%' }),
  run: (d: number) => ({
    x: [d > 0 ? '-100%' : '100%', '0%', d > 0 ? '100%' : '-100%'],
    transition: { duration: 0.95, times: [0, 0.5, 1], ease },
  }),
};

export default function RouteSweep({
  pathname,
  direction,
}: {
  pathname: string;
  direction: number;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[120]" aria-hidden>
      <motion.div
        key={`champ-${pathname}`}
        custom={direction}
        variants={sweep}
        initial="hidden"
        animate="run"
        className="absolute inset-0 bg-champagne"
      />
      <motion.div
        key={`ink-${pathname}`}
        custom={direction}
        variants={sweep}
        initial="hidden"
        animate="run"
        transition={{ delay: 0.08 }}
        className="absolute inset-0 -z-10 bg-ink"
      />
    </div>
  );
}
