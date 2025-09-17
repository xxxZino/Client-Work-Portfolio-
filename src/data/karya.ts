export type Karya = {
  judul: string;
  ringkas: string;
  tahun?: string;
  tautan?: string;   // /docs/file.pdf atau URL eksternal
};

export const karyaTulis: Karya[] = [
  {
    judul: "Implementasi dan Efektivitas Pengendalian Keamanan Jaringan Menggunakan Tools Honeypot KFSENSOR ",
    ringkas: "Dipresentasikan di Seminar Nasional: Kecerdasan Buatan dan Keamanan Siber sebagai Pilar Utama Ekonomi Kreatif di Era Digital, Universitas Amikom Surakarta",
    tahun: "2024",
    tautan: "Jimplementasi.pdf",
  },
  {
    judul: "Artikel Prosiding: Triple Role pada Perempuan Orang Asli Papua dalam Rumah Produksi D'Tomu (Studi Implementasi Perda No. 1 Tahun 2019 tentang Pengakuan dan Perlindungan Masyarakat Hukum Adat di Kampung Sebyar Rejosari, Distrik Tomu, Kabupaten Teluk Bintuni, Papua Barat)",
    ringkas: "Disajikan pada Seminar Nasional & Call for Paper: Digital Society & Sustainable Humanity 5.0",
    tahun: "2025",
    tautan: "/docs/pelayanan-data.pdf",
  },
  // {
  //   judul: "Studi: Partisipasi Warga dalam Perumusan Kebijakan",
  //   ringkas: "Pembelajaran praktik musrenbang & co-creation di tingkat kelurahan.",
  //   tahun: "2023",
  // },
];
