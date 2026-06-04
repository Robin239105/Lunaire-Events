type Props = {
  items?: string[];
  className?: string;
};

/** Slow infinite scrolling text strip. */
export default function Marquee({
  items = ['Weddings', 'Celebrations', 'Soirées', 'Lunaire'],
  className = '',
}: Props) {
  const sequence = [...items, ...items, ...items, ...items];
  const row = [...sequence, ...sequence];
  return (
    <div className={`relative overflow-hidden border-y border-champagne/15 py-6 ${className}`}>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-8 font-display text-3xl font-light tracking-wide text-champagne/70 md:text-5xl"
          >
            {t}
            <span className="mx-8 text-champagne/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
