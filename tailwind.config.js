/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.8',
          },
          '100%': {
            opacity: '0.4',
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
        flip: {
          '0%' : {
            transform: 'rotateY(90deg)',
          },
          '100%' : {
            transform: 'rotateY(0deg)'
          },
        },
        flip_back: {
          '0%' : {
            transform: 'rotateY(0deg)',
          },
          '50%' : {
            transform: 'rotateY(-90deg)',
          },
          '100%' : {
            transform: 'rotateY(0deg)',
          },
        },
        flip_forward: {
          '0%' : {
            transform: 'rotateY(0deg)',
          },
          '50%' : {
            transform: 'rotateY(90deg)',
          },
          '100%' : {
            transform: 'rotateY(0deg)',
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
        appear: 'appear 3s ease-in-out 0.3 forwards',
        appear_400: 'appear 3s ease-in-out 0.4s forwards',
        appear_500: 'appear 3s ease-in-out 0.5s forwards',
        appear_600: 'appear 3s ease-in-out 0.6s forwards',
        appear_700: 'appear 3s ease-in-out 0.7s forwards',
        appear_800: 'appear 3s ease-in-out 0.8s forwards',
        appear_900: 'appear 3s ease-in-out 0.9s forwards',
        block: 'block 3s ease-in-out 1.3s forwards',
        block_2: 'block 3s ease-in-out 1.4s forwards',
        flip: 'flip 0.5s ease-in-out forwards',
        flip_200: 'flip_forward 0.5s ease-in-out',
        flip_5500: 'flip 0.5s ease-in-out 5.5s forwards',
        flip_back: 'flip_back 0.5s ease-out forwards',
        slide_up: 'slide_up 0.2s ease-in-out 3.3s forwards',
        slide_up_2: 'slide_up 0.2s ease-in-out 4.3s forwards',
        slide_up_3: 'slide_up 0.2s ease-in-out 5.3s forwards',
        wiggle: 'wiggle 0.2s ease-in-out 0s 2 reverse'
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
