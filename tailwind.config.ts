import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tokens: {
          bg: "#F7F8F8",
          dark: "#18140B",
          charcoal: "#0C0F0F",
          yellow: "#FFCA38",
          "yellow-dark": "#2F2302",
          purple: "#7866FF",
          "purple-soft": "#A499FF",
          "purple-light": "#D3CEFC",
          "purple-bg": "#F3F0FF",
          cyan: "#38E8F5",
          "cyan-light": "#CEF9FC",
          "cyan-bg": "#EBFBFC",
          green: "#91EB4C",
          "green-light": "#C0FC92",
          "green-bg": "#F2FCE8",
          coral: "#FF764C",
          "coral-light": "#FFD7CB",
          "coral-bg": "#FFF2EE",
          pink: "#FF709C",
          "pink-light": "#FFD0DF",
        },
        // Botanical / Semantic compatibility
        forest: "#18140B",
        moss: "#1F4D3A",
        ivory: "#F7F8F8",
        paper: "#ECEEEE",
        brass: "#B8893B",
        terracotta: "#FF764C",
        status: {
          ok: "#91EB4C",
          warn: "#FFCA38",
          bad: "#FF764C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        studio: "0 10px 30px -10px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        "studio-lg": "0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.06)",
        "token-card": "0 12px 24px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
