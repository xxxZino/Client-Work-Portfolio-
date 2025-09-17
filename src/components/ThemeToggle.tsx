"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const pref =
      localStorage.getItem("theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setDark(pref === "dark");
    document.documentElement.classList.toggle("dark", pref === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const val = next ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", val);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Ganti tema"
      className="inline-flex items-center justify-center rounded-xl px-3 py-2 glass shadow-soft hover:brightness-110 active:scale-95 transition"
      title={dark ? "Mode Gelap" : "Mode Terang"}
    >
      {dark ? (
        // moon
        <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        // sun
        <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zm-2.24-8.16l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM12 7a5 5 0 100 10A5 5 0 0012 7zm6.24 12.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM4.22 17.95l-1.8 1.79 1.41 1.41 1.8-1.79-1.41-1.41z" />
        </svg>
      )}
    </button>
  );
}
