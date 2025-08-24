import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
