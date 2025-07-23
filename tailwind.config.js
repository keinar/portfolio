/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f1a",
        accent: "#4ade80",
        gold: "#facc15",
        glass: "rgba(255,255,255,0.1)",
        dark: "#12181f",
        primary: "#23f3cf",
        secondary: "#4ade80",
        card: "#181f2b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        gradientBG: {
          "0%,100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        "gradient-bg": "gradientBG 15s ease infinite",
      },
    },
  },
  plugins: [],
};
