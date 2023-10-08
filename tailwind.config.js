/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // puedo crear mis medidas
  theme: {
    screens: { 
      tablet: "690px",
      mobile: "460px"
    },
    extend: {},
  },
  plugins: [],
}

