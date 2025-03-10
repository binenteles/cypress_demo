import {defineConfig} from "cypress"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: 'cypress/e2e/**/*.spec.ts',
    baseUrl: 'https://www.saucedemo.com/',
  },
  retries: {
    openMode: 2,
    runMode: 2
  }
});
