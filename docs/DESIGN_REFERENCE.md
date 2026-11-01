# Referensi Struktur: tokens.studio

Yang dipakai hanya **ritme dan susunan bagian** halaman (dibaca dari teks halamannya), BUKAN warna, font, atau aset visualnya. Identitas visual NutriTrack tetap botani editorial (lihat DESIGN_SPEC.md).

| Bagian di tokens.studio | Pola | Padanan NutriTrack | File |
| --- | --- | --- | --- |
| Navbar: Products / Resources / Company, Pricing, Login, Start for free | Menu ringkas + 1 CTA jelas | Masalah, Cara kerja, Peran, Dampak + "Masuk" | `layout/Navbar.tsx` |
| Hero: headline besar, 1 paragraf, 2 CTA, panel UI produk dengan chip & angka | Hero + mockup produk | Headline + panel dasbor mini + kurva KMS tergambar | `sections/Hero.tsx` |
| "Tiny Tokens, Big Impact" (tagline berulang) | Ticker semboyan | "Data kecil, dampak besar" | `sections/Ticker.tsx` |
| "Watch the real thing in action" (video demo) | Bagian demo produk | Simulasi KMS interaktif (tanpa video) | `sections/KmsSimulator.tsx` |
| "Here is how the studio works": 3 pilar + ilustrasi | Fitur bergantian kiri/kanan | 3 pilar: Smart KMS, Preskripsi MBG, Bukti dampak | `sections/Pillars.tsx` |
| "Powering the pride...", "Open by default" | Misi + ilustrasi | Komoditas lokal Jatim | `sections/Commodities.tsx` |
| Angka besar sosial-bukti (300k users, 5.9k likes) | Statistik besar | Metrik dampak 30/60/90 hari (DATA DEMO, tanpa testimoni palsu) | `sections/Impact.tsx` |
| "Learn fast. Scale smart. Be flexible" | Headline bertumpuk | "Timbang. Putuskan. Buktikan." | `sections/Triad.tsx` |
| Footer CTA + kolom tautan | Penutup + peta situs | CTA masuk + 4 kolom | `ClosingCta.tsx`, `Footer.tsx` |

Catatan: karena hanya teks halaman yang tersedia saat riset, detail visual tokens.studio (warna, gerak, ukuran) tidak ditiru.
