/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "text-main-color": "#2e3546",
        dimgray: "#545c6e",
        "dashboard-background": "#dde6f1",
        black: "#000",
        "secondary-color-blue": "#394d6a",
        moccasin: "#ffe6b3",
        lightgray: "#c4ccd9",
      },
      spacing: {},
      fontFamily: {
        comfortaa: "Comfortaa",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "13xl": "32px",
      "7xl": "26px",
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
