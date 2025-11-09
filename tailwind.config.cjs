module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg,#7c3aed 0%, #06b6d4 100%)',
      }
    }
  },
  plugins: [],
  darkMode: 'class',
};
