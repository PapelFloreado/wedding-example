/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "back-image": "url('/src/assets/flores.svg')"
        
      },
      backgroundColor:{
        "mindaro": "#F3FFB6",
        "coral": "#FE938C"
      }
    },
  },
  plugins: [],
}

