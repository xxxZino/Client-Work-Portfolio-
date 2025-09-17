// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        float: { "0%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" }, "100%": { transform: "translateY(0)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
