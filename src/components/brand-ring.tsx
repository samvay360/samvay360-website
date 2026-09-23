export function BrandRing({
  className,
  spin = true,
  reverse = false,
}: {
  className?: string;
  spin?: boolean;
  reverse?: boolean;
}) {
  const duration = reverse ? "70s" : "50s";
  const direction = reverse ? "reverse" : "normal";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
      className={className}
      style={
        spin
          ? {
              animation: `brand-spin ${duration} linear infinite`,
              animationDirection: direction,
            }
          : undefined
      }
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="url(#ring-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="430 150"
      />
      <defs>
        <linearGradient id="ring-gradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="var(--copper-light)" />
          <stop offset="100%" stopColor="var(--copper)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
