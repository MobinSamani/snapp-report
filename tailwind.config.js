/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["roboto"]
      },
      colors: {
        taxi: "#22a958",
        food: "#ff00a6"
      }
    }
  },
  plugins: []
};
