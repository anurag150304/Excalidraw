import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // All apps & packages
    "../../apps/web/**/*.{js,ts,tsx}",
    "../../packages/ui/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
};

export default config;
