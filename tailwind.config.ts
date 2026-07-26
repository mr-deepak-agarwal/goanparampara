import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oxblood: "#5E1620",
        "oxblood-dark": "#3E0F17",
        rust: "#9C4A24",
        gold: "#B98A46",
        "gold-light": "#D8B77E",
        ivory: "#F4ECDD",
        "ivory-deep": "#EBE0CB",
        ink: "#2B1712",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
