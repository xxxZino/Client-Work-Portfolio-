"use client";
import { useEffect, useRef } from "react";

/** Partikel halus (bintang/bola kecil) di background, adaptif dark/light */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

    const isDark = () => document.documentElement.classList.contains("dark");

    const COUNT = Math.min(120, Math.floor((width * height) / 18000));
    const particles = Array.from({ length: COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    const draw = () => {
      // fade trail
      ctx.fillStyle = isDark()
        ? "rgba(11,17,32,0.25)"
        : "rgba(248,250,252,0.25)";
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.02;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const pulse = 0.6 + Math.sin(p.tw) * 0.3;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        const colorCore = isDark() ? "rgba(147,197,253,0.9)" : "rgba(56,189,248,0.9)";
        const colorHalo = isDark() ? "rgba(147,197,253,0.05)" : "rgba(56,189,248,0.05)";
        grd.addColorStop(0, colorCore);
        grd.addColorStop(1, colorHalo);

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(p.x, p.y, p.r * (1.0 + pulse * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden
    />
  );
}
