"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";

export type IllustrationName =
  | "telur-blitar"
  | "lele-lamongan"
  | "daun-kelor"
  | "tempe"
  | "hati-ayam"
  | "timbangan-bayi"
  | "kurva-kms"
  | "kotak-qr"
  | "dapur-sppg"
  | "peta-jatim";

const SIZE: Partial<Record<IllustrationName, [number, number]>> = {
  "peta-jatim": [800, 380],
};

export interface MapRegionData {
  id: string;
  name: string;
  isPriority: boolean;
  prevalence: string;
  children: number;
  packB: number;
  x: number;
  y: number;
}

export const MAP_REGIONS: Record<string, MapRegionData> = {
  bangkalan: {
    id: "titik-bangkalan",
    name: "Bangkalan",
    isPriority: true,
    prevalence: "19.8%",
    children: 3820,
    packB: 840,
    x: 452,
    y: 106,
  },
  probolinggo: {
    id: "titik-probolinggo",
    name: "Probolinggo",
    isPriority: true,
    prevalence: "18.4%",
    children: 4120,
    packB: 790,
    x: 560,
    y: 146,
  },
  bondowoso: {
    id: "titik-bondowoso",
    name: "Bondowoso",
    isPriority: true,
    prevalence: "17.6%",
    children: 2950,
    packB: 530,
    x: 640,
    y: 200,
  },
  jember: {
    id: "titik-jember",
    name: "Jember",
    isPriority: true,
    prevalence: "16.9%",
    children: 5890,
    packB: 980,
    x: 600,
    y: 244,
  },
  lamongan: {
    id: "titik-lamongan",
    name: "Lamongan",
    isPriority: false,
    prevalence: "12.1%",
    children: 3400,
    packB: 410,
    x: 250,
    y: 162,
  },
  blitar: {
    id: "titik-blitar",
    name: "Blitar",
    isPriority: false,
    prevalence: "11.5%",
    children: 3100,
    packB: 360,
    x: 300,
    y: 262,
  },
};

type Props = {
  name: IllustrationName;
  alt?: string;
  className?: string;
  priority?: boolean;
  interactive?: boolean;
  redrawOnHover?: boolean;
  onRegionHover?: (region: MapRegionData | null) => void;
  selectedRegion?: string | null;
};

export default function Illustration({
  name,
  alt,
  className,
  priority,
  interactive = false,
  redrawOnHover = false,
  onRegionHover,
  selectedRegion,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTooltip, setActiveTooltip] = useState<MapRegionData | null>(null);

  const handleMouseEnter = () => {
    if (!redrawOnHover || !containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const paths = containerRef.current.querySelectorAll<SVGPathElement>("path");
    paths.forEach((p) => {
      try {
        const len = p.getTotalLength();
        if (len > 0) {
          gsap.fromTo(
            p,
            { strokeDasharray: len, strokeDashoffset: len },
            { strokeDashoffset: 0, duration: 0.9, ease: "power2.out", overwrite: "auto" }
          );
        }
      } catch {
        // SVG non-measurable path handling
      }
    });
  };

  // Jika nama adalah peta-jatim dan interactive diaktifkan
  if (name === "peta-jatim" && interactive) {
    const handlePointEnter = (key: string) => {
      const data = MAP_REGIONS[key];
      if (data) {
        setActiveTooltip(data);
        onRegionHover?.(data);
      }
    };

    const handlePointLeave = () => {
      setActiveTooltip(null);
      onRegionHover?.(null);
    };

    return (
      <div ref={containerRef} className={`relative select-none ${className ?? ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 380"
          fill="none"
          stroke="#B8893B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label={alt ?? "Peta stilisasi wilayah Jawa Timur dengan titik pemantauan gizi"}
          className="h-full w-full"
        >
          <title>Peta stilisasi Jawa Timur</title>
          <desc>Ilustrasi stilisasi, bukan batas administratif. Menampilkan titik intervensi stunting.</desc>

          {/* Grid latar stilisasi */}
          <g opacity=".12">
            {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760].map((x) => (
              <path key={x} d={`M${x} 20V360`} />
            ))}
            {[40, 80, 120, 160, 200, 240, 280, 320].map((y) => (
              <path key={y} d={`M20 ${y}H780`} />
            ))}
          </g>

          {/* Kontur Daratan Jawa Timur & Madura */}
          <path
            d="M30 225L40 150L110 140L190 150L260 170L330 168L400 150L470 142L540 150L600 130L660 125L720 150L740 180L760 200L770 240L745 270L700 262L640 250L580 262L520 276L450 282L380 290L300 284L220 292L140 290L60 270Z"
            fill="#B8893B"
            fillOpacity=".07"
            stroke="#B8893B"
            strokeWidth="1.6"
          />
          <path
            d="M430 108L480 92L540 90L600 100L650 112L600 120L540 118L480 120Z"
            fill="#B8893B"
            fillOpacity=".07"
            stroke="#B8893B"
            strokeWidth="1.6"
          />

          {/* Titik Lamongan (Komoditas) */}
          <g
            id="titik-lamongan"
            tabIndex={0}
            role="button"
            aria-label="Titik Lamongan - Sentra Lele"
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => handlePointEnter("lamongan")}
            onMouseLeave={handlePointLeave}
            onFocus={() => handlePointEnter("lamongan")}
            onBlur={handlePointLeave}
          >
            <circle cx="250" cy="162" r="14" stroke="#B8893B" opacity=".3" className="animate-ping" style={{ transformOrigin: "250px 162px" }} />
            <circle cx="250" cy="162" r="9" stroke="#B8893B" opacity=".7" />
            <circle cx="250" cy="162" r="4.5" fill="#B8893B" stroke="none" />
            <text x="262" y="150" fill="#B8893B" stroke="none" fontSize="12" fontFamily="sans-serif" letterSpacing="1" fontWeight="600">
              LAMONGAN
            </text>
          </g>

          {/* Titik Blitar (Komoditas) */}
          <g
            id="titik-blitar"
            tabIndex={0}
            role="button"
            aria-label="Titik Blitar - Sentra Telur"
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => handlePointEnter("blitar")}
            onMouseLeave={handlePointLeave}
            onFocus={() => handlePointEnter("blitar")}
            onBlur={handlePointLeave}
          >
            <circle cx="300" cy="262" r="14" stroke="#B8893B" opacity=".3" className="animate-ping" style={{ transformOrigin: "300px 262px" }} />
            <circle cx="300" cy="262" r="9" stroke="#B8893B" opacity=".7" />
            <circle cx="300" cy="262" r="4.5" fill="#B8893B" stroke="none" />
            <text x="312" y="250" fill="#B8893B" stroke="none" fontSize="12" fontFamily="sans-serif" letterSpacing="1" fontWeight="600">
              BLITAR
            </text>
          </g>

          {/* Titik Prioritas: BANGKALAN */}
          <g
            id="titik-bangkalan"
            tabIndex={0}
            role="button"
            aria-label="Titik Bangkalan - Wilayah Prioritas"
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => handlePointEnter("bangkalan")}
            onMouseLeave={handlePointLeave}
            onFocus={() => handlePointEnter("bangkalan")}
            onBlur={handlePointLeave}
          >
            <circle
              cx="452"
              cy="106"
              r="22"
              stroke="#C4552D"
              opacity=".25"
              className="animate-ping"
              style={{ transformOrigin: "452px 106px", animationDuration: "2.4s" }}
            />
            <circle cx="452" cy="106" r="16" stroke="#C4552D" opacity={selectedRegion === "bangkalan" ? "0.9" : "0.55"} strokeWidth={selectedRegion === "bangkalan" ? 2.5 : 1.6} />
            <circle cx="452" cy="106" r="5" fill="#C4552D" stroke="none" />
            <text x="464" y="94" fill="#C4552D" stroke="none" fontSize="12" fontFamily="sans-serif" letterSpacing="1" fontWeight="700">
              BANGKALAN
            </text>
          </g>

          {/* Titik Prioritas: PROBOLINGGO */}
          <g
            id="titik-probolinggo"
            tabIndex={0}
            role="button"
            aria-label="Titik Probolinggo - Wilayah Prioritas"
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => handlePointEnter("probolinggo")}
            onMouseLeave={handlePointLeave}
            onFocus={() => handlePointEnter("probolinggo")}
            onBlur={handlePointLeave}
          >
            <circle
              cx="560"
              cy="146"
              r="22"
              stroke="#C4552D"
              opacity=".25"
              className="animate-ping"
              style={{ transformOrigin: "560px 146px", animationDuration: "2.8s" }}
            />
            <circle cx="560" cy="146" r="16" stroke="#C4552D" opacity={selectedRegion === "probolinggo" ? "0.9" : "0.55"} strokeWidth={selectedRegion === "probolinggo" ? 2.5 : 1.6} />
            <circle cx="560" cy="146" r="5" fill="#C4552D" stroke="none" />
            <text x="572" y="134" fill="#C4552D" stroke="none" fontSize="12" fontFamily="sans-serif" letterSpacing="1" fontWeight="700">
              PROBOLINGGO
            </text>
          </g>

          {/* Titik Prioritas: BONDOWOSO */}
          <g
            id="titik-bondowoso"
            tabIndex={0}
            role="button"
            aria-label="Titik Bondowoso - Wilayah Prioritas"
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => handlePointEnter("bondowoso")}
            onMouseLeave={handlePointLeave}
            onFocus={() => handlePointEnter("bondowoso")}
            onBlur={handlePointLeave}
          >
            <circle
              cx="640"
              cy="200"
              r="22"
              stroke="#C4552D"
              opacity=".25"
              className="animate-ping"
              style={{ transformOrigin: "640px 200px", animationDuration: "3s" }}
            />
            <circle cx="640" cy="200" r="16" stroke="#C4552D" opacity={selectedRegion === "bondowoso" ? "0.9" : "0.55"} strokeWidth={selectedRegion === "bondowoso" ? 2.5 : 1.6} />
            <circle cx="640" cy="200" r="5" fill="#C4552D" stroke="none" />
            <text x="652" y="188" fill="#C4552D" stroke="none" fontSize="12" fontFamily="sans-serif" letterSpacing="1" fontWeight="700">
              BONDOWOSO
            </text>
          </g>

          {/* Titik Prioritas: JEMBER */}
          <g
            id="titik-jember"
            tabIndex={0}
            role="button"
            aria-label="Titik Jember - Wilayah Prioritas"
            className="cursor-pointer focus:outline-none"
            onMouseEnter={() => handlePointEnter("jember")}
            onMouseLeave={handlePointLeave}
            onFocus={() => handlePointEnter("jember")}
            onBlur={handlePointLeave}
          >
            <circle
              cx="600"
              cy="244"
              r="22"
              stroke="#C4552D"
              opacity=".25"
              className="animate-ping"
              style={{ transformOrigin: "600px 244px", animationDuration: "2.6s" }}
            />
            <circle cx="600" cy="244" r="16" stroke="#C4552D" opacity={selectedRegion === "jember" ? "0.9" : "0.55"} strokeWidth={selectedRegion === "jember" ? 2.5 : 1.6} />
            <circle cx="600" cy="244" r="5" fill="#C4552D" stroke="none" />
            <text x="612" y="232" fill="#C4552D" stroke="none" fontSize="12" fontFamily="sans-serif" letterSpacing="1" fontWeight="700">
              JEMBER
            </text>
          </g>
        </svg>

        {/* Floating Tooltip saat titik disentuh / dihover */}
        {activeTooltip && (
          <div
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-2xl border border-zinc-200/90 bg-white/95 p-3.5 text-zinc-900 shadow-2xl backdrop-blur-md transition-all font-sans"
            style={{
              left: `${(activeTooltip.x / 800) * 100}%`,
              top: `${(activeTooltip.y / 380) * 100}%`,
              marginTop: "-14px",
            }}
          >
            <div className="flex items-center gap-2">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${activeTooltip.isPriority ? "bg-[#FF764C]" : "bg-[#B8893B]"}`} />
              <p className="font-sans text-sm font-bold text-zinc-950">{activeTooltip.name}</p>
            </div>
            <div className="mt-1.5 space-y-0.5 text-xs font-mono text-zinc-600">
              <p>Prevalensi: <span className="font-bold text-[#FF764C]">{activeTooltip.prevalence}</span></p>
              <p>Balita Terukur: <span className="font-semibold text-zinc-900">{activeTooltip.children.toLocaleString("id-ID")}</span></p>
              <p>Alokasi Paket B: <span className="font-bold text-[#7866FF]">{activeTooltip.packB} anak</span></p>
            </div>
            <p className="mt-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-600 font-bold">● Terverifikasi</p>
          </div>
        )}
      </div>
    );
  }

  // Default image representation with hover redraw trigger
  const [w, h] = SIZE[name] ?? [400, 400];

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`relative inline-block ${className ?? ""}`}
    >
      <Image
        src={`/illustrations/${name}.svg`}
        alt={alt ?? name.replace(/-/g, " ")}
        width={w}
        height={h}
        className="h-full w-full object-contain"
        priority={priority}
        unoptimized
      />
    </div>
  );
}
