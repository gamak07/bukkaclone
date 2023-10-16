/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'orange': '#FC6701',
      'orangetwo': '#ffc23e',
      'black': '#000',
      'white': '#ffff'
    },
    spacing: {
      '24': '6rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '20': '5rem',
      '2': '8px',
      '4': '1rem',
      '100': '32rem',
      '54': '13.8rem',
      '40': '10rem',
      '41': '12rem',
      '80': '24rem'
    }
  },
  extend: {
      
      
  },
  plugins: [],
}

