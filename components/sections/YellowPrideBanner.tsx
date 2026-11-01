"use client";

/**
 * Yellow Pride Banner: Ketahanan Pangan Lokal Jawa Timur
 * - Menggantikan robot maskot dengan ilustrasi tematik: Piring Gizi MBG & Komoditas Lokal Jatim
 *   (Telur Blitar, Daun Kelor, Lele Lamongan, Susu Segar, dan Pangan Sehat Balita).
 * - Menjaga estetika bold, modern, dan cerah khas Tokens Studio dengan relevansi 100% terhadap proyek NutriTrack Jatim.
 */
export default function YellowPrideBanner() {
  return (
    <section className="relative bg-[#F7F8F8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Giant Yellow Card */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#FFCA38] p-8 sm:p-12 md:p-16 shadow-2xl text-[#18140B]">
          
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[#18140B]/75 block">
                ● KETAHANAN PANGAN LOKAL JAWA TIMUR
              </span>

              <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tightest uppercase leading-[1.02]">
                Kedaulatan pangan <br />
                untuk gizi anak <br />
                Jawa Timur
              </h2>

              <p className="max-w-xl text-base sm:text-lg font-semibold leading-relaxed text-[#18140B]/90 font-sans">
                Program MBG NutriTrack Jatim menyerap hasil peternak dan kelompok tani lokal Jawa Timur (Telur Blitar, Lele Lamongan, Daun Kelor). Rantai pasok pangan diperpendek demi kualitas protein segar terbaik bagi anak tanpa perantara berbelit.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#cara-kerja"
                  className="rounded-full bg-[#18140B] px-8 py-4 font-sans text-sm font-black text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-black"
                >
                  Tentang Program
                </a>
                <a
                  href="#peran"
                  className="rounded-full bg-[#18140B] px-8 py-4 font-sans text-sm font-black text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-black"
                >
                  Jelajahi Dapur SPPG
                </a>
              </div>
            </div>

            {/* Right Visual: Piring Gizi MBG & Komoditas Lokal Jawa Timur (Bukan Robot) */}
            <div className="relative flex items-center justify-center">
              
              {/* Egg-shaped warm background blob */}
              <div className="relative flex h-80 w-80 sm:h-96 sm:w-96 items-center justify-center rounded-[50%_50%_45%_55%/60%_60%_40%_40%] bg-[#E5B225] shadow-inner p-4">
                
                {/* SVG Vector: Piring Gizi MBG & Bahan Lokal Jatim (Cute 3D Cartoon) */}
                <svg
                  viewBox="0 0 340 340"
                  className="w-72 h-72 sm:w-84 sm:h-84 drop-shadow-2xl select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle steam swirls */}
                  <path
                    d="M 120 75 C 115 60 125 50 120 35"
                    stroke="#FFF7D6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  <path
                    d="M 170 65 C 165 48 178 38 172 22"
                    stroke="#FFF7D6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  <path
                    d="M 220 75 C 215 58 228 48 222 35"
                    stroke="#FFF7D6"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />

                  {/* Main Plate Base Shadow */}
                  <ellipse cx="170" cy="275" rx="135" ry="32" fill="#BA870B" opacity="0.4" />

                  {/* Large Ceramic Plate Rim */}
                  <ellipse cx="170" cy="225" rx="140" ry="75" fill="#FFFDF0" stroke="#18140B" strokeWidth="6" />
                  {/* Inner Plate Well */}
                  <ellipse cx="170" cy="223" rx="118" ry="60" fill="#F4EFE0" stroke="#18140B" strokeWidth="3" />
                  
                  {/* Ceramic Plate Highlight */}
                  <path
                    d="M 50 215 C 65 175 275 175 290 215"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.7"
                  />

                  {/* Rice Portion (Beras Organik Jatim) */}
                  <ellipse cx="120" cy="225" rx="48" ry="32" fill="#FFFFFF" stroke="#18140B" strokeWidth="4" />
                  <ellipse cx="120" cy="223" rx="42" ry="26" fill="#F8FAFC" />
                  {/* Rice Grains texture */}
                  <circle cx="110" cy="220" r="2.5" fill="#CBD5E1" />
                  <circle cx="125" cy="216" r="2.5" fill="#CBD5E1" />
                  <circle cx="132" cy="228" r="2" fill="#CBD5E1" />
                  <circle cx="105" cy="228" r="2" fill="#CBD5E1" />
                  <circle cx="120" cy="232" r="2.5" fill="#CBD5E1" />

                  {/* Telur Blitar (Rebus Belah Dua - Protein Unggulan) */}
                  {/* Egg 1 Outer White */}
                  <ellipse cx="205" cy="205" rx="36" ry="26" transform="rotate(-15 205 205)" fill="#FFFFFF" stroke="#18140B" strokeWidth="4" />
                  {/* Egg 1 Golden Yolk */}
                  <ellipse cx="203" cy="204" rx="20" ry="16" transform="rotate(-15 203 204)" fill="#FF9A03" stroke="#18140B" strokeWidth="3" />
                  <ellipse cx="201" cy="202" rx="14" ry="11" transform="rotate(-15 201 202)" fill="#FFB703" />
                  <circle cx="196" cy="198" r="3.5" fill="white" />

                  {/* Egg 2 (Whole Egg behind) */}
                  <ellipse cx="242" cy="185" rx="24" ry="32" transform="rotate(35 242 185)" fill="#E89B5F" stroke="#18140B" strokeWidth="4" />
                  <ellipse cx="238" cy="178" rx="7" ry="14" transform="rotate(30 238 178)" fill="#FBD5B5" opacity="0.8" />

                  {/* Lele Lamongan (Ikan Protein Segar Bergizi) */}
                  <g transform="translate(145, 222) rotate(-8)">
                    {/* Fish Body */}
                    <path
                      d="M 15 15 C 35 2 70 8 85 22 C 70 34 35 38 15 25 Z"
                      fill="#64748B"
                      stroke="#18140B"
                      strokeWidth="3.5"
                    />
                    {/* Fish Belly */}
                    <path
                      d="M 22 23 C 40 32 65 28 78 20 C 65 27 40 29 22 23 Z"
                      fill="#94A3B8"
                    />
                    {/* Tail fin */}
                    <path
                      d="M 15 20 L 2 10 C 6 18 6 22 2 30 Z"
                      fill="#475569"
                      stroke="#18140B"
                      strokeWidth="3"
                    />
                    {/* Grill marks */}
                    <line x1="38" y1="12" x2="34" y2="26" stroke="#18140B" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="52" y1="14" x2="48" y2="28" stroke="#18140B" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="66" y1="17" x2="62" y2="27" stroke="#18140B" strokeWidth="2.5" strokeLinecap="round" />
                  </g>

                  {/* Daun Kelor & Sayur Hijau Segar */}
                  <g transform="translate(80, 165)">
                    {/* Stem */}
                    <path d="M 35 55 Q 30 25 15 10" fill="none" stroke="#14532D" strokeWidth="3" strokeLinecap="round" />
                    {/* Leaves */}
                    <ellipse cx="14" cy="10" rx="9" ry="6" transform="rotate(-30 14 10)" fill="#22C55E" stroke="#14532D" strokeWidth="2" />
                    <ellipse cx="28" cy="22" rx="10" ry="7" transform="rotate(25 28 22)" fill="#4ADE80" stroke="#14532D" strokeWidth="2" />
                    <ellipse cx="18" cy="34" rx="10" ry="7" transform="rotate(-20 18 34)" fill="#16A34A" stroke="#14532D" strokeWidth="2" />
                    <ellipse cx="32" cy="42" rx="9" ry="6" transform="rotate(30 32 42)" fill="#22C55E" stroke="#14532D" strokeWidth="2" />
                  </g>

                  {/* Botol Susu Segar / Kalsium Balita */}
                  <g transform="translate(58, 85)">
                    {/* Bottle Cap */}
                    <rect x="22" y="10" width="16" height="8" rx="3" fill="#38E8F5" stroke="#18140B" strokeWidth="3" />
                    {/* Bottle Neck */}
                    <rect x="25" y="18" width="10" height="12" fill="#E2E8F0" stroke="#18140B" strokeWidth="3" />
                    {/* Bottle Body */}
                    <rect x="15" y="30" width="30" height="60" rx="10" fill="#FFFFFF" stroke="#18140B" strokeWidth="3.5" />
                    {/* Milk level line */}
                    <rect x="18" y="42" width="24" height="44" rx="6" fill="#F8FAFC" />
                    {/* Cute Nutrition Heart Badge */}
                    <circle cx="30" cy="58" r="8" fill="#38E8F5" />
                    <path
                      d="M 27 57 C 27 55 30 54 30 56 C 30 54 33 55 33 57 C 33 60 30 62 30 62 C 30 62 27 60 27 57 Z"
                      fill="#032D30"
                    />
                  </g>

                  {/* Certified Quality Medal: 100% Pangan Jatim */}
                  <g transform="translate(210, 85)">
                    {/* Ribbons */}
                    <path d="M 38 40 L 26 70 L 38 64 L 50 70 Z" fill="#DC2626" stroke="#18140B" strokeWidth="2.5" />
                    <path d="M 48 40 L 38 70 L 48 64 L 58 70 Z" fill="#B91C1C" stroke="#18140B" strokeWidth="2.5" />
                    {/* Medal Circle */}
                    <circle cx="40" cy="35" r="24" fill="#FFCA28" stroke="#18140B" strokeWidth="3.5" />
                    <circle cx="40" cy="35" r="19" fill="#FFF8E1" stroke="#18140B" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Star in Medal */}
                    <polygon
                      points="40,23 43,30 51,31 45,36 47,43 40,39 33,43 35,36 29,31 37,30"
                      fill="#E65100"
                    />
                    <text x="40" y="50" fontSize="6" fontFamily="sans-serif" fontWeight="900" fill="#18140B" textAnchor="middle">
                      JATIM
                    </text>
                  </g>
                </svg>

                {/* Floating pill tags on illustration */}
                <span className="absolute -top-3 right-0 sm:right-2 rounded-full bg-[#18140B] text-white px-3.5 py-1.5 font-mono text-[11px] font-black shadow-lg">
                  ● 7.5 Ton Telur Blitar
                </span>
                <span className="absolute -bottom-3 left-0 sm:left-2 rounded-full bg-[#38E8F5] text-[#032D30] px-3.5 py-1.5 font-mono text-[11px] font-black shadow-lg">
                  ● Dari Peternak ke Dapur SPPG
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
