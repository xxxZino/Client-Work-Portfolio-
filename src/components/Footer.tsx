import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="card-glass p-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div>
            <h3 className="text-body font-semibold text-lg">Tetap Terhubung</h3>
            <p className="text-subtle">Terbuka untuk kolaborasi & peluang.</p>
          </div>
          <div className="flex gap-3">
            <Link href="sintajuliyanti26@gmail,com" className="rounded-xl px-4 py-2 glass text-body hover:brightness-110">Email</Link>
            <Link href="linkedin.com/in/sinta-juliyanti" className="rounded-xl px-4 py-2 glass text-body hover:brightness-110">LinkedIn</Link>
            <Link href="https://wa.me/628982969938" className="rounded-xl px-4 py-2 glass text-body hover:brightness-110">WhatsApp</Link>
          </div>
        </div>
        <p className="text-center text-subtle mt-6">
          © {new Date().getFullYear()} Sinta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
