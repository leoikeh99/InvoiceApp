module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    text2: {
      DEFAULT: "#888EB0",
      dark: "#DFE3FA",
    },
    colors: {
      text1: {
        DEFAULT: "#0C0E16",
        dark: "#FFFFFF",
      },
      text2: {
        DEFAULT: "#888EB0",
        dark: "#DFE3FA",
      },
      purple: {
        DEFAULT: "#7C5DFA",
      },
      bg1: {
        DEFAULT: "#F8F8FB",
        dark: "#141625",
      },
      bg2: {
        DEFAULT: "#FFFFFF",
        dark: "#1E2139",
      },
      green: {
        DEFAULT: "#33D69F",
      },
      yellow: {
        DEFAULT: "#FF8F00",
      },
      gray: {
        DEFAULT: "#373B53",
      },
      gray2: {
        DEFAULT: "#494E6E",
      },
    },
    extend: {
      fontFamily: {
        spartan: ["'Spartan', sans-serif"],
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
