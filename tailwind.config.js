/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-drop-row-0',
    'animate-drop-row-1',
    'animate-drop-row-2',
    'animate-drop-row-3',
    'animate-drop-row-4',
    'animate-drop-row-5',
  ],
  theme: {
    extend: {
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(30deg)' },
          '75%': { transform: 'rotate(-30deg)' },
        },
        ...Object.fromEntries(
          Array.from({ length: 6 }, (_, i) => [
            `drop-row-${i}`,
            {
              '0%': { transform: `translateY(-${(i + 1) * 50}px)` },
              '100%': { transform: 'translateY(0)' },
            },
          ])
        ),
      },
      animation: {
        roll: 'roll 0.4s ease-in-out',
        ...Object.fromEntries(
          Array.from({ length: 6 }, (_, i) => [
            `drop-row-${i}`,
            `drop-row-${i} 0.6s ease-out`,
          ])
        ),
      },
    },
  },
  plugins: [],
}
