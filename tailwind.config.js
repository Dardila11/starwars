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
        'error-message': '#EC5757',
        'light': '#828282',
        'dark' : '#333333',
      }
    },
  },
  plugins: [],
}