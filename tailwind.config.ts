import type { Config } from "tailwindcss";
import { COLORS } from "./src/constants/color.constant";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
} satisfies Config;
