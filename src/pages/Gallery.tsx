import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Kicker from '../components/Kicker';
import Reveal from '../components/Reveal';
import { images } from '../data/images';

export default function Gallery() {
  return (
    <PageTransition>
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-ink md:flex-row">
        {/* Left Side: Weddings Gallery */}
        <div className="group relative flex flex-1 flex-col justify-end px-6 py-20 md:h-screen md:px-14 md:pb-28">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={images.weddings[0]}
              alt="Weddings Gallery"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Ink Wash Gradients */}
            <div className="absolute inset-0 bg-ink/55 transition-colors duration-700 group-hover:bg-ink/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-md">
            <Reveal>
              <Kicker className="!text-blush">Weddings</Kicker>
              <h2 className="mt-4 font-display text-4xl leading-none text-pearl md:text-6xl">
                The Weddings<br />
                <span className="italic text-blush">Gallery</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-pearl/75">
                Cinematic ceremonies, luxurious floral design, and romantic moments captured in detail.
              </p>
              <div className="mt-8">
                <Link
                  to="/gallery/weddings"
                  className="inline-flex items-center gap-3 border border-blush bg-blush/10 px-6 py-3 text-[10px] uppercase tracking-kicker text-blush transition-all duration-300 hover:bg-blush hover:text-ink"
                >
                  Enter weddings portfolio{' '}
                  <Heart size={12} className="transition-colors group-hover:fill-current" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Vertical Divider (Desktop only) */}
        <div className="hidden w-px bg-champagne/15 md:block md:h-screen" />

        {/* Right Side: Parties Gallery */}
        <div className="group relative flex flex-1 flex-col justify-end px-6 py-20 md:h-screen md:px-14 md:pb-28">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={images.parties[6]} // Sparklers circle celebration
              alt="Parties Gallery"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Ink Wash Gradients */}
            <div className="absolute inset-0 bg-ink/55 transition-colors duration-700 group-hover:bg-ink/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-md">
            <Reveal>
              <div className="flex items-center gap-2 text-champagne">
                <Sparkles size={12} />
                <Kicker className="!text-champagne">Private Parties</Kicker>
              </div>
              <h2 className="mt-4 font-display text-4xl leading-none text-pearl md:text-6xl">
                The Parties<br />
                <span className="italic text-champagne">Gallery</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-pearl/75">
                Anniversaries, private soirées, milestone birthdays, and dance-filled atmospheres.
              </p>
              <div className="mt-8">
                <Link
                  to="/gallery/parties"
                  className="inline-flex items-center gap-3 border border-champagne bg-champagne/10 px-6 py-3 text-[10px] uppercase tracking-kicker text-champagne transition-all duration-300 hover:bg-champagne hover:text-ink"
                >
                  Enter parties portfolio{' '}
                  <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
