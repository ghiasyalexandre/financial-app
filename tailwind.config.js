/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
         
      scale: {
        '55': '55%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '115': '115%',
        '130': '130%',
        '140': '140%',
      },
      maxHeight: {
        '120' : '30rem'
      },
      
      maxWidth: {
        '120' : '30rem',
        '160' : '42rem',

        '240' : '60rem'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
      },
      
      gridTemplateRows: {
        '16': "grid-template-rows: repeat(16, minmax(0, 1fr))"
      },

      boxShadow: { 
        neonLight: "0 0 5px theme('colors.white/20'), 0 0 20px theme('colors.white/70')",
        neonLightSlim: "0 0 5px theme('colors.white/20'), 0 0 8px theme('colors.white/70')",
        neonDarkSlim: "0 0 5px theme('colors.black/20'), 0 0 8px theme('colors.black/70')",
        neonDark : "0 0 5px theme('colors.black/20'), 0 0 20px theme('colors.black/70')",
   
        cardShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        cardShadow2: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",     
        cardShadow3: " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",        
        cardShadow4: " rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
    
      },
      animationDelay: {
        '50': '50ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',

      },
    },
  },
  plugins: [],
}