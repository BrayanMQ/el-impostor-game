/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#101827',
        surface: {
          card: '#182235',
          soft: '#1F2A44',
        },
        primary: {
          DEFAULT: '#E5533D',
          action: '#E5533D',
          soft: '#FF7A63',
        },
        accent: '#4CC9F0',
        muted: '#7C8AA5',
        text: {
          primary: '#FFFFFF',
          secondary: '#B6C2E2',
        }
      },
    },
  },
  plugins: [],
}
