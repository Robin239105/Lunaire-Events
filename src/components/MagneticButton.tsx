import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

/** Refined static action button with clean, professional hover scale effect.
 * Magnetic shifting removed per design review to ensure brand stability. */
export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  className = '',
}: Props) {
  const base =
    'group relative inline-flex items-center justify-center gap-3 whitespace-nowrap px-8 py-4 text-xs uppercase tracking-kicker transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]';
  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
  );

  return (
    <div className="inline-block">
      {to ? (
        <Link to={to} className={`${base} ${className}`} onClick={onClick}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} className={`${base} ${className}`} onClick={onClick}>
          {inner}
        </a>
      ) : (
        <button type="button" className={`${base} ${className}`} onClick={onClick}>
          {inner}
        </button>
      )}
    </div>
  );
}
