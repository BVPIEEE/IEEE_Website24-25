/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#01b5e2',
        skyblue: '#75d6ef',
        white: '#FFFFFF',
        black: '#1c1c1c'
      },
    },
  },
  plugins: [],
}

