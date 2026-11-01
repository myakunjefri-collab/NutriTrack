"use client";

import { triad } from "@/lib/demo-data";

const TRIAD_STUDIO_CARDS = [
  {
    word: triad[0], // Timbang.
    subtitle: "Input Antropometri <60 Detik",
    desc: "Kader mengukur berat badan, tinggi badan, dan lingkar kepala di balai desa. Tersimpan aman secara offline di peramban ponsel tanpa khawatir sinyal.",
    tag: "01 / PENGUKURAN PRESISI",
    badge: "MODUL A · POSYANDU",
    cardClass: "bg-[#F2FCE8] border-[#C0FC92] text-[#143E00]",
    badgeClass: "bg-white text-[#15803D] border-[#C0FC92]",
    subClass: "text-[#143E00]/80",
    descClass: "text-[#143E00]/90",
    pillDot: "bg-[#15803D]",
  },
  {
    word: triad[1], // Putuskan.
    subtitle: "Alokasi Menu MBG Tanpa Jeda",
    desc: "Metode LMS WHO menghitung status gizi dan mendeteksi faltering seketika. Kuota Paket A Reguler dan Paket B Intervensi terbit otomatis di dapur SPPG.",
    tag: "02 / KEPUTUSAN OTOMATIS",
    badge: "MODUL B · DAPUR SPPG",
    cardClass: "bg-[#F3F0FF] border-[#D3CEFC] text-[#24135E]",
    badgeClass: "bg-white text-[#6D28D9] border-[#D3CEFC]",
    subClass: "text-[#24135E]/80",
    descClass: "text-[#24135E]/90",
    pillDot: "bg-[#6D28D9]",
  },
  {
    word: triad[2], // Buktikan.
    subtitle: "Evaluasi Nyata Return on Nutrition",
    desc: "Setiap gram protein lokal dibuktikan efektivitasnya melalui kenaikan Z-score balita pada siklus 30, 60, dan 90 hari se-Jawa Timur secara transparan.",
    tag: "03 / AKUNTABILITAS PUBLIK",
    badge: "MODUL D · DASBOR PEMDA",
    cardClass: "bg-[#FFF2EE] border-[#FFD7CB] text-[#9A3412]",
    badgeClass: "bg-white text-[#C2410C] border-[#FFD7CB]",
    subClass: "text-[#9A3412]/80",
    descClass: "text-[#9A3412]/90",
    pillDot: "bg-[#C2410C]",
  },
];

export default function Triad() {
  return (
    <section
      aria-label="Prinsip Tiga Aksi NutriTrack Jatim"
      className="relative bg-[#F7F8F8] py-24 text-zinc-900 border-b border-zinc-200/80"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-zinc-200/80 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-mono font-semibold text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7866FF]" />
              08 / FILOSOFI SISTEM
            </div>
            <h2 className="mt-4 font-sans text-4xl sm:text-5xl md:text-6xl font-black tracking-tightest text-zinc-950 leading-[1.05]">
              Tiga aksi. Satu alur terpadu.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-600 leading-relaxed font-sans font-medium">
            Menghilangkan celah keterlambatan respon stunting dengan menyatukan meja penimbangan, meja dapur, dan meja pembuat kebijakan dalam satu ekosistem real-time.
          </p>
        </div>

        {/* 3 Giant Stacked Modern Cards - 100% Always Visible */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRIAD_STUDIO_CARDS.map((item) => (
            <div
              key={item.word}
              className={`triad-card rounded-3xl border p-8 sm:p-10 shadow-studio flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.cardClass}`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-current/15 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider font-bold opacity-75">
                    {item.tag}
                  </span>
                  <span className={`token-chip rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${item.badgeClass}`}>
                    <span className={`inline-block h-1.5 w-1.5 rounded-full mr-1 ${item.pillDot}`} />
                    {item.badge}
                  </span>
                </div>

                <div className="mt-8 font-sans text-5xl sm:text-6xl font-black tracking-tightest uppercase">
                  {item.word}
                </div>

                <div className={`mt-2 font-mono text-xs uppercase tracking-wider font-bold ${item.subClass}`}>
                  {item.subtitle}
                </div>

                <p className={`mt-6 text-sm leading-relaxed font-sans font-medium ${item.descClass}`}>
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-current/15 flex items-center justify-between font-mono text-[11px] opacity-75">
                <span>Alur Kerja Terpadu</span>
                <span>Standar Jatim</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
