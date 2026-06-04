import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import { images } from '../data/images';
import { partyThemes } from '../data/extras';

function ThemeBlock({ t, i }: { t: (typeof partyThemes)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const flip = i % 2 === 1;

  return (
    <div ref={ref} className={`grid items-center gap-10 md:grid-cols-2 ${flip ? 'md:[direction:rtl]' : ''}`}>
      <div className="relative aspect-[5/4] overflow-hidden [direction:ltr]">
        <motion.img
          src={t.image}
          alt={t.name}
          loading="lazy"
          className="absolute inset-0 h-[122%] w-full transform-gpu object-cover"
          style={{ y: reduced ? 0 : y }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </div>
      <div className="[direction:ltr]">
        <Reveal>
          <span className="font-display text-6xl text-blush/25">0{i + 1}</span>
          <Kicker className="mt-2">{t.vibe}</Kicker>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">{t.name}</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-pearl/70">{t.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="border border-champagne/25 px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] text-pearl/75"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default function Themes() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-champagne/15 pb-16 pt-40">
        <img src={images.parties[2]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-blush" />
            <Kicker className="!text-blush">Signature themes</Kicker>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[0.95] text-pearl">
            <MaskedText text="Pick your vibe." />
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-pearl/80">
            Four worlds we love to build — or a starting point for something entirely your own. Every
            theme is fully tailored to your space, your guests, and your night.
          </p>
        </div>
      </section>

      <Marquee items={['Glamour', 'Neon', 'Velvet', 'Festival', 'Bespoke', 'Lunaire']} />

      {/* Theme deep-dives */}
      <section className="mx-auto flex max-w-[1400px] flex-col gap-24 px-6 py-24 md:gap-36 md:px-10">
        {partyThemes.map((t, i) => (
          <ThemeBlock key={t.name} t={t} i={i} />
        ))}
      </section>

      {/* Bespoke note */}
      <section className="border-y border-champagne/15 bg-midnight">
        <div className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10">
          <Reveal>
            <Kicker className="justify-center">Or none of the above</Kicker>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-tight text-pearl md:text-5xl">
              Bring us a colour, a song, a feeling — we’ll design a theme that has never existed before.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={images.parties[3]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-pearl md:text-6xl">Found your vibe?</h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton to="/booking" className="bg-blush text-ink hover:bg-pearl">
                Book your party <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
              <MagneticButton to="/parties" className="border border-champagne/40 text-champagne hover:bg-champagne hover:text-ink">
                Back to parties
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
