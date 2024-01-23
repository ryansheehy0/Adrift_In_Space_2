/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('/space_background.png')"
      },
      colors: {
        "custom-blue": "#1F384E",
        "dark-custom-blue": "#0E293E"
      }
    },
  },
  plugins: [],
}

