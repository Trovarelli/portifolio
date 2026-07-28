import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--bp-display)"],
        sans: ["var(--bp-sans)"],
        mono: ["var(--bp-mono)"],
      },
      colors: {
        blueprint: {
          paper: "var(--bp-paper)",
          surface: "var(--bp-surface)",
          ink: "var(--bp-ink)",
          soft: "var(--bp-ink-soft)",
          faint: "var(--bp-ink-faint)",
          line: "var(--bp-line)",
          accent: "var(--bp-accent)",
          rail: "var(--bp-rail)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
