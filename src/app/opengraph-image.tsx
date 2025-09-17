/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const title = "Sinta — Portofolio";
  const subtitle = "Kebijakan • Pelayanan • Manajemen Program";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Plus Jakarta Sans, Inter, Arial",
          background:
            "radial-gradient(1200px 600px at 12% 10%, rgba(96,165,250,.55), transparent 50%)," +
            "radial-gradient(1000px 500px at 85% 8%, rgba(139,92,246,.45), transparent 55%)," +
            "radial-gradient(1200px 650px at 50% 95%, rgba(16,185,129,.35), transparent 55%)," +
            "linear-gradient(180deg, #0b1120, #0e1326 20%, #0b1120 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: 32,
            background: "rgba(17,25,40,.45)",
            border: "1px solid rgba(255,255,255,.10)",
            display: "flex",
            flexDirection: "column",
            padding: 40,
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 54, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>{subtitle}</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <img
              src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
              width={64}
              height={64}
              alt=""
              style={{ borderRadius: 12, opacity: 0.9 }}
            />
            <div style={{ fontSize: 20, opacity: 0.85 }}>portfolio.example</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
