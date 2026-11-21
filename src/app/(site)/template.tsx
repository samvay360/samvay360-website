// Templates remount on every navigation, so this wrapper replays a short
// fade-in for the new page's content. The header, footer and WhatsApp
// button live in the root layout, outside this wrapper, so they never animate.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
