/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors:{
        soft_orange:"hsl(35, 77%, 62%)",
        soft_red:"hsl(5, 85%, 63%)",
        off_white:"hsl(36, 100%, 99%)",
        grayish_blue:"hsl(233, 8%, 79%)",
        darkGrBlue:"hsl(236, 13%, 42%)",
        veryDkBlue:"hsl(240, 100%, 5%)"
      }
    },
  },
  plugins: [],
}
