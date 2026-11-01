"use client";

import Link from "next/link";

export default function ClosingCta() {
  return (
    <section className="relative bg-[#F7F8F8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Vibrant Tokens Studio Card */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#7866FF] p-8 sm:p-14 md:p-20 text-white shadow-2xl">
          
          {/* Subtle background glow effect */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#38E8F5]/30 blur-[90px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#FFCA38]/30 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-mono font-bold text-white mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#38E8F5] animate-pulse" />
              LANGKAH BERSAMA JAWA TIMUR
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest leading-[1.05] uppercase">
              Setiap balita berhak tumbuh <br />
              <span className="text-[#38E8F5] underline decoration-[#38E8F5]/40 underline-offset-8">
                sesuai kurvanya.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed font-sans font-medium">
              Mulai dari meja kader di balai desa, berlanjut ke dapur penyedia MBG lokal, hingga audit akuntabel di meja pimpinan daerah.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/login"
                className="rounded-full bg-[#18140B] px-8 py-3.5 font-sans text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-black"
              >
                Masuk ke NutriTrack Jatim
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-white/60 bg-white/15 backdrop-blur-sm px-8 py-3.5 font-sans text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.03] hover:bg-white hover:text-[#18140B]"
              >
                Buat akun
              </Link>
              <a
                href="#simulasi"
                className="rounded-full bg-white px-8 py-3.5 font-sans text-sm font-bold text-[#18140B] shadow-lg transition-transform hover:scale-[1.03] hover:bg-zinc-100"
              >
                Coba Simulasi Intervensi
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-white/20 pt-8 font-mono text-xs text-white/70">
              <span>Standar Antropometri Permenkes No. 2/2020</span>
              <span>●</span>
              <span>WHO Child Growth Standards</span>
              <span>●</span>
              <span>Data Demo Platform</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
