/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-red-800',
    'bg-green-800',
    'bg-yellow-800',
    'bg-blue-800',
  ],
}
