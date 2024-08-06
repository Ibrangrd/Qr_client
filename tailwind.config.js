/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily :{ 
        'pacifico' : ["Pacifico", "cursive"],
        'silter' : ["Silter" , "cursive"],
        'mofeital' : ["Mofeital" , "cursive"],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
