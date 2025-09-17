import Image from "next/image";
import Reveal from "../../components/Reveal";

export default function TentangPage() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="mx-auto w-full max-w-[1060px] px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl shadow-soft p-4 sm:p-6 md:p-8">
          {/* Grid: 1 kolom (mobile) → 2 kolom (≥ md) */}
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-5 sm:gap-8">
            {/* Avatar ring lebih kecil di mobile */}
            <Reveal>
              <div className="justify-self-center md:justify-self-start">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-500 opacity-70 blur-xl" />
                  <Image
                    src="/foto-tentang.jpg"
                    alt="Foto profil"
                    width={512}
                    height={512}
                    priority
                    className="relative w-full h-full rounded-full object-cover border-4 border-white/15 shadow-soft"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            </Reveal>

            {/* Teks: ukuran pakai clamp → rasa '80%' di mobile */}
            <div>
              <Reveal delay={80}>
                <h1 className="text-body font-bold leading-tight text-balance
                  text-[clamp(1.75rem,4.5vw,2.75rem)]">
                  Tentang Saya
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-3 sm:mt-4 text-subtle leading-relaxed break-words max-w-[65ch]
                  text-[clamp(.95rem,2.6vw,1.125rem)]">
                  Saya <b>Sinta Juliyanti</b>, dengan minat besar pada riset
                  <span className="text-[color:var(--color-primary)] font-medium"> kebijakan, pengelolaan program </span>
                  dan
                  <span className="text-[color:var(--color-primary)] font-medium"> inovasi layanan publik.</span>.
                  Terlibat aktif dalam penulisan karya ilmiah dan kegiatan sosial, saya berkomitmen menciptakan kontribusi
                  yang bermakna bagi masyarakat.
                </p>
              </Reveal>

              {/* Kartu keahlian compact */}
              <Reveal delay={200}>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="card-glass p-3 sm:p-4 rounded-2xl">
                    <h3 className="text-body font-semibold mb-1
                      text-[clamp(1rem,2.5vw,1.125rem)]">Keahlian</h3>
                    <p className="text-subtle
                      text-[clamp(.95rem,2.4vw,1.05rem)]">
                      Analisis Kebijakan, Riset Sosial Kualitatif, Penyuntingan, Publikasi Karya
                    </p>
                  </div>
                  <div className="card-glass p-3 sm:p-4 rounded-2xl">
                    <h3 className="text-body font-semibold mb-1
                      text-[clamp(1rem,2.5vw,1.125rem)]">Manajerial & Organisasi </h3>
                    <p className="text-subtle
                      text-[clamp(.95rem,2.4vw,1.05rem)]">
                      Manajemen Keuangan, Manajemen Acara, Kepemimpinan, Teamwork, Komunikasi Publik
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
