/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          afacadFlux: ['Afacad Flux', 'sans-serif'],
        },
        screens: {
          sm: '640px',
          
          md: '784px',
        
          lg: '1024px',
          
          xl: '1280px',
        },
      },
    },
    plugins: [],
  }
  