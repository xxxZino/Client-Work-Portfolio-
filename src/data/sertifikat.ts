export type Sertifikat = {
  judul: string;
  penerbit: string;
  tahun: string;
  gambar?: string; // /sertif1.jpg (taruh di public)
  tautan?: string; // dokumen / url
};

export const sertifikat: Sertifikat[] = [
  { judul: "Master of Ceremony", penerbit: "Univ. Proklamasi 45", tahun: "2025", gambar: "/Sceremony.jpg" },
  { judul: "Pemakalah", penerbit: "Univ. Proklamasi 45", tahun: "2025", gambar: "/Spemakalah.jpg" },
  { judul: "Presenter", penerbit: "Univ. Proklamasi 45", tahun: "2025", gambar: "/Spresenter.jpg" },
  { judul: "Peserta", penerbit: "SKK Migas", tahun: "2025", gambar: "/Speserta.jpg" },
  { judul: "Panitia", penerbit: "Dinas Dikbud Pora Kab. Teluk Bintuni", tahun: "2024", gambar: "/Spanitia.jpg" },
  { judul: "Ceremony 2", penerbit: "Beryl Mahaprana Media", tahun: "2025", gambar: "/Sceremony2.jpg" },

];
