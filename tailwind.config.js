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
      screens: {
        'xs': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height: {
        'screen-minus': 'calc(100vh - 80px)', // Custom height for scrolling
      },
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
        roll: 'roll 0.4s ease-in-out infinite',
        ...Object.fromEntries(
          Array.from({ length: 6 }, (_, i) => [
            `drop-row-${i}`,
            `drop-row-${i} ${(0.1 + i * 0.05).toFixed(2)}s ease-out`
          ])
        ),
      },
    },
  },
  plugins: [],
}
