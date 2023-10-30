/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    borderRadius: {
      none: '0',
      curved: '4rem',
      cornered: '25px',
      '2xl': '2rem'
    },
    colors: {
      blue: '#1fb6ff',
      pink: '#ff49db',
      orange: '#ff7849',
      RealOrange: '#FFB533',
      green: '#13ce66',
      graydark: '#273444',
      gray: '#8492a6',
      graylight: '#d3dce6',
      orange: '#FC6701',
      orangetwo: '#ffc23e',
      orangethree: '#ffc000',
      black: '#000',
      white: '#ffff'
    },
    spacing: {
      none: '0',
      1: '1px',
      2: '8px',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      11: '3rem',
      12: '3rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      38: '9rem',
      40: '10rem',
      41: '12rem',
      54: '13.8rem',
      60: '15rem',
      80: '22rem',
      100: '32rem',
      200: '-2rem'
    },
    screens:{
      mobile:{min:'320px', max:'420px'},
      tablet: '768px',
    },
    fontFamily:{
      poppins:['poppins'],
      philosopher:['philosopher']
    }
  },
  extend: {
      
      
  },
  plugins: [],
}

