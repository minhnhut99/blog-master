/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        color_primary: "#3BACB6",
        color_secondary: "#82DBD8",
        color_thirdly: "#B3E8E5",
        bd_color_primary: "#f5bc7b",
        title: "#16405B",
        sub_title: "#06283D",
        text: "#222222",
        text_gray: "#d3dce6",
        color_date: "#95a7a9",
        text_desc: "#737d7f",
      },
    },
  },
  plugins: [],
};
