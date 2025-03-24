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
        'brandGreen': '#3E5742', // MAIN GREEN USED IN FIGMA
        'mediumGreen':'#2e734b',
        'lightGreen': '#e7ede4',
      },
    },
  },
  plugins: [],
}