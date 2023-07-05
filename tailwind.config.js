/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          '50': '#fef2f3',
          '100': '#fde3e5',
          '200': '#fccccf',
          '300': '#f9a8ad',
          '400': '#f4757e',
          '500': '#e94550',
          '600': '#d62c37',
          '700': '#b4212b',
          '800': '#951f27',
          '900': '#7c2026',
          '950': '#430c10',
      },
      'secondary': {
        '50': '#f5f7fa',
        '100': '#ebeff3',
        '200': '#d2dbe5',
        '300': '#abbdce',
        '400': '#7e99b2',
        '500': '#5e7d99',
        '600': '#4a647f',
        '700': '#394c61',
        '800': '#354557',
        '900': '#303d4a',
        '950': '#202731',
    },
    

      
      }
    },
  },
  plugins: [],
}
