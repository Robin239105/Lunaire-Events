import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import FloatingParticles from '../components/FloatingParticles';
import Crest from '../components/Crest';
import { images } from '../data/images';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Slow continuous Ken Burns drift behind the parallax wrapper */}
      <motion.div className="absolute inset-0" style={{ y: reduced ? 0 : imgY }}>
        <motion.img
          src={images.heroCouple}
          alt="A bride and groom standing in a garden on their wedding day"
          decoding="async"
          fetchPriority="high"
          className="h-[118%] w-full transform-gpu object-cover object-[center_28%]"
          initial={{ opacity: 0, scale: 1.18 }}
          animate={
            reduced
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [1.18, 1.08, 1.14], x: [0, -14, 0] }
          }
          transition={
            reduced
              ? { duration: 0.6 }
              : {
                  opacity: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                  x: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                }
          }
        />
        {/* Cinematic colour grade + readability washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-ink/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(232,217,181,0.10),transparent_60%)]" />
      </motion.div>

      {/* Drifting romantic petals and golden lights */}
      <FloatingParticles />

      {/* Soft champagne light bloom, gently breathing */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 transform-gpu rounded-full bg-champagne/10 blur-[100px]"
          style={{ willChange: 'opacity' }}
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24"
        style={{ y: reduced ? 0 : textY }}
      >
        <div className="flex flex-col items-start max-w-xl text-left">
          {/* Miniature Gold Crest Accent lockup with Kicker */}
          <div className="flex items-center gap-3">
            <Crest size={48} className="-ml-1" delay={0.3} />
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Kicker>Moonlit Weddings &amp; Celebrations</Kicker>
            </motion.div>
          </div>

          <h1
            className="mt-4 font-display text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.02] text-pearl"
            style={{ textShadow: '0 2px 25px rgba(0,0,0,0.45)' }}
          >
            <MaskedText text="Where the night" delay={0.6} />
            <br />
            <span
              className="font-serif italic text-champagne"
              style={{ textShadow: '0 0 40px rgba(232,217,181,0.2)' }}
            >
              <MaskedText text="becomes a memory." delay={0.8} />
            </span>
          </h1>

          {/* Elegant left-aligned divider line */}
          <motion.div
            className="mt-6 h-px w-36 bg-gold-gradient"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          <div className="mt-6 flex flex-col items-start gap-6">
            <p className="max-w-md text-sm leading-relaxed text-pearl/80">
              Lunaire is a luxury planning studio crafting weddings and celebrations that are
              intentional, elegant, and unforgettable.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                to="/booking"
                className="bg-champagne px-6 py-3 text-[10px] uppercase tracking-kicker text-ink hover:bg-pearl"
              >
                Plan your wedding <Heart size={12} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
              <MagneticButton
                to="/gallery"
                className="border border-champagne/40 px-6 py-3 text-[10px] uppercase tracking-kicker text-champagne hover:bg-champagne hover:text-ink"
              >
                View galleries
              </MagneticButton>
            </div>
          </div>

          {/* Meta details */}
          <motion.div
            className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-kicker text-pearl/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <span className="h-px w-6 bg-pearl/20" />
            <span>Est. 2011</span>
            <span className="text-champagne/40">•</span>
            <span>Worldwide</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
      >
        <span className="text-[10px] uppercase tracking-kicker text-pearl/50">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-champagne/70 to-transparent" />
      </motion.div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <Kicker>The Studio</Kicker>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-5xl font-display text-3xl font-light leading-[1.25] text-pearl md:text-5xl">
          We believe a celebration should feel inevitable — every flower, light, and pause in its
          rightful place. Lunaire designs in <span className="italic text-champagne">restraint</span>{' '}
          and stages in <span className="italic text-champagne">wonder</span>.
        </p>
      </Reveal>
    </section>
  );
}

function ServicesTeaser() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10">
      <div className="mb-12 flex items-end justify-between">
        <Reveal>
          <Kicker>What we do</Kicker>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">Our craft</h2>
        </Reveal>
        <Link to="/services" className="hidden items-center gap-2 text-xs uppercase tracking-kicker text-champagne hover:gap-3 md:flex transition-all">
          All services <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.slice(0, 3).map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1}>
            <Link to="/services" data-cursor="View" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <span className="absolute left-5 top-5 h-0 w-0 border-champagne transition-all duration-500 group-hover:h-10 group-hover:w-10 group-hover:border-l group-hover:border-t" />
              </div>
              <div className="mt-5">
                <span className="text-[10px] uppercase tracking-kicker text-champagne/70">{s.kicker}</span>
                <h3 className="mt-2 font-display text-2xl text-pearl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pearl/60">{s.blurb}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SignatureWork() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-72%']);
  const gallery = [...images.weddings, ...images.parties];

  if (reduced) {
    return (
      <section className="bg-midnight py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Kicker>Signature work</Kicker>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.slice(0, 6).map((src, i) => (
              <img key={i} src={src} alt="Signature event" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[300vh] bg-midnight">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-[1400px] px-6 md:px-10">
          <Kicker>Signature work</Kicker>
          <h2 className="mt-3 font-display text-4xl text-pearl md:text-6xl">Selected moments</h2>
        </div>
        <motion.div className="flex transform-gpu gap-6 px-6 md:px-10" style={{ x }}>
          {gallery.map((src, i) => (
            <div key={i} className="group relative h-[60vh] w-[78vw] shrink-0 overflow-hidden md:w-[34vw]">
              <img
                src={src}
                alt="Signature Lunaire event"
                loading="lazy"
                className="h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
              <span className="absolute bottom-5 left-5 translate-y-3 text-xs uppercase tracking-kicker text-pearl opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {String(i + 1).padStart(2, '0')} — Celebration
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  { to: 420, suffix: '+', label: 'Events planned' },
  { to: 14, suffix: '', label: 'Years of craft' },
  { to: 36, suffix: '', label: 'Cities worldwide' },
  { to: 98, suffix: '%', label: 'Would book again' },
];

function Stats() {
  return (
    <section className="border-y border-champagne/15 bg-ink py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-12 px-6 md:grid-cols-4 md:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <div className="font-display text-5xl text-champagne md:text-7xl">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-kicker text-pearl/60">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedTestimonial() {
  const t = testimonials[0];
  return (
    <section className="relative overflow-hidden">
      <img src={t.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-44">
        <Reveal>
          <span className="font-display text-7xl text-champagne/40">“</span>
          <p className="font-display text-3xl font-light leading-snug text-pearl md:text-5xl">
            {t.quote}
          </p>
          <div className="mt-8 text-[10px] uppercase tracking-kicker text-champagne/80">
            {t.name} — {t.role}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedGallery() {
  const set = images.decor;
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
      <div className="mb-12 flex items-end justify-between">
        <Reveal>
          <Kicker>Glimpses</Kicker>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">In the details</h2>
        </Reveal>
        <Link to="/gallery" className="hidden items-center gap-2 text-xs uppercase tracking-kicker text-champagne md:flex">
          Full gallery <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {set.map((src, i) => (
          <Reveal key={i} delay={(i % 4) * 0.08}>
            <div className={`group relative overflow-hidden ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
              <img
                src={src}
                alt="Event detail"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Two worlds — weddings vs parties split, each linking to its page.
function TwoWorlds() {
  const cards = [
    {
      to: '/weddings',
      kicker: 'For the couple',
      title: 'Weddings',
      copy: 'Romantic, intentional, unforgettable. From first look to last dance.',
      image: images.weddings[1],
      accent: 'text-blush',
    },
    {
      to: '/parties',
      kicker: 'For the night',
      title: 'Parties',
      copy: 'Birthdays, milestones, and soirées built around pure atmosphere.',
      image: images.parties[0],
      accent: 'text-champagne',
    },
  ];
  return (
    <section className="grid md:grid-cols-2">
      {cards.map((c, i) => (
        <Reveal key={c.to} delay={i * 0.1}>
          <Link to={c.to} data-cursor="Explore" className="group relative block h-[70vh] overflow-hidden">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/55 transition-colors duration-500 group-hover:bg-ink/35" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className={`text-[10px] uppercase tracking-kicker ${c.accent}`}>{c.kicker}</span>
              <h3 className="mt-3 font-display text-6xl text-pearl md:text-8xl">{c.title}</h3>
              <p className="mt-3 max-w-xs px-6 text-sm text-pearl/70">{c.copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-kicker text-pearl opacity-0 transition-all duration-500 group-hover:gap-3 group-hover:opacity-100">
                Discover <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}

// Couple stories teaser
function CoupleStoriesTeaser() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10">
      <div className="mb-12 flex items-end justify-between">
        <Reveal>
          <Kicker>Real love, real nights</Kicker>
          <h2 className="mt-4 font-display text-4xl text-pearl md:text-6xl">Couple stories</h2>
        </Reveal>
        <Link to="/couples" className="hidden items-center gap-2 text-xs uppercase tracking-kicker text-champagne md:flex">
          All stories <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Amara & Theo', 'Lake Como', images.weddings[0]],
          ['Noor & James', 'Marrakech', images.weddings[1]],
          ['Priya & Sam', 'Cotswolds', images.weddings[2]],
        ].map(([name, place, src], i) => (
          <Reveal key={name} delay={i * 0.1}>
            <Link to="/couples" data-cursor="Read" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt={`${name} — ${place}`}
                  loading="lazy"
                  className="h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="font-display text-2xl text-pearl">{name}</h3>
                  <span className="text-[10px] uppercase tracking-kicker text-champagne/80">{place}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Booking band
function BookingBand() {
  return (
    <section className="border-y border-champagne/15 bg-midnight">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center md:px-10">
        <Reveal>
          <Kicker>Limited dates each season</Kicker>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-pearl md:text-5xl">
            Ready to reserve your night with Lunaire?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <MagneticButton to="/booking" className="bg-champagne text-ink hover:bg-pearl">
            Check availability <Heart size={13} className="transition-colors group-hover:fill-current" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 pb-32 pt-28 md:px-10">
      <div className="relative overflow-hidden border border-champagne/20 px-8 py-24 text-center">
        <img src={images.heroes[3]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="relative">
          <Reveal>
            <Kicker className="justify-center">Begin the story</Kicker>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-pearl md:text-7xl">
              Tell us about the celebration you imagine.
            </h2>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/contact" className="bg-champagne text-ink hover:bg-pearl">
                Plan with Lunaire <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Intro />
      <Marquee />
      <ServicesTeaser />
      <TwoWorlds />
      <SignatureWork />
      <Stats />
      <CoupleStoriesTeaser />
      <FeaturedTestimonial />
      <FeaturedGallery />
      <BookingBand />
      <CTA />
    </PageTransition>
  );
}
