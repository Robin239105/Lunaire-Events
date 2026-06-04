import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ParticleElement {
  id: number;
  isPetal: boolean;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
  rotationStart: number;
  rotationSpeed: number;
  petalColor: string;
}

/** Drifting romantic elements:
 * - Golden fairy-light bokeh specks
 * - Soft blush/white blossom petals that drift & rotate in 3D.
 * GPU-composited, disabled for reduced motion. */
export default function FloatingParticles({ count = 28 }: { count?: number }) {
  const reduced = useReducedMotion();
  const [elements, setElements] = useState<ParticleElement[]>([]);

  useEffect(() => {
    if (reduced) return;
    const list = Array.from({ length: count }, (_, i) => {
      const isPetal = i % 2 === 0; // Alternating sparkles and petals
      return {
        id: i,
        isPetal,
        left: Math.random() * 100,
        size: isPetal ? 16 + Math.random() * 18 : 4 + Math.random() * 6,
        delay: Math.random() * 8,
        duration: isPetal ? 12 + Math.random() * 8 : 9 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 140,
        opacity: isPetal ? 0.45 + Math.random() * 0.4 : 0.55 + Math.random() * 0.35,
        rotationStart: Math.random() * 360,
        rotationSpeed: 40 + Math.random() * 100,
        petalColor: Math.random() > 0.5 ? 'text-blush/85' : 'text-pearl/90',
      };
    });
    setElements(list);
  }, [count, reduced]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map((el) => {
        if (el.isPetal) {
          // Drifting romantic blossom petal
          return (
            <motion.div
              key={el.id}
              className={`absolute bottom-[-10%] transform-gpu ${el.petalColor}`}
              style={{
                left: `${el.left}%`,
                width: el.size,
                height: el.size,
                filter: 'drop-shadow(0 3px 8px rgba(0, 0, 0, 0.25)) drop-shadow(0 1px 3px rgba(231, 201, 194, 0.3))',
                willChange: 'transform, opacity',
              }}
              initial={{ y: 0, opacity: 0, rotate: el.rotationStart }}
              animate={{
                y: ['0%', '-1150%'],
                x: [0, el.drift, el.drift * 0.5, el.drift * 1.2],
                rotate: [el.rotationStart, el.rotationStart + el.rotationSpeed * 3],
                rotateX: [0, 180, 360],
                rotateY: [0, 360, 720],
                opacity: [0, el.opacity, el.opacity, 0],
              }}
              transition={{
                duration: el.duration,
                delay: el.delay,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.15, 0.85, 1],
              }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
                {/* Organic curved petal shape */}
                <path d="M10 2 C13 5 18 8 16 13 C14 17 6 17 4 13 C2 8 7 5 10 2 Z" />
              </svg>
            </motion.div>
          );
        } else {
          // Golden fairy-light sparkle
          return (
            <motion.span
              key={el.id}
              className="absolute bottom-[-6%] transform-gpu rounded-full bg-champagne"
              style={{
                left: `${el.left}%`,
                width: el.size,
                height: el.size,
                boxShadow: '0 0 12px 4px rgba(232, 217, 181, 0.85)', // Stronger gold glow
                willChange: 'transform, opacity',
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: ['0%', '-850%'],
                x: [0, el.drift, 0],
                opacity: [0, el.opacity, el.opacity, 0],
              }}
              transition={{
                duration: el.duration,
                delay: el.delay,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.15, 0.85, 1],
              }}
            />
          );
        }
      })}
    </div>
  );
}
