"use client";

interface IsometricCubeProps {
  colorScheme: "purple" | "cyan" | "yellow";
  className?: string;
  size?: number;
}

const SCHEMES = {
  purple: {
    top: "#B3A4FF",
    left: "#8572FF",
    right: "#5C46D9",
    highlight: "#D5CCFF",
  },
  cyan: {
    top: "#79F5FC",
    left: "#2BD6E4",
    right: "#0FA9B7",
    highlight: "#BEFAFD",
  },
  yellow: {
    top: "#FFE476",
    left: "#FFCA38",
    right: "#D89907",
    highlight: "#FFF2B5",
  },
};

export default function IsometricCube({ colorScheme, className = "", size = 68 }: IsometricCubeProps) {
  const c = SCHEMES[colorScheme];

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-block select-none transition-transform duration-300 hover:scale-110 hover:-translate-y-1 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full drop-shadow-[0_16px_22px_rgba(0,0,0,0.18)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Face */}
        <path
          d="M 50 14 L 84 33 C 86 34 86 37 84 38 L 50 57 C 49 58 47 58 46 57 L 16 38 C 14 37 14 34 16 33 L 46 14 C 47 13 49 13 50 14 Z"
          fill={c.top}
        />
        {/* Top Face Light Bevel */}
        <path
          d="M 46 15 L 17 33.5"
          stroke={c.highlight}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Left Face */}
        <path
          d="M 14 36 L 47 56 C 49 57 49 58 49 60 L 49 84 C 49 87 47 88 45 87 L 15 67 C 13 66 12 64 12 62 L 12 39 C 12 37 13 35 14 36 Z"
          fill={c.left}
        />

        {/* Right Face */}
        <path
          d="M 51 57 C 51 57 52 56 53 56 L 85 36 C 87 35 88 37 88 39 L 88 62 C 88 64 87 66 85 67 L 55 87 C 53 88 51 87 51 84 Z"
          fill={c.right}
        />

        {/* Inner seam highlights */}
        <path
          d="M 50 57 L 50 85"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

