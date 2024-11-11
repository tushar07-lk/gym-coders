/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //FOR ONLY DEFAULT ADDING CASE:-
      //Making a color class for 'default' case:-

      //FONTS:-
      fontFamily: {
        playfair: ["Playfair Display", "serif"]
      },

      colors: {
        primary:"#ff8901",
        secondary: "#fb923c",
        ternary: "#f3f0ef"
      },

      //Also for Space/Padding system for automatically:-
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}

