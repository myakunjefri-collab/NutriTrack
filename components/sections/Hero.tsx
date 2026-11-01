"use client";

import { useState } from "react";
import IsometricCube from "@/components/ui/IsometricCube";

/**
 * Hero Section: Tampilan 3D Cartoon Compact & Tersebar Acak (Tokens Studio Style)
 * - Ukuran kotak diperkecil (cute, compact, mini 3D cartoon tokens).
 * - Style murni 3D Cartoon Clay (puffy rounded bevels, pastel-vibrant clay gradient,
 *   soft glossy inset highlight, dan ekstrusi clay 3D yang rapi & tidak kaku).
 * - Penataan tersebar acak (staggered & scattered orbit, zig-zag) dengan jarak lapang.
 * - Sudut kemiringan 3D berperspektif ke titik tengah kanvas putih.
 * - Kanvas putih di tengah 100% bersih, bebas, dan zero overlap.
 */
export default function Hero() {
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");
  const [density, setDensity] = useState(1);
  const [age, setAge] = useState(14);
  const [activeProtein, setActiveProtein] = useState<"Telur" | "Lele" | "Ayam" | "Tempe">("Telur");
  const [activePortion, setActivePortion] = useState<"Reguler" | "Dobel" | "Khusus">("Dobel");

  return (
    <section className="relative overflow-x-clip bg-[#F7F8F8] pt-36 pb-32 text-zinc-950">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        
        {/* Top Headline & Copy */}
        <div className="mx-auto max-w-4xl text-center pt-2 pb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-[#38E8F5] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-700">
              NutriTrack Jatim · Intervensi Presisi
            </span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
              Data Demo
            </span>
          </div>

          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-tightest leading-[1.02] text-zinc-950 uppercase">
            Presisi gizi balita, <br />
            sepenuhnya terotomatisasi.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 font-medium leading-relaxed font-sans">
            Dari timbangan posyandu menjadi menu Makan Bergizi Gratis (MBG) presisi pada hari yang sama. Menghubungkan kader, juru masak SPPG, dan pimpinan daerah dalam satu sistem terintegrasi.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulasi"
              className="rounded-xl bg-[#38E8F5] px-7 py-3.5 font-sans text-sm font-extrabold text-[#032D30] shadow-sm transition-transform hover:scale-[1.02] hover:bg-[#25d4e2]"
            >
              Coba Simulasi Intervensi
            </a>
            <a
              href="#cara-kerja"
              className="rounded-xl border border-zinc-300 bg-white px-7 py-3.5 font-sans text-sm font-bold text-zinc-800 shadow-sm transition-transform hover:scale-[1.02] hover:bg-zinc-50"
            >
              Jelajahi Cara Kerja
            </a>
          </div>
        </div>

        {/* -------------------------------------------------------------
            THE 3D CARTOON SCATTERED STAGE
            - Central White Board: max-w-[700px]
            - Compact 3D cartoon tokens orbiting with random, playful stagger
            - Soft 3D clay extrusions & dramatic perspective tilts
           ------------------------------------------------------------- */}
        <div
          className="relative mx-auto max-w-[1440px] flex items-center justify-center my-10 pb-40 pt-10 select-none"
          style={{ perspective: "1000px" }}
        >
          {/* Wrapper Kanvas Tengah & Aksesori Terpisah */}
          <div
            className="relative w-full max-w-[700px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            
            {/* =========================================================
                SISI KIRI: AKSESORI 3D CARTOON TERSEBAR ACAK & BERJARAK JAUH
               ========================================================= */}

            {/* 1. KIRI ATAS: Kurva KMS (Pink Clay)
                - Posisi: Jauh di kiri atas (right: calc(100% + 55px), top: -75px)
                - Ukuran: Compact (185px)
                - Miring perspektif ke arah titik tengah
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[20px] p-3 text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                position: "absolute",
                right: "calc(100% + 55px)",
                top: "-75px",
                width: "185px",
                background: "linear-gradient(135deg, #FF6F8F 0%, #F5436C 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateY(28deg) rotateX(-14deg) rotateZ(5deg)",
                transformOrigin: "right center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #D82852,
                  0 4px 0 #D82852,
                  0 6px 0 #BC1840,
                  0 8px 0 #9E0E32,
                  0 16px 24px -4px rgba(158, 14, 50, 0.35),
                  0 24px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase mb-1.5">
                <span className="tracking-wider">Kurva KMS · WHO</span>
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              </div>
              
              <div className="relative h-14 w-full rounded-xl bg-black/15 p-1 backdrop-blur-sm">
                <svg viewBox="0 0 160 80" className="h-full w-full select-none">
                  <line x1="10" y1="20" x2="150" y2="20" stroke="rgba(255,255,255,0.25)" strokeDasharray="2 3" />
                  <line x1="10" y1="45" x2="150" y2="45" stroke="rgba(255,255,255,0.25)" strokeDasharray="2 3" />
                  <line x1="10" y1="70" x2="150" y2="70" stroke="rgba(255,255,255,0.25)" strokeDasharray="2 3" />
                  
                  <path d="M 15 68 Q 60 55, 95 32 T 145 14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="15" cy="68" r="3.5" fill="white" />
                  <circle cx="95" cy="32" r="3.5" fill="white" />
                  <circle cx="145" cy="14" r="5" fill="#38E8F5" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              
              <div className="mt-1.5 flex justify-between font-mono text-[8px] font-bold opacity-95">
                <span>Normal</span>
                <span className="text-[#CEF9FC] font-black">+0.8 SD</span>
              </div>
            </div>

            {/* 2. KIRI TENGAH-ATAS: Accessibility (Purple Clay)
                - Posisi: Digeser masuk lebih dekat ke kanvas (right: calc(100% + 15px), top: 85px)
                - Gap vertikal ~160px dari Kurva KMS (jauh & tidak segaris!)
                - Ukuran: Mini compact (150px)
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[18px] p-3 text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                position: "absolute",
                right: "calc(100% + 15px)",
                top: "85px",
                width: "150px",
                background: "linear-gradient(135deg, #9C8BFF 0%, #7660FF 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateY(32deg) rotateX(-6deg) rotateZ(2deg)",
                transformOrigin: "right center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #5E46E6,
                  0 4px 0 #5E46E6,
                  0 6px 0 #4A33CC,
                  0 8px 0 #3922B3,
                  0 16px 24px -4px rgba(57, 34, 179, 0.35),
                  0 24px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <span className="block font-sans text-[11px] font-black tracking-tight text-white mb-1.5">
                Deteksi Dini Stunting
              </span>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 text-[10px] font-black text-[#3525A8] shadow-sm">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-md bg-[#8C7CFF] text-[8px] text-white font-black">✓</span>
                <span>Standar Kemenkes</span>
              </div>
            </div>

            {/* 3. KIRI TENGAH: Usia Balita (Green Clay)
                - Posisi: Dilempar JAUH keluar ke kiri (right: calc(100% + 80px), top: 210px)
                - Memecah pola garis vertikal secara acak & organik
                - Ukuran: Mini compact (145px)
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[18px] p-2.5 text-center transition-all duration-300 hover:scale-105"
              style={{
                position: "absolute",
                right: "calc(100% + 80px)",
                top: "210px",
                width: "145px",
                background: "linear-gradient(135deg, #64E54F 0%, #40CD2A 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateY(26deg) rotateX(2deg) rotateZ(-2deg)",
                transformOrigin: "right center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #2CA517,
                  0 4px 0 #2CA517,
                  0 6px 0 #20870E,
                  0 8px 0 #166907,
                  0 16px 24px -4px rgba(22, 105, 7, 0.35),
                  0 24px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <span className="block font-mono text-[8px] font-black uppercase tracking-wider text-[#143E00]">
                Usia Balita
              </span>
              <div className="mt-1 flex items-center justify-between font-sans text-[11px] font-black text-[#143E00] bg-black/10 rounded-lg px-2 py-0.5">
                <button
                  type="button"
                  onClick={() => setAge(Math.max(6, age - 1))}
                  className="px-1 text-xs font-black hover:scale-125 transition-transform"
                  aria-label="Kurangi usia"
                >
                  ‹
                </button>
                <span className="font-mono text-[10px]">{age} Bulan</span>
                <button
                  type="button"
                  onClick={() => setAge(Math.min(36, age + 1))}
                  className="px-1 text-xs font-black hover:scale-125 transition-transform"
                  aria-label="Tambah usia"
                >
                  ›
                </button>
              </div>
            </div>

            {/* 4. KIRI TENGAH-BAWAH: Kapsul Oranye (Tangerine Clay)
                - Posisi: Ditarik kembali ke dalam (right: calc(100% + 20px), top: 305px)
                - Menciptakan alur zig-zag acak (+55px -> +15px -> +80px -> +20px)
                - Ukuran: Compact pill
            */}
            <div
              className="absolute z-20 hidden md:block rounded-full px-4 py-1.5 font-sans text-[11px] font-black text-white transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
              style={{
                position: "absolute",
                right: "calc(100% + 20px)",
                top: "305px",
                background: "linear-gradient(135deg, #FF8357 0%, #FF5F2B 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateY(24deg) rotateX(8deg) rotateZ(-3deg)",
                transformOrigin: "right center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #D44410,
                  0 4px 0 #D44410,
                  0 6px 0 #B33406,
                  0 8px 0 #942702,
                  0 14px 20px -4px rgba(148, 39, 2, 0.35),
                  0 20px 30px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              ‹ Paket B: Protein MBG ›
            </div>

            {/* 5. KIRI PALING LUAR: Kubus Isometrik 3D Cyan
                - Posisi: Melayang bebas jauh di pojok kiri bawah
            */}
            <div
              className="absolute z-20 hidden lg:block"
              style={{
                position: "absolute",
                right: "calc(100% + 140px)",
                top: "370px",
                transform: "perspective(900px) rotateY(18deg)",
              }}
            >
              <IsometricCube colorScheme="cyan" size={52} />
            </div>

            {/* 6. KIRI PALING BAWAH: Densitas Porsi MBG (Banana Yellow Clay)
                - Posisi: Di bawah kanvas sebelah kiri (top: calc(100% + 40px), left: -60px)
                - Ukuran: Compact control panel (200px)
                - Miring mendongak ke atas menghadap ke titik tengah kanvas
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[20px] p-3 text-[#2F2302] transition-all duration-300 hover:scale-105"
              style={{
                position: "absolute",
                left: "-60px",
                top: "calc(100% + 40px)",
                width: "205px",
                background: "linear-gradient(135deg, #FFD24D 0%, #FFC119 100%)",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                transform: "perspective(900px) rotateX(-28deg) rotateY(16deg) rotateZ(-4deg)",
                transformOrigin: "center top",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #D49900,
                  0 4px 0 #D49900,
                  0 6px 0 #B88200,
                  0 8px 0 #9C6C00,
                  0 16px 25px -4px rgba(156, 108, 0, 0.35),
                  0 25px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <span className="font-sans text-[11px] font-black block mb-1.5">
                Densitas Porsi MBG
              </span>
              <input
                type="range"
                min={0}
                max={2}
                step={1}
                value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-full accent-[#2F2302] h-1.5 bg-[#D49900]/40 rounded-full cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[8px] mt-1.5 font-black text-[#2F2302]">
                <span className={density === 0 ? "underline font-black" : "opacity-75"}>Standar</span>
                <span className={density === 1 ? "underline font-black" : "opacity-75"}>Intervensi</span>
                <span className={density === 2 ? "underline font-black" : "opacity-75"}>Terapi</span>
              </div>
            </div>

            {/* =========================================================
                SISI KANAN: AKSESORI 3D CARTOON TERSEBAR ACAK & BERJARAK JAUH
               ========================================================= */}

            {/* 7. KANAN ATAS JAUH: Kubus Isometrik 3D Ungu
                - Melayang tinggi di langit kanan atas (lapang & terisolasi)
            */}
            <div
              className="absolute z-20 hidden md:block"
              style={{
                position: "absolute",
                left: "calc(100% + 180px)",
                top: "-95px",
                transform: "perspective(900px) rotateY(-18deg)",
              }}
            >
              <IsometricCube colorScheme="purple" size={56} />
            </div>

            {/* 8. KANAN ATAS: Font Style (Lime Green Clay)
                - Posisi: Tinggi di kanan atas (left: calc(100% + 30px), top: -70px)
                - Ukuran: Mini compact (170px)
                - Miring perspektif ke arah titik tengah
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[20px] p-3 transition-all duration-300 hover:scale-105"
              style={{
                position: "absolute",
                left: "calc(100% + 30px)",
                top: "-70px",
                width: "170px",
                background: "linear-gradient(135deg, #62E44D 0%, #3ECC28 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateY(-28deg) rotateX(-14deg) rotateZ(-5deg)",
                transformOrigin: "left center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #2BA316,
                  0 4px 0 #2BA316,
                  0 6px 0 #1F850D,
                  0 8px 0 #156606,
                  0 16px 24px -4px rgba(21, 102, 6, 0.35),
                  0 24px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <span className="block font-mono text-[9px] font-black uppercase text-[#143E00] mb-1.5">
                Protein Hewani MBG
              </span>
              <div className="grid grid-cols-2 gap-1 text-center font-sans text-[11px] font-bold">
                {(["Telur", "Lele", "Ayam", "Tempe"] as const).map((protein) => (
                  <button
                    key={protein}
                    type="button"
                    onClick={() => setActiveProtein(protein)}
                    className={`py-0.5 rounded-lg transition-all ${
                      activeProtein === protein
                        ? "bg-[#143E00] text-[#91EB4C] shadow-sm font-black"
                        : "bg-white/90 text-[#143E00] hover:bg-white"
                    }`}
                  >
                    {protein}
                  </button>
                ))}
              </div>
            </div>

            {/* 9. KANAN TENGAH-ATAS: Kapsul Toggle Cyan 3D
                - Posisi: Mengambang di celah dekat kanvas (left: calc(100% + 10px), top: 65px)
                - Ukuran: Mini pill imut
            */}
            <div
              className="absolute z-20 hidden lg:flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                position: "absolute",
                left: "calc(100% + 10px)",
                top: "65px",
                background: "linear-gradient(135deg, #4DECF8 0%, #20DAEB 100%)",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                transform: "perspective(900px) rotateY(-22deg) rotateX(-4deg)",
                transformOrigin: "left center",
                boxShadow: `
                  inset 0 2px 2px rgba(255, 255, 255, 0.85),
                  0 2px 0 #0EACB7,
                  0 4px 0 #0B8E97,
                  0 10px 16px -2px rgba(11, 142, 151, 0.35)
                `,
              }}
            >
              <span className="text-xs">☀️</span>
              <div className="h-3.5 w-6 rounded-full bg-[#0B8E97]/40 p-0.5 flex items-center justify-end">
                <span className="h-2.5 w-2.5 rounded-full bg-white shadow-sm" />
              </div>
            </div>

            {/* 10. KANAN TENGAH: Jendela Kode Gelap (Midnight Blue Clay)
                - Posisi: Dilempar JAUH ke kanan luar (left: calc(100% + 65px), top: 120px)
                - Ukuran: Compact mini IDE (215px)
                - Memecah susunan vertikal menjadi alur zig-zag (+30px -> +10px -> +65px -> +20px)
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[20px] p-3 text-left font-mono text-[9px] text-zinc-300 transition-all duration-300 hover:scale-105"
              style={{
                position: "absolute",
                left: "calc(100% + 65px)",
                top: "120px",
                width: "215px",
                background: "linear-gradient(135deg, #201B3B 0%, #120F26 100%)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                transform: "perspective(900px) rotateY(-26deg) rotateX(-6deg) rotateZ(-2deg)",
                transformOrigin: "left center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.25),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.3),
                  0 2px 0 #0A0817,
                  0 4px 0 #0A0817,
                  0 6px 0 #06050F,
                  0 8px 0 #020108,
                  0 18px 26px -4px rgba(0, 0, 0, 0.45),
                  0 26px 38px -8px rgba(0, 0, 0, 0.25)
                `,
              }}
            >
              <div className="flex justify-between items-center text-zinc-400 pb-1.5 mb-1.5 border-b border-zinc-700/80 text-[8px]">
                <span className="font-bold">preskripsi_mbg.json</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#38E8F5] animate-pulse" />
              </div>
              <div className="text-purple-300 font-bold leading-tight">&quot;preskripsi&quot;: &#123;</div>
              <div className="pl-2.5 text-emerald-400 leading-tight">&quot;status&quot;: &quot;WASPADA&quot;,</div>
              <div className="pl-2.5 text-cyan-300 leading-tight">&quot;pack&quot;: &quot;PAKET_B&quot;,</div>
              <div className="pl-2.5 text-amber-300 leading-tight">&quot;protein&quot;: &quot;2_TELUR&quot;</div>
              <div className="text-purple-300 font-bold leading-tight">&#125;</div>
            </div>

            {/* 11. KANAN TENGAH-BAWAH: Porsi Intervensi (Coral Orange Clay)
                - Posisi: Ditarik kembali masuk ke dalam (left: calc(100% + 20px), top: 325px)
                - Ukuran: Mini compact (170px)
            */}
            <div
              className="absolute z-20 hidden lg:block rounded-[20px] p-3 text-white transition-all duration-300 hover:scale-105"
              style={{
                position: "absolute",
                left: "calc(100% + 20px)",
                top: "325px",
                width: "170px",
                background: "linear-gradient(135deg, #FF7F52 0%, #FF5A24 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateY(-24deg) rotateX(10deg) rotateZ(3deg)",
                transformOrigin: "left center",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #D43F0B,
                  0 4px 0 #D43F0B,
                  0 6px 0 #B33004,
                  0 8px 0 #942401,
                  0 16px 24px -4px rgba(148, 36, 1, 0.35),
                  0 24px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <span className="block font-sans text-[11px] font-black tracking-tight mb-1.5">
                Porsi Intervensi
              </span>
              <div className="flex gap-1">
                {(["Reguler", "Dobel", "Khusus"] as const).map((portion) => (
                  <button
                    key={portion}
                    type="button"
                    onClick={() => setActivePortion(portion)}
                    className={`flex-1 py-0.5 rounded-lg text-[9px] font-black transition-all ${
                      activePortion === portion
                        ? "bg-[#18140B] text-white shadow"
                        : "bg-white/40 text-white hover:bg-white/55"
                    }`}
                  >
                    {portion}
                  </button>
                ))}
              </div>
            </div>

            {/* 12. KANAN JAUH BAWAH: Kubus Isometrik 3D Kuning
                - Melayang bebas di angkasa luar kanan bawah
            */}
            <div
              className="absolute z-20 hidden md:block"
              style={{
                position: "absolute",
                left: "calc(100% + 155px)",
                top: "375px",
                transform: "perspective(900px) rotateY(-18deg)",
              }}
            >
              <IsometricCube colorScheme="yellow" size={50} />
            </div>

            {/* 13. KANAN PALING BAWAH: Mistar Target Z-Score (Strawberry Clay)
                - Posisi: Di bawah kanvas sebelah kanan (top: calc(100% + 40px), right: 20px)
                - Ukuran: Compact mini ruler (180px)
            */}
            <div
              className="absolute z-20 hidden md:block rounded-[20px] p-3 text-white transition-all duration-300 hover:scale-105"
              style={{
                position: "absolute",
                right: "20px",
                top: "calc(100% + 40px)",
                width: "185px",
                background: "linear-gradient(135deg, #FF6F8F 0%, #F5436C 100%)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
                transform: "perspective(900px) rotateX(-28deg) rotateY(-18deg) rotateZ(4deg)",
                transformOrigin: "center top",
                boxShadow: `
                  inset 0 2px 3px rgba(255, 255, 255, 0.85),
                  inset 0 -2px 3px rgba(0, 0, 0, 0.12),
                  0 2px 0 #D82852,
                  0 4px 0 #D82852,
                  0 6px 0 #BC1840,
                  0 8px 0 #9E0E32,
                  0 16px 25px -4px rgba(158, 14, 50, 0.35),
                  0 25px 35px -8px rgba(0, 0, 0, 0.18)
                `,
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="block font-mono text-[8px] uppercase tracking-wider font-extrabold opacity-90">
                    Target Z-Score
                  </span>
                  <span className="font-sans text-lg font-black block mt-0.5 leading-none">
                    +0.8 SD
                  </span>
                  <span className="font-mono text-[8px] opacity-90 block mt-0.5">
                    Standar WHO Normal
                  </span>
                </div>

                {/* Tactile Ruler Tick Marks */}
                <div className="h-10 w-5 flex flex-col justify-between items-end border-r-2 border-white/90 pr-1">
                  <span className="w-3 h-[1.5px] bg-white" />
                  <span className="w-1.5 h-[1px] bg-white/70" />
                  <span className="w-2.5 h-[1.5px] bg-white" />
                  <span className="w-1.5 h-[1px] bg-white/70" />
                  <span className="w-3 h-[1.5px] bg-white" />
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                KANVAS UTAMA DI TENGAH (KOTAK PUTIH 2D DI GAMBAR REFERENSI)
                100% Bebas, Bersih, Terbaca, Tanpa Tertutupi Elemen 3D Apapun
               ------------------------------------------------------------- */}
            <div className="relative z-10 w-full rounded-[32px] border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]">
              
              {/* Top Row: Distribution Columns + Donut Chart + Themes Controls */}
              <div className="grid gap-6 sm:grid-cols-3 border-b border-zinc-100 pb-6">
                
                {/* Distribution: 4 Purple Bar Columns (Posyandu Districts) */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs font-black text-zinc-900 tracking-tight">
                      Distribusi Balita
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 font-semibold">
                      Jawa Timur
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-between h-28 pt-2 px-2 border-b border-zinc-100">
                    <div className="text-center w-8">
                      <div className="w-full bg-[#7866FF] rounded-t-md h-24 mb-1.5 shadow-sm" />
                      <span className="font-mono text-[9px] text-zinc-500 font-medium block truncate">Bangkalan</span>
                    </div>
                    <div className="text-center w-8">
                      <div className="w-full bg-[#A499FF] rounded-t-md h-16 mb-1.5 shadow-sm" />
                      <span className="font-mono text-[9px] text-zinc-500 font-medium block truncate">Probolinggo</span>
                    </div>
                    <div className="text-center w-8">
                      <div className="w-full bg-[#C7BFFF] rounded-t-md h-20 mb-1.5 shadow-sm" />
                      <span className="font-mono text-[9px] text-zinc-500 font-medium block truncate">Bondowoso</span>
                    </div>
                    <div className="text-center w-8">
                      <div className="w-full bg-[#7866FF] rounded-t-md h-12 mb-1.5 shadow-sm" />
                      <span className="font-mono text-[9px] text-zinc-500 font-medium block truncate">Jember</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-zinc-400 font-medium pt-1">
                    <span>● BB/U</span>
                    <span>● TB/U</span>
                    <span>● L.Kepala</span>
                  </div>
                </div>

                {/* Center Donut Chart: Total Balita Terdata */}
                <div className="flex flex-col items-center justify-center border-y sm:border-y-0 sm:border-x border-zinc-100 py-3 sm:py-0 px-4">
                  <span className="font-sans text-xs font-black text-zinc-900 self-start mb-2 tracking-tight">
                    Status Gizi Balita
                  </span>
                  
                  <div className="relative flex items-center justify-center my-1">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-90">
                      <circle cx="50" cy="50" r="38" stroke="#F4F4F5" strokeWidth="10" fill="none" />
                      {/* Normal 65% - Purple */}
                      <circle cx="50" cy="50" r="38" stroke="#7866FF" strokeWidth="10" fill="none" strokeDasharray="155 240" strokeLinecap="round" />
                      {/* Waspada 25% - Light purple */}
                      <circle cx="50" cy="50" r="38" stroke="#D3CEFC" strokeWidth="10" fill="none" strokeDasharray="60 240" strokeDashoffset="-160" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="font-sans text-lg font-black text-zinc-950 block leading-none">
                        14.250
                      </span>
                      <span className="font-mono text-[8px] text-zinc-400 uppercase font-bold tracking-wider mt-0.5 block">
                        Total Balita
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 text-[9px] font-mono text-zinc-500 mt-2">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#7866FF]" /> Normal</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#D3CEFC]" /> Waspada</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#FF764C]" /> Stunting</span>
                  </div>
                </div>

                {/* Right Theme & Mode Controls */}
                <div className="space-y-3">
                  <span className="font-sans text-xs font-black text-zinc-900 block tracking-tight">
                    Konfigurasi Preskripsi
                  </span>

                  <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-100 flex items-center justify-between text-xs">
                    <span className="font-sans font-bold text-zinc-700">Mode Intervensi</span>
                    <button
                      type="button"
                      onClick={() => setActiveTheme(activeTheme === "light" ? "dark" : "light")}
                      className={`h-5 w-10 rounded-full transition-colors relative ${activeTheme === "light" ? "bg-[#38E8F5]" : "bg-zinc-800"}`}
                    >
                      <span className={`block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${activeTheme === "light" ? "translate-x-5" : "translate-x-0.5"}`} />
                    </button>
                  </div>

                  <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-600 font-medium">Alokasi Menu</span>
                    <span className="font-bold text-[#7866FF]">Paket A & B</span>
                  </div>

                  <div className="rounded-xl bg-zinc-50 p-2.5 border border-zinc-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-600 font-medium">Rantai Pasok</span>
                    <span className="font-bold text-emerald-600">Gapoktan Jatim</span>
                  </div>
                </div>

              </div>

              {/* Bottom Row: 4 "Timbang Hari Ini, Masak Hari Ini" Cards */}
              <div className="mt-6">
                <span className="font-sans text-xs font-black text-zinc-900 block mb-3 tracking-tight">
                  Alur Terpadu Program (4 Tahap)
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* Variant 1: Solid Purple Card */}
                  <div className="rounded-2xl bg-[#7866FF] p-3.5 text-white shadow-md transition-transform hover:-translate-y-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider opacity-85 block mb-1 font-bold">
                      NutriTrack Jatim
                    </span>
                    <h4 className="font-sans text-xs font-black leading-tight">
                      Timbang Hari Ini, Masak Hari Ini
                    </h4>
                    <p className="mt-1.5 text-[9px] opacity-85 leading-snug font-medium">
                      Respon presisi menu MBG untuk baduta faltering.
                    </p>
                  </div>

                  {/* Variant 2: Soft Purple Card */}
                  <div className="rounded-2xl bg-[#F3F0FF] p-3.5 text-[#24135E] border border-[#D3CEFC] transition-transform hover:-translate-y-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#7866FF] block mb-1 font-bold">
                      Posyandu Balai Desa
                    </span>
                    <h4 className="font-sans text-xs font-black leading-tight">
                      Smart KMS Offline-First
                    </h4>
                    <p className="mt-1.5 text-[9px] text-zinc-600 leading-snug font-medium">
                      Tersimpan aman di ponsel tanpa sinyal.
                    </p>
                  </div>

                  {/* Variant 3: White Border Card */}
                  <div className="rounded-2xl bg-white p-3.5 text-zinc-900 border border-zinc-200 shadow-sm transition-transform hover:-translate-y-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 block mb-1 font-bold">
                      Dapur SPPG
                    </span>
                    <h4 className="font-sans text-xs font-black leading-tight">
                      Cetak Label QR 128-bit
                    </h4>
                    <p className="mt-1.5 text-[9px] text-zinc-500 leading-snug font-medium">
                      Pelacakan higienis wadah makanan anak.
                    </p>
                  </div>

                  {/* Variant 4: Purple Outline Card */}
                  <div className="rounded-2xl bg-white p-3.5 text-zinc-900 border-2 border-[#A499FF] transition-transform hover:-translate-y-0.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#7866FF] block mb-1 font-bold">
                      Dinkes Jatim
                    </span>
                    <h4 className="font-sans text-xs font-black leading-tight">
                      Return on Nutrition
                    </h4>
                    <p className="mt-1.5 text-[9px] text-zinc-600 leading-snug font-medium">
                      Bukti perbaikan Z-score 30/60/90 hari.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
