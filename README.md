# NutriTrack Jatim: Kerangka Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind + GSAP/ScrollTrigger + Lenis + Framer Motion.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
```

## Isi
- `docs/PRD_NutriTrack_Jatim.md`: PRD lengkap (sumber kebenaran produk)
- `docs/DESIGN_SPEC.md`: spesifikasi desain + status tiap bagian (BACA DULU)
- `docs/DESIGN_REFERENCE.md`: pemetaan struktur referensi tokens.studio ke bagian NutriTrack
- `public/illustrations/*.svg`: 10 ilustrasi line-art sesuai PRD (telur Blitar, lele Lamongan, hati ayam, tempe, daun kelor, timbangan bayi, kurva KMS, kotak QR, dapur SPPG, peta Jatim stilisasi)
- `components/sections/*`: satu berkas per bagian; komentar `TODO(Antigravity)` menandai pekerjaan
- `lib/demo-data.ts`: semua teks/angka demo; `lib/zscore-demo.ts`: aproksimasi Z-score untuk simulasi (BUKAN standar WHO)

Catatan: peta Jatim adalah stilisasi, bukan batas administratif.
