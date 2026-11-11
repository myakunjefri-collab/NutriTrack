import Link from "next/link";
import Image from "next/image";
import { footerCols } from "@/lib/demo-data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-zinc-600 border-t border-zinc-200/80">
      
      <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 px-5 pt-20 pb-16 md:grid-cols-[1.4fr_repeat(4,1fr)] md:px-10">
        
        {/* Brand Col */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black shadow-sm">
              <Image
                src="/logo.png"
                alt="NutriTrack Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-sans text-xl font-bold tracking-tight text-zinc-950">
              NutriTrack
            </span>
          </div>

          <p className="max-w-xs text-xs text-zinc-500 leading-relaxed font-sans">
            Sistem presisi intervensi stunting dan pemantauan Makan Bergizi Gratis (MBG) berbasis komoditas pangan lokal berkualitas.
          </p>

          <div className="pt-2">
            <span className="token-chip bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0] font-bold text-[11px]">
              ● Selaras SDGs #2 & #3 · Ketahanan Gizi Nasional
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

      {/* NutriTrack Giant Clipped Wordmark */}
      <div
        aria-hidden="true"
        className="relative -mb-6 md:-mb-10 w-full overflow-hidden text-center select-none pointer-events-none"
      >
        <span className="font-sans block text-[clamp(4.8rem,18vw,16rem)] font-black tracking-tightest text-zinc-950/[0.03] leading-[0.75] uppercase whitespace-nowrap">
          NUTRITRACK
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-zinc-200/80 bg-zinc-50/80 py-6 font-mono text-xs text-zinc-500">
        <div className="mx-auto flex max-w-[1320px] flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-10">
          <p>© {new Date().getFullYear()} NutriTrack. Seluruh hak cipta dilindungi.</p>
          <p className="text-zinc-600 font-medium">
            Sistem Terpadu Pemantauan Antropometri Posyandu & Tata Kelola MBG Presisi.
          </p>
        </div>
      </div>

    </footer>
  );
}
