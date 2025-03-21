/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       spacing:{
          '100rem':'100rem',
          '60rem':"60rem"
       },
       scale:{
        '0.4':'0.4'
       }
    },
  },
  plugins: [],
}

