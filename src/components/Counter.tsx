"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  start?: number;
  duration?: number;   // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function Counter({
  end, start = 0, duration = 1200, decimals = 0, prefix = "", suffix = "", className = ""
}: Props) {
  const [val, setVal] = useState(start);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVal(start + (end - start) * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, start, duration]);

  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();

  return <span ref={ref} className={className}>{prefix}{formatted}{suffix}</span>;
}
