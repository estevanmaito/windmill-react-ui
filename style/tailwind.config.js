const windmill = require('../config')

module.exports = windmill({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
