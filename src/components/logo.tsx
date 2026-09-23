import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`flex items-center gap-2 font-extrabold tracking-tight ${className ?? ""}`}
    >
      <Image
        src="/brand/samvay360-mark-light.png"
        alt=""
        width={64}
        height={64}
        priority
        className="h-7 w-7"
      />
      <span className="flex items-center gap-0.5">
        <span className="text-white">SAMVAY</span>
        <span className="text-copper-light">360</span>
      </span>
    </span>
  );
}
