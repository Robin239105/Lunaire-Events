import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import FloatingParticles from '../components/FloatingParticles';
import { images } from '../data/images';
import { partyThemes, partyTypes, partyExtras } from '../data/extras';

export default function Parties() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={ref} className="relative h-screen overflow-hidden">
        <motion.img
          src={images.parties[0]}
          alt="A glamorous night-time celebration with lights and dancing"
          className="h-full w-full transform-gpu object-cover"
          style={{ scale: reduced ? 1 : scale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(231,201,194,0.15),transparent_60%)]" />
        <FloatingParticles count={14} />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-blush" />
            <Kicker className="!text-blush">Private Parties &amp; Celebrations</Kicker>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,8.5rem)] font-light leading-[0.94] text-pearl">
            <MaskedText text="Throw the night" />
            <br />
            <span className="italic text-blush">
              <MaskedText text="they’ll never forget." delay={0.2} />
            </span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-pearl/80">
            Birthdays, anniversaries, launches, or just because — Lunaire builds parties around
            atmosphere first: sound, light, and a real sense of occasion.
          </p>
        </div>
      </section>

      <Marquee items={['Dance', 'Lights', 'Cocktails', 'Music', 'Confetti', 'Lunaire']} />

      {/* Party types */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <Reveal>
          <Kicker>We throw</Kicker>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-pearl md:text-6xl">
            Any reason to celebrate.
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {partyTypes.map((t, i) => (
            <Reveal key={t} delay={i * 0.04}>
              <span className="inline-block border border-champagne/25 px-5 py-2 text-xs uppercase tracking-[0.18em] text-pearl/80 transition-colors hover:border-champagne hover:text-champagne">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Themes teaser → /themes */}
      <section className="bg-midnight py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Kicker>Signature themes</Kicker>
              <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">Pick your vibe</h2>
            </div>
            <Link to="/themes" className="hidden items-center gap-2 text-xs uppercase tracking-kicker text-blush hover:gap-3 md:flex transition-all">
              All themes <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {partyThemes.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.08}>
                <Link to="/themes" data-cursor="View" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="text-[9px] uppercase tracking-kicker text-blush">{p.vibe}</span>
                      <h3 className="mt-1 font-display text-2xl text-pearl">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link to="/themes" className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker text-blush">
              All themes <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Extras / what's included */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <Kicker>The full production</Kicker>
        <h2 className="mb-12 mt-4 font-display text-4xl text-pearl md:text-6xl">Everything a party needs</h2>
        <div className="grid gap-px overflow-hidden border border-champagne/15 md:grid-cols-3">
          {partyExtras.map(([t, b], i) => (
            <Reveal key={t} delay={(i % 3) * 0.06}>
              <div className="h-full bg-ink/40 p-8">
                <Sparkles size={18} className="text-champagne" />
                <h3 className="mt-4 font-display text-2xl text-pearl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pearl/60">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={images.parties[4]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-pearl md:text-6xl">
              Let’s get this party started.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton to="/booking" className="bg-blush text-ink hover:bg-pearl">
                Book your party <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
              <MagneticButton to="/gallery/parties" className="border border-champagne/40 text-champagne hover:bg-champagne hover:text-ink">
                See the parties
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
