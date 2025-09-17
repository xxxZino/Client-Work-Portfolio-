"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-40 mix-blend-soft-light"
      style={{ transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)` }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-sky-300/20 blur-3xl" />
    </div>
  );
}
