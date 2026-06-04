import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';
import Reveal, { MaskedText } from './Reveal';
import MagneticButton from './MagneticButton';

const cols = [
  {
    title: 'Explore',
    links: [
      ['Home', '/'],
      ['About', '/about'],
      ['Couple Stories', '/couples'],
      ['Wedding Gallery', '/gallery/weddings'],
      ['Party Gallery', '/gallery/parties'],
      ['Testimonials', '/testimonials'],
    ],
  },
  {
    title: 'Celebrate',
    links: [
      ['Weddings', '/weddings'],
      ['Private Parties', '/parties'],
      ['Services', '/services'],
      ['Booking', '/booking'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-champagne/15 bg-midnight pt-24">
      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] leading-none text-pearl/[0.06]">
        LUNAIRE
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-4xl font-display text-4xl leading-tight text-pearl md:text-7xl">
            <MaskedText text="Let’s create something unforgettable." />
          </h2>
        </Reveal>

        <div className="mt-8">
          <MagneticButton to="/contact" className="border border-champagne/40 text-champagne hover:bg-champagne hover:text-ink">
            Start your event <Heart size={13} className="transition-colors group-hover:fill-current" />
          </MagneticButton>
        </div>

        <div className="my-14 hairline" />

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-display text-2xl tracking-[0.18em] text-pearl">LUNAIRE</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pearl/75">
              A moonlit wedding & party planning studio. Designed with taste, restraint, and a love
              of the unforgettable.
            </p>
            <form
              className="mt-6 flex items-center border-b border-champagne/30 pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Newsletter — your email"
                className="w-full bg-transparent text-sm text-pearl placeholder:text-pearl/40 focus:outline-none"
              />
              <button aria-label="Subscribe" className="text-champagne">
                <Heart size={14} className="fill-current" />
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 text-[10px] uppercase tracking-kicker text-champagne">{c.title}</h3>
              <ul className="space-y-2.5">
                {c.links.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-pearl/85 transition-colors hover:text-champagne"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-[10px] uppercase tracking-kicker text-champagne">Connect</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center border border-champagne/40 text-pearl transition-all hover:-translate-y-1 hover:border-champagne hover:bg-champagne hover:text-ink"
                  aria-label="social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-pearl/85">hello@lunaire.events</p>
            <p className="text-sm text-pearl/85">+1 (555) 014-2200</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-champagne/25 py-6 text-xs text-pearl/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lunaire Events. All rights reserved.</span>
          <span>
            Developed with love by{' '}
            <a
              href="https://alaminrobin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne transition-colors hover:text-pearl"
            >
              Al Amin Robin
            </a>
          </span>
          <span>Moonlit weddings & celebrations · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
