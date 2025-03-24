import { defineConfig } from "cypress"

export default defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true,
    },
    specPattern: 'cypress/e2e/**/*.spec.ts',
    baseUrl: 'https://www.saucedemo.com/',
  },
  retries: {
    openMode: 2,
    runMode: 2
  }
});
