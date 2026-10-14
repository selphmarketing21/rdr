/** Brand colors supplied by Selph Marketing */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1cb7ea", light: "#4bc6ee", dark: "#0b7fa6", tint: "#eaf8fd", wash: "#f5fcfe" },
        ink: "#0c2b3a",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
