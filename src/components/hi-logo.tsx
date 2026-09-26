type HiLogoProps = {
  className?: string;
};

/**
 * Human In brand mark: rounded black square, white lowercase "hi"
 * with the dot of the "i" rendered as a blue circle.
 */
export function HiLogo({ className }: HiLogoProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" rx="26" fill="currentColor" />
      <g
        fill="none"
        stroke="var(--color-card, #FFFFFF)"
        strokeWidth="9.5"
        strokeLinecap="round"
      >
        <path d="M31 73 V47 a12 12 0 0 1 24 0 V73" />
        <path d="M69 73 V58" />
      </g>
      <circle cx="69" cy="45" r="7" fill="var(--color-primary, #2F80FF)" />
    </svg>
  );
}
