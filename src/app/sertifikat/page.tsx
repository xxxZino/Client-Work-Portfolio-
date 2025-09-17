"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import { sertifikat } from "../../data/sertifikat";

export default function SertifikatPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
      <div className="aurora-panel p-6 md:p-10 shadow-soft">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-body">Sertifikat</h1>
          <p className="text-subtle mt-2">Kumpulan pelatihan & penghargaan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sertifikat.map((s, idx) => (
            <Reveal key={s.judul} delay={idx * 60}>
              <article className="card-glass p-3">
                <Link href={s.gambar || "#"} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={s.gambar || "/placeholder.png"}
                      alt={s.judul}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                {/* ... */}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
