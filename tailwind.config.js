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
        drop: {
          "0%": { transform: "translateY(-650%)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        drop: "drop 0.4s ease-out",
      },
    },
  },
  plugins: [],
}
