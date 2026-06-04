import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import Kicker from '../components/Kicker';
import { services, packages } from '../data/services';

function ServiceBlock({ s, i }: { s: (typeof services)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const flip = i % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 md:grid-cols-2 ${flip ? 'md:[direction:rtl]' : ''}`}
    >
      <div className="relative aspect-[5/4] overflow-hidden [direction:ltr]">
        <motion.img
          src={s.image}
          alt={s.title}
          loading="lazy"
          className="absolute inset-0 h-[124%] w-full transform-gpu object-cover"
          style={{ y: reduced ? 0 : y }}
        />
      </div>
      <div className="[direction:ltr]">
        <Reveal>
          <span className="font-display text-6xl text-champagne/20">0{i + 1}</span>
          <Kicker className="mt-2">{s.kicker}</Kicker>
          <h3 className="mt-4 font-display text-4xl text-pearl md:text-6xl">{s.title}</h3>
          <p className="mt-5 max-w-md text-base leading-relaxed text-pearl/65">{s.blurb}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {s.details.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-pearl/70">
                <span className="h-1 w-1 rounded-full bg-champagne" />
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-champagne/15">
      {packages.map((p, i) => {
        const isOpen = open === i;
        return (
          <div key={p.name} className="border-b border-champagne/15">
            <button
              className="flex w-full items-center justify-between py-8 text-left"
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="flex items-baseline gap-5">
                <span className="font-display text-3xl text-pearl md:text-5xl">{p.name}</span>
                <span className="text-xs uppercase tracking-kicker text-champagne">{p.price}</span>
              </span>
              {isOpen ? <Minus className="text-champagne" /> : <Plus className="text-champagne" />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <p className="max-w-xl text-base leading-relaxed text-pearl/65">{p.line}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                      {p.items.map((it) => (
                        <li key={it} className="text-sm text-pearl/70">
                          — {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10">
        <Kicker>Services</Kicker>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-light leading-[0.95] text-pearl md:text-8xl">
          Every kind of unforgettable.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-pearl/65">
          From vows to galas, four disciplines under one moonlit roof — each delivered with the same
          obsessive care.
        </p>
      </section>

      <section className="mx-auto flex max-w-[1400px] flex-col gap-28 px-6 py-16 md:gap-40 md:px-10">
        {services.map((s, i) => (
          <ServiceBlock key={s.id} s={s} i={i} />
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
        <Kicker>Packages</Kicker>
        <h2 className="mb-12 mt-4 font-display text-4xl text-pearl md:text-6xl">Ways to work together</h2>
        <Accordion />
      </section>
    </PageTransition>
  );
}
