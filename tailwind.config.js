/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url('/src/assets/back.jpg')",
        "ramo": "url('/src/assets/ramo.png')"

        
      },
      backgroundColor:{
        "melon": "#F0B5B3",
        "coral": "#FE938C",
        "nav": "#F7F7FF"
      },
      fontFamily:{
        "sacramento": ['Sacramento', "cursive"],
        "roboto": ['Roboto Slab', "serif"]
        
      },
      borderColor:{
        "melon": "#F0B5B3",
      },
      textColor:{
        "melon": "#ac8180",
        "titulo": "#693e3d"
      }
      
    },
  },
  plugins: [],
}

