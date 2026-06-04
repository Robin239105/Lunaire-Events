/** Small-caps eyebrow with a leading gold rule. */
export default function Kicker({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-kicker text-champagne/80 ${className}`}>
      <span className="h-px w-8 bg-champagne/60" />
      {children}
    </span>
  );
}
