/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-white' : '#f5f5f5',
      },
      keyframes: {
        appear: {
          '0%': {
            top: '8rem',
          },
          '50%': {
            top: '-5rem',
          },
          '100%': {
            top: '-4rem',
          },
        },
        block: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slide_up: {
          '0%' : {
            height: '60px',
          },
          '90%' : {
            marginTop: '-15px'
          },
          '100%' : {
            height: '0px',
            marginTop: '0px'
          },
        },
        wiggle: {
          '0%' : {
            transform: 'rotateY(0deg) translate(0px)',
          },
          '33%' : {
            transform: 'rotateY(-20deg) translate(-5px)',
          },
          '66%' : {
            transform: 'rotateY(20deg) translate(5px)',
          },
          '100%' : {
            transform: 'rotateY(0deg) translate(0px)',
          }
        },
      },
      animation: {
        appear: 'appear 1s ease-in-out 5.5s forwards',
        appear_2: 'appear 1s ease-in-out 6s forwards',
        block: 'block 3s ease-in-out 0.5s forwards',
        block_2: 'block 3s ease-in-out 1.5s forwards',
        slide_up: 'slide_up 0.2s ease-in-out 3.3s forwards',
        slide_up_2: 'slide_up 0.2s ease-in-out 4.3s forwards',
        slide_up_3: 'slide_up 0.2s ease-in-out 5.3s forwards',
        wiggle: 'wiggle 0.2s ease-in-out 0.5s 2'
      },
      backgroundImage: {
        'hero': "url('/images/white-texture_sm.webp')",
        'hero-sm': "url('/images/white-texture.webp')",
      },
      rotate: {
        '90': '90deg',
        '90-': '-90deg',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}
