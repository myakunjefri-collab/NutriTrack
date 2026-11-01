// Data pendukung halaman Masuk/Daftar. Peran mengikuti PRD NutriTrack Jatim bagian 3.

export type AuthRole = "kader" | "orangtua" | "dapur" | "puskesmas" | "dinkes";

export interface AuthRoleInfo {
  key: AuthRole;
  name: string;
  /** Label kolom identitas saat masuk */
  loginIdLabel: string;
  /** Label kolom kontak saat daftar */
  contactLabel: string;
  /** Label kolom unit kerja pada langkah 2 pendaftaran */
  unitLabel: string;
  /** true = tidak bisa daftar mandiri (hanya lewat undangan Admin) */
  inviteOnly?: boolean;
}

export const authRoles: AuthRoleInfo[] = [
  { key: "kader", name: "Kader Posyandu", loginIdLabel: "Nomor HP atau NIK kader", contactLabel: "Nomor HP (WhatsApp)", unitLabel: "Nama Posyandu" },
  { key: "orangtua", name: "Orang Tua", loginIdLabel: "Nomor HP terdaftar", contactLabel: "Nomor HP (WhatsApp)", unitLabel: "Posyandu tempat balita ditimbang" },
  { key: "dapur", name: "Dapur MBG", loginIdLabel: "ID Dapur atau email resmi", contactLabel: "Email resmi dapur", unitLabel: "Nama Dapur SPPG" },
  { key: "puskesmas", name: "Puskesmas", loginIdLabel: "NIP atau email dinas", contactLabel: "Email dinas", unitLabel: "Nama Puskesmas" },
  { key: "dinkes", name: "Dinkes / TPID", loginIdLabel: "NIP atau akun eksekutif", contactLabel: "Email dinas", unitLabel: "Unit kerja", inviteOnly: true },
];

export const jatimRegions: string[] = [
  "Kab. Bangkalan", "Kab. Banyuwangi", "Kab. Blitar", "Kab. Bojonegoro", "Kab. Bondowoso", "Kab. Gresik",
  "Kab. Jember", "Kab. Jombang", "Kab. Kediri", "Kab. Lamongan", "Kab. Lumajang", "Kab. Madiun",
  "Kab. Magetan", "Kab. Malang", "Kab. Mojokerto", "Kab. Nganjuk", "Kab. Ngawi", "Kab. Pacitan",
  "Kab. Pamekasan", "Kab. Pasuruan", "Kab. Ponorogo", "Kab. Probolinggo", "Kab. Sampang", "Kab. Sidoarjo",
  "Kab. Situbondo", "Kab. Sumenep", "Kab. Trenggalek", "Kab. Tuban", "Kab. Tulungagung",
  "Kota Batu", "Kota Blitar", "Kota Kediri", "Kota Madiun", "Kota Malang", "Kota Mojokerto",
  "Kota Pasuruan", "Kota Probolinggo", "Kota Surabaya",
];
