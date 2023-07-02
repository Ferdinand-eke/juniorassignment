/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{php,html,js,jsx,ts,tsx,vue}',
    './resources/**/*.{php,html,js,jsx,ts,tsx,vue}',
    './node_modules/@left4code/tw-starter/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        '1000px': '1050px',
        '1100px': '1110px',
        '800px': '800px',
        '1300px': '1300px',
        '400px': '400px',
      },
    },
  },
  plugins: [],
};
