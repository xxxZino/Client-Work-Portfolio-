"use client";
import { useEffect, useRef, useState } from "react";

type Item = { img: string; title: string };

const data: Item[] = [
  // { img: "/Sceremony.jpg", title: "Master of Ceremony" },
  // { img: "/Sceremony2.jpg", title: "Workshop Kebijakan Publik" },
  // { img: "/Sceremony.jpg", title: "Seminar Inovasi Layanan" },
  // { img: "/Sceremony.jpg", title: "Seminar Inovasi Layanan" },
  // { img: "/Sceremony.jpg", title: "Seminar Inovasi Layanan" },
  // { img: "/Sceremony.jpg", title: "Seminar Inovasi Layanan" },
];

export default function CertificateCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  // Auto-scroll aman (clean up + null checks)
  useEffect(() => {
    const step = () => {
      const el = trackRef.current;
      if (!el) return; // aman kalau unmount

      if (!paused) {
        el.scrollLeft += 0.6; // speed
        const max = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= max - 2) {
          // reset mulus: balik ke 0 tanpa flicker
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [paused]);

  return (
    <div className="overflow-x-hidden relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gandakan data untuk loop mulus */}
        {[...data, ...data].map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className="snap-start shrink-0 w-[280px] rounded-2xl glass shadow-soft p-4"
          >
            {/* Pakai img biasa agar aman di public assets */}
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl w-full h-40 object-cover"
              loading="lazy"
            />
            <p className="mt-3 text-center font-medium text-subtle">{item.title}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
