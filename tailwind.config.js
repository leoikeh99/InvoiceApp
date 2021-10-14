module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
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
        hover: "#9277FF",
        light: "#F9FAFE",
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
      gray3: "#DFE3FA",
      gray4: "#7E88C3",
      gray5: "#777F98",
      red: { DEFAULT: "#EC5757", light: "#FF9797" },
      input: {
        DEFAULT: "#DFE3FA",
        dark: "#252945",
      },
      black: "#000",
      white: "#fff",
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
      width: {
        filter: "192px",
        form1: "719px",
        form1_tab: "616px",
        sideBar: "103px",
        modal: "480px",
      },
      maxWidth: {
        mobile: "96%",
        tab: "90%",
        container1: "742px",
        container2: "85%",
        text: "100px",
      },
      fontSize: {
        lg: "32px",
        lg1: "18px",
        lg2: "24px",
        xxs: "10px",
        20: "20px",
      },
      gridTemplateColumns: {
        item: "0.7fr 1fr 1fr 1fr 104px 20px",
        itemList: "3fr 4.1fr",
        itemList2: "0.7fr 1.7fr 1.7fr",
        itemList3: "3fr 0.7fr 1.7fr 1.7fr",
      },
      boxShadow: {
        item: "0px 10px 10px -10px rgba(72, 84, 159, 0.100397)",
        filter: "0px 10px 20px rgba(72, 84, 159, 0.25)",
        shadow1:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.1) 100%)",
      },
      height: {
        item: "72px",
        130: "130px",
      },
      inset: {
        "-30": "-120px",
      },
      screens: {
        mobile3: "461px",
        mobile2: "651px",
        tab3: "620px",
        mobile1: "677px",
        tab: "768px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      boxShadow: ["dark"],
      opacity: ["dark"],
    },
  },
  plugins: [],
};
