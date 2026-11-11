"use client";

import { useState } from "react";
import Image from "next/image";

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
            <div className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-md bg-black">
              <Image
                src="/logo.png"
                alt="NutriTrack"
                width={20}
                height={20}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase">Bantuan NutriTrack</span>
          </div>
          <p className="font-sans text-[11px] leading-relaxed text-zinc-700 font-medium">
            Punya pertanyaan mengenai implementasi posyandu & MBG? Tinggalkan pesan di sini.
          </p>
        </div>
      )}

      {/* Circle Dark Chat Trigger with Logo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-xl hover:scale-105 active:scale-95 transition-transform overflow-hidden p-2 border-2 border-zinc-800"
        aria-label="Buka bantuan NutriTrack"
      >
        <Image
          src="/logo.png"
          alt="NutriTrack Logo"
          width={28}
          height={28}
          className="h-full w-full object-cover rounded-full"
        />
      </button>
    </div>
  );
}

