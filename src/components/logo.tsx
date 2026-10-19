import Image from "next/image";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  /** "dark" = for dark backgrounds, "light" = for light backgrounds */
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`flex items-center gap-2 font-extrabold tracking-tight ${className ?? ""}`}
    >
      <Image
        src={
          tone === "dark"
            ? "/brand/samvay360-mark-light.png"
            : "/brand/samvay360-mark.png"
        }
        alt=""
        width={64}
        height={64}
        priority
        className="h-7 w-7"
      />
      <span className="flex items-center gap-0.5">
        <span className={tone === "dark" ? "text-white" : "text-ink"}>SAMVAY</span>
        <span className={tone === "dark" ? "text-copper-light" : "text-copper"}>360</span>
      </span>
    </span>
  );
}
