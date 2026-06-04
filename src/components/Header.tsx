import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { images } from '../data/images';

type MenuLink = { label: string; to: string; desc: string };
type MenuGroup = { label: string; to: string; image: string; tag: string; links: MenuLink[] };

const groups: MenuGroup[] = [
  {
    label: 'Weddings',
    to: '/weddings',
    image: images.weddings[0],
    tag: 'Forever, staged beautifully',
    links: [
      { label: 'Weddings', to: '/weddings', desc: 'Our romantic full-service planning' },
      { label: 'Couple Stories', to: '/couples', desc: 'Real Lunaire love stories' },
      { label: 'Gallery', to: '/gallery/weddings', desc: 'Ceremonies, florals, venues' },
      { label: 'Testimonials', to: '/testimonials', desc: 'Words from our couples' },
    ],
  },
  {
    label: 'Parties',
    to: '/parties',
    image: images.parties[0],
    tag: 'Nights worth remembering',
    links: [
      { label: 'Private Parties', to: '/parties', desc: 'Birthdays, milestones, soirées' },
      { label: 'Signature Themes', to: '/themes', desc: 'Pick your vibe' },
      { label: 'Services', to: '/services', desc: 'Everything we offer' },
      { label: 'Gallery', to: '/gallery/parties', desc: 'See the celebrations' },
    ],
  },
  {
    label: 'Studio',
    to: '/about',
    image: images.portraits[0],
    tag: 'The people behind it',
    links: [
      { label: 'About', to: '/about', desc: 'Our story & philosophy' },
      { label: 'Services', to: '/services', desc: 'How we work & packages' },
      { label: 'Booking', to: '/booking', desc: 'Reserve your date' },
      { label: 'Contact', to: '/contact', desc: 'Say hello' },
    ],
  },
];

export default function Header() {
  const { scrolled } = useScrollProgress(60);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [lastActive, setLastActive] = useState(0);
  const loc = useLocation();

  const updateActive = (index: number | null) => {
    setActive(index);
    if (index !== null) {
      setLastActive(index);
    }
  };

  const panel = groups[active ?? lastActive];

  const lightPages = ['/about'];
  const darkText = lightPages.includes(loc.pathname) && !scrolled && active === null;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
          scrolled
            ? 'border-b border-champagne/10 bg-ink/80 py-3 backdrop-blur-xl'
            : `border-b py-6 ${active !== null ? 'border-champagne/10 bg-ink' : 'border-transparent bg-transparent'}`
        }`}
        onMouseLeave={() => updateActive(null)}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="leading-none" aria-label="Lunaire Events home" onClick={() => updateActive(null)}>
            <motion.span
              className={`block font-display tracking-[0.18em] transition-colors ${
                darkText ? 'text-ink' : 'text-pearl'
              }`}
              animate={{ fontSize: scrolled ? '1.25rem' : '1.6rem' }}
            >
              LUNAIRE
            </motion.span>
            <span className={`block text-[9px] uppercase tracking-kicker ${darkText ? 'text-gold-deep' : 'text-champagne/70'}`}>
              Events
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              to="/"
              onMouseEnter={() => updateActive(null)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                loc.pathname === '/' ? 'text-champagne' : darkText ? 'text-ink/70 hover:text-ink' : 'text-pearl/80 hover:text-pearl'
              }`}
            >
              Home
            </Link>

            {groups.map((g, i) => (
              <button
                key={g.label}
                onMouseEnter={() => updateActive(i)}
                onClick={() => updateActive(active === i ? null : i)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                  active === i ? 'text-champagne' : darkText ? 'text-ink/70 hover:text-ink' : 'text-pearl/80 hover:text-pearl'
                }`}
              >
                {g.label}
              </button>
            ))}

            <Link
              to="/booking"
              onMouseEnter={() => updateActive(null)}
              className="inline-flex items-center gap-2 border border-champagne/40 px-5 py-2 text-[10px] uppercase tracking-kicker text-champagne transition-colors hover:bg-champagne hover:text-ink"
            >
              Book now <Heart size={11} className="transition-colors group-hover:fill-current" />
            </Link>
          </nav>

          <button
            className={`lg:hidden ${darkText ? 'text-ink' : 'text-pearl'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Mega-menu panel — always mounted, animates open/closed via `active` */}
        <motion.div
          initial={false}
          animate={
            active !== null
              ? { opacity: 1, y: 0, pointerEvents: 'auto' }
              : { opacity: 0, y: -8, pointerEvents: 'none' }
          }
          transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-x-0 top-full hidden border-t border-champagne/10 bg-ink shadow-2xl shadow-ink/80 lg:block"
        >
          <div className="mx-auto grid max-w-[1400px] grid-cols-[1.4fr_1fr] gap-12 px-10 py-10">
            <div>
              <span className="text-[10px] uppercase tracking-kicker text-champagne/70">{panel.tag}</span>
              <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-1">
                {panel.links.map((l) => (
                  <Link
                    key={l.label + l.to}
                    to={l.to}
                    onClick={() => updateActive(null)}
                    className="group border-b border-champagne/10 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl text-pearl transition-colors group-hover:text-champagne">
                        {l.label}
                      </span>
                      <Heart size={14} className="text-champagne opacity-0 transition-opacity group-hover:opacity-100 group-hover:fill-current" />
                    </div>
                    <p className="text-xs text-pearl/50">{l.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
            <Link to={panel.to} onClick={() => updateActive(null)} className="group relative overflow-hidden">
              <img
                src={panel.image}
                alt={panel.label}
                className="h-56 w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-2xl text-pearl">
                Explore {panel.label}
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] flex flex-col bg-ink"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <img src={images.heroes[1]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-ink/70" />
            <div className="relative flex items-center justify-between px-6 py-6">
              <span className="font-display text-xl tracking-[0.18em] text-pearl">LUNAIRE</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-pearl">
                <X size={26} />
              </button>
            </div>
            <nav className="relative flex flex-1 flex-col gap-7 overflow-y-auto px-8 pb-10 pt-4">
              <MobileLink to="/" label="Home" onClick={() => setOpen(false)} active={loc.pathname === '/'} delay={0.15} />
              {groups.map((g, gi) => (
                <div key={g.label}>
                  <div className="mb-2 text-[10px] uppercase tracking-kicker text-champagne/70">{g.label}</div>
                  <div className="flex flex-col gap-1">
                    {g.links.map((l, li) => (
                      <MobileLink
                        key={l.label + l.to}
                        to={l.to}
                        label={l.label}
                        onClick={() => setOpen(false)}
                        active={loc.pathname === l.to}
                        delay={0.2 + gi * 0.08 + li * 0.04}
                        small
                      />
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-max items-center gap-2 bg-champagne px-6 py-3 text-[10px] uppercase tracking-kicker text-ink"
              >
                Book now <Heart size={11} className="fill-current" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({
  to,
  label,
  onClick,
  active,
  delay,
  small,
}: {
  to: string;
  label: string;
  onClick: () => void;
  active: boolean;
  delay: number;
  small?: boolean;
}) {
  return (
    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay, ease: [0.65, 0, 0.35, 1] }}>
      <Link
        to={to}
        onClick={onClick}
        className={`font-display ${small ? 'text-2xl' : 'text-3xl'} ${active ? 'text-champagne' : 'text-pearl'}`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
