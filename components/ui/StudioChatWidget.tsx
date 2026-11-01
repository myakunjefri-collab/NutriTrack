"use client";

import { useState } from "react";

export default function StudioChatWidget() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {isOpen && (
        <div className="relative max-w-[240px] rounded-2xl border border-zinc-200/90 bg-white p-4 text-xs shadow-2xl text-zinc-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-700 text-xs font-mono"
            aria-label="Tutup pesan"
          >
            ×
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#38E8F5] text-[10px] font-black text-[#032D30]">
              &lt;&gt;
            </span>
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase">Bantuan NutriTrack Jatim</span>
          </div>
          <p className="font-sans text-[11px] leading-relaxed text-zinc-700 font-medium">
            Punya pertanyaan mengenai implementasi posyandu & MBG Jatim? Tinggalkan pesan di sini.
          </p>
        </div>
      )}

      {/* Circle Cyan Chat Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38E8F5] text-[#032D30] shadow-xl hover:scale-105 active:scale-95 transition-transform"
        aria-label="Buka bantuan NutriTrack Jatim"
      >
        <span className="font-mono text-base font-black">&lt;&gt;</span>
      </button>
    </div>
  );
}

