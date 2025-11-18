/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradientBG 18s ease infinite',
        'float': 'float 15s infinite linear',
        'uploadPulse': 'uploadPulse 1.2s infinite alternate',
        'borderAnimation': 'borderAnimation 3s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(0) rotate(360deg)', opacity: '0.5' },
        },
        uploadPulse: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        borderAnimation: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}