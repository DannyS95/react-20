/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(30deg)' },
          '75%': { transform: 'rotate(-30deg)' },
        },
      },
      animation: {
        roll: 'roll 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
