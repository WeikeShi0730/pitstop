module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "1rem",
    },
    minHeight: {
      content: "calc(100vh - 5rem)",
    },
    extend: {
      height: {
        76: "18rem",
        78: "19rem",
        82: "22rem",
        97: "28rem",
        98: "31rem",
        99: "38rem",
        100: "40rem",
        "fit-content": "fit-content(2em)",
      },
      colors: {
        orange: {
          theme: "#E87121",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      boxShadow: {
        underline: "0px 15px 9px -3px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
