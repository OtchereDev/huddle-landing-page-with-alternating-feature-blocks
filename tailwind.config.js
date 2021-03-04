module.exports = {
  purge: {
    enabled: true,
    content: ['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        cPink: 'hsl(322, 100%, 66%)',
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)'
      },
      fontFamily:{
        body:'Open Sans',
        heading:'Poppins'
      },
      backgroundColor: (theme) => theme('colors'),
      backgroundImage: {
        hero_d:"url('images/bg-hero-desktop.svg')",
        hero_m:"url('images/bg-hero-mobile.svg')"
      },
      boxShadow: {
        custom: '0px 0px 20px 1px rgb(235,251,255);'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
