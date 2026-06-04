import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Kicker from '../components/Kicker';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const t = testimonials[i];

  return (
    <PageTransition>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={t.image}
            src={t.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-ink/80" />

        <div className="relative mx-auto w-full max-w-4xl px-6 py-40 text-center">
          <Kicker className="justify-center">In their words</Kicker>

          <div className="mt-10 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              >
                <span className="font-display text-7xl text-champagne/40">“</span>
                <p className="font-display text-3xl font-light leading-snug text-pearl md:text-5xl">
                  {t.quote}
                </p>
                <footer className="mt-8 text-[10px] uppercase tracking-kicker text-champagne/80">
                  {t.name} — {t.role}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button onClick={() => go(-1)} aria-label="Previous" className="text-pearl/70 hover:text-champagne">
              <ArrowLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-px w-8 transition-colors ${idx === i ? 'bg-champagne' : 'bg-pearl/30'}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next" className="text-pearl/70 hover:text-champagne">
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
