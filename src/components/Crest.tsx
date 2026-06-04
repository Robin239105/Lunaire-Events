import { motion } from 'framer-motion';

interface CrestProps {
  className?: string;
  size?: number;
  delay?: number;
}

export default function Crest({ className = '', size = 120, delay = 0.2 }: CrestProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-champagne"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Fine dotted circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 3"
          opacity="0.4"
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />

        {/* Inner solid border ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="41"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.75"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: delay + 0.3, ease: 'easeInOut' }}
        />

        {/* Botanical Wreath (Left side) */}
        <motion.path
          d="M 28 65 C 20 54 20 38 31 27 C 35 23 40 21 45 20"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: delay + 0.5, ease: 'easeOut' }}
        />
        {/* Leaves Left */}
        <path d="M 27 57 C 24 55 24 51 27 51 C 29 52 29 55 27 57 Z" fill="currentColor" opacity="0.8" />
        <path d="M 22 46 C 19 45 19 41 22 41 C 24 42 24 45 22 46 Z" fill="currentColor" opacity="0.8" />
        <path d="M 26 35 C 23 35 23 31 26 31 C 28 32 28 35 26 35 Z" fill="currentColor" opacity="0.8" />
        <path d="M 34 26 C 32 28 29 26 29 23 C 31 22 34 24 34 26 Z" fill="currentColor" opacity="0.8" />

        {/* Botanical Wreath (Right side) */}
        <motion.path
          d="M 72 65 C 80 54 80 38 69 27 C 65 23 60 21 55 20"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: delay + 0.5, ease: 'easeOut' }}
        />
        {/* Leaves Right */}
        <path d="M 73 57 C 76 55 76 51 73 51 C 71 52 71 55 73 57 Z" fill="currentColor" opacity="0.8" />
        <path d="M 78 46 C 81 45 81 41 78 41 C 76 42 76 45 78 46 Z" fill="currentColor" opacity="0.8" />
        <path d="M 74 35 C 77 35 77 31 74 31 C 72 32 72 35 74 35 Z" fill="currentColor" opacity="0.8" />
        <path d="M 66 26 C 68 28 71 26 71 23 C 69 22 66 24 66 26 Z" fill="currentColor" opacity="0.8" />

        {/* Crescent Moon (Lunaire Symbol from public/moon.svg) */}
        <motion.path
          d="M20 6a11 11 0 1 0 6 14 9 9 0 0 1-6-14z"
          fill="currentColor"
          opacity="0.15"
          transform="translate(27.6, 27.6) scale(1.4)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: delay + 0.9 }}
        />
        <motion.path
          d="M20 6a11 11 0 1 0 6 14 9 9 0 0 1-6-14z"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          transform="translate(27.6, 27.6) scale(1.4)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: delay + 0.8, ease: 'easeInOut' }}
        />

        {/* Central Monogram L */}
        <motion.text
          x="48"
          y="56"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="24"
          fontWeight="300"
          letterSpacing="0"
          fill="currentColor"
          textAnchor="middle"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 56 }}
          transition={{ duration: 1.2, delay: delay + 1.1, ease: 'easeOut' }}
        >
          L
        </motion.text>

        {/* Sparkling Stars */}
        {/* Top Star */}
        <motion.path
          d="M 50 6 L 51 9 L 54 10 L 51 11 L 50 14 L 49 11 L 46 10 L 49 9 Z"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
          transition={{ duration: 1, delay: delay + 1.4, ease: 'easeOut' }}
          style={{ originX: '50px', originY: '10px' }}
        />
        {/* Bottom Star */}
        <motion.path
          d="M 50 86 L 51 89 L 54 90 L 51 91 L 50 94 L 49 91 L 46 90 L 49 89 Z"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
          transition={{ duration: 1, delay: delay + 1.6, ease: 'easeOut' }}
          style={{ originX: '50px', originY: '90px' }}
        />
        {/* Left Small Star */}
        <motion.path
          d="M 12 50 L 13 52 L 15 53 L 13 54 L 12 56 L 11 54 L 9 53 L 11 52 Z"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0.7], opacity: [0, 0.9, 0.6] }}
          transition={{ duration: 0.8, delay: delay + 1.8, ease: 'easeOut' }}
          style={{ originX: '12px', originY: '53px' }}
        />
        {/* Right Small Star */}
        <motion.path
          d="M 88 50 L 89 52 L 91 53 L 89 54 L 88 56 L 87 54 L 85 53 L 87 52 Z"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0.7], opacity: [0, 0.9, 0.6] }}
          transition={{ duration: 0.8, delay: delay + 1.8, ease: 'easeOut' }}
          style={{ originX: '88px', originY: '53px' }}
        />
      </svg>
    </motion.div>
  );
}
