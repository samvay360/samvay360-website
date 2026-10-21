"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type GalleryImage = { src: string; alt: string; caption?: string };

function Arrow({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? "Next image" : "Previous image"}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/15 bg-white/90 text-lg text-ink shadow-sm transition hover:bg-ink hover:text-white ${dir === 1 ? "right-3" : "left-3"}`}
    >
      {dir === 1 ? "→" : "←"}
    </button>
  );
}

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) return null;
  const current = images[index];
  const portrait = /brokersnet/.test(current.src);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
        <div
          className={`relative block w-full ${portrait ? "h-[32rem] sm:h-[40rem]" : "aspect-[16/9]"}`}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className={portrait ? "object-contain" : "object-cover object-top"}
            priority={index === 0}
          />
        </div>
        {count > 1 && (
          <>
            <Arrow dir={-1} onClick={() => go(-1)} />
            <Arrow dir={1} onClick={() => go(1)} />
          </>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 font-mono text-xs text-neutral-500">
        <span>{current.caption ?? current.alt}</span>
        <span className="flex-none">{index + 1} / {count}</span>
      </div>

      {count > 1 && (
        <ul className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <li key={img.src} className="flex-none">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}: ${img.alt}`}
                aria-current={i === index}
                className={`relative block h-16 w-28 overflow-hidden rounded-lg border-2 transition ${i === index ? "border-copper" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <Image src={img.src} alt="" fill sizes="112px" className="object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
