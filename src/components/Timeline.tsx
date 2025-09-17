"use client";
import React from "react";

export type TL = { tahun?: string; judul: string; sub?: string; des?: string };

export default function Timeline({ items }: { items: TL[] }) {
  return (
    <div className="relative pl-16">
      {/* garis vertikal penuh (simetris) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-7 top-0 bottom-0 w-[3px] rounded-full
                   bg-gradient-to-b from-sky-300/70 via-sky-400/60 to-emerald-300/60
                   dark:from-sky-500/45 dark:via-purple-500/35 dark:to-emerald-500/30"
      />
      <ol className="space-y-10">
        {items.map((t, idx) => (
          <li key={`${t.judul}-${idx}`} className="relative">
            {/* bullet center ke garis */}
            <span
              aria-hidden
              className="absolute left-7 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-[color:var(--color-primary)]
                         ring-4 ring-white/70 dark:ring-white/10 shadow-soft"
            />
            <article className="ml-2 rounded-2xl glass shadow-soft p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-body">{t.judul}</h3>
                {t.tahun && <span className="text-sm text-subtle">{t.tahun}</span>}
              </div>
              {t.sub && <p className="text-strong">{t.sub}</p>}
              {t.des && <p className="text-subtle mt-1">{t.des}</p>}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
