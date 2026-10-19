import { ImageResponse } from "next/og";

export const alt = "Samvay360";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#1c150e", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80 }}>
        <div style={{ fontSize: 40, color: "#c9793d" }}>SAMVAY360</div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>Software for how you already work.</div>
      </div>
    ),
    size,
  );
}
