const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.testyou.in/Login.aspx', // Add your application's base URL here
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout:90000,
    responseTimeout:90000,
    watchForFileChanges:false,
  },
})
