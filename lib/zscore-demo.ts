// APROKSIMASI UNTUK DEMO SIMULASI LANDING PAGE. BUKAN standar WHO resmi dan BUKAN alat diagnosis.
// Aplikasi sungguhan memakai tabel LMS WHO/Permenkes 2/2020 (lihat docs/PRD, bagian 12).

export type Sex = "L" | "P";
type Row = [age: number, median: number];

const WEIGHT: Record<Sex, Row[]> = {
  L: [[6, 7.9], [12, 9.6], [18, 10.9], [24, 12.2], [30, 13.3], [36, 14.3]],
  P: [[6, 7.3], [12, 8.9], [18, 10.2], [24, 11.5], [30, 12.7], [36, 13.9]],
};
const HEIGHT: Record<Sex, Row[]> = {
  L: [[6, 67.6], [12, 75.7], [18, 82.3], [24, 87.1], [30, 91.9], [36, 96.1]],
  P: [[6, 65.7], [12, 74.0], [18, 80.7], [24, 85.7], [30, 90.7], [36, 95.1]],
};

function interp(rows: Row[], age: number) {
  if (age <= rows[0][0]) return rows[0][1];
  for (let i = 1; i < rows.length; i++) {
    if (age <= rows[i][0]) {
      const [a0, m0] = rows[i - 1];
      const [a1, m1] = rows[i];
      return m0 + ((age - a0) / (a1 - a0)) * (m1 - m0);
    }
  }
  return rows[rows.length - 1][1];
}

export type DemoStatus = "normal" | "waspada" | "stunting";

export interface DemoResult {
  zWeightForAge: number;
  zHeightForAge: number;
  status: DemoStatus;
  label: string;
  pack: "A" | "B";
  recommendation: string;
}

export function demoAssess(input: { sex: Sex; ageMonths: number; weightKg: number; heightCm: number }): DemoResult {
  const mw = interp(WEIGHT[input.sex], input.ageMonths);
  const mh = interp(HEIGHT[input.sex], input.ageMonths);
  const zw = (input.weightKg - mw) / (mw * 0.12);
  const zh = (input.heightCm - mh) / (mh * 0.035);
  const r = (n: number) => Math.round(n * 100) / 100;

  let status: DemoStatus = "normal";
  if (zh < -2 || zw < -2) status = "stunting";
  else if (zh < -1 || zw < -1) status = "waspada";

  const label = { normal: "NORMAL", waspada: "WASPADA / GROWTH FALTERING", stunting: "RISIKO STUNTING" }[status];
  const pack = status === "normal" ? "A" : "B";
  const recommendation =
    pack === "A"
      ? "Dialokasikan ke Paket A (Reguler)."
      : "Dialokasikan ke Paket B: ekstra protein hewani (telur Blitar + lele Lamongan).";

  return { zWeightForAge: r(zw), zHeightForAge: r(zh), status, label, pack, recommendation };
}
