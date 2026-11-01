import Link from "next/link";
import { footerCols } from "@/lib/demo-data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-zinc-600 border-t border-zinc-200/80">
      
      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pt-20 pb-16 md:grid-cols-[1.4fr_repeat(4,1fr)] md:px-10">
        
        {/* Brand Col */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm">
              <span className="font-mono text-sm font-black text-[#38E8F5]">&lt;&gt;</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans text-xl font-bold tracking-tight text-zinc-950">
                NutriTrack
              </span>
              <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-800 border border-emerald-200">
                JATIM
              </span>
            </div>
          </div>

          <p className="max-w-xs text-xs text-zinc-500 leading-relaxed font-sans">
            Sistem presisi intervensi stunting dan pemantauan Makan Bergizi Gratis (MBG) berbasis komoditas pangan lokal Provinsi Jawa Timur.
          </p>

          <div className="pt-2">
            <span className="token-chip bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0] font-bold text-[11px]">
              ● Selaras SDGs #2 & #3 · Jawa Timur
            </span>
          </div>
        </div>

        {/* 4 Link Cols */}
        {footerCols.map((c) => (
          <div key={c.title} className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-900 font-bold">
              {c.title}
            </p>
            <ul className="space-y-2.5 font-sans text-sm text-zinc-600 font-medium">
              {c.links.map((l) => {
                const isLogin = l === "Masuk";
                return (
                  <li key={l}>
                    {isLogin ? (
                      <Link href="/login" className="hover:text-[#7866FF] transition-colors">
                        {l}
                      </Link>
                    ) : (
                      <a href="#masalah" className="hover:text-zinc-950 transition-colors">
                        {l}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

      </div>

      {/* NutriTrack Jatim Giant Clipped Wordmark */}
      <div
        aria-hidden="true"
        className="relative -mb-6 md:-mb-10 w-full overflow-hidden text-center select-none pointer-events-none"
      >
        <span className="font-sans block text-[clamp(4.8rem,18vw,16rem)] font-black tracking-tightest text-zinc-950/[0.03] leading-[0.75] uppercase whitespace-nowrap">
          NUTRITRACK JATIM
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-zinc-200/80 bg-zinc-50/80 py-6 font-mono text-xs text-zinc-500">
        <div className="mx-auto flex max-w-[1320px] flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-10">
          <p>© {new Date().getFullYear()} NutriTrack Jatim. Seluruh hak cipta dilindungi.</p>
          <p className="text-zinc-600 font-medium">
            Semua angka pada platform ini adalah Data Demo untuk prototipe fungsional.
          </p>
        </div>
      </div>

    </footer>
  );
}
