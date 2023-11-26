/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens: {
        xxs: '0px',
        at460: '460px',
        at500: '500px',
        at602: '602px',
        at622: '622px',
        at830: '830px',
        at942: '942px',
        at1030: '1030px',
      },

      fontFamily: {
        Titillium: ["Titillium Web", "sans-serif"],
      },

      backgroundImage: {
        bgBlack: "url('../src/Assets/newBGG.jpg')",
        pattern: "url('../src/Assets/pattern4.png')",
        TechBG: "url('../src/Assets/tech_bg2.jpg')",
        bgGradient:
          "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
          // "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);",
      },
    },
  },
  plugins: [],
};
