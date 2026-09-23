export function IconCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M9 18 3 12l6-6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 13 9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGauge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        d="M12 21a9 9 0 1 1 9-9M12 21a9 9 0 0 1-9-9M12 12l4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
