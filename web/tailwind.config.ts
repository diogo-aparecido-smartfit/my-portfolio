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
        availableButton: "availableButton 4s",
        progressFill: "progressButton 3s ease-out",
      },
      keyframes: {
        availableButton: {
          "0%": { color: "#fff" },
          "100%": { color: "rgb(63 63 70 / 1)" },
        },
        progressButton: {
          "0%": { width: "0%", background: "rgb(63 63 70 / 1)" },
          "100%": { width: "100%", background: "#fff" },
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
