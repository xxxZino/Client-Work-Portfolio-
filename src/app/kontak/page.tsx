"use client";
import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xyz";

export default function KontakPage() {
  const [sent, setSent] = useState<null | "ok" | "err">(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      setSent(r.ok ? "ok" : "err");
      if (r.ok) form.reset();
    } catch { setSent("err"); }
    finally { setLoading(false); setTimeout(() => setSent(null), 3500); }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-16">
      <div className="aurora-panel p-6 sm:p-8 md:p-10 shadow-soft">
        <h1 className="text-3xl font-bold text-body mb-2">Hubungi Saya</h1>
        <p className="text-subtle mb-8">Ada peluang kolaborasi atau pertanyaan? Kirim pesanmu.</p>

        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-strong">Nama</label>
              <input name="nama" required className="mt-1 w-full rounded-xl px-4 py-3 bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]" />
            </div>
            <div>
              <label className="text-strong">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl px-4 py-3 bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]" />
            </div>
          </div>

          <label className="text-strong">Pesan</label>
          <textarea name="pesan" rows={5} className="w-full rounded-xl px-4 py-3 bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]" />

          <button type="submit" disabled={loading} className="mt-2 inline-flex justify-center items-center gap-2 rounded-xl px-6 py-3 bg-[color:var(--color-primary)] text-white hover:brightness-110 active:scale-95 disabled:opacity-60 w-full sm:w-auto">
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </div>

      {/* Toast tetap */}
      {/* ... */}
    </main>
  );
}
