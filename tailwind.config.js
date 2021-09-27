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
      bg3: {
        DEFAULT: "#373B53",
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
      spacing: {
        bar: "103px",
        homeTop: "72px",
        homeBottom: "65px",
      },
      maxWidth: {
        container1: "730px",
      },
      fontSize: {
        lg: "32px",
      },
      gridTemplateColumns: {
        item: "0.7fr 1fr 1fr 1fr 104px 20px",
      },
      boxShadow: {
        item: "0px 10px 10px -10px rgba(72, 84, 159, 0.100397)",
      },
      height: {
        item: "72px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
