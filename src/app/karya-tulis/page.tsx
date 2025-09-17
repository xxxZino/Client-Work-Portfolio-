"use client";

import Link from "next/link";
import { karyaTulis } from "../../data/karya";
import Reveal from "../../components/Reveal";

export default function KaryaTulisPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
      <div className="aurora-panel p-6 md:p-10 shadow-soft">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-body">Karya Tulis</h1>
          <p className="text-subtle mt-2">Kumpulan publikasi, policy brief, dan artikel opini.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {karyaTulis.map((k, idx) => (
            <Reveal key={k.judul} delay={idx * 80}>
              <article className="card-glass p-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-body">{k.judul}</h3>
                  {k.tahun && (
                    <span className="text-xs px-2 py-1 rounded-full glass text-subtle">{k.tahun}</span>
                  )}
                </div>
                <p className="text-subtle mt-2 flex-1">{k.ringkas}</p>
                <div className="mt-4">
                  {k.tautan ? (
                    <Link href={k.tautan} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 glass text-body hover:brightness-110">
                      Buka Dokumen
                      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-70"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42l9.3-9.29H14V3M5 5h5v2H7v10h10v-3h2v5H5V5Z"/></svg>
                    </Link>
                  ) : (
                    <span className="text-subtle">—</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
