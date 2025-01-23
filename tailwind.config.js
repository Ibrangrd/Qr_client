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
        // '.text-image':{
        //   'box-shadow':'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        // },
        '.text-image2':{
          'box-shadow': '#f8f9fa 0px 25px 20px -20px',
        },
        '.text-box':{
          'box-shadow': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
        },
        '.text-box2':{
          'box-shadow': '#669bbc 0px 25px 20px -20px',
        },
        '.text-box3':{
          'box-shadow': 'rgba(202, 240, 248, 0.7) 0px 30px 60px -12px inset, rgba(202, 240, 248, 1) 0px 18px 36px -18px inset;',
        },
       
        '.text-box6':{
          'box-shadow': '#e9edc9 0px 30px 60px -12px inset, #d8f3dc 0px 18px 36px -18px inset;',
        },
      
      });
    }),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
