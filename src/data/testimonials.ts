import { images } from './images';

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Lunaire turned our wedding into something we still cannot quite believe was ours. Every detail felt inevitable, as if it could only have been this way.',
    name: 'Amara & Theo',
    role: 'Lakeside Wedding, Como',
    image: images.weddings[1],
  },
  {
    quote:
      'They read the room before we did. The evening moved like music — we never once looked at a clock.',
    name: 'The Okonkwo Family',
    role: 'Anniversary Soirée, London',
    image: images.parties[2],
  },
  {
    quote:
      'Calm, exact, and impossibly elegant. Our guests are still talking about the lighting six months later.',
    name: 'Isabel R.',
    role: 'Brand Gala, Paris',
    image: images.venues[1],
  },
  {
    quote:
      'A destination weekend with three events and not a single seam showing. Pure craft.',
    name: 'Noor & James',
    role: 'Destination Wedding, Marrakech',
    image: images.weddings[4],
  },
];
