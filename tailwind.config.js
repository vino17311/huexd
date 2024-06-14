/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "formkit.theme.ts",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#c4132e",
        blue: "#051AD0",
        lightBlue: "#1228C4",
        ash: "#F3F4F6",
        red: "#c4132e",
        black: "#221E1E",
      },
    },
  },
  // safelist: ["bg-red-500", "text-3xl", "lg:text-4xl"],
  plugins: [],
};
