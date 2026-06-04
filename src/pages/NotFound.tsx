import PageTransition from '../components/PageTransition';
import MagneticButton from '../components/MagneticButton';
import Kicker from '../components/Kicker';
import { images } from '../data/images';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <img src={images.heroes[2]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative px-6">
          <Kicker className="justify-center">Lost in the moonlight</Kicker>
          <h1 className="mt-6 font-display text-[28vw] font-light leading-none text-champagne/80 md:text-[18vw]">
            404
          </h1>
          <p className="mx-auto mt-2 max-w-md text-pearl/70">
            This page slipped away into the night. Let’s guide you back.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton to="/" className="border border-champagne/40 text-champagne hover:bg-champagne hover:text-ink">
              Return home
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
