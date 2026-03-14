import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8540A",
        "primary-hover": "#d44a00",
        secondary: "#0A0A0A",
        surface: "#111111",
        accent: "#F5F0E8",
        muted: "#2A2A2A",
        "muted-text": "#6B6B6B",
        border: "#2A2A2A",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "widest-2": "0.2em",
        "widest-3": "0.3em",
      },
      animation: {
        grain: "grain 0.5s steps(1) infinite",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        countdown: "countdown 1s linear infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -1%)" },
          "50%": { transform: "translate(-3%, 2%)" },
          "60%": { transform: "translate(2%, -4%)" },
          "70%": { transform: "translate(-4%, 3%)" },
          "80%": { transform: "translate(3%, -2%)" },
          "90%": { transform: "translate(-2%, 4%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grain-texture": "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
