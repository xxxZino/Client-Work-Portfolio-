"use client";
import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";

export default function ThemeFAB() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const next = !html.classList.contains("dark");
    html.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full glass shadow-soft grid place-items-center hover:scale-105 active:scale-95 transition"
      aria-label="Toggle theme"
      title="Ganti tema"
    >
      {isDark ? (
        <SunMedium className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonStar className="h-5 w-5 text-slate-800" />
      )}
    </button>
  );
}
