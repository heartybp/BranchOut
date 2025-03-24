/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // add custom colors here
        'lightGreen': '#e7ede4',
      },
    },
  },
  plugins: [],
}