/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      }

      
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // or other variants you want to enable
    },
  },
  plugins: [

    

  ],
}

