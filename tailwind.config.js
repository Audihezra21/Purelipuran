/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/public/Hero1.jpg')",
      },
    },
  },
  plugins: [],
};
