"use client";

import Image from "next/image";
import Link from "next/link";
import Counter from "../components/Counter";
import Timeline, { TL } from "../components/Timeline";
import CertificateCarousel from "../components/CertificateCarousel";
import Reveal from "../components/Reveal";

const perjalanan: TL[] = [
  { judul: "Asisten Dosen", sub: "Univ. Proklamasi 45", des: "Mengajar, membimbing, dan mendukung riset akademik.", tahun: "2024 - Sekarang" },
  { judul: "Bendahara Yayasan", sub: "Beryl Mahaprana Media", des: "Mengelola keuangan dengan transparansi & akuntabilitas.", tahun: "2024 - Sekarang" },
  { judul: "Editor Buku", sub: "Beryl Mahaprana Media", des: "Menyunting, menerbitkan karya ilmiah, dan bukur ajar.", tahun: "2024 - Sekarang" },
  { judul: "PKL TV Berita Karawang", sub: "Karawang", des: "Mendukung administrasi redaksi & komunikasi tim.", tahun: "2019" },


];

export default function HomePage() {
  return (
    <main className="space-y-14 md:space-y-16">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
        <div className="aurora-panel aurora-intense p-6 sm:p-8 md:p-10 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* kiri */}
            <div className="space-y-5 md:space-y-6">
              <Reveal>
                <div className="inline-flex items-center rounded-full glass px-3 py-1 text-xs text-subtle">
                  Administrasi Publik • Manajemen Proyek • Pelayanan
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-balance text-body">
                  Dari teori ke praktik, untuk{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    dampak nyata
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-subtle max-w-prose text-base sm:text-lg">
                  Saya <b>Sinta Juliyanti</b>, tertarik menghubungkan administrasi publik dengan
                  praktik nyata untuk menghasilkan manajemen proyek yang lebih baik.
                </p>
              </Reveal>

              {/* CTA: stack di mobile */}
              <Reveal delay={240}>
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Link
                    href="/kontak/page"
                    className="inline-flex justify-center items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-[color:var(--color-primary)] text-white hover:brightness-105 active:scale-95 w-full sm:w-auto"
                  >
                    Ayo Kolaborasi
                  </Link>
                  <a
                    href="/CV.pdf"
                    className="inline-flex justify-center items-center gap-2 rounded-2xl px-5 py-3 font-medium glass text-body hover:brightness-110 w-full sm:w-auto"
                  >
                    Unduh CV
                  </a>
                </div>
              </Reveal>
            </div>

            {/* kanan */}
            <Reveal delay={140}>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl bg-gradient-to-br from-sky-200/70 via-purple-200/60 to-emerald-200/60 dark:from-sky-400/20 dark:via-purple-400/16 dark:to-emerald-400/12" />
                <div className="rounded-2xl glass shadow-soft p-3 sm:p-4 animate-[float_6s_ease-in-out_infinite]">
                  <Image
                    src="/foto-formal.jpg"
                    alt="Foto Formal"
                    width={900}
                    height={900}
                    className="rounded-2xl object-cover w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)}}`}</style>
      </section>

      {/* WAVE: beri tinggi & positioning aman */}
      <div className="relative h-10 sm:h-12 aurora-strip">
        <svg className="absolute inset-x-0 -top-8 sm:-top-10 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,64C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L0,0Z" />
        </svg>
      </div>

      {/* VALUE PILLARS: tambah sm:grid-cols-2 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aurora-panel p-6 sm:p-8 md:p-10 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { t: "Governance & Service", d: "Dari perencanaan hingga evaluasi, setiap langkah terukur dan bermakna." },
              { t: "Research & Publication", d: "Produksi pengetahuan untuk praktik administrasi publik." },
              { t: "Manajemen Proyek", d: "Dari perencanaan hingga evaluasi, setiap langkah terukur dan bermakna." },
            ].map((i, idx) => (
              <Reveal key={i.t} delay={idx * 90}>
                <div className="card-glass p-5 sm:p-6 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-body">{i.t}</h3>
                  <p className="text-subtle">{i.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTERS: center di mobile */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aurora-panel p-6 sm:p-8 md:p-10 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {[{n:11,l:"Partisipan Program & Layanan",s:"+"},{n:30,l:"Proyek & Kegiatan Dikelola",s:"+"},{n:2,l:"Karya Ilmiah & Publikasi",s:"+"}].map((it, i)=>(
              <Reveal key={i} delay={i*100}>
                <div className="card-glass p-7 sm:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-[color:var(--color-primary)]">
                    <Counter end={it.n} />{it.s}
                  </div>
                  <p className="text-subtle mt-1">{it.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

            {/* ================== TIMELINE ================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aurora-panel p-6 md:p-10 shadow-soft">
          <Reveal>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-body">Perjalanan</h2>
              <p className="text-subtle">Ringkasan pendidikan & pengalaman utama.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Timeline items={perjalanan} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
