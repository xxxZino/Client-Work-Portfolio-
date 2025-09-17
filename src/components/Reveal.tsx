"use client";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0 }: PropsWithChildren<{delay?: number}>) {
  const ref = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("show"), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: .18 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <div ref={ref} className="reveal">{children}</div>;
}
