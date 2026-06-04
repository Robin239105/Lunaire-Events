import { images } from './images';

export type Service = {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  details: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    kicker: 'Forever, staged beautifully',
    blurb:
      'From intimate vows to grand celebrations, we choreograph every moment so the day unfolds like a film you will replay forever.',
    details: ['Full planning & design', 'Floral & lighting direction', 'Day-of orchestration', 'Vendor curation'],
    image: images.weddings[0],
  },
  {
    id: 'private-parties',
    title: 'Private Parties',
    kicker: 'Nights worth remembering',
    blurb:
      'Birthdays, anniversaries, and milestone soirées designed with atmosphere first — sound, light, and a sense of occasion.',
    details: ['Concept & theming', 'Entertainment booking', 'Bar & catering design', 'Guest experience'],
    image: images.parties[0],
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    kicker: 'Polished. Effortless.',
    blurb:
      'Launches, galas, and brand moments executed with precision and restraint — your name, presented at its finest.',
    details: ['Brand-led design', 'Production & AV', 'Logistics & staffing', 'On-site management'],
    image: images.venues[0],
  },
  {
    id: 'destination-soirees',
    title: 'Destination Soirées',
    kicker: 'Celebrate, anywhere',
    blurb:
      'Coastlines, vineyards, palazzos. We bring Lunaire’s eye to the world’s most beautiful settings and handle every detail.',
    details: ['Location scouting', 'Travel & accommodation', 'Local vendor partnerships', 'Multi-day itineraries'],
    image: images.venues[2],
  },
];

export const packages = [
  {
    name: 'The Crescent',
    price: 'from $8k',
    line: 'Partial planning for the couple who has a vision and needs an expert hand to realise it.',
    items: ['Design consultation', 'Vendor shortlist', 'Timeline & logistics', 'Day-of coordination'],
  },
  {
    name: 'The Lunaire',
    price: 'from $18k',
    line: 'Our signature full-service experience — we hold every thread from first idea to final dance.',
    items: ['End-to-end planning', 'Full creative direction', 'Floral & lighting design', 'Dedicated event team'],
  },
  {
    name: 'The Eclipse',
    price: 'bespoke',
    line: 'Multi-day and destination productions with no detail spared and no limit on imagination.',
    items: ['Destination management', 'Multi-event design', 'Guest concierge', 'Bespoke everything'],
  },
];
