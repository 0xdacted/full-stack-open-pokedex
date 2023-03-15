const { defineConfig } = require('cypress')

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(_on, _config) {
    },
    baseUrl: 'http://localhost:4000'
  },
})
