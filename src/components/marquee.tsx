export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const track = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track flex w-max items-center gap-10">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-medium tracking-wide text-neutral-400"
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
