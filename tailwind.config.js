/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'index2.html', 'product.html', 'portfolio.html', 'about.html', 'contact.html', 'detail_produk.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        'primary': '#F3821A',
        'primary2': '#C36C1B',
        'secondary': '#1B2430',
        'text1': '#000000',
        'text2': '#413F42',
        'text3': '#9D9D9D',
        'text4': '#B4B4B4',
        'button': '#EF5B0C',
        'logo1': '#1c1c1c',
      },
    },
  },
  plugins: [],
}