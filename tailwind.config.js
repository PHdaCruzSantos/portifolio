/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scan: 'scan 2s cubic-bezier(0.77, 0, 0.175, 1) infinite',
        scroll: 'scroll 1.5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        scroll: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(100%)' }, // Or adjust distance
        }
      }
    },
  },
  plugins: [],
}
