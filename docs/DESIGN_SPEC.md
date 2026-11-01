# DESIGN SPEC: Landing Page NutriTrack Jatim

Konteks produk: lihat `docs/PRD_NutriTrack_Jatim.md` (bagian 1, 4, 5, 7). Ini frontend saja. Semua angka adalah DATA DEMO dan harus berlabel "Data demo".

## Arah desain: editorial botani Nusantara, mewah, tenang, tepercaya
Seperti majalah kesehatan premium, bukan template SaaS.
- Palet (sudah di `tailwind.config.ts`): forest #0E2A21, moss #1F4D3A, ivory #F5F0E6, paper #EBE4D4, brass #B8893B, terracotta #C4552D. Status KMS: ok #3F8F5B, warn #E0A82E, bad #C8402F.
- Tipografi: Fraunces (display, boleh italic untuk penekanan) + Plus Jakarta Sans (UI). Angka besar serif `tabular-nums`. Label kecil uppercase tracking lebar.
- Bahasa visual: garis hairline brass, radius siku/kecil, grid editorial asimetris, ruang kosong besar, tekstur parang sangat halus (opacity 4-8%), penomoran "01 / Masalah".
- Ilustrasi: SELALU pakai SVG di `public/illustrations` lewat `<Illustration />`. Jangan tambah foto stok atau emoji.
- DILARANG: gradasi ungu/biru, glassmorphism, blob gradient, bayangan tebal, grid tiga kartu seragam, copy klise ("revolusioner", "powered by AI"), testimoni/logo klien palsu, angka nyata yang dikarang, klaim alat diagnosis.

## Animasi (pembeda "mewah")
- Lenis + GSAP ScrollTrigger sudah terpasang di `SmoothScroll.tsx`. Pola reveal ada di `Reveal.tsx` dan `Hero.tsx`.
- Easing power3.out / cubic-bezier(.22,1,.36,1), durasi 0.8-1.2s. Tanpa bounce.
- Pola: mask naik untuk heading, fade+geser 24px untuk paragraf, hairline memanjang (scaleX), stroke tergambar untuk SVG.
- Momen utama saja: hero, pinned storytelling, simulasi, peta. Jangan menganimasikan semuanya.
- Custom cursor halus (desktop saja), progress scroll tipis (terracotta) di atas layar.
- Hormati `prefers-reduced-motion`: matikan pin, parallax, marquee, smooth scroll; tampilkan konten statis lengkap.
- Bersihkan ScrollTrigger lewat `gsap.context(...).revert()` di setiap komponen client.

## Status tiap bagian (yang harus dikerjakan)
| Bagian | Status kerangka | Tugas Antigravity |
| --- | --- | --- |
| Navbar | Berfungsi (solid saat scroll) | Menu mobile fullscreen + stagger |
| Hero | Berfungsi + contoh animasi | Poles komposisi, scrub kurva saat scroll, panel lebih kaya |
| Ticker | Statis | Marquee bergerak mengikuti velocity scroll |
| Problem | Statis | Kolom kiri sticky, poin muncul berurutan, latar ivory->paper |
| HowItWorks | Grid statis | PIN + scrub 6 langkah (>=1024px), ilustrasi crossfade/stroke; mobile = daftar vertikal |
| KmsSimulator | Slider+status berfungsi | Grafik KMS interaktif, transisi warna, angka beranimasi |
| Pillars | Statis | Layout asimetris + reveal |
| Roles | Tab berfungsi | Mockup ponsel/tablet/desktop (HTML/CSS/SVG) sesuai wireframe PRD bagian 7, AnimatePresence, parallax kursor |
| Commodities | Grid statis | Marquee velocity + hover gambar ulang garis |
| Impact | Toggle berfungsi | Count-up, titik peta berdenyut + tooltip, grafik batang animasi |
| Triad | Statis | Mask reveal bertahap (scrub) |
| ClosingCta | Statis | Reveal per kata |
| Footer | Statis | Wordmark raksasa terpotong di tepi bawah |
| /login | Placeholder | Selaraskan gaya |

## Mockup untuk bagian Roles (isi mengikuti PRD bagian 7)
- Kader (ponsel): header posyandu, kartu balita, form BB/TB/lingkar kepala, tombol HITUNG STATUS GIZI, banner "GROWTH FALTERING (WASPADA)", Z-score, kurva, rekomendasi Paket B, tombol SCAN TERIMA PAKET MBG.
- Dapur (tablet): "Total Porsi 120 / Reguler 85 / Intervensi 35", daftar masak (Telur Blitar 7,5 kg, Lele fillet 4,0 kg), tombol cetak daftar & label QR.
- Puskesmas/Dinkes (desktop): peta heatmap + 3 metrik + tombol unduh laporan.
(semua angka demo)

## Responsif & aksesibilitas
Mobile-first (360px). Pin/scrub berat hanya >=1024px. Target sentuh >=44px, kontras WCAG AA, fokus keyboard terlihat, status tidak hanya lewat warna, HTML semantik, alt/aria pada SVG bermakna. Target Lighthouse Performance >=90.

## Kriteria selesai
`npm run dev` jalan, `npm run typecheck` dan `npm run build` lolos, tidak ada scroll horizontal tak sengaja di 360px, reduced-motion menampilkan semua konten, semua angka berlabel "Data demo".
