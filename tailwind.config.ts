import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomato: ["var(--font-tomato)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        default: "#05D94D",
      },
    },
  },
  plugins: [],
};
export default config;
