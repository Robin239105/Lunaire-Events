import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Kicker from '../components/Kicker';
import MagneticButton from '../components/MagneticButton';
import Reveal from '../components/Reveal';
import { images } from '../data/images';

const tabs = ['All', 'Ceremonies', 'Florals & Details', 'Venues'] as const;

export default function GalleryWeddings() {
  const [filter, setFilter] = useState<(typeof tabs)[number]>('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const rawItems = useMemo(() => [
    ...images.weddings.map(src => ({ src, cat: 'Ceremonies' })),
    ...images.decor.map(src => ({ src, cat: 'Florals & Details' })),
    ...images.venues.map(src => ({ src, cat: 'Venues' })),
  ], []);

  const items = useMemo(
    () => (filter === 'All' ? rawItems : rawItems.filter((g) => g.cat === filter)),
    [filter, rawItems],
  );

  return (
    <PageTransition>
      {/* Editorial Header */}
      <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-40 md:px-10">
        <Reveal>
          <Kicker className="!text-blush">Portfolio</Kicker>
          <h1 className="mt-6 font-display text-5xl font-light text-pearl md:text-8xl">
            Wedding <span className="italic text-blush">Gallery</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pearl/65">
            Explore our curated collection of luxury weddings, breathtaking florals, intimate ceremonies,
            and grand venues designed worldwide.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`border px-5 py-2 text-[10px] uppercase tracking-kicker transition-all ${
                filter === t
                  ? 'border-blush bg-blush text-ink'
                  : 'border-champagne/25 text-pearl/70 hover:border-blush'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Columns */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <motion.div layout className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.figure
                layout
                key={g.src + filter}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
                className="group relative cursor-pointer overflow-hidden break-inside-avoid"
                onClick={() => setLightbox(g.src)}
                data-cursor="View"
              >
                <img
                  src={g.src}
                  alt={`${g.cat} by Lunaire Events`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
                <figcaption className="absolute bottom-4 left-4 translate-y-3 text-[10px] uppercase tracking-kicker text-pearl opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.cat}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA section to redirect/enquire */}
      <section className="relative overflow-hidden border-t border-champagne/15 bg-midnight">
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-pearl md:text-5xl">
              Love should be staged beautifully.
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              <MagneticButton to="/contact" className="bg-blush text-ink hover:bg-pearl">
                Enquire Now <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
              <MagneticButton to="/gallery/parties" className="border border-champagne/45 text-champagne hover:bg-champagne hover:text-ink">
                See Party Gallery
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[130] flex items-center justify-center bg-ink/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute right-6 top-6 text-pearl" aria-label="Close">
              <X size={28} />
            </button>
            <motion.img
              src={lightbox}
              alt="Lunaire wedding event, enlarged"
              className="max-h-[85vh] max-w-full object-contain"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
