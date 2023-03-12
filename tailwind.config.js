/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      veryDrakGray: 'hsl(0, 0%, 41%)',
      darkGray: 'hsl(0, 0%, 55%)',
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
      transparent: 'transparent',
    },
    fontFamily: {
      alata: ['Alata', 'sans-serif'],
      sans: ['Josefin Sans', 'sans-serif']
    },
    letterSpacing: {
      widest: '.3em'
    }
  },
  plugins: [],
}
