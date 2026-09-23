export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`flex items-center gap-0.5 font-extrabold tracking-tight ${className ?? ""}`}
    >
      <span className="text-white">SAMVAY</span>
      <span className="text-copper-light">360</span>
      <span
        aria-hidden
        className="ml-0.5 h-2 w-2 rounded-full border-2 border-copper-light"
      />
    </span>
  );
}
