import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CalendarHeart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import { images } from '../data/images';
import { bookingSteps } from '../data/extras';

const eventTypes = ['Wedding', 'Birthday', 'Anniversary', 'Corporate', 'Engagement', 'Other'];
const budgets = ['Under $10k', '$10k–$25k', '$25k–$50k', '$50k+'];

function Chips({ options, label }: { options: string[]; label: string }) {
  const [sel, setSel] = useState('');
  return (
    <div>
      <div className="mb-3 text-[10px] uppercase tracking-kicker text-champagne/80">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setSel(o)}
            className={`border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
              sel === o
                ? 'border-champagne bg-champagne text-ink'
                : 'border-champagne/25 text-pearl/75 hover:border-champagne'
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({ label, type = 'text' }: { label: string; type?: string }) {
  const [v, setV] = useState('');
  const active = v.length > 0;
  return (
    <div className="group relative border-b border-pearl/20 focus-within:border-champagne">
      <label
        className={`pointer-events-none absolute left-0 origin-left transition-all duration-300 ${
          active ? 'top-0 text-[10px] uppercase tracking-kicker text-champagne' : 'top-5 text-base text-pearl/50'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={v}
        onChange={(e) => setV(e.target.value)}
        className="w-full bg-transparent pb-3 pt-6 text-pearl outline-none"
      />
    </div>
  );
}

export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <PageTransition>
      {/* Hero band */}
      <section className="relative overflow-hidden border-b border-champagne/15 pb-16 pt-40">
        <img src={images.venues[0]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex items-center gap-3">
            <CalendarHeart size={16} className="text-champagne" />
            <Kicker>Booking</Kicker>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[0.95] text-pearl">
            <MaskedText text="Reserve your date." />
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-pearl/80">
            We take a limited number of events each season so every couple gets our full attention.
            Start here — it only takes a minute.
          </p>
        </div>
      </section>

      {/* How booking works */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <Kicker>How it works</Kicker>
        <div className="mt-12 grid gap-px overflow-hidden border border-champagne/15 md:grid-cols-5">
          {bookingSteps.map(([n, t, b], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <div className="h-full bg-ink/40 p-7">
                <span className="font-display text-4xl text-champagne/40">{n}</span>
                <h3 className="mt-3 font-display text-xl text-pearl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pearl/60">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking form */}
      <section className="mx-auto max-w-[1100px] px-6 pb-32 md:px-10">
        <div className="relative border border-champagne/20 bg-midnight/60 p-8 md:p-14">
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-midnight text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                  className="grid h-16 w-16 place-items-center rounded-full border border-champagne text-champagne"
                >
                  <Check size={28} />
                </motion.div>
                <p className="mt-6 font-display text-3xl text-pearl">Request received.</p>
                <p className="mt-2 max-w-sm text-sm text-pearl/60">
                  We’ll check our calendar and reply within two days to set up your consultation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <Reveal>
            <h2 className="font-display text-3xl text-pearl md:text-5xl">Tell us about your event</h2>
            <form
              className="mt-10 space-y-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Chips options={eventTypes} label="Event type" />
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Your name" />
                <Field label="Email" type="email" />
                <Field label="Preferred date" />
                <Field label="Estimated guests" />
              </div>
              <Chips options={budgets} label="Budget range" />
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-champagne px-8 py-4 text-xs uppercase tracking-kicker text-ink transition-colors hover:bg-pearl"
              >
                Request your date
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
