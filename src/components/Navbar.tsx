"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Saya" },
  { href: "/karya-tulis", label: "Karya Tulis" },
  { href: "/sertifikat", label: "Sertifikat" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Tutup menu saat ganti route
  useEffect(() => setOpen(false), [pathname]);

  // Tutup dengan ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4">
        {/* DESKTOP: pill-centered */}
        <nav className="hidden md:flex justify-center pointer-events-auto">
          <div className="glass shadow-soft rounded-full px-6 py-2 flex items-center gap-4">
            {NAV.map((i) => {
              const active = pathname === i.href;
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`font-medium transition ${
                    active
                      ? "text-[color:var(--color-primary)]"
                      : "text-subtle hover:text-body"
                  }`}
                >
                  {i.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* MOBILE: brand + hamburger */}
        <nav className="md:hidden pointer-events-auto">
          <div className="flex items-center justify-between rounded-2xl glass shadow-soft px-4 py-3">
            <Link href="/" className="font-semibold text-body">
              SJ Portofolio
            </Link>
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div
              id="mobile-nav"
              className="mt-2 glass shadow-soft rounded-2xl overflow-hidden"
            >
              <ul className="py-1">
                {NAV.map((i) => {
                  const active = pathname === i.href;
                  return (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        className={`block px-4 py-2.5 text-sm rounded-none ${
                          active
                            ? "bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]"
                            : "text-body hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        {i.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
