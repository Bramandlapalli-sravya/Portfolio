// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust as per your project structure
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6c63ff",
      },
      fontFamily: {
         roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
