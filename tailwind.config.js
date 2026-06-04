/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0F',
        midnight: '#14131A',
        champagne: '#E8D9B5',
        blush: '#E7C9C2',
        pearl: '#F6F2EA',
        sage: '#9DA68F',
        gold: { DEFAULT: '#E8D9B5', deep: '#C9A24B' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        kicker: '0.35em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8D9B5 0%, #C9A24B 100%)',
      },
      transitionTimingFunction: {
        cinema: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
