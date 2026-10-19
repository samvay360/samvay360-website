export function Marquee({
  items,
  className,
  light = false,
}: {
  items: string[];
  className?: string;
  light?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track flex w-max items-center gap-10">
        {track.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-10 text-sm font-medium tracking-wide ${light ? "font-mono text-xs uppercase tracking-widest text-neutral-500" : "text-neutral-400"}`}
          >
            {item}
            <span aria-hidden className="text-copper-light">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
