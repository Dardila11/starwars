module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'light': '#828282',
        'dark' : '#333333',
        'emphasis': '#EC5757',
        'ravn-black': '#121212'
      },
      fontSize: {
        '17': ['17px']
      }
    },
  },
  plugins: [],
}