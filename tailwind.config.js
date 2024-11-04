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
      },
      keyframes: {
        heartSize: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.2)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        changeColor: {
          '0%': { color: '#e07a5f' },
          '25%': { color: '#219ebc' },
          '50%': { color: '#ffffff' },
          '75%': { color: '#ffc300' },
          '100%': { color: '#e9ff70' },
        },
      },
      animation: {
        'heart-size': 'heartSize 8s infinite linear',
        'change-color': 'changeColor 10s infinite linear',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
