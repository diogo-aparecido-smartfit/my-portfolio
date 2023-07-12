/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        navShadow: "0 -1px 4px rgba(0, 0, 0, .5 );",
      },
      animationDelay: {
        "3s": "3s",
      },
      animation: {
        "text-reveal": "text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        fade: "fadeOut 3s ease-in-out",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      fontFamily: {
        custom: ["GraphikRegular", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
