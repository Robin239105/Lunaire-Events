import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Moon, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import { images } from '../data/images';

const timeline = [
  ['2011', 'A first wedding', 'Lunaire begins with a single candlelit ceremony and a belief that restraint is luxury.'],
  ['2015', 'The studio forms', 'A small team of designers, planners, and florists gather under one moonlit name.'],
  ['2019', 'Going abroad', 'Our first destination soirée — a vineyard in Tuscany — opens the world to us.'],
  ['2024', 'Four hundred nights', 'Over 400 celebrations later, the craft is the same: every detail, intentional.'],
];

const team = [
  ['Elena Voss', 'Founder & Creative Director', 'Twenty years staging the world’s most beautiful nights.', images.portraits[0]],
  ['Marcus Lane', 'Head of Production', 'Turns the impossible timeline into a calm, exact plan.', images.portraits[1]],
  ['Sofia Reyes', 'Lead Floral Designer', 'Sees a room and already knows where the light should fall.', images.portraits[2]],
  ['Daniel Cho', 'Client Experience', 'The steady hand every couple feels but never has to ask for.', images.portraits[3]],
];

const heroStats = [
  { to: 14, suffix: '', label: 'Years' },
  { to: 420, suffix: '+', label: 'Events' },
  { to: 36, suffix: '', label: 'Cities' },
];

function FramedPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className="relative">
      {/* offset gold frame */}
      <div className="absolute -right-4 -top-4 hidden h-full w-full border border-gold-deep/50 md:block" />
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={images.portraits[0]}
          alt="Elena Voss, founder of Lunaire Events"
          loading="lazy"
          className="absolute inset-0 h-[116%] w-full transform-gpu object-cover"
          style={{ y: reduced ? 0 : y }}
        />
      </div>
      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -bottom-6 -left-6 flex items-center gap-3 bg-ink px-6 py-4 text-pearl shadow-2xl"
      >
        <Moon size={20} className="text-champagne" fill="currentColor" />
        <div className="leading-tight">
          <div className="font-display text-2xl text-champagne">Est. 2011</div>
          <div className="text-[9px] uppercase tracking-kicker text-pearl/60">Moonlit since</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <PageTransition>
      {/* Editorial split hero */}
      <section className="relative overflow-hidden bg-pearl text-ink">
        <span className="pointer-events-none absolute -right-20 top-10 select-none font-display text-[20vw] leading-none text-ink/[0.035]">
          Lunaire
        </span>
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 pb-28 pt-40 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div>
            <div className="flex items-center gap-3">
              <Moon size={16} className="text-gold-deep" fill="currentColor" />
              <Kicker className="!text-ink/60">Our story</Kicker>
            </div>
            <h1 className="mt-6 font-display text-5xl font-light leading-[0.95] md:text-8xl">
              <MaskedText text="Designing the" />
              <br />
              <span className="italic text-gold-deep">
                <MaskedText text="space between moments." delay={0.2} />
              </span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
              Lunaire is a studio of planners, designers, and quiet perfectionists. We exist to make
              the most important nights of your life feel effortless — and look like a film.
            </p>

            <div className="mt-10 flex max-w-md gap-10">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl text-ink">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-kicker text-ink/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Reveal>
            <FramedPortrait />
          </Reveal>
        </div>
      </section>

      <Marquee className="bg-pearl text-ink" />

      {/* Philosophy + signature */}
      <section className="bg-pearl text-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-28 md:grid-cols-[2fr_1fr] md:px-10">
          <Reveal>
            <Kicker className="!text-ink/50">Philosophy</Kicker>
            <p className="mt-6 max-w-3xl font-display text-3xl font-light leading-tight md:text-5xl">
              Remove everything that does not serve the feeling. What remains — light, flowers,
              music, time — is where the magic lives.
            </p>
            <p className="mt-8 font-display text-3xl italic text-gold-deep">Elena Voss</p>
            <p className="text-[10px] uppercase tracking-kicker text-ink/50">Founder &amp; Creative Director</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={images.weddings[2]}
              alt="A Lunaire celebration detail"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Timeline — animated vertical spine */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1100px] px-6 py-28 md:px-10">
          <div className="text-center">
            <Kicker className="justify-center">The journey</Kicker>
            <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">Fourteen years of nights</h2>
          </div>

          <div className="relative mt-16">
            {/* spine */}
            <div className="absolute left-4 top-0 h-full w-px bg-champagne/15 md:left-1/2" />
            <motion.div
              className="absolute left-4 top-0 w-px origin-top bg-gold-gradient md:left-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              style={{ height: '100%' }}
            />

            <div className="space-y-14">
              {timeline.map(([year, title, body], i) => (
                <Reveal key={year} delay={i * 0.05}>
                  <div
                    className={`relative grid grid-cols-[auto_1fr] gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0 ${
                      i % 2 === 0 ? '' : 'md:[direction:rtl]'
                    }`}
                  >
                    {/* dot */}
                    <span className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ink bg-champagne md:left-1/2" />
                    <div className={`[direction:ltr] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <span className="font-display text-5xl text-champagne">{year}</span>
                      <h3 className="mt-1 font-display text-2xl text-pearl">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-pearl/60">{body}</p>
                    </div>
                    <div />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
          <Kicker>The people</Kicker>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">Behind Lunaire</h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map(([name, role, bio, img], i) => (
              <Reveal key={name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={img}
                      alt={name}
                      loading="lazy"
                      className="h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    {/* bio slides up on hover */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs leading-relaxed text-pearl/85">{bio}</p>
                    </div>
                    <span className="absolute left-4 top-4 h-0 w-0 border-champagne transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:border-l group-hover:border-t" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-pearl">{name}</h3>
                  <span className="text-[10px] uppercase tracking-kicker text-champagne/80">{role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={images.weddings[0]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <Reveal>
            <Kicker className="justify-center">Say hello</Kicker>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-pearl md:text-6xl">
              We’d love to hear the story you want to tell.
            </h2>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/contact" className="bg-champagne text-ink hover:bg-pearl">
                Start a conversation <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
