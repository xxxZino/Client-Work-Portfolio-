import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import ThemeFAB from "../components/ThemeFAB";
import Footer from "../components/Footer";
import Particles from "../components/Particles";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Sinta — Portofolio",
  description: "Portofolio Administrasi Publik: kebijakan, pelayanan, dan manajemen program.",
};

const ThemeInit = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
(function() {
  try {
    const ls = localStorage.getItem('theme');
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = ls ? (ls === 'dark') : preferDark;
    document.documentElement.classList.toggle('dark', shouldDark);
  } catch(e) {}
})();
`,
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head><ThemeInit /></head>
      <body className={`${jakarta.variable} bg-aurora min-h-screen antialiased relative`}>
        {/* Partikel halus di belakang konten */}
        <Particles />

        <Navbar />

        {/* Main content */}
        <div className="relative z-10">{children}</div>

        <Footer />
        <ThemeFAB />
      </body>
    </html>
  );
}
