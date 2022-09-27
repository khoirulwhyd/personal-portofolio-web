module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors : {
        'background': '#272727',
        'textprimary': '#FFFFFF',
        'textsecondary': '#F3CA2F',
        'textselected': '#F3CA2F',
        'kolom': '#333333'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      'display' : ['group-focus'],
      'opacity': ['group-focus'],
      'inset' : ['group-focus']
    },
  },
  plugins: [],
}
