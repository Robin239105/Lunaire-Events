import { Heart, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal, { MaskedText } from '../components/Reveal';
import Kicker from '../components/Kicker';
import MagneticButton from '../components/MagneticButton';
import { images } from '../data/images';
import { coupleStories } from '../data/extras';

export default function Couples() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative flex h-[80vh] items-center overflow-hidden">
        <img
          src={images.weddings[1]}
          alt="A couple sharing a quiet moment on their wedding day"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="flex items-center gap-3">
            <Heart size={16} className="text-blush" fill="currentColor" />
            <Kicker className="!text-blush">Real love, real nights</Kicker>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,8rem)] font-light leading-[0.95] text-pearl">
            <MaskedText text="Couple stories" />
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-pearl/80">
            Every Lunaire wedding begins with two people and one feeling. Here are a few of the
            nights we’ve been lucky enough to design.
          </p>
        </div>
      </section>

      {/* Stories — alternating editorial blocks */}
      <section className="mx-auto flex max-w-[1400px] flex-col gap-24 px-6 py-28 md:gap-36 md:px-10">
        {coupleStories.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={s.couple}
              className={`grid items-center gap-10 md:grid-cols-2 ${flip ? 'md:[direction:rtl]' : ''}`}
            >
              <Reveal className="[direction:ltr]">
                <div className="group relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.couple} — ${s.location}`}
                    loading="lazy"
                    className="h-full w-full transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 flex items-center gap-2 bg-ink/70 px-3 py-1.5 text-[10px] uppercase tracking-kicker text-champagne backdrop-blur">
                    <MapPin size={11} /> {s.location}
                  </div>
                </div>
              </Reveal>

              <div className="[direction:ltr]">
                <Reveal delay={0.1}>
                  <span className="font-display text-6xl text-blush/25">0{i + 1}</span>
                  <div className="text-[10px] uppercase tracking-kicker text-champagne/80">{s.date}</div>
                  <h2 className="mt-3 font-display text-4xl text-pearl md:text-6xl">{s.couple}</h2>
                  <p className="mt-5 max-w-md font-display text-2xl font-light italic leading-snug text-pearl/80">
                    “{s.quote}”
                  </p>
                  <div className="mt-6 h-px w-24 bg-gold-gradient" />
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={images.weddings[4]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
          <Reveal>
            <Heart size={22} className="mx-auto text-blush" fill="currentColor" />
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-pearl md:text-6xl">
              Your story could be next.
            </h2>
            <div className="mt-10 flex justify-center">
              <MagneticButton to="/booking" className="bg-blush text-ink hover:bg-pearl">
                Start planning <Heart size={13} className="transition-colors group-hover:fill-current" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
