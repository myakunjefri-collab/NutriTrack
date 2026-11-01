import type { Metadata } from "next";
import { Suspense } from "react";
import AppShell from "@/components/dashboard/AppShell";

export const metadata: Metadata = {
  title: "Aplikasi NutriTrack Jatim | Portal Intervensi Stunting & MBG Presisi",
  description:
    "Dasbor operasional terpadu kader posyandu, dapur SPPG, dan dinas kesehatan Jawa Timur.",
};

export default function AppPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F8F8] flex items-center justify-center font-mono text-sm text-zinc-500">
          Memuat NutriTrack Jatim...
        </div>
      }
    >
      <AppShell />
    </Suspense>
  );
}

