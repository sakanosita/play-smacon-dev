module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      'dark',
      'retro',
      'forest',
      'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
