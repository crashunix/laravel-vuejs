module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        'dark': { 'raw': '(prefers-color-scheme: dark)' },
        // => @media (prefers-color-scheme: dark) { ... }
      }
    }
  },
  variants: {},
  plugins: [],
}
