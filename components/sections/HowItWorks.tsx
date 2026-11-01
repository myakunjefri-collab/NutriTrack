"use client";

import { useState } from "react";

/**
 * HowItWorks Section: "HERE IS HOW THE STUDIO WORKS"
 * - Desain persis seperti di Tokens Studio (Gambar 1, 2, 3 referensi user)
 * - Loading progress bar aktif di bawah deskripsi teks yang otomatis berganti langkah (loop 5.5s)
 * - Bingkai bentuk bunga/blob organik raksasa (Kuning, Ungu, Hijau) yang BESAR & TERLIHAT JELAS
 *   menyembur 120px-180px keluar di sekeliling kartu UI di sisi kanan.
 * - Teks dan terminologi 100% selaras dengan PRD NutriTrack Jatim (SKPL F01-F14).
 */
export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  // 3 Core Workflow Tabs selaras PRD Modul A, Modul B, dan Modul C/D
  const tabs = [
    {
      id: 0,
      title: "TIMBANG BALAI DESA & KALKULATOR Z-SCORE INSTAN",
      desc: "Kader posyandu menginput berat badan, tinggi badan, dan lingkar kepala balita langsung di ponsel tanpa ketergantungan sinyal internet. Algoritma WHO Z-Score (metode LMS) menghitung status gizi hari-H secara presisi dan mendeteksi growth faltering seketika.",
      tag: "MODUL A · POSYANDU OFFLINE-FIRST",
      cardTheme: "bg-[#FFF9EA] border-[#FFE28A]",
    },
    {
      id: 1,
      title: "PRESKRIPSI MBG & KOMODITAS PANGAN LOKAL JATIM",
      desc: "Data penimbangan hari-H langsung terkonversi menjadi pesanan porsi presisi: Paket A (Reguler) dan Paket B (Intervensi Tinggi Protein Hewani) di dapur SPPG terdekat. Menyerap telur Blitar, lele Lamongan, hati ayam, tempe, dan daun kelor dari Gapoktan lokal.",
      tag: "MODUL B · DAPUR SPPG MANDIRI",
      cardTheme: "bg-[#F5F2FF] border-[#D8CEFD]",
    },
    {
      id: 2,
      title: "LABEL QR 128-BIT & AUDIT RETURN ON NUTRITION",
      desc: "Setiap wadah makanan diberi label QR unik 128-bit untuk verifikasi penerimaan dan daya terima konsumsi anak. Dasbor pimpinan daerah memantau perbaikan Z-score pada siklus 30, 60, dan 90 hari dengan audit transparan berstandar Permenkes No. 2/2020.",
      tag: "MODUL C & D · DINKES & PEMDA JATIM",
      cardTheme: "bg-[#F2FCE8] border-[#C0FC92]",
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="relative bg-white py-24 sm:py-32 text-zinc-950 overflow-hidden border-b border-zinc-200/80"
    >
      {/* Scoped CSS Animation for Smooth Auto-advancing Progress Bar */}
      <style>{`
        @keyframes howItWorksProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-bar {
          animation: howItWorksProgress 5.5s linear forwards;
        }
      `}</style>

      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        
        {/* Top Centered Headline */}
        <div className="mx-auto max-w-3xl text-center pb-16 sm:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1 text-xs font-mono font-bold text-zinc-700 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-[#38E8F5]" />
            <span>02 / ALUR KERJA TERPADU</span>
          </div>

          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 uppercase leading-[1.04]">
            Bagaimana <br />
            sistem ini <br />
            bekerja
          </h2>
          
          <p className="mt-4 font-mono text-xs sm:text-sm text-zinc-500 font-semibold uppercase tracking-wider">
            Enam langkah dari timbangan balai desa sampai bukti nyata terotomatisasi
          </p>
        </div>

        {/* The 2-Column Studio Showcase */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          
          {/* =========================================================
              LEFT COLUMN: 3 BIG WORKFLOW HEADINGS WITH PROGRESS BAR
             ========================================================= */}
          <div className="space-y-6 sm:space-y-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div key={tab.id} className="transition-all duration-300">
                  {isActive ? (
                    // ACTIVE TAB: Soft container with paragraph + LOADING PROGRESS BAR
                    <div className={`p-6 sm:p-8 rounded-[32px] border shadow-sm transition-all duration-300 ${tab.cardTheme}`}>
                      <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                        {tab.tag}
                      </span>
                      <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 leading-tight">
                        {tab.title}
                      </h3>
                      <p className="mt-4 text-sm sm:text-base text-zinc-600 font-medium leading-relaxed font-sans">
                        {tab.desc}
                      </p>
                      
                      {/* --- LOADING BAR PERSIS TOKENS STUDIO (Otomatis ganti ke bawah) --- */}
                      <div className="mt-6 pt-2">
                        <div className="h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
                          <div
                            key={`progress-${activeTab}`}
                            className="h-full rounded-full bg-[#18140B] animate-progress-bar"
                            onAnimationEnd={() => setActiveTab(((activeTab + 1) % 3) as 0 | 1 | 2)}
                          />
                        </div>
                        <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] font-bold text-zinc-600">
                          <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Alur otomatis berjalan
                          </span>
                          <span>Langkah {activeTab + 1} dari 3</span>
                        </div>
                      </div>

                    </div>
                  ) : (
                    // INACTIVE TAB: Faded text heading, clickable to switch
                    <button
                      type="button"
                      onClick={() => setActiveTab(tab.id as 0 | 1 | 2)}
                      className="group w-full text-left p-4 sm:p-6 rounded-2xl transition-colors hover:bg-zinc-50"
                    >
                      <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-zinc-300 group-hover:text-zinc-500 transition-colors leading-tight">
                        {tab.title}
                      </h3>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* =========================================================
              RIGHT COLUMN: BINGKAI DEKORATIF ORGANIK PROPORSIONAL
             ========================================================= */}
          <div className="relative flex items-center justify-center min-h-[460px] sm:min-h-[500px] overflow-visible">
            
            {/* -------------------------------------------------------
                TAB 0: BUNGA KUNING (Tokens Studio Style - Proporsional)
               ------------------------------------------------------- */}
            {activeTab === 0 && (
              <div className="relative w-full flex items-center justify-center transition-all duration-500">
                
                {/* Yellow 8-Petal Blooming Flower Backdrop - Ukuran proporsional & rapi */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                  <svg
                    viewBox="0 0 500 500"
                    className="w-[440px] h-[440px] sm:w-[490px] sm:h-[490px] fill-[#FFCA38] drop-shadow-[0_15px_30px_rgba(255,202,56,0.35)] select-none"
                  >
                    {/* 8 Flower Petals */}
                    <circle cx="250" cy="115" r="95" />
                    <circle cx="250" cy="385" r="95" />
                    <circle cx="115" cy="250" r="95" />
                    <circle cx="385" cy="250" r="95" />
                    <circle cx="155" cy="155" r="95" />
                    <circle cx="345" cy="155" r="95" />
                    <circle cx="155" cy="345" r="95" />
                    <circle cx="345" cy="345" r="95" />
                    <circle cx="250" cy="250" r="145" fill="#FFDA6B" />
                  </svg>
                </div>

                {/* Central Canvas Board with Tactile Feature Toggles */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[365px] rounded-[32px] border-2 border-zinc-200/90 bg-white p-5 sm:p-6 shadow-xl">
                  
                  {/* Canvas Header */}
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-zinc-950 text-[#38E8F5] font-mono text-xs font-black shadow-sm">
                        &lt;&gt;
                      </span>
                      <span className="font-sans text-xs font-black uppercase text-zinc-900 tracking-tight">
                        NutriTrack Posyandu
                      </span>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 font-mono text-[9px] font-bold text-emerald-700 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Tersinkron
                    </span>
                  </div>

                  {/* 4 Feature Toggles (Persis Gambar Referensi User) */}
                  <div className="space-y-2.5 font-sans">
                    
                    {/* Row 1: Timbangan Balai */}
                    <div className="flex items-center justify-between p-2.5 rounded-2xl border border-zinc-100 bg-zinc-50/70 hover:bg-zinc-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100/70 text-sm">
                          ⚖️
                        </span>
                        <div>
                          <div className="text-xs font-black text-zinc-900">Timbangan Balai</div>
                          <div className="font-mono text-[9px] text-zinc-500 font-medium">Bluetooth & Manual</div>
                        </div>
                      </div>
                      <div className="h-5 w-9 rounded-full bg-[#FFCA38] p-0.5 flex items-center justify-end shadow-inner cursor-pointer">
                        <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>

                    {/* Row 2: PWA Offline-First */}
                    <div className="flex items-center justify-between p-2.5 rounded-2xl border border-zinc-100 bg-zinc-50/70 hover:bg-zinc-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100/70 text-sm">
                          📱
                        </span>
                        <div>
                          <div className="text-xs font-black text-zinc-900">PWA Offline-First</div>
                          <div className="font-mono text-[9px] text-zinc-500 font-medium">Ponsel Kader Tanpa Sinyal</div>
                        </div>
                      </div>
                      <div className="h-5 w-9 rounded-full bg-[#FFCA38] p-0.5 flex items-center justify-end shadow-inner cursor-pointer">
                        <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>

                    {/* Row 3: Z-Score Engine WHO */}
                    <div className="flex items-center justify-between p-2.5 rounded-2xl border border-zinc-100 bg-zinc-50/70 hover:bg-zinc-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-100/70 text-sm">
                          ⚡
                        </span>
                        <div>
                          <div className="text-xs font-black text-zinc-900">Z-Score Engine WHO</div>
                          <div className="font-mono text-[9px] text-zinc-500 font-medium">Analisis Hari-H Instan</div>
                        </div>
                      </div>
                      <div className="h-5 w-9 rounded-full bg-[#FFCA38] p-0.5 flex items-center justify-end shadow-inner cursor-pointer">
                        <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>

                    {/* Row 4: Antrean Dapur SPPG */}
                    <div className="flex items-center justify-between p-2.5 rounded-2xl border border-zinc-100 bg-zinc-50/70 hover:bg-zinc-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100/70 text-sm">
                          🍳
                        </span>
                        <div>
                          <div className="text-xs font-black text-zinc-900">Antrean Dapur SPPG</div>
                          <div className="font-mono text-[9px] text-zinc-500 font-medium">Alokasi Porsi Otomatis</div>
                        </div>
                      </div>
                      <div className="h-5 w-9 rounded-full bg-[#FFCA38] p-0.5 flex items-center justify-end shadow-inner cursor-pointer">
                        <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* -------------------------------------------------------
                TAB 1: BINGKAI CLOUD UNGU (Tokens Studio Style - Proporsional)
               ------------------------------------------------------- */}
            {activeTab === 1 && (
              <div className="relative w-full flex items-center justify-center transition-all duration-500">
                
                {/* Purple Organic Cloud Backdrop - Ukuran proporsional & rapi */}
                <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-1/2 pointer-events-none z-0">
                  <div
                    style={{
                      width: "480px",
                      height: "450px",
                      borderRadius: "44% 56% 62% 38% / 38% 62% 38% 62%",
                      background: "linear-gradient(135deg, #B8AEFF 0%, #7866FF 100%)",
                      boxShadow: "0 20px 35px rgba(120, 102, 255, 0.3)",
                    }}
                    className="select-none"
                  />
                </div>

                {/* Sleek Studio Window Frame (Persis Gambar 2) */}
                <div className="relative z-10 w-full max-w-[360px] sm:max-w-[380px] rounded-[32px] border-2 border-zinc-200/90 bg-white shadow-xl overflow-hidden">
                  
                  {/* macOS / Studio Window Titlebar */}
                  <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                    </div>
                    <div className="flex items-center gap-1.5 font-sans text-xs font-black text-zinc-800">
                      <span className="flex h-4 w-4 items-center justify-center rounded-md bg-[#7866FF] text-white font-mono text-[8px]">H</span>
                      <span>Dapur SPPG Jawa Timur</span>
                      <span className="text-zinc-400">▾</span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-zinc-500">
                      Wilayah <span className="font-black text-zinc-900">24</span>
                    </span>
                  </div>

                  {/* Window Body: 2-Column Studio Layout */}
                  <div className="grid grid-cols-[56px_1fr] p-3.5 sm:p-4 gap-3">
                    
                    {/* Left Icon Navigation Rail */}
                    <div className="space-y-3 border-r border-zinc-100 pr-2 py-1 font-mono text-[8px] text-zinc-400 font-bold text-center">
                      <div className="flex flex-col items-center gap-0.5 text-[#7866FF]">
                        <span className="text-base">⊞</span>
                        <span>Ringkas</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-zinc-800">
                        <span className="text-base">🍳</span>
                        <span>Dapur</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-base">☊</span>
                        <span>Grafik</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-base">🍲</span>
                        <span>Resep</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-base">📄</span>
                        <span>Laporan</span>
                      </div>
                    </div>

                    {/* Right Folder Tree (Persis Gambar 2) */}
                    <div className="space-y-2 font-sans text-xs">
                      <div className="flex items-center gap-2 p-1 rounded-xl text-zinc-400 font-bold hover:bg-zinc-50 cursor-pointer text-[11px]">
                        <span>›</span>
                        <span>📁 data_posyandu.json</span>
                      </div>
                      
                      <div className="space-y-1 pl-1">
                        <div className="flex items-center gap-2 p-1.5 rounded-xl text-[#7866FF] font-black bg-[#F3F0FF] text-[11px]">
                          <span>∨</span>
                          <span>📁 resep_presisi_lokal</span>
                        </div>
                        
                        <div className="pl-4 space-y-1.5 text-zinc-700 font-bold text-[11px]">
                          {/* Active Row: Protein Telur Blitar */}
                          <div className="flex items-center justify-between p-2 rounded-xl bg-purple-50/80 border border-purple-200/80 shadow-sm">
                            <span className="flex items-center gap-1.5">
                              <span>🥚</span>
                              <span className="font-black text-[#24135E]">Telur Blitar (Paket B)</span>
                            </span>
                            <span className="font-mono text-[9px] font-black bg-[#7866FF] text-white px-2 py-0.5 rounded-md">
                              2 Butir
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between p-1.5 rounded-lg hover:bg-zinc-50">
                            <span className="flex items-center gap-1.5">
                              <span>🐟</span>
                              <span>Lele Lamongan Segar</span>
                            </span>
                            <span className="font-mono text-[9px] text-zinc-400">80 gr</span>
                          </div>

                          <div className="flex items-center justify-between p-1.5 rounded-lg hover:bg-zinc-50">
                            <span className="flex items-center gap-1.5">
                              <span>🌿</span>
                              <span>Daun Kelor Organik</span>
                            </span>
                            <span className="font-mono text-[9px] text-zinc-400">30 gr</span>
                          </div>

                          <div className="flex items-center justify-between p-1.5 rounded-lg hover:bg-zinc-50">
                            <span className="flex items-center gap-1.5">
                              <span>🏷️</span>
                              <span>Label QR 128-bit</span>
                            </span>
                            <span className="font-mono text-[9px] text-emerald-600 font-black">Siap Cetak</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* -------------------------------------------------------
                TAB 2: BINGKAI BINTANG GERIGI HIJAU (Tokens Studio Style - Proporsional)
               ------------------------------------------------------- */}
            {activeTab === 2 && (
              <div className="relative w-full flex items-center justify-center transition-all duration-500">
                
                {/* Green 12-Pointed Spiky Star - Ukuran proporsional & rapi */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                  <svg
                    viewBox="0 0 660 660"
                    className="w-[460px] h-[460px] sm:w-[500px] sm:h-[500px] select-none drop-shadow-[0_18px_35px_rgba(124,238,75,0.35)]"
                  >
                    {/* Layer 1: 12-Spike Primary Star */}
                    <polygon
                      points="
                        330,30 375,150 480,75 460,195 585,180 510,285
                        630,330 510,375 585,480 460,465 480,585 375,510
                        330,630 285,510 180,585 200,465 75,480 150,375
                        30,330 150,285 75,180 200,195 180,75 285,150
                      "
                      fill="#7CEE4B"
                    />
                    {/* Layer 2: Rotated Secondary Star for lush pinwheel look */}
                    <polygon
                      points="
                        330,30 375,150 480,75 460,195 585,180 510,285
                        630,330 510,375 585,480 460,465 480,585 375,510
                        330,630 285,510 180,585 200,465 75,480 150,375
                        30,330 150,285 75,180 200,195 180,75 285,150
                      "
                      transform="rotate(15 330 330)"
                      fill="#91F564"
                      opacity="0.9"
                    />
                    <circle cx="330" cy="330" r="170" fill="#7CEE4B" />
                  </svg>
                </div>

                {/* Base Configuration Window Frame (Persis Gambar 1) */}
                <div className="relative z-10 w-full max-w-[350px] sm:max-w-[375px] rounded-[32px] border-2 border-zinc-200/90 bg-white p-5 sm:p-6 shadow-xl space-y-3.5">
                  
                  {/* Window Tabs */}
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5">
                    <span className="font-sans text-xs font-black uppercase text-zinc-900 tracking-tight">
                      Konfigurasi Audit RoN
                    </span>
                    <div className="flex gap-1 font-mono text-[9px] font-bold">
                      <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-zinc-500">Kader</span>
                      <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-zinc-500">Puskesmas</span>
                      <span className="rounded-md bg-emerald-100 text-emerald-800 px-2 py-0.5 font-black">Pemda Jatim</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-xs font-medium text-zinc-600">
                    <div className="flex justify-between items-center py-0.5">
                      <span className="font-bold">Berkas Laporan:</span>
                      <span className="font-mono text-[10px] text-zinc-500">laporan/audit/ron_siklus_90.json</span>
                    </div>
                    <div className="flex justify-between items-center py-0.5">
                      <span className="font-bold">Standar Evaluasi:</span>
                      <span className="font-mono text-[10px] text-emerald-600 font-black">WHO & Permenkes No. 2/2020</span>
                    </div>
                  </div>

                  {/* OVERLAPPING DARK EMERALD CODE WINDOW */}
                  <div className="mt-3 rounded-2xl bg-[#0C1F12] p-3.5 text-left font-mono text-[10px] text-emerald-200 shadow-xl border-2 border-emerald-500/50 transform translate-x-2 sm:translate-x-4 -translate-y-1">
                    <div className="flex justify-between items-center text-emerald-400 pb-1.5 mb-1.5 border-b border-emerald-800/80 text-[9px]">
                      <span className="font-bold flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38E8F5] animate-pulse" />
                        audit_ron_siklus_90.json
                      </span>
                      <span className="text-[10px] cursor-pointer hover:text-white">📋</span>
                    </div>
                    <div className="text-purple-300 font-bold">&quot;audit_mbg_jatim&quot;: &#123;</div>
                    <div className="pl-3 text-cyan-300">&quot;siklus_hari&quot;: 90,</div>
                    <div className="pl-3 text-amber-300">&quot;balita_terpantau&quot;: 14250,</div>
                    <div className="pl-3 text-emerald-400 font-bold">&quot;delta_zscore&quot;: +0.9,</div>
                    <div className="pl-3 text-pink-300">&quot;recovery_rate&quot;: &quot;88.0%&quot;,</div>
                    <div className="pl-3 text-cyan-300">&quot;desa_tuntas_stunting&quot;: 38,</div>
                    <div className="pl-3 text-emerald-300 font-black">&quot;status&quot;: &quot;TERVERIFIKASI_BPKP&quot;</div>
                    <div className="text-purple-300 font-bold">&#125;</div>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
