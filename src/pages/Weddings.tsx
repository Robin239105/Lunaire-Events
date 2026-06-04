import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import MagneticButton from '../components/MagneticButton';
import { images } from '../data/images';

const steps = [
  ['Discovery', 'We begin with a conversation — your story, your taste, the feeling you want to chase.'],
  ['Design', 'A bespoke moodboard, palette, and floor-plan. Every choice rendered before it is real.'],
  ['Curation', 'We assemble the finest florists, lighting, music, and food, then hold every thread.'],
  ['The day', 'You are simply present. We orchestrate quietly in the wings, and nothing is left to chance.'],
];

export default function Weddings() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <PageTransition>
      {/* Full-bleed romantic hero, blush palette */}
      <section ref={ref} className="relative h-screen overflow-hidden">
        <motion.img
          src={images.weddings[0]}
          alt="Bride and groom at a blush-toned ceremony"
          className="h-full w-full object-cover"
          style={{ scale: reduced ? 1 : scale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush/20 via-ink/30 to-ink" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Kicker className="!text-blush">Weddings</Kicker>
          <h1 className="mt-6 max-w-4xl px-6 font-display text-5xl font-light leading-[0.95] text-pearl md:text-8xl">
            <MaskedText text="Two people," delay={0.2} />
            <br />
            <span className="italic text-blush">
              <MaskedText text="one perfect night." delay={0.4} />
            </span>
          </h1>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-gradient-to-b from-ink to-midnight">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
          <Reveal>
            <p className="max-w-5xl font-display text-3xl font-light leading-tight text-pearl md:text-5xl">
              A Lunaire wedding is built around one question — how do you want to feel when you look
              back? Everything we design answers it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-midnight">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
          <Kicker>The process</Kicker>
          <div className="mt-12 grid gap-px overflow-hidden border border-champagne/15 md:grid-cols-2">
            {steps.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full border-champagne/10 bg-ink/40 p-10 md:p-14">
                  <span className="font-display text-5xl text-blush/40">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-3xl text-pearl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-pearl/60">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moodboard collage */}
      <section className="bg-midnight">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
          <Kicker>Moodboard</Kicker>
          <h2 className="mb-10 mt-4 font-display text-4xl text-pearl md:text-6xl">A palette of feeling</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[...images.weddings, ...images.decor].slice(0, 8).map((src, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06}>
                <div
                  className={`group relative overflow-hidden ${
                    i % 5 === 0 ? 'row-span-2 aspect-[3/5]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={src}
                    alt="Wedding moodboard detail"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={images.weddings[3]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-pearl md:text-6xl">
              Let’s design the day you’ll never stop describing.
            </h2>
            <div className="mt-8 flex justify-center">
              <MagneticButton to="/contact" className="bg-blush text-ink hover:bg-pearl">
                Enquire <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
