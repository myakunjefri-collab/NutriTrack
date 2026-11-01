"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Tone = "pink" | "purple" | "green" | "cyan";

const TONES: Record<Tone, { g: [string, string]; e: [string, string, string]; glow: string; text: string }> = {
  pink: { g: ["#FF6F8F", "#F5436C"], e: ["#D82852", "#BC1840", "#9E0E32"], glow: "rgba(158,14,50,0.35)", text: "#fff" },
  purple: { g: ["#9C8BFF", "#7660FF"], e: ["#5E46E6", "#4A33CC", "#3922B3"], glow: "rgba(57,34,179,0.35)", text: "#fff" },
  green: { g: ["#B6F26F", "#7BD635"], e: ["#5DB521", "#4A9A14", "#3A800C"], glow: "rgba(58,128,12,0.35)", text: "#18140B" },
  cyan: { g: ["#79F5FC", "#2BD6E4"], e: ["#0FA9B7", "#0C8F9B", "#0A7680"], glow: "rgba(10,118,128,0.35)", text: "#032D30" },
};

/** Kartu "clay 3D" bergaya hero landing page (ekstrusi berlapis + highlight dalam) dengan tilt halus saat hover. */
export default function ClayCard({
  tone,
  children,
  className = "",
  style,
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const t = TONES[tone];
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`font-sans select-none ${className}`}
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.025,
              rotate: 1.5,
              y: -4,
              transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
            }
      }
      style={{
        background: `linear-gradient(135deg, ${t.g[0]} 0%, ${t.g[1]} 100%)`,
        color: t.text,
        border: "2px solid rgba(255,255,255,0.7)",
        borderRadius: 20,
        padding: 12,
        boxShadow: `inset 0 2px 3px rgba(255,255,255,0.85), inset 0 -2px 3px rgba(0,0,0,0.12), 0 2px 0 ${t.e[0]}, 0 4px 0 ${t.e[0]}, 0 6px 0 ${t.e[1]}, 0 8px 0 ${t.e[2]}, 0 16px 24px -4px ${t.glow}, 0 24px 35px -8px rgba(0,0,0,0.18)`,
        cursor: "default",
        transformOrigin: "center center",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
