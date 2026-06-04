import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLenis, getLenis } from './hooks/useLenis';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import RouteSweep from './components/RouteSweep';
import { DirectionContext } from './components/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import Couples from './pages/Couples';
import Services from './pages/Services';
import Weddings from './pages/Weddings';
import Parties from './pages/Parties';
import Themes from './pages/Themes';
import Gallery from './pages/Gallery';
import GalleryWeddings from './pages/GalleryWeddings';
import GalleryParties from './pages/GalleryParties';
import Testimonials from './pages/Testimonials';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Nav order — drives transition direction (forward vs back through the site).
const ORDER = [
  '/',
  '/about',
  '/couples',
  '/services',
  '/weddings',
  '/parties',
  '/themes',
  '/gallery',
  '/gallery/weddings',
  '/gallery/parties',
  '/testimonials',
  '/booking',
  '/contact',
];
const orderIndex = (p: string) => {
  const i = ORDER.indexOf(p);
  return i === -1 ? ORDER.length : i;
};

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useLenis();

  const [prevPath, setPrevPath] = useState(location.pathname);
  const [direction, setDirection] = useState(1);

  if (location.pathname !== prevPath) {
    setDirection(orderIndex(location.pathname) >= orderIndex(prevPath) ? 1 : -1);
    setPrevPath(location.pathname);
  }

  // Scroll to top on every route change (works with or without Lenis).
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="grain vignette">
      <CustomCursor />

      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <RouteSweep pathname={location.pathname} direction={direction} />}

      <Header />

      <DirectionContext.Provider value={direction}>
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/couples" element={<Couples />} />
              <Route path="/services" element={<Services />} />
              <Route path="/weddings" element={<Weddings />} />
              <Route path="/parties" element={<Parties />} />
              <Route path="/themes" element={<Themes />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/weddings" element={<GalleryWeddings />} />
              <Route path="/gallery/parties" element={<GalleryParties />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
      </DirectionContext.Provider>

      <Footer />
    </div>
  );
}
