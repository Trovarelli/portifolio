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
      colors: {
        primary: {
          DEFAULT: 'rgb(99, 102, 241)',
          dark: 'rgb(129, 140, 248)',
        },
        accent: {
          DEFAULT: 'rgb(139, 92, 246)',
          dark: 'rgb(167, 139, 250)',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-strong': '0 0 40px rgba(99, 102, 241, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
