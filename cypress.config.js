const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "vdytfu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.REACT_APP_URL,
  },
  env: {
    base_url: process.env.REACT_APP_URL,
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
  }
});
