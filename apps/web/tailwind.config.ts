import baseConfig from "@repo/tailwind-config/config";
import { Config } from "tailwindcss";

const config: Config = {
  presets: [baseConfig],
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
};
export default config;
