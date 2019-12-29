module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'mi': '12rem',
        'sm': '16rem',
      },
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      }
    },
    fontFamily: {
      'sans': ['proxima-nova', 'sans-serif',],
      'display': ['proxima-nova',],
      'body': ['proxima-nova',],
    },
    inset: {
      '0': '0',
      '1\/2': '50%',
      '-1\/2': '-50%',
      '-16': '-1rem',
      '-20': '-1.25rem',
      '-24': '-1.5rem',
    },
  },
  variants: {
    maxWidth: ['responsive'],
  },
  plugins: [
  ],
}