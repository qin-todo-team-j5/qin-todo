// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontSize: {
        '1.5xl': [
          '22px',
          {
            lineHeight: '26px',
          },
        ],
      },
      colors: {
        today: defaultColors.rose[500],
        tomorrow: defaultColors.orange[400],
        next: defaultColors.amber[400],
        gray: {
          md: '#C2C6D2',
        },
      },
    },
  },
  plugins: [],
}
