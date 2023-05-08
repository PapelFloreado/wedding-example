/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "back-image": "url('/src/assets/flores.svg')"
        
      },
      backgroundColor:{
        "melon": "#F0B5B3",
        "coral": "#FE938C"
      },
      fontFamily:{
        "sacramento": ['Sacramento', "cursive"],
        "roboto": ['Roboto Slab', "serif"]
        
      },
      borderColor:{
        "melon": "#F0B5B3",
      }
    },
  },
  plugins: [],
}

