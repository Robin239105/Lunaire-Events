import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import { images } from '../data/images';

function Field({
  label,
  type = 'text',
  textarea,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [val, setVal] = useState('');
  const active = val.length > 0;
  return (
    <div className="group relative border-b border-pearl/20 transition-colors focus-within:border-champagne">
      <label
        className={`pointer-events-none absolute left-0 origin-left text-pearl/50 transition-all duration-300 ${
          active ? 'top-0 text-[10px] uppercase tracking-kicker text-champagne' : 'top-5 text-base'
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          rows={3}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full resize-none bg-transparent pb-3 pt-6 text-pearl outline-none"
        />
      ) : (
        <input
          type={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full bg-transparent pb-3 pt-6 text-pearl outline-none"
        />
      )}
      <span className="absolute -bottom-px left-0 h-px w-0 bg-champagne transition-all duration-500 group-focus-within:w-full" />
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageTransition>
      <section className="mx-auto grid min-h-screen max-w-[1400px] gap-16 px-6 pb-24 pt-40 md:grid-cols-2 md:px-10">
        {/* Form side */}
        <div>
          <Kicker>Contact</Kicker>
          <h1 className="mt-6 font-display text-5xl font-light leading-[0.95] text-pearl md:text-7xl">
            <MaskedText text="Let’s talk" />
            <br />
            <span className="italic text-champagne">
              <MaskedText text="about your night." delay={0.2} />
            </span>
          </h1>

          <div className="relative mt-12">
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-ink text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="grid h-16 w-16 place-items-center rounded-full border border-champagne text-champagne"
                  >
                    <Check size={28} />
                  </motion.div>
                  <p className="mt-6 font-display text-2xl text-pearl">Thank you.</p>
                  <p className="mt-2 text-sm text-pearl/60">We’ll be in touch within two days.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Your name" />
              <Field label="Email" type="email" />
              <Field label="Event date" />
              <Field label="Tell us about your celebration" textarea />
              <button
                type="submit"
                className="group relative mt-2 inline-flex items-center gap-3 border border-champagne/40 px-8 py-4 text-xs uppercase tracking-kicker text-champagne transition-colors hover:bg-champagne hover:text-ink"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Info side */}
        <Reveal>
          <div className="relative h-full min-h-[400px] overflow-hidden">
            <img
              src={images.venues[3]}
              alt="Lunaire venue"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
              <div className="space-y-6">
                {[
                  [MapPin, 'Studio', '14 Crescent Row, London & Worldwide'],
                  [Mail, 'Email', 'hello@lunaire.events'],
                  [Phone, 'Phone', '+1 (555) 014-2200'],
                ].map(([Icon, label, val]) => {
                  const I = Icon as typeof MapPin;
                  return (
                    <div key={label as string} className="flex items-start gap-4">
                      <I className="mt-1 text-champagne" size={18} />
                      <div>
                        <div className="text-[10px] uppercase tracking-kicker text-champagne/80">
                          {label as string}
                        </div>
                        <div className="text-pearl">{val as string}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4">
                {[Instagram, Facebook, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="grid h-11 w-11 place-items-center border border-champagne/30 text-pearl transition-all hover:-translate-y-1 hover:border-champagne hover:text-champagne"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
