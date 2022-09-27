/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#58ee9e',
        secondary: {
          100: '#f0f4c3',
          200: '#888883',
          300: '#5d3801',
        }
        
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
