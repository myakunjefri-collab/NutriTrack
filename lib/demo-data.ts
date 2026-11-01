// SEMUA ANGKA DI SINI ADALAH DATA DEMO (prototipe ilustrasi), bukan data survei klinis nyata.
// Tampilkan label "Data demo" di UI setiap kali memakai angka dari berkas ini.
// Sumber terminologi & spesifikasi: docs/PRD_NutriTrack_Jatim.md (SKPL NutriTrack Jatim v1.0).

export const nav = [
  { label: "Masalah", href: "#masalah" },
  { label: "Cara kerja", href: "#cara-kerja" },
  { label: "Peran", href: "#peran" },
  { label: "Dampak", href: "#dampak" },
];

export const tickerPhrases = [
  "Data kecil, dampak besar",
  "Timbang hari ini, masak hari ini",
  "Dari kebun dan kandang Jawa Timur",
];

export const problems = [
  {
    n: "01",
    title: "Pencatatan lambat",
    body: "Buku KMS kertas mudah rusak, tercecer, dan telat dianalisis sampai jendela kritis terlewat.",
  },
  {
    n: "02",
    title: "Intervensi terlambat",
    body: "Growth faltering (BB mendatar/turun 2 bulan) sering baru terdeteksi setelah menjadi stunting permanen.",
  },
  {
    n: "03",
    title: "Distribusi MBG disamaratakan",
    body: "Porsi dan gizi disamaratakan, padahal baduta faltering butuh protein hewani lebih tinggi.",
  },
  {
    n: "04",
    title: "Dampak belum terukur",
    body: "Belum ada instrumen Return on Nutrition (RoN) yang menghubungkan paket MBG dengan kurva antropometri.",
  },
];

export type StepIllustration =
  | "timbangan-bayi" | "kurva-kms" | "dapur-sppg" | "telur-blitar" | "kotak-qr" | "peta-jatim";

export const steps: { n: string; title: string; body: string; art: StepIllustration }[] = [
  {
    n: "01",
    title: "Timbang di balai desa",
    body: "Kader posyandu menginput BB, PB/TB, dan lingkar kepala balita via ponsel (PWA offline-first).",
    art: "timbangan-bayi",
  },
  {
    n: "02",
    title: "Kalkulator Z-score instan",
    body: "Metode LMS WHO menghitung status gizi hari-H. Growth faltering memicu status Waspada otomatis.",
    art: "kurva-kms",
  },
  {
    n: "03",
    title: "Pesanan kuota dapur SPPG",
    body: "Alokasi otomatis Paket A (Reguler) atau Paket B (Intervensi Gizi Tinggi Protein Hewani) terkirim ke dapur.",
    art: "dapur-sppg",
  },
  {
    n: "04",
    title: "Masak pangan lokal & label QR",
    body: "Menyerap telur Blitar, lele Lamongan, dan daun kelor. Tiap wadah ditempel label QR 128-bit unik.",
    art: "telur-blitar",
  },
  {
    n: "05",
    title: "Scan QR & log daya terima",
    body: "Keluarga atau kader scan QR saat paket diterima, lalu catat konsumsi: Habis, Sebagian, atau Tolak.",
    art: "kotak-qr",
  },
  {
    n: "06",
    title: "Evaluasi Return on Nutrition",
    body: "Penimbangan berkala memetakan kenaikan Z-score siklus 30, 60, 90 hari di dasbor Puskesmas & Pemda.",
    art: "peta-jatim",
  },
];

export const pillars = [
  {
    title: "Smart KMS yang tetap jalan offline",
    body: "Kalkulator Z-score standar WHO/Permenkes di tangan kader, tersimpan di IndexedDB dan tersinkron saat online.",
    art: "kurva-kms",
  },
  {
    title: "Preskripsi MBG yang presisi",
    body: "Data timbangan berubah menjadi daftar kuota Paket A/B dan kebutuhan bahan baku dapur pada hari yang sama.",
    art: "dapur-sppg",
  },
  {
    title: "Bukti dampak yang bisa diaudit",
    body: "Return on Nutrition (RoN) pada siklus 30, 60, dan 90 hari, plus ekspor laporan PDF/Excel untuk instansi.",
    art: "peta-jatim",
  },
] as const;

export type RoleKey = "kader" | "dapur" | "puskesmas" | "dinkes";
export const roles: { key: RoleKey; title: string; device: "ponsel" | "tablet" | "desktop"; body: string }[] = [
  {
    key: "kader",
    title: "Kader Posyandu / Orang Tua",
    device: "ponsel",
    body: "Input cepat antropometri, status Z-score otomatis, kurva KMS digital, dan scan QR verifikasi terima paket MBG.",
  },
  {
    key: "dapur",
    title: "Pengelola Dapur MBG / SPPG",
    device: "tablet",
    body: "Rekap kuota harian Paket A & B, gramasi kebutuhan bahan lokal, cetak label QR kotak makan, dan nota belanja.",
  },
  {
    key: "puskesmas",
    title: "Petugas Gizi Puskesmas",
    device: "desktop",
    body: "Validasi rujukan anak zona merah, rekomendasi terapi gizi lanjutan, dan pantauan desa di wilayah kerja.",
  },
  {
    key: "dinkes",
    title: "Dinas Kesehatan / TPID Jatim",
    device: "desktop",
    body: "Heatmap prevalensi stunting se-Jatim, evaluasi RoN siklus 30/60/90 hari, dan unduh laporan audit Bappeda/Dinkes.",
  },
];

export const commodities = [
  { name: "Telur Blitar", origin: "Kab. Blitar", note: "Sumber protein hewani harian unggulan", art: "telur-blitar" },
  { name: "Lele Lamongan", origin: "Kab. Lamongan", note: "Protein segar & asam lemak esensial (DHA)", art: "lele-lamongan" },
  { name: "Hati Ayam", origin: "Peternak lokal Jatim", note: "Kaya zat besi tinggi pencegah anemia", art: "hati-ayam" },
  { name: "Tempe", origin: "Pengrajin lokal", note: "Protein nabati fermentasi berkualitas", art: "tempe" },
  { name: "Daun Kelor", origin: "Kebun warga desa", note: "Sayur kaya kalsium & mikronutrien penting", art: "daun-kelor" },
] as const;

export const priorityRegions = ["Bangkalan", "Jember", "Bondowoso", "Probolinggo"];

// Angka contoh dari wireframe SKPL & PRD Bagian 7.3. WAJIB diberi label "Data demo".
export const impactDemo = {
  cycles: {
    30: { treated: 14250, deltaZ: 0.3, recovery: 62.1 },
    60: { treated: 14250, deltaZ: 0.6, recovery: 81.4 },
    90: { treated: 14250, deltaZ: 0.9, recovery: 88.0 },
  },
} as const;

export const triad = ["Timbang.", "Putuskan.", "Buktikan."] as const;

export const footerCols = [
  { title: "Produk", links: ["Smart KMS Offline", "Dapur SPPG MBG", "Dasbor Dampak RoN"] },
  { title: "Peran Platform", links: ["Kader & Orang Tua", "Dapur MBG (SPPG)", "Puskesmas", "Dinkes / TPID"] },
  { title: "Sumber Daya", links: ["Standar WHO & Permenkes", "Katalog Resep Lokal", "Glosarium Antropometri"] },
  { title: "Akses", links: ["Panduan Implementasi", "GitHub Repository", "Masuk"] },
];
