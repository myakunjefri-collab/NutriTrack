/**
 * Master Data & Calculation Engine untuk Dashboard Eksekutif NutriTrack Jatim
 * Mengimplementasikan seluruh Functional Requirements (SKPL-F01 s/d SKPL-F14)
 * Berdasarkan standar Permenkes No. 2/2020 & WHO Child Growth Standards.
 */

export interface BalitaRecord {
  id: string;
  nik: string;
  nama: string;
  tglLahir: string;
  usiaBulan: number;
  jenisKelamin: "L" | "P";
  namaIbu: string;
  kabupaten: string;
  kecamatan: string;
  desa: string;
  posyandu: string;
  bbKg: number;
  tbCm: number;
  lingkarKepalaCm: number;
  zBBU: number;
  zTBU: number;
  zBBTB: number;
  statusNutrisi: "Normal" | "Waspada / Faltering" | "Stunting" | "Gizi Buruk";
  paketMBG: "Paket A (Reguler)" | "Paket B (Intervensi Protein Hewani)";
  isFaltering: boolean;
  history: { tgl: string; usia: number; bb: number; tb: number; zTbu: number; zBbu: number }[];
  catatan?: string;
}

export const BALITA_MOCK: BalitaRecord[] = [
  {
    id: "B-001",
    nik: "3505126804240001",
    nama: "Ahmad Fauzi",
    tglLahir: "2025-08-15",
    usiaBulan: 14,
    jenisKelamin: "L",
    namaIbu: "Siti Rahayu",
    kabupaten: "Kab. Bangkalan",
    kecamatan: "Socah",
    desa: "Desa Bilaporah",
    posyandu: "Posyandu Mawar 01",
    bbKg: 8.4,
    tbCm: 72.8,
    lingkarKepalaCm: 45.2,
    zBBU: -2.15,
    zTBU: -2.42,
    zBBTB: -1.82,
    statusNutrisi: "Waspada / Faltering",
    paketMBG: "Paket B (Intervensi Protein Hewani)",
    isFaltering: true,
    history: [
      { tgl: "2026-08-10", usia: 12, bb: 8.5, tb: 71.5, zTbu: -2.35, zBbu: -2.0 },
      { tgl: "2026-09-12", usia: 13, bb: 8.4, tb: 72.1, zTbu: -2.38, zBbu: -2.1 },
      { tgl: "2026-10-15", usia: 14, bb: 8.4, tb: 72.8, zTbu: -2.42, zBbu: -2.15 },
    ],
    catatan: "BB stagnan 2 bulan berturut-turut. Dialokasikan ke Paket B + pantau Puskesmas.",
  },
  {
    id: "B-002",
    nik: "3505124502250002",
    nama: "Siti Nur Aisyah",
    tglLahir: "2025-04-10",
    usiaBulan: 18,
    jenisKelamin: "P",
    namaIbu: "Nurul Chotimah",
    kabupaten: "Kab. Bangkalan",
    kecamatan: "Socah",
    desa: "Desa Bilaporah",
    posyandu: "Posyandu Mawar 01",
    bbKg: 10.2,
    tbCm: 81.5,
    lingkarKepalaCm: 46.5,
    zBBU: -0.15,
    zTBU: +0.22,
    zBBTB: -0.28,
    statusNutrisi: "Normal",
    paketMBG: "Paket A (Reguler)",
    isFaltering: false,
    history: [
      { tgl: "2026-08-10", usia: 16, bb: 9.6, tb: 79.4, zTbu: +0.15, zBbu: -0.2 },
      { tgl: "2026-09-12", usia: 17, bb: 9.9, tb: 80.5, zTbu: +0.2, zBbu: -0.18 },
      { tgl: "2026-10-15", usia: 18, bb: 10.2, tb: 81.5, zTbu: +0.22, zBbu: -0.15 },
    ],
  },
  {
    id: "B-003",
    nik: "3505141209240003",
    nama: "Budi Santoso",
    tglLahir: "2024-10-20",
    usiaBulan: 24,
    jenisKelamin: "L",
    namaIbu: "Dewi Lestari",
    kabupaten: "Kab. Sampang",
    kecamatan: "Kedungdung",
    desa: "Desa Banjarsari",
    posyandu: "Posyandu Melati 03",
    bbKg: 9.8,
    tbCm: 80.2,
    lingkarKepalaCm: 47.0,
    zBBU: -2.35,
    zTBU: -2.68,
    zBBTB: -1.75,
    statusNutrisi: "Stunting",
    paketMBG: "Paket B (Intervensi Protein Hewani)",
    isFaltering: true,
    history: [
      { tgl: "2026-08-15", usia: 22, bb: 9.9, tb: 79.2, zTbu: -2.6, zBbu: -2.25 },
      { tgl: "2026-09-18", usia: 23, bb: 9.8, tb: 79.8, zTbu: -2.64, zBbu: -2.3 },
      { tgl: "2026-10-20", usia: 24, bb: 9.8, tb: 80.2, zTbu: -2.68, zBbu: -2.35 },
    ],
    catatan: "Zona Merah: Rujukan terjadwal ke Dokter Puskesmas Kedungdung.",
  },
  {
    id: "B-004",
    nik: "3505145501250004",
    nama: "Kevin Pratama",
    tglLahir: "2025-02-12",
    usiaBulan: 20,
    jenisKelamin: "L",
    namaIbu: "Endang Susilowati",
    kabupaten: "Kab. Blitar",
    kecamatan: "Sutojayan",
    desa: "Desa Pandanarum",
    posyandu: "Posyandu Anggrek 02",
    bbKg: 11.4,
    tbCm: 84.6,
    lingkarKepalaCm: 47.8,
    zBBU: +0.32,
    zTBU: +0.48,
    zBBTB: +0.12,
    statusNutrisi: "Normal",
    paketMBG: "Paket A (Reguler)",
    isFaltering: false,
    history: [
      { tgl: "2026-08-11", usia: 18, bb: 10.8, tb: 82.5, zTbu: +0.4, zBbu: +0.25 },
      { tgl: "2026-09-14", usia: 19, bb: 11.1, tb: 83.6, zTbu: +0.45, zBbu: +0.28 },
      { tgl: "2026-10-18", usia: 20, bb: 11.4, tb: 84.6, zTbu: +0.48, zBbu: +0.32 },
    ],
  },
  {
    id: "B-005",
    nik: "3505147007250005",
    nama: "Zahra Cantika",
    tglLahir: "2025-11-05",
    usiaBulan: 11,
    jenisKelamin: "P",
    namaIbu: "Fitria Andini",
    kabupaten: "Kab. Probolinggo",
    kecamatan: "Krucil",
    desa: "Desa Bermi",
    posyandu: "Posyandu Teratai 01",
    bbKg: 7.2,
    tbCm: 68.4,
    lingkarKepalaCm: 43.6,
    zBBU: -2.12,
    zTBU: -2.55,
    zBBTB: -1.65,
    statusNutrisi: "Waspada / Faltering",
    paketMBG: "Paket B (Intervensi Protein Hewani)",
    isFaltering: true,
    history: [
      { tgl: "2026-08-05", usia: 9, bb: 7.3, tb: 67.2, zTbu: -2.5, zBbu: -2.0 },
      { tgl: "2026-09-08", usia: 10, bb: 7.2, tb: 67.8, zTbu: -2.52, zBbu: -2.08 },
      { tgl: "2026-10-10", usia: 11, bb: 7.2, tb: 68.4, zTbu: -2.55, zBbu: -2.12 },
    ],
  },
];

/* ---------- Resep MPASI Lokal Jatim (SKPL-F07) ---------- */
export interface RecipeItem {
  id: string;
  nama: string;
  tipePaket: "Paket B (Intervensi)" | "Paket A (Reguler)";
  komoditasUtama: string;
  asalKomoditas: string;
  energiKkal: number;
  proteinGram: number;
  lemakGram: number;
  karboGram: number;
  tekstur: string;
  gramasiBahan: { bahan: string; gram: number; porsi100: string }[];
  langkahMasak: string[];
}

export const RESEP_MOCK: RecipeItem[] = [
  {
    id: "R-01",
    nama: "Nasi Tim Hati Ayam & Lele Asap Lamongan + Ekstra 1 Butir Telur Blitar",
    tipePaket: "Paket B (Intervensi)",
    komoditasUtama: "Telur Blitar & Lele Lamongan",
    asalKomoditas: "Gapoktan Mina Makmur & Koperasi Peternak Blitar",
    energiKkal: 345,
    proteinGram: 18.2,
    lemakGram: 12.5,
    karboGram: 38.0,
    tekstur: "Lembek Cincang Halus (12-24 Bulan)",
    gramasiBahan: [
      { bahan: "Beras Putih Lokal", gram: 45, porsi100: "4.5 kg" },
      { bahan: "Telur Ayam Blitar", gram: 55, porsi100: "100 butir (5.5 kg)" },
      { bahan: "Fillet Daging Lele Lamongan", gram: 35, porsi100: "3.5 kg" },
      { bahan: "Hati Ayam Kampung Segar", gram: 25, porsi100: "2.5 kg" },
      { bahan: "Daun Kelor Organik Cincang", gram: 15, porsi100: "1.5 kg" },
      { bahan: "Minyak Kelapa / Santan Sehat", gram: 5, porsi100: "0.5 liter" },
    ],
    langkahMasak: [
      "Kukus fillet lele asap Lamongan dan hati ayam dengan rempah aromatik (serai & daun salam) hingga empuk.",
      "Rebus telur Blitar setengah matang lembut, kupas dan pisahkan untuk toping protein booster.",
      "Masak beras lokal menjadi nasi tim lembut kaldu ayam kampung bersama cincangan daun kelor.",
      "Satukan protein hewani, lumat halus sesuai tekstur usia anak, dan kemas hangat di wadah bersertifikasi higienis.",
    ],
  },
  {
    id: "R-02",
    nama: "Bubur Singkong Daging Sapi Lontong Kupang & Puree Daun Kelor",
    tipePaket: "Paket B (Intervensi)",
    komoditasUtama: "Daging Sapi Madura & Kupang Sidoarjo",
    asalKomoditas: "Sentra Peternak Madura & Nelayan Sidoarjo",
    energiKkal: 360,
    proteinGram: 17.5,
    lemakGram: 13.0,
    karboGram: 42.0,
    tekstur: "Bubur Padat Bergizi (6-11 Bulan / 12-24 Bulan)",
    gramasiBahan: [
      { bahan: "Tepung Beras & Singkong Manis", gram: 40, porsi100: "4.0 kg" },
      { bahan: "Daging Sapi Cincang Halus", gram: 40, porsi100: "4.0 kg" },
      { bahan: "Kaldu Kerang Kupang Sidoarjo (Besi & Zink)", gram: 20, porsi100: "2.0 kg" },
      { bahan: "Puree Daun Kelor & Wortel", gram: 20, porsi100: "2.0 kg" },
      { bahan: "Minyak Nabati Kaya Lemak Baik", gram: 5, porsi100: "0.5 liter" },
    ],
    langkahMasak: [
      "Tumis daging sapi giling dengan sedikit bawang putih hingga wangi dan matang sempurna.",
      "Masukkan sari kaldu kerang kupang alami yang kaya zink dan zat besi pencegah anemia.",
      "Campurkan puree daun kelor segar sesaat sebelum diangkat agar mikronutrien tidak rusak.",
      "Porsi sesuai kuota intervensi dan tempelkan label QR verifikasi.",
    ],
  },
  {
    id: "R-03",
    nama: "Nasi Pulen Ikan Kembung Kuah Kuning & Tahu Tempe Kediri",
    tipePaket: "Paket A (Reguler)",
    komoditasUtama: "Ikan Kembung Pacitan & Tempe Kediri",
    asalKomoditas: "TPI Tamperan Pacitan & Gapoktan Kediri",
    energiKkal: 310,
    proteinGram: 14.0,
    lemakGram: 9.8,
    karboGram: 41.5,
    tekstur: "Nasi Lembek / Nasi Biasa (24-59 Bulan)",
    gramasiBahan: [
      { bahan: "Beras Pulen Berkualitas", gram: 50, porsi100: "5.0 kg" },
      { bahan: "Ikan Kembung Segar (Omega-3)", gram: 40, porsi100: "4.0 kg" },
      { bahan: "Tempe Kediri Organik", gram: 25, porsi100: "2.5 kg" },
      { bahan: "Labu Kuning & Buncis Iris", gram: 25, porsi100: "2.5 kg" },
    ],
    langkahMasak: [
      "Ungkep ikan kembung dengan kunyit, jahe, dan serai untuk menghilangkan bau amis.",
      "Kukus tempe Kediri dan sayur labu kuning hingga lembut.",
      "Sajikan bersama nasi pulen hangat dengan takaran porsi reguler berimbang.",
    ],
  },
  {
    id: "R-04",
    nama: "Sup Bola Daging Ayam Kampung & Sayur Bayam Labu Madu",
    tipePaket: "Paket A (Reguler)",
    komoditasUtama: "Ayam Kampung Jombang & Sayur Malang",
    asalKomoditas: "Peternak Jombang & Petani Organik Batu Malang",
    energiKkal: 295,
    proteinGram: 13.8,
    lemakGram: 8.5,
    karboGram: 39.0,
    tekstur: "Kuah Kaldu Bening Segar",
    gramasiBahan: [
      { bahan: "Daging Ayam Kampung Giling", gram: 45, porsi100: "4.5 kg" },
      { bahan: "Telur Puyuh Rebus (2 butir)", gram: 20, porsi100: "200 butir" },
      { bahan: "Bayam Hijau & Labu Madu", gram: 30, porsi100: "3.0 kg" },
      { bahan: "Beras Merah-Putih Blend", gram: 45, porsi100: "4.5 kg" },
    ],
    langkahMasak: [
      "Bentuk bola-bola daging ayam kampung yang dicampur sedikit tepung tapioka alami.",
      "Rebus dalam kaldu tulang ayam bening tanpa MSG.",
      "Tambahkan sayuran bayam hijau dan labu madu cincang di akhir proses masak.",
    ],
  },
];

/* ---------- Rantai Pasok Pangan Lokal (SKPL-F09) ---------- */
export interface SupplierLog {
  id: string;
  tanggal: string;
  pemasok: string;
  lokasi: string;
  komoditas: string;
  volumeKg: number;
  hargaTotalRp: number;
  statusMutu: "Tersertifikasi Segar" | "Lolos Uji BPOM/Dinkes";
}

export const SUPPLY_LOGS_MOCK: SupplierLog[] = [
  {
    id: "SP-001",
    tanggal: "2026-11-01",
    pemasok: "Koperasi Peternak Unggas Blitar Jaya",
    lokasi: "Kab. Blitar, Jawa Timur",
    komoditas: "Telur Ayam Segar Grade A Omega-3",
    volumeKg: 350,
    hargaTotalRp: 9450000,
    statusMutu: "Tersertifikasi Segar",
  },
  {
    id: "SP-002",
    tanggal: "2026-11-01",
    pemasok: "Gapoktan Mina Makmur Lamongan",
    lokasi: "Kab. Lamongan, Jawa Timur",
    komoditas: "Ikan Lele Segar Fillet Siap Masak",
    volumeKg: 220,
    hargaTotalRp: 6160000,
    statusMutu: "Tersertifikasi Segar",
  },
  {
    id: "SP-003",
    tanggal: "2026-10-31",
    pemasok: "Kelompok Tani Organik Sumber Makmur",
    lokasi: "Kota Batu Malang, Jawa Timur",
    komoditas: "Daun Kelor Organik & Labu Madu",
    volumeKg: 120,
    hargaTotalRp: 2160000,
    statusMutu: "Lolos Uji BPOM/Dinkes",
  },
  {
    id: "SP-004",
    tanggal: "2026-10-30",
    pemasok: "Sentra Tempe & Tahu Kediri Sejahtera",
    lokasi: "Kab. Kediri, Jawa Timur",
    komoditas: "Tempe Kedelai Non-GMO Tradisional",
    volumeKg: 180,
    hargaTotalRp: 2700000,
    statusMutu: "Tersertifikasi Segar",
  },
];

/* ---------- Data Wilayah Jawa Timur & Prevalensi Stunting (SKPL-F12) ---------- */
export interface JatimRegionData {
  nama: string;
  kategori: "Prioritas Merah (>20%)" | "Waspada Kuning (14-20%)" | "Terkendali Hijau (<14%)";
  prevalensiPersen: number;
  totalBalita: number;
  balitaFaltering: number;
  porsiPaketB: number;
  statusProgram: string;
}

export const REGIONS_JATIM_DATA: JatimRegionData[] = [
  { nama: "Kab. Bangkalan", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 24.8, totalBalita: 14250, balitaFaltering: 3480, porsiPaketB: 3480, statusProgram: "Intervensi Aktif (12 Dapur SPPG)" },
  { nama: "Kab. Sampang", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 25.4, totalBalita: 13800, balitaFaltering: 3510, porsiPaketB: 3510, statusProgram: "Intervensi Aktif (11 Dapur SPPG)" },
  { nama: "Kab. Pamekasan", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 21.6, totalBalita: 12400, balitaFaltering: 2680, porsiPaketB: 2680, statusProgram: "Intervensi Aktif (9 Dapur SPPG)" },
  { nama: "Kab. Sumenep", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 22.3, totalBalita: 16200, balitaFaltering: 3610, porsiPaketB: 3610, statusProgram: "Intervensi Aktif (14 Dapur SPPG Kepulauan)" },
  { nama: "Kab. Jember", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 23.2, totalBalita: 28500, balitaFaltering: 6610, porsiPaketB: 6610, statusProgram: "Intervensi Terpadu (22 Dapur SPPG)" },
  { nama: "Kab. Bondowoso", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 22.8, totalBalita: 11900, balitaFaltering: 2710, porsiPaketB: 2710, statusProgram: "Intervensi Aktif (10 Dapur SPPG)" },
  { nama: "Kab. Probolinggo", kategori: "Prioritas Merah (>20%)", prevalensiPersen: 21.1, totalBalita: 15400, balitaFaltering: 3250, porsiPaketB: 3250, statusProgram: "Intervensi Aktif (12 Dapur SPPG)" },
  { nama: "Kab. Blitar", kategori: "Waspada Kuning (14-20%)", prevalensiPersen: 14.5, totalBalita: 14600, balitaFaltering: 2120, porsiPaketB: 2120, statusProgram: "Sentra Pasok Telur (8 Dapur SPPG)" },
  { nama: "Kab. Lamongan", kategori: "Waspada Kuning (14-20%)", prevalensiPersen: 15.2, totalBalita: 17800, balitaFaltering: 2710, porsiPaketB: 2710, statusProgram: "Sentra Pasok Ikan Lele (12 Dapur SPPG)" },
  { nama: "Kab. Pasuruan", kategori: "Waspada Kuning (14-20%)", prevalensiPersen: 17.4, totalBalita: 19200, balitaFaltering: 3340, porsiPaketB: 3340, statusProgram: "Pemantauan Ketat (14 Dapur SPPG)" },
  { nama: "Kab. Malang", kategori: "Waspada Kuning (14-20%)", prevalensiPersen: 16.8, totalBalita: 32100, balitaFaltering: 5390, porsiPaketB: 5390, statusProgram: "Intervensi Agropolitan (25 Dapur SPPG)" },
  { nama: "Kota Surabaya", kategori: "Terkendali Hijau (<14%)", prevalensiPersen: 4.8, totalBalita: 38400, balitaFaltering: 1840, porsiPaketB: 1840, statusProgram: "Zero New Stunting (18 Dapur Percontohan)" },
  { nama: "Kota Malang", kategori: "Terkendali Hijau (<14%)", prevalensiPersen: 8.2, totalBalita: 12500, balitaFaltering: 1020, porsiPaketB: 1020, statusProgram: "Digital Posyandu Mandiri (8 Dapur SPPG)" },
  { nama: "Kota Madiun", kategori: "Terkendali Hijau (<14%)", prevalensiPersen: 7.4, totalBalita: 4800, balitaFaltering: 350, porsiPaketB: 350, statusProgram: "Program MBG Sekolah & Posyandu" },
];

/* ---------- Return on Nutrition (RoN) Tracker (SKPL-F13) ---------- */
export const RON_COHORT_DATA = [
  {
    siklus: "Siklus 30 Hari",
    hari: 30,
    balitaKohort: 8420,
    deltaZBBU: +0.34,
    deltaZTBU: +0.28,
    recoveryRate: "54.2%",
    porsiDihabiskan: "91.8%",
    statusAudit: "TERVERIFIKASI AUDIT BPKP",
  },
  {
    siklus: "Siklus 60 Hari",
    hari: 60,
    balitaKohort: 6940,
    deltaZBBU: +0.68,
    deltaZTBU: +0.62,
    recoveryRate: "68.4%",
    porsiDihabiskan: "93.4%",
    statusAudit: "TERVERIFIKASI AUDIT BPKP",
  },
  {
    siklus: "Siklus 90 Hari",
    hari: 90,
    balitaKohort: 5820,
    deltaZBBU: +0.98,
    deltaZTBU: +0.92,
    recoveryRate: "81.6%",
    porsiDihabiskan: "95.1%",
    statusAudit: "REKOMENDASI PENGHARGAAN TPID",
  },
];

/* ---------- Log Distribusi & Scan Paket QR (SKPL-F10, F11) ---------- */
export interface DistributionItem {
  qrToken: string;
  anakId: string;
  namaAnak: string;
  tipePaket: "Paket A" | "Paket B";
  posyandu: string;
  waktuKirim: string;
  status: "Diterima" | "Dikirim" | "Tersisa Sebagian" | "Tidak Termakan";
  dayaTerima?: "Habis (100%)" | "Tersisa Sebagian (50%)" | "Tidak Termakan (0%)";
  verifiedAt?: string;
  verifiedBy?: string;
}

export const DISTRIBUTIONS_MOCK: DistributionItem[] = [
  {
    qrToken: "NT-JTM-9821-B4A1-14",
    anakId: "B-001",
    namaAnak: "Ahmad Fauzi",
    tipePaket: "Paket B",
    posyandu: "Posyandu Mawar 01",
    waktuKirim: "07:30 WIB",
    status: "Diterima",
    dayaTerima: "Habis (100%)",
    verifiedAt: "08:15 WIB (via Scan Kamera)",
    verifiedBy: "Kader Siti (Posyandu Mawar)",
  },
  {
    qrToken: "NT-JTM-9821-B4A2-18",
    anakId: "B-002",
    namaAnak: "Siti Nur Aisyah",
    tipePaket: "Paket A",
    posyandu: "Posyandu Mawar 01",
    waktuKirim: "07:30 WIB",
    status: "Diterima",
    dayaTerima: "Habis (100%)",
    verifiedAt: "08:22 WIB (via Scan Kamera)",
    verifiedBy: "Orang Tua (Ibu Nurul)",
  },
  {
    qrToken: "NT-JTM-9821-B4A3-24",
    anakId: "B-003",
    namaAnak: "Budi Santoso",
    tipePaket: "Paket B",
    posyandu: "Posyandu Melati 03",
    waktuKirim: "07:45 WIB",
    status: "Diterima",
    dayaTerima: "Tersisa Sebagian (50%)",
    verifiedAt: "08:40 WIB (via Input Kode)",
    verifiedBy: "Kader Rahmawati",
  },
  {
    qrToken: "NT-JTM-9821-B4A4-20",
    anakId: "B-004",
    namaAnak: "Kevin Pratama",
    tipePaket: "Paket A",
    posyandu: "Posyandu Anggrek 02",
    waktuKirim: "08:00 WIB",
    status: "Dikirim",
  },
  {
    qrToken: "NT-JTM-9821-B4A5-11",
    anakId: "B-005",
    namaAnak: "Zahra Cantika",
    tipePaket: "Paket B",
    posyandu: "Posyandu Teratai 01",
    waktuKirim: "07:50 WIB",
    status: "Diterima",
    dayaTerima: "Habis (100%)",
    verifiedAt: "08:35 WIB (via Scan Kamera)",
    verifiedBy: "Kader Fitria",
  },
];

