/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import plugin from 'tailwindcss/plugin';
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
          '0%': { color: '#9381ff' },
          '25%': { color: '#00b4d8' },
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
  
  plugins: [
    daisyui,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 4px #c9184a',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 4px #f26a8d',
        },
       
        '.text-shadow-light': {
          'text-shadow': '2px 2px 4px #0077e6', // Light Coral color
        },
      });
    }),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
