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
        '.text-shadow-light2': {
          'text-shadow': '2px 2px 4px #95d5b2', // Light Coral color
        },
        '.text-shadow-cards': {
          'text-shadow': '2px 2px 4px #73ba9b',
        },
        '.text-shadow-ib': {
          'text-shadow': '1px 1px 2px #73ba9b',
        },
        '.text-image':{
          'box-shadow':'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        },
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
        '.text-box4':{
          'box-shadow': '#e9c46a 0px 30px 60px -12px inset, #ffb703 0px 18px 36px -18px inset;',
        },
        '.text-box5':{
          'box-shadow': '#ffffff 0px 30px 60px -12px inset, #ffffff 0px 18px 36px -18px inset;',
        },
        '.text-box6':{
          'box-shadow': '#e9edc9 0px 30px 60px -12px inset, #ccd5ae 0px 18px 36px -18px inset;',
        },
        '.text-box7':{
          'box-shadow': '#ef233c 0px 30px 60px -12px inset, #d90429 0px 18px 36px -18px inset;',
        },
        '.text-box8':{
          'box-shadow': '#ef233c 0px 25px 20px -20px',
        },
        '.text-box10':{
          'box-shadow': '#748cab 0px 30px 60px -12px inset, #3e5c76 0px 18px 36px -18px inset;',
        },
        '.text-box11':{
          'box-shadow': '#246a73 0px 25px 20px -20px',
        },
       '.text-shadow-ib1': {
          'text-shadow': ' 0px 15px 5px rgba(0,0,0,0.1),10px 20px 5px rgba(0,0,0,0.05),-10px 20px 5px rgba(0,0,0,0.05)',
        },
      '.text-shadow-ib2': {
          'text-shadow': '2px 8px 6px rgba(0,0,0,0.2),0px -5px 35px rgba(255,255,255,0.3)',
        },
        '.text-shadow-ib3': {
          'text-shadow': '0px 4px 3px #b3d89c, 0px 8px 13px #9dc3c2,0px 18px 23px #77a6b6',
        },
        '.text-shadow-ib4': {
          'text-shadow': '0px 3px 0px #b2a98f,0px 14px 10px rgba(0,0,0,0.15),0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1);',
        },
        '.text-shadow-ib5': {
          'text-shadow': '2px 8px 6px #dde5b6,0px -5px 35px #adc178',
        },
      });
    }),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
