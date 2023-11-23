import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" },
        },
      },
      transformOrigin: {
        customTransform: "50% 50% 0px",
      },
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
