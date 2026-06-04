import { images } from './images';

/* ---- Party page ---- */
export type PartyTheme = {
  name: string;
  vibe: string;
  blurb: string;
  tags: string[];
  image: string;
};

export const partyThemes: PartyTheme[] = [
  {
    name: 'Midnight Gold',
    vibe: 'Glamour · Black-tie',
    blurb: 'Champagne towers, gold confetti, and a live band that does not stop until 3am.',
    tags: ['Live band', 'Champagne tower', 'Gold confetti', 'Dress code'],
    image: images.parties[0],
  },
  {
    name: 'Neon Garden',
    vibe: 'Playful · Tropical',
    blurb: 'Lush greenery, neon signage, and a cocktail bar built around your signature drink.',
    tags: ['Neon signage', 'Cocktail bar', 'Florals', 'DJ set'],
    image: images.parties[1],
  },
  {
    name: 'Velvet Lounge',
    vibe: 'Intimate · Speakeasy',
    blurb: 'Low light, deep velvet, jazz on vinyl, and a whisky tasting in the back room.',
    tags: ['Jazz trio', 'Whisky tasting', 'Velvet decor', 'Cigar lounge'],
    image: images.parties[2],
  },
  {
    name: 'Festival Field',
    vibe: 'Outdoor · Boho',
    blurb: 'Fairy-lit tents, food trucks, lawn games, and a sunset set under open sky.',
    tags: ['Food trucks', 'Lawn games', 'String lights', 'Fire pit'],
    image: images.parties[3],
  },
];

export const partyTypes = [
  'Birthdays',
  'Anniversaries',
  'Engagements',
  'Graduations',
  'Launch parties',
  'Reunions',
  'Holiday soirées',
  'Just because',
];

export const partyExtras = [
  ['DJ & live music', 'Curated sound from arrival to last dance.'],
  ['Bar & mixology', 'Signature cocktails and a bar that becomes the room.'],
  ['Lighting & FX', 'Lasers, haze, neon, and that perfect golden glow.'],
  ['Photo & video', 'Booths, roaming photographers, same-night highlight reels.'],
  ['Catering & cake', 'Grazing tables, late-night bites, show-stopping desserts.'],
  ['Entertainment', 'Dancers, magicians, fire shows — whatever the night needs.'],
];

/* ---- Couple Stories page ---- */
export type CoupleStory = {
  couple: string;
  location: string;
  date: string;
  quote: string;
  image: string;
};

export const coupleStories: CoupleStory[] = [
  {
    couple: 'Amara & Theo',
    location: 'Lake Como, Italy',
    date: 'June 2024',
    quote: 'A lakeside ceremony at golden hour, candle-lit dinner on the water, dancing under stars.',
    image: images.weddings[0],
  },
  {
    couple: 'Noor & James',
    location: 'Marrakech, Morocco',
    date: 'October 2023',
    quote: 'Three days, three settings — a riad, a palm grove, and a desert under a full moon.',
    image: images.weddings[1],
  },
  {
    couple: 'Priya & Sam',
    location: 'Cotswolds, England',
    date: 'September 2023',
    quote: 'A marquee in the meadow, wildflowers everywhere, and a midnight bonfire singalong.',
    image: images.weddings[2],
  },
  {
    couple: 'Lena & Marco',
    location: 'Santorini, Greece',
    date: 'May 2024',
    quote: 'Whitewashed terraces, blue domes, and a first dance as the sun fell into the sea.',
    image: images.weddings[3],
  },
];

/* ---- Booking page ---- */
export const bookingSteps = [
  ['01', 'Enquire', 'Tell us the date, the dream, and the rough headcount. We reply within two days.'],
  ['02', 'Consultation', 'A relaxed call to align on vision, scope, and budget — no obligation.'],
  ['03', 'Proposal', 'A tailored plan, moodboard, and transparent quote land in your inbox.'],
  ['04', 'Reserve', 'A signed agreement and deposit lock your date in the Lunaire calendar.'],
  ['05', 'Create', 'We build, refine, and orchestrate — right through to the last dance.'],
];
