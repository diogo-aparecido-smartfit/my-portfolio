import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkBg: "#18171C",
        selection: "#BEA9DF",
      },
      borderColor: {
        darkBorder: "#333236",
      },
    },
  },
  plugins: [require("@codaworks/react-glow/tailwind")],
};
export default config;
