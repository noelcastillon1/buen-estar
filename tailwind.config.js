/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      // sans: ["Lato", "ui-sans-serif"],
      // serif: ["Noto Serif Display", "ui-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/Woman by ocean.avif')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DEE8D4",
          secondary: "#89A79F",
          accent: "#EEDAD7",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#9ECEAB",
          success: "#A6C1ED",
          warning: "#F85B53",
          error: "#F85B53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
